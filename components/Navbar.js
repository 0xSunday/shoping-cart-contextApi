import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="px-20 py-10 w-full bg-black text-white">
      <ul className="flex justify-around items-center text-3xl font-bold ">
        <li className="px-3 py-2 border-2 rounded-xl border-white ">
          <Link href="/">Home</Link>
        </li>
        <li className="p-3 border-2 rounded-xl border-white">
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
