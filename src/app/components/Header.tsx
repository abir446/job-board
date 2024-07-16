import React from 'react'
import Link from "next/link";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from '@workos-inc/authkit-nextjs';

const Header = async() => {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl()
  const signOutUrl = await getSignUpUrl()
  return (
    <header className="">
      {/* {JSON.stringify(user)} */}
        <div className="flex justify-between items-center mx-auto">
          <Link href={'/'} className="font-bold text-xl">jobBoard.</Link>
          <nav className="flex gap-3 *:py-2 *:px-4 *:rounded-md">
            {!user && <Link href={signInUrl} className="bg-gray-200">Login</Link>}
            {user && <form action={async() => {'use server'; await signOut();}}><button className="bg-gray-200 py-2 px-4">Log out</button></form>}
            {user && <Link href={'/new-listing'} className="bg-blue-500 text-white hover:bg-pink-100 transition-all duration-500 hover:text-gray-700">Post a job</Link>}
          </nav>
        </div>
    </header>
        
  )
}

export default Header