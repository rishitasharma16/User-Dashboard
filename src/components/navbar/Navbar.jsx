import React, { useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { sidebar } from "../../redux/slices/dashboardSlice";

function Navbar() {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => {
    return state.dashboard.sidebarOpen;
  });

  const handleSidebar = () => {
    dispatch(sidebar(!sidebarOpen));
  };

  return (
    <div className="h-16 w-full bg-slate-100 border-b-2 border-slate-300">
      <div className="flex items-center h-full px-4">
        <RiMenu2Fill
          onClick={handleSidebar}
          size={23}
          className="text-slate-400 hover:text-slate-950 transition ease-in-out cursor-pointer hidden md:block"
        />
        <h1 className="ml-4">brand name</h1>
      </div>
    </div>
  );
}

export default Navbar;
