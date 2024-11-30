"use client"; // Make this a client-side component


import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function AuthButton() {
    const { isAuthenticated, setIsAuthenticated} = useAuth();
    const router = useRouter();
    const handleLogout = async () => {

        try {
          const response = await axios.get('/api/users/logout')
          if (response.status === 200) {
            setIsAuthenticated(false);
            router.push('/auth/login');
          }
        } catch (error: any) {
          console.log(error.message);
    
        }
      }

    return (
        <div>
            {/* Right Actions: Register, Login, and Logout */}
            <div className="flex items-center space-x-4">
                {isAuthenticated ? (
                    <button
                        onClick={handleLogout }
                        className="text-white bg-orange-400 px-4 py-2 rounded-xl hover:bg-orange-500 transition"
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <Link href="/auth/register">
                            <button className="py-2 px-3 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                                Register
                            </button>
                        </Link>
                        <Link href="/auth/login">
                            <button className="py-2 px-3 text-sm font-medium rounded-xl bg-lime-400 text-black hover:bg-lime-500 transition">
                                Log in
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
