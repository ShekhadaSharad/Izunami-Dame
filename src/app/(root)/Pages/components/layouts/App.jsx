"use client";
import SideBar from "@/app/Pages/components/layouts/SideBar"
import { useState } from 'react'
import Navbar from "./Navbar"
import MainLayout from "@/app/Pages/components/layouts/MainLayout"


function App() {
    const [sidebarToggle, setSidebarToggle] = useState(false)

    function onToggle() {
        setSidebarToggle(!sidebarToggle)
    }

    return (
        <div className="w-full h-screen border-2 border-red-500  ">
            <Navbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={onToggle} />

            <div className="w-full flex flex-column h-[93%]">
                <SideBar sidebarToggle={sidebarToggle} />
                <MainLayout>
                    Hello world
                </MainLayout>
            </div>

        </div>
    )
}

export default App