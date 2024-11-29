import React from 'react'
import SideButton from '../buttons/SideButton'
import { MdDashboardCustomize } from 'react-icons/md'
import { RiUserFill } from 'react-icons/ri'
import { useSelector } from 'react-redux';

function SideBar() {
  const sidebarOpen = useSelector((state) => {
    return state.dashboard.sidebarOpen;
  });

  return (
    <div className={`${sidebarOpen?'w-64 px-4':'w-16 p-1'} bg-slate-100 border-r-2 border-slate-300 `} style={{height:'calc(100vh - 4rem)'}}>
        <div className='pt-3'>
            <SideButton to='/' name='Dashboard' icon={<MdDashboardCustomize />}/>
            <SideButton to='all_users' name='All Users' icon={<RiUserFill />}/>
        </div>
    </div>
  )
}

export default SideBar