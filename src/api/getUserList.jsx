import axios from "axios";
import React, { useEffect, useState } from "react";

function getUserList(user) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      url: user?`https://jsonplaceholder.typicode.com/users/${user}`:`https://jsonplaceholder.typicode.com/users`,
      method: "get",
    };

    axios(config)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setData(error);
      });
  }, []);
  return data;
}

export default getUserList;
