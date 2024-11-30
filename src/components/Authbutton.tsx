"use client"; // Make this a client-side component

import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState } from "react";
import Link from 'next/link';



export default function AuthButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const router = useRouter();

 

   // Handle logout
const handleLogout = async () => {
    try {
        await axios.get('/api/users/logout');
        setIsLoggedIn(false); // Update state to reflect logged-out status
        router.push('/auth/login'); // Redirect to login page
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("An error occurred during logout:", error.message);
        } else {
            console.error("An unknown error occurred during logout:", error);
        }
    }
};


    return (
        <div>
            {/* Right Actions: Register, Login, and Theme Toggle */}
            <div className="flex items-center space-x-4">
                {!isLoggedIn ? (
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
                ) : (
                    <button onClick={handleLogout} className="text-white bg-orange-400 px-4 py-2 rounded">
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
}
