"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useEffect } from "react";
import Spinner from "@/components/Spinner";
import Image from "next/image";

// Type definitions for the user object
interface User {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();

  // State types
  const [user, setUser] = React.useState<User>({
    email: "",
    password: "",
  });

  const [buttonDisable, setButtonDisable] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const onLogin = async (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      setLoading(true);
      console.log("Attempting to log in...");

      const response = await axios.post("/api/users/login", user, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Login successful:", response.data);

      // Redirect after successful login
      router.push("/");
    } catch (error: any) {
      // Log full error details
      if (axios.isAxiosError(error)) {
        console.log(
          "Error response:",
          error.response ? error.response.data : error.message
        );
      } else {
        console.log("Unexpected error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  // Effect hook to manage button disable state based on form input
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [user]);

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight">
          Login to your account
        </h2>
        {/* <Image
          src="https://cdn.pixabay.com/photo/2022/09/07/12/22/autumn-7438675_960_720.jpg"
          alt="Login Banner"
          width={500}
          height={500}
          className="mt-6 rounded-md shadow-md"
        /> */}
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <form onSubmit={onLogin} className="space-y-6">
          {loading && <Spinner />}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
                autoComplete="email"
                className="block w-full rounded-md border-2 py-2 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  href="/auth/forgot"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
                autoComplete="current-password"
                className="block w-full rounded-md  border-2 py-2 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none disabled:bg-gray-400 dark:disabled:bg-gray-600`}
              disabled={buttonDisable}
            >
              {buttonDisable ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Don&apos;t have an account?{' '}
          <Link
            href="/auth/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
