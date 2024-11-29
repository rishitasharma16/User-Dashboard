import React from 'react'
import Navbar from '../components/navbar/Navbar'
import SideBar from '../components/sidebar/SideBar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='h-screen'>
        <Navbar/>
        <div className='flex'>
            <SideBar/>
            <div className='p-4 overflow-y-auto w-full' style={{height:'calc(100vh - 4rem)'}}>
            <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout