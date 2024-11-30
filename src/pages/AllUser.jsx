import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import axios from "axios";
import NoUser from "../components/errors/NoUser";

function AllUser() {
  const [inputData, setInputData] = useState("");
  const [filterData, setFilterData] = useState();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const config = {
      url: "https://jsonplaceholder.typicode.com/users",
      method: "get",
    };
    axios(config).then((response) => {
      setFilterData(response.data);
      setUserData(response.data);
      setLoading(!loading);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault()
    let searchData = userData.filter((item) => {
      return (
        item.name.toLowerCase() === inputData.toLocaleLowerCase() ||
        item.email.toLowerCase() === inputData.toLocaleLowerCase()
      );
    });
    setFilterData(searchData)
  }

  const clearSearch = () =>{
     if(inputData === ''){
       setFilterData(userData)
     }
  }

  return (
    <>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div className="p-4 w-full">
          <div className="mb-7 flex flex-col md:flex-row justify-between ">
            <h3 className="font-semibold text-lg">
              All Users : {filterData?.length}
            </h3>

            <form onSubmit={handleSearch} className="w-full md:w-1/2 flex   justify-end mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Enter Name or Email"
                name="search"
                value={inputData}
                className="border-2 w-full md:w-2/4 border-slate-300 py-1 px-3 rounded-lg"
                onChange={(e) => setInputData(e.target.value)}
                onKeyUp={clearSearch}
                required
              />
              <button
                type="submit"
                className="bg-blue-500 p-1 ms-2 px-4 rounded-lg hover:bg-blue-600 transition ease-in-out"
                
              >
                <IoSearch className="text-white" />
              </button>
            </form>

            <Link
              to="/add_user"
              className="flex ms-0 md:ms-5 hover:bg-blue-600 transition ease-in-out bg-blue-500 items-center px-3 py-3 md:py-0 md:px-3 rounded-lg text-white"
            >
              <FaUserPlus className="mr-3" />
              <span> Add New User </span>
            </Link>
          </div>
          <div>
           {filterData.length===0?<NoUser/>: <Table>
              <Thead className="border-b-2 border-slate-300 bg-slate-100 ">
                <Tr className="text-left">
                  <Th>S.No</Th>
                  <Th className="p-4">Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Comapny</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filterData?.map((item,index) => {
                  return (
                    <Tr key={item.id} className="bg-slate-50 ">
                      <Td className="p-3 border-b-2 border-slate-200">{index+1}</Td>
                      <Td className="p-3 border-b-2 border-slate-200">
                        {item.name}
                      </Td>
                      <Td className=" border-b-2 border-slate-200">
                        <Link
                          to={"/user_detail"}
                          state={{ id: item.id }}
                          className="text-blue-400 underline underline-offset-4 hover:text-blue-600 transition ease-in-out"
                          title="Click to See Details"
                        >
                          {item.email}
                        </Link>
                      </Td>
                      <Td className="border-b-2 border-slate-200">
                        {item.phone}
                      </Td>
                      <Td className="border-b-2 border-slate-200">
                        {item.company.name}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>}
          </div>
        </div>
      )}
    </>
  );
}

export default AllUser;
