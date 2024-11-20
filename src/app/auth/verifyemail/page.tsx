"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function verifyEmail() {
    const [token, setToken] = useState<string | null>(null);
    const [verified, setVerified]=useState<boolean>();
    const[error, setError]=useState<string | null>(null);


    const verifyUserEmail =async()=>{
        if(!token) return;
        try {
            await axios.post('/api/users/verifyemail', {token});
            setVerified(true);
            
        } catch (error:any) {
            if(error.response && error.response.data){
                setError(error.response.data.message || "Error occurs at verification." )
            }else{
                setError("Network Error or unknow error")
            }
            
        }
    }
    useEffect(()=>{
        const urlToken = new URLSearchParams(window.location.search).get('token');
        setToken(urlToken);
    },[])
    useEffect(()=>{
        if (token) {
            verifyUserEmail();
        }
    },[token])
  return (
    <div>
      <h1>Verify Email</h1>
      <p>{token ? token:"No token has been Found"}</p>
      {verified && (
        <Link href="/auth/login">Go to Login</Link>
      )}
      {error && (
        <div>
            {error}
        </div>
      )}

      {!verified && !error && token &&(
        <div>
            Verifing Your Email.....
        </div>
      )}
    </div>
  )
}
