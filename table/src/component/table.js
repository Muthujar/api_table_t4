import React from "react";

import "./table.css";
import { useNavigate } from "react-router-dom";

function Table({ data, deleteData }) {
  let navigate = useNavigate();

  const router = (id) => {
    navigate(`/view/${id}`);
  };

  return (
    <div className="bg-white ">
      <table className=" tables text-center  ">
        <thead className="table-head bg-danger  ">
          <tr>
            <th className="col"> name</th>
            <th className="col"> email</th>
            <th className="col"> phone</th>
            <th className="col"> address</th>
            <th className="col"> operations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((list) => {
            console.log(list, "list");
            let { id, name } = list;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{list.email}</td>
                <td>{list.phone}</td>
                <td>
                  {list.address.street} ,{list.address.suite},
                  {list.address.city},{list.address.zipcode}
                </td>
                <td className="d-flex">
                  <button onClick={() => router(id)}> View</button>

                  <button onClick={() => deleteData(id)}> delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
