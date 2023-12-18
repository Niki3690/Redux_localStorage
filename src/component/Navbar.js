import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Navbar = () => {
  let name = useSelector((state) => state.cart);

  let dispatch = useDispatch();

let total=name.reduce((def,item)=>def+item.price * item.quantity,0)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 22,
        gap: 15,
        marginTop: 15,
        fontWeight: 600,
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        Home
      </Link>
      <Link to="cart" style={{ textDecoration: "none", color: "black" }}>
        Cart
      </Link>

      <span>Total cart Item:{name.length}</span>
      <span>Total cart Pirce:{total}</span>
    </div>
  );
};

export default Navbar;
