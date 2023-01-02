// import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import View from "./task4/view";
import Table from "./task4/table";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

// import { Button } from "./task4/button";
// import { confirmAlert } from "react-confirm-alert";

function App() {
  const [data, setData] = useState([]);

  // let navigate = useNavigate;

  // const router = (id) => {
  //   navigate(`/users/${id}`);
  // };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);

        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // let navigate = useNavigate;

  // const router = () => {
  //   navigate(`/view`);
  // };
  // console.log(router, "router");

  const deleteData = (id) => {
    if (window.confirm("Delete?")) {
      try {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

        const handleDelete = data.filter((list) => list.id !== id);

        setData(handleDelete);
        console.log(handleDelete);
      } catch (err) {
        console.log(err);
      }
    }
  };

  // const viewData = async (id) => {
  //   try {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/users/${id}`
  //     );

  //     setData(response.data);
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   viewData();
  // }, []);

  // const submit = () => {
  //   confirmAlert({
  //     title: "Confirm to submit",
  //     message: "Are you sure to do this.",
  //     buttons: [
  //       {
  //         label: "Yes",
  //         onClick: (id) => deleteData(id),
  //       },
  //       {
  //         label: "No",
  //         onClick: () => alert("Click No"),
  //       },
  //     ],
  //   });
  // };
  return (
    <div>
      <BrowserRouter>
        {/* <Button data={data} /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Table
                data={data}
                deleteData={deleteData}
                // viewData={viewData}
              />
            }
          />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
