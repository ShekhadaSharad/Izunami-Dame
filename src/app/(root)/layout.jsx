"use client";
import React from 'react'
import Navbar from "@/app/(root)/Pages/components/layouts/Navbar"
import MainLayout from "@/app/(root)/Pages//components/layouts/MainLayout"
import { useState } from 'react'
import SideBar from "@/app/(root)/Pages/components/layouts/SideBar"

const RootLayout = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false)

  function onToggle() {
    setSidebarToggle(!sidebarToggle)
  }

  return (
    <div className="w-full h-screen">
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={onToggle} />

      <div className="w-full flex flex-column h-[93%]">
        <SideBar sidebarToggle={sidebarToggle} />
        <MainLayout>
          {children}
        </MainLayout>
      </div>
    </div>
  )
}

export default RootLayout