// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google'

import "./globals.css";
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
 
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
})

export const metadata = {
  title: "My NextJS App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={roboto.className}
      >
        {/* global */}
        <Navbar/> 
        <div className='min-h-screen '>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
