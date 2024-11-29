import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/form/InputField";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function AddUser() {
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
  });

  const config = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/users",
    data: inputData,
  };

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios(config)
      .then((response) => {
        toast(`User ${response.data.name}  created successfully!`, { toastId: 1, position: "bottom-right", theme:'dark', type:'success', autoClose:2000 });
       setTimeout(()=>{
        navigate('/all_users')
       },3200)
      })
      .catch((error) => {
        console.log(error);
      });
    setInputData(inputData);
  };

  return (
    <div className="p-4">
      <div className="mb-7 flex justify-between ">
        <h3 className="font-semibold text-lg">User Details</h3>
        <Link to="/all_users">
          <button
            type="button"
            className="bg-blue-500 p-2 ms-2 rounded-lg text-white flex items-center hover:bg-blue-600 transition ease-in-out"
          >
            <IoMdArrowBack size={20} />
            <span className="hidden md:block ml-0 md:ml-2">Back</span>
          </button>
        </Link>
      </div>
      <div className="border border-gray-900/10 py-2 md:py-5  px-3 md:px-12 rounded-lg bg-slate-100">
        <h2 className="text-base/7 font-semibold text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm/6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mt-5  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputField
              htmlFor="username"
              label="username"
              labelId="username"
              type="text"
              name="username"
              value={inputData.username}
              onchange={handleChange}
            />
            <InputField
              htmlFor="name"
              label="name"
              labelId="name"
              type="text"
              name="name"
              value={inputData.name}
              onchange={handleChange}
            />
            <InputField
              htmlFor="email"
              label="email"
              labelId="email"
              type="email"
              name="email"
              value={inputData.email}
              onchange={handleChange}
            />
            <InputField
              htmlFor="phone"
              label="phone"
              labelId="phone"
              type="text"
              name="phone"
              value={inputData.phone}
              onchange={handleChange}
            />
            <InputField
              htmlFor="company"
              label="company"
              labelId="company"
              type="text"
              name="company"
              value={inputData.company}
              onchange={handleChange}
            />
            <InputField
              htmlFor="password"
              label="password"
              labelId="password"
              type="password"
              name="password"
              value={inputData.password}
              onchange={handleChange}
            />
          </div>
          <div className="text-center mt-5 md:mt-12 w-full">
            <button
              type="submit"
              className="bg-blue-500 rounded-lg py-2 hover:bg-blue-600 transition ease-in-out text-white w-full md:w-1/2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddUser;
