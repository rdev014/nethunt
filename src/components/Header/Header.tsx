'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import ThemeSwitch from '../ThemeSwitch'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useAuth } from '@/contexts/AuthContext'


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
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation: NavigationItem[] = [
  { name: 'About', href: '/about', current: false },
  { name: 'Community', href: '/community', current: false },
  { name: 'Challenges', href: '/challenges', current: false },
  { name: 'Blogs', href: '/blogs', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Profile', href: '/auth/profile', current: false },
  { name: 'Reward', href: '/reward', current: false },
]

const userNavigation: UserNavigationItem[] = [
  { name: 'Your Profile', href: '/auth/profile' },
  { name: 'Settings', href: '/auth/settings' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useAuth()
  const router = useRouter()

  // Handle Logout
  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/users/logout')
      if (response.status === 200) {
        setIsAuthenticated(false)
        router.push('/auth/login')
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message)
      } else {
        console.error('Unexpected error:', error)
      }
    }
  }

  return (
   <>
   
   <Disclosure as="nav" className="bg-gray-900 dark:bg-gray-800 shadow-lg  ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href='/' className='text-orange-600 text-2xl font-extrabold'>NetHunt</Link>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:block flex-1">
            <div className="flex justify-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'text-white bg-indigo-600 rounded-lg py-2 px-3 transition-all duration-300'
                      : 'text-gray-300 hover:bg-orange-600 hover:text-white rounded-lg py-2 px-3 transition-all duration-300'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Profile & Theme Switch */}
          <div className="hidden md:flex items-center space-x-4">
            <Menu as="div" className="relative">
              <MenuButton className="relative flex items-center rounded-full bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 p-2">
                <span className="sr-only">Open user menu</span>
                <Image
                  alt="User Profile"
                  width={30}
                  height={30}
                  src={user.imageUrl}
                  className="h-8 w-8 rounded-full"
                />
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  </MenuItem>
                ))}
                <div className="mt-2 px-4 py-2 text-center">
                  {isAuthenticated ? (
                    <button
                      onClick={handleLogout}
                      className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-300"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link href="/auth/login" className="block py-1 hover:text-blue-400">
                        Login
                      </Link>
                      <Link href="/auth/register" className="block py-1 hover:text-blue-400">
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </MenuItems>
            </Menu>
            <ThemeSwitch />
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="block h-6 w-6 group-data-[open]:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <DisclosurePanel className="md:hidden bg-gray-900">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-indigo-600 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium transition-all duration-300'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>

      </DisclosurePanel>
    </Disclosure>
   
   
   </>
  )
}
