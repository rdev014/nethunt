"use client"
import Link from "next/link";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 ">
      <div className="bg-gray-800 shadow-sm  rounded-lg p-6  w-full max-w-md  shadow-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          Enter your email address to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Reset Password
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Remembered your password?{" "}
          <Link
            href="/login"
            className="text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Go back to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
