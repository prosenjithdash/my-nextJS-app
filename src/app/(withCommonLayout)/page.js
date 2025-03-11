
"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage = () => {

  const router = useRouter();

  const handleNavigation = () => {
    router.push('/dashboard');
  }


  return (
    <div className='text-center my-10'>
      <h1 className='text-4xl'>Hello from Home Page. </h1>
      {/* <Link href='/dashboard'> <button className='my-5'>Dashboard</button>
</Link> */}
      
            <button onClick={handleNavigation} className='my-5'>Dashboard</button>

    </div>
  );
};

export default HomePage;