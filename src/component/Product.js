import React from "react";
import { Data } from "./Data";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD } from "../Store/Cartslice";
import { Link } from "react-router-dom";

const Product = () => {
  let name = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let ADDVALUE = (item) => {
    let names = name.some((cartItem) => cartItem.id === item.id);
    if (!names) {
      dispatch(ADD(item));
    }
  };
  return (
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
      {Data.map((item) => {
        return (
          <div style={{ border: "2px solid black", paddingBottom: 15 }}>
            <h1>{item.id}</h1>
            <Link to={`item/${item.id}`}>
              <img src={item.thumbnail} style={{ height: 200, width: 250 }} />
            </Link>
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
            <h3>{item.quantity}</h3>
            <button onClick={() => ADDVALUE(item)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
