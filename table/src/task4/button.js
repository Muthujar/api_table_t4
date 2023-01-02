import React from "react";
import { Table } from "./table";
import { useState, useEffect } from "react";
import axios from "axios";

// export const Button = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         console.log(res);

//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const deleteData = (id) => {
//     try {
//       axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

//       const handleDelete = data.filter((list) => list.id !== id);

//       setData(handleDelete);
//       console.log(handleDelete);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <Table data={data} setdata={setData} deleteData={deleteData} />
//     </div>
//   );
// };
