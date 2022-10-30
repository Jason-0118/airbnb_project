// rfce
import React from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { useState } from "react"

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuest, setNumberOfGuest] = useState(1);
  const router = useRouter();

  //calendar
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  }
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  //cancel btn
  const resetInput = () => {
    setSearchInput('')
  }

  //search btn
  const search = () => {
    router.push(
      {
        pathname: "/search",
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          numberOfGuest,
        },
      }
    );
  }

  return (
    <header className='sticky top-0 z-10 grid grid-cols-3 bg-white shadow-md p-5 md:p-8'>
      {/* left */}
      <div
        className='relative flex items-center my-auto'
        onClick={() => router.push("/")}
      >
        <img
          className='h-6 sm:h-10 cursor-pointer'
          src="https://links.papareact.com/qd3"
        />
      </div>

      {/* middle search bar
      npm install @heroicons/react */}
      <div className='flex items-center md:border-2 rounded-full py-2 shadow-md'>
        <input
          // calendar functionalities-------------------
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          // --------------------------------------
          className='pl-5 flex-grow bg-transparent outline-none text-sm text-gray-500 '
          type="text" placeholder={placeholder || "Search..."} />
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


      {/* calendar  (react-date-range https://github.com/hypeserver/react-date-range)*/}
      {searchInput && (
        <div className="col-span-3 mx-auto">
          {/* Calendar picker */}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          {/* Number of Guest */}
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-xl flex-grow font-semibold'>Number of Guests</h2>
            <UsersIcon className='h-5' />
            <input
              value={numberOfGuest}
              onChange={e => setNumberOfGuest(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          {/* cancel & search btn */}
          <div className="flex ">
            <button
              className='flex-grow text-gray-600'
              onClick={resetInput}>Cancel
            </button>

            <button
              onClick={search}
              className="flex-grow text-red-400 font-semibold">Search
            </button>
          </div>

        </div>

      )}


    </header>

  )
}

export default Header