import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import getUserList from "../api/getUserList";

function UserDetail() {
    
    const {state} = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!state){
            navigate('/all_users')
        }
    },[])

    const {data} = getUserList(state?.id)

        
  return (
    <div className="p-4">
      <div className="mb-7 flex justify-between ">
        <h3 className="font-semibold text-lg">User Details</h3>
        <Link to="/all_users">
          <button
            type="button"
            className="bg-blue-500 p-2 ms-2 rounded-lg text-white flex items-center"
          >
            <IoMdArrowBack size={20} />
            <span className="hidden md:block ml-0 md:ml-2">Back</span>
          </button>
        </Link>
      </div>
    {data?  <div className="flex">
            <div className="m-auto h-max w-3/4 bg-slate-100 border border-slate-300 rounded-lg">
                <div className="text-center ">
                    <h1 className="font-bold text-2xl">Rishita sharma</h1>
                    <h2 className="text-lg font-semibold">Rishi</h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center bg-red-200">
                    <ul>
                        <li>Email:
                            <span >{data.email}</span>
                        </li>
                        <li>Username:
                            <span>{data.name}</span>
                        </li>
                        <li>Phone
                            <span>mailrishita</span>
                        </li>
                        <li>Website
                            <span>mailrishita</span>
                        </li>
                        <li>Company
                            <span>mailrishita</span>
                        </li>
                    </ul>
                </div>
            </div>
      </div>:<h2>Loading...</h2>}
    </div>
  );
}

export default UserDetail;
