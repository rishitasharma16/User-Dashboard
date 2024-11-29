import React from "react";
import getUserList from "../api/getUserList";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function AllUser() {
  const userData = getUserList();

  return (
    <>
      <div className="p-4 w-full">
        <div className="mb-7 flex flex-col md:flex-row justify-between ">
          <h3 className="font-semibold text-lg">
            All Users : {userData.data?.length}
          </h3>
          <div className="w-full md:w-1/2  flex justify-end">
            <input
              type="text"
              placeholder="Search User"
              className="border-2 w-full md:w-2/4 border-slate-300 py-1 px-3 rounded-lg"
            />
            <button type="button" className="bg-blue-500 p-2 ms-2 rounded-lg">
              <IoSearch className="text-white" />{" "}
            </button>
          </div>
        </div>
        <div>
          <Table>
            <Thead className="border-b-2 border-slate-300 bg-slate-100 ">
              <Tr className="text-left">
                <Th className="p-4">Name</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Comapny</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userData.data?.map((item) => {
                return (
                  <Tr key={item.id} className="bg-slate-50 ">
                    <Td className="p-3 border-b-2 border-slate-200">
                      {item.name}
                    </Td>
                    <Td className=" border-b-2 border-slate-200">
                      <Link
                        to={"/user_detail"}
                        state={{ id: item.id }}
                        className="text-blue-500 underline underline-offset-4"
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
          </Table>
        </div>
      </div>
    </>
  );
}

export default AllUser;
