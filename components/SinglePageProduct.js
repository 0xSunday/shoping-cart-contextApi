import { MContext } from "@/context/context";
import React, { useContext } from "react";

const SinglePageProduct = ({ prod }) => {
  const { cart, setCart } = useContext(MContext);
  const removeFromCartHandler = () => {
    setCart(cart.filter((c) => c.id !== prod.id));
  };
  const AddToCartHandler = () => {
    setCart([...cart, prod]);
  };

  return (
    <div className="px-5 py-5 my-5 border-2 border-black rounded-xl text-center">
      <h1 className="text-3xl font-bold">{prod.name}</h1>
      <p className="text-3xl font-bold">${prod.price}</p>
      {cart.includes(prod) ? (
        <button
          className="bg-gray-500 px-5 py-2 rounded-2xl font-bold "
          onClick={removeFromCartHandler}
        >
          Remove -
        </button>
      ) : (
        <button
          className="bg-gray-500 px-5 py-2 rounded-2xl font-bold "
          onClick={AddToCartHandler}
        >
          Add +
        </button>
      )}
    </div>
  );
};

export default SinglePageProduct;
