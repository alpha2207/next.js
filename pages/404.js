import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Notfound() {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1);
            router.push('/');
        }, 3000);
    },[router])
  return (
    <div>
        <h1>404 | Not Found</h1>
        <p>Redirecting you to Homepage....</p>
    </div>
  )
}
