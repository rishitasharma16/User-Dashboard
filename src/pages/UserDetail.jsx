import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import DetailCard from "../components/card/DetailCard";
import axios from "axios";

function UserDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!state) {
      navigate("/all_users");
    } else {
      const config = {
        url: `https://jsonplaceholder.typicode.com/users/${state.id}`,
        method: "get",
      };

      axios(config).then((response) => {
        setData(response.data);
        setLoading(!loading);
      });
    }
  }, []);

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
      {!loading ? (
        <div className="m-auto w-full md:w-2/3 bg-slate-100 border p-4 border-slate-300 rounded-lg overflow-hidden">
          <div className="w-full h-28 flex items-center pb-3 border-b-2 border-slate-400">
            <img className="h-1/2 md:h-full" src={avatar} alt="avatar" />
            <div className="ml-8">
              <h1 className="text-2xl">{data.name}</h1>
              <p>{data.email}</p>
            </div>
          </div>

          <div className="mt-4">
            <DetailCard title={"username"} text={data.username} />
            <DetailCard title={"name"} text={data.name} />
            <DetailCard title={"email"} text={data.email} />
            <DetailCard title={"phone"} text={data.phone} />
            <DetailCard title={"website"} text={data.website} />
            <DetailCard
              title={"company"}
              text={data.company.name}
              small_text={data.company.catchPhrase}
              detail_text={data.company.bs}
            />
            <DetailCard
              title={"address"}
              text={data.address.city}
              small_text={data.address.street}
              detail_text={data.address.suite}
            />
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default UserDetail;
