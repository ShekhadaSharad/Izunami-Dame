"use client";
import React from 'react'
import  { FaHome , FaCog, FaRegEnvelope, FaPoll,FaRegFileAlt } from 'react-icons/fa'
import Link from "next/link";

const Sidebar =({sidebarToggle} : {sidebarToggle : boolean}) =>{
    return (
        <div className={`${sidebarToggle? " hidden " : ""} w-64 bg-gray-800 relative  px-4 py-2 shadow-xl shadow-gray-800/50`}>
            <div className='my-2 mb-4'>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link href={"/Dashboard"}>
                        <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                        Home
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link href={"/Pages/Employee"}>
                        <FaRegFileAlt className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegFileAlt>
                        Employee
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link href={"/Pages/Employee"}>
                        <FaPoll className='inline-block w-6 h-6 mr-2 -mt-2'></FaPoll>
                        Reports
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link href={"/login"}>
                        <FaRegEnvelope className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegEnvelope>
                        Login
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link href={"/sign-up"}>
                        <FaCog className='inline-block w-6 h-6 mr-2 -mt-2'></FaCog>
                        Sign-up
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar