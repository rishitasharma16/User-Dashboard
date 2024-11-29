import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SideButton({ to, icon, name }) {
  const sidebarOpen = useSelector((state) => {
    return state.dashboard.sidebarOpen;
  });
  return (
    <NavLink
      to={to}
      className={`${sidebarOpen?'px-3':'pl-4'} flex items-center mb-3  py-2 rounded-lg hover:bg-slate-200`}
      style={({isActive})=>isActive?{background:'#CBD5E1'}:{background:''}}
    >
      {icon}
      <span className={`${sidebarOpen?'ml-3':'hidden ml-0'} font-semibold`}>{name}</span>
    </NavLink>
  );
}

export default SideButton;
