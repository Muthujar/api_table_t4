import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import View from "./component/view";
import Table from "./component/table";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

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

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Table data={data} deleteData={deleteData} />}
          />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
