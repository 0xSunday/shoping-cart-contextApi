import React from "react";
import SinglePageProduct from "./SinglePageProduct";

const HomePage = () => {
  const productsArray = [
    { name: "Product 1", id: 1, price: 10.99 },
    { name: "Product 2", id: 2, price: 20.49 },
    { name: "Product 3", id: 3, price: 5.99 },
  ];


  return (
    <div className="flex justify-around items-center ">
      {productsArray.map((prod) => (
        <SinglePageProduct
          key={prod.id}
          prod={prod}
          // cart={cart}
          // setCart={setCart}
        />
      ))}
    </div>
  );
};

export default HomePage;
