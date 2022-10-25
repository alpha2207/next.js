import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function notfound() {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1);
            router.push('/');
        }, 3000);
    },[])
  return (
    <div>
        <h1>404 | Not Found</h1>
        <p>Redirecting you to Homepage....</p>
    </div>
  )
}
