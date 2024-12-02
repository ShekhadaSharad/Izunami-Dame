"use client"
import React from 'react'
import Navbar  from "./Navbar"

const Dashbord =({sidebarToggle, setSidebarToggle}) =>{

    return (
       <div className={`${sidebarToggle ? "" : " ml-64 "} w-full border-green-500 border-2`}>
            <Navbar 
                sidebarToggle={sidebarToggle} 
                setSidebarToggle={setSidebarToggle} />
       </div>
    )
} 
export default Dashbord