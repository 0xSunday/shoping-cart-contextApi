import { MContext } from "@/context/context";
import React, { useContext } from "react";
import SinglePageProduct from "./SinglePageProduct";

const CartPage = ({}) => {
  const { cart } = useContext(MContext);
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-5xl font-bold">
        {cart.length > 0 ? "cart" : "empty  "}
      </h1>
      <div className="flex justify-center items-center flex-col py-10">
        {cart.map((prod) => (
          <SinglePageProduct prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
