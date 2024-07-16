import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <header className="">
        <div className="flex justify-between items-center mx-auto">
          <Link href={'/'} className="font-bold text-xl">jobBoard.</Link>
          <nav className="flex gap-3 *:py-2 *:px-4 *:rounded-md">
            <Link href={'/login'} className="bg-gray-200">Login</Link>
            <Link href={'/new-listing'} className="bg-blue-500 text-white hover:bg-pink-100 transition-all duration-500 hover:text-gray-700">Post a job</Link>
          </nav>
        </div>
    </header>
        
  )
}

export default Header