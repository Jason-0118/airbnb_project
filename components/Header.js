// rfce
import React from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className='sticky top-0 z-10 grid grid-cols-3 bg-white shadow-md p-5 md:p-8'>
      {/* left */}
      <div className='relative flex items-center my-auto '>
        <img
          className='h-6 sm:h-10 cursor-pointer'
          src="https://links.papareact.com/qd3"
        />
      </div>

      {/* middle search bar
      npm install @heroicons/react */}
      <div className='flex items-center md:border-2 rounded-full py-2 shadow-md'>
        <input
          className='pl-5 flex-grow bg-transparent outline-none text-sm text-gray-500 '
          type="text" placeholder='Search...' />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2' />
      </div>

      {/* right */}
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline-flex cursor-pointer '>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer ' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>


      </div>
    </header>
  )
}

export default Header