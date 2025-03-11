// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google'

import "./globals.css";

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
        {/* <Navbar/> */}
        {children}
      </body>
    </html>
  );
}
