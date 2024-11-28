'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function VerifyEmail() {
  const [token, setToken] = useState<string | null>(null);
  const [verified, setVerified] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const verifyUserEmail = async () => {
    if (!token) return;
    try {
      await axios.post('/api/users/verifyemail', { token });
      setVerified(true);
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Error occurred during verification.');
      } else {
        setError('Network Error or unknown error');
      }
    }
  };

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get('token');
    setToken(urlToken);
  }, []);

  useEffect(() => {
    if (token) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center ">
      <div className="w-full max-w-lg p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm shadow-white">
        <h1 className="text-3xl font-semibold text-center text-blue-500">Verify Email</h1>
        <p className="mt-4 text-center text-gray-500">
          {token ? token : 'No token found.'}
        </p>
        
        {verified && (
          <div className="mt-6 text-center text-green-500 ">
            <p>Your email has been verified successfully!</p>
            <Link href="/auth/login">
              <a className="mt-4 inline-block text-blue-500 hover:underline">Go to Login</a>
            </Link>
          </div>
        )}

        {error && (
          <div className="mt-6 text-center text-red-500">
            <p>{error}</p>
          </div>
        )}

        {!verified && !error && token && (
          <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
            <p>Verifying your email...</p>
          </div>
        )}
      </div>
    </div>
  );
}
