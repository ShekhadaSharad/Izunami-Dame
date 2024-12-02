"use client"
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className='w-full flex flex-col overscroll-y-auto overflow-x-auto  bg-zinc-200'>
      <div className="p-2 m-2 border-2 border-red-500 ">
        <span><strong>Note :</strong> Kindly attention please.</span>
      </div>
      <div className=" m-4 p-2">
        {children}
      </div>
    </div>
  )
}

export default MainLayout