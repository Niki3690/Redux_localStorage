import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DECREMENT, INCREMENT, REMOVE } from "../Store/Cartslice";

const Cart = () => {
  let name = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let REMOVEVALUE = (itemID) => {
    dispatch(REMOVE(itemID));
  };

  let INCREMENTVALUE = (itemID) => {
    dispatch(INCREMENT(itemID));
  };

  let DECREMENTVALUE = (itemID) => {
    dispatch(DECREMENT(itemID));
  };

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(name));
  }, [name]);
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
        {name.map((item) => {
          let update = item.price * item.quantity;
          return (
            <div style={{ border: "2px solid black", paddingBottom: 15 }}>
              <h1>{item.id}</h1>
              <img src={item.thumbnail} style={{ height: 200, width: 250 }} />
              <h3>{item.title}</h3>
              <h3>{update}</h3>
              <h3>{item.quantity}</h3>

              <button onClick={() => INCREMENTVALUE(item.id)}>+</button>
              <button onClick={() => DECREMENTVALUE(item.id)}>-</button>
              <button onClick={() => REMOVEVALUE(item.id)}>
                Remove to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
