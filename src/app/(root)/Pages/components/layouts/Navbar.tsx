"use client"
import React from 'react'
import  {FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'
import Digip from '@/public/images/digip.png'
import Image from "next/image";

interface NabarProp {
    sidebarToggle : boolean,
    setSidebarToggle : any
}

const Navbar =({sidebarToggle, setSidebarToggle} : NabarProp) =>{

    return (
        <div className='bg-gray-800 px-4 py-3 flex justify-between shadow-md shadow-gray-800/50'>
            <div className='flex items-center text-xl'>
                <FaBars className='text-white me-4 cursor-pointer' onClick={setSidebarToggle} />
                <div className="flex-shrink-0 mr-5">
                    <a href="/">
                        <Image src={Digip}
                        height="50"
                        width="150"
                        alt="BuyItNow"/>
            </a>
          </div>
            </div>
            <div className='flex items-center gap-x-5'>
                <div>
                    <form className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
                          <input
                            className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                            type="text"
                            placeholder="Enter your keyword"
                            required
                          />
                          <button
                            type="button"
                            className="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 rounded-md hover:bg-blue-700">
                            Search
                          </button>
                    </form>
                </div>
                <div className='text-white'><FaBell className='w-6 h-6' /></div>
                <div className='relative'>
                    <button className='text-white group'>
                        <FaUserCircle  className='w-6 h-6 mt-1'/>
                        <div className='z-10 hidden absolute rounded-lg shadow w-32 froup-focus:block top-full right-0'>
                            <ul className='py-2 text-sm text-gray-950'>
                                <li><a href=''>Post</a></li>
                                <li><a href=''>Put</a></li>
                                <li><a href=''>Hide</a></li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Navbar