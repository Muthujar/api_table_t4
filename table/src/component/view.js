import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function View() {
  let params = useParams();

  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    getDatas();
  }, [params.id]);

  async function getDatas() {
    const responseUser = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    setUserDetails(responseUser.data);
  }

  const { id, username, name, email } = userDetails;
  return (
    <div className="user">
      <h1> User Id : {id} </h1>
      <h1> User name : {username}</h1>
      <h1>Name: {name}</h1>
      <h1>Email id : {email}</h1>
    </div>
  );
}

export default View;
