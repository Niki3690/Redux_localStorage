import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "./Data";

const Single = () => {
  let { id } = useParams();

  let item = Data.find((p) => p.id == id);
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300px 300px 300px",
          justifyContent: "center",
          textAlign: "center",
          gap: 25,
          marginTop: 35,
        }}
      >
        <div style={{ border: "2px solid black", paddingBottom: 15 }}>
          <h1>{item.id}</h1>

          <img src={item.thumbnail} style={{ height: 200, width: 250 }} />

          <h3>{item.title}</h3>
          <h3>{item.price}</h3>
          <h3>{item.quantity}</h3>
        </div>
      </div>
    </div>
  );
};

export default Single;
