"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    // console.log(pathname)
    return (
        <nav className='bg-blue-600 text-white py-4 shadow-md'>
            <div className='container mx-auto flex justify-between items-baseline'>
                <Link href="/" className='text-2xl font-bold'>
                    NextNav
                </Link>
                <div className='space-x-6'>
                    <Link href="/products" className={pathname == "/products" ? "text-yellow-400 underline" :"text-white cursor-pointer hover:underline"}>
                        Products</Link>
                    
                    <Link href="/gallery" className={pathname == "/gallery" ? "text-yellow-400 underline" : "text-white cursor-pointer hover:underline"}>
                        Gallery</Link>
                    

                    <Link href="/about" className={pathname == "/about" ? "text-yellow-400 underline" : "text-white cursor-pointer hover:underline"}>
                        About Us</Link>
                    
                    <Link href="/contact" className={pathname == "/contact" ? "text-yellow-400 underline" : "text-white cursor-pointer hover:underline"}>
                        Contact Us</Link>
                    
                    <Link href="/dashboard" className={pathname == "/dashboard" ? "text-yellow-400 underline" : "text-white cursor-pointer hover:underline"}>
                        Dashboard</Link>
                    
                    <Link href="/login" className={pathname == "/login" ? "text-yellow-400 underline" : "text-white cursor-pointer hover:underline"}>
                        Login</Link>
                    
                    <Link href="/register" className={pathname == "/register" ? "text-yellow-400 underline" : "text-white cursor-pointer hover:underline"}>
                        Register</Link>
                    
                   
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

