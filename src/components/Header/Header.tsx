'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';

interface NavigationItem {
  name: string
  href: string
  current: boolean
}

interface UserNavigationItem {
  name: string
  href: string
}

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: "https://cdn.pixabay.com/photo/2023/09/22/15/45/panda-8269336_960_720.png",
}

const navigation: NavigationItem[] = [
  { name: 'About', href: '/about', current: false },
  { name: 'Community', href: '/community', current: false },
  { name: 'Challenges', href: '/challenges', current: false },
  { name: 'Blogs', href: '/blogs', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Reward', href: '/reward', current: false },
]

const userNavigation: UserNavigationItem[] = [
  { name: 'Your Profile', href: '/auth/profile' },
  { name: 'Settings', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();

  // Handle Logout
  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/users/logout')
      if (response.status === 200) {
        setIsAuthenticated(false);
        router.push('/auth/login');
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  return (
    <Disclosure as="nav" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center justify-center w-full md:w-auto">
            <div className="flex-shrink-0">
              <Link href='/' className='text-orange-600 font-bold text-3xl'>NetHunt</Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center justify-center space-x-6">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                    'rounded-md px-3 py-2 text-lg font-medium transition-all duration-300',
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Profile and Auth Section */}
          <div className="ml-4 flex items-center space-x-4">
            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
                  <span className="sr-only">Open user menu</span>
                  <Image alt="Profile" width={40} height={40} src={user.imageUrl} className="h-10 w-10 rounded-full" />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <Link href={item.href}
                      className="block px-4 py-2 text-center text-gray-300 hover:bg-gray-700">
                      {item.name}
                    </Link>
                  </MenuItem>
                ))}
                <div className="flex items-center justify-center space-x-4 p-2">
                  {isAuthenticated ? (
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                    >
                      Logout
                    </button>
                  ) : (
                    <div className="flex space-x-4">
                      <Link href="/auth/login">
                        <span className="hover:text-blue-400 transition">Login</span>
                      </Link>
                      <Link href="/auth/register">
                        <span className="hover:text-blue-400 transition">Register</span>
                      </Link>
                    </div>
                  )}
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navigation.map((item) => (
            <DisclosureButton key={item.name} as="a" href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                'block rounded-md px-3 py-2 text-lg font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div className="border-t border-gray-700 pb-3 pt-4">
          <div className="flex items-center px-5">
            <Image alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
            <div className="ml-3">
              <div className="text-base font-medium text-white">{user.name}</div>
              <div className="text-sm font-medium text-gray-400">{user.email}</div>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {userNavigation.map((item) => (
              <DisclosureButton key={item.name} as="a" href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                {item.name}
              </DisclosureButton>
            ))}
            <div className="flex items-center justify-center space-x-4 p-2">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                >
                  Logout
                </button>
              ) : (
                <div className="flex space-x-4">
                  <Link href="/auth/login">
                    <span className="hover:text-blue-400 transition">Login</span>
                  </Link>
                  <Link href="/auth/register">
                    <span className="hover:text-blue-400 transition">Register</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
