import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between bg-slate-700 p-3 text-white">
      <div>logo</div>
      <div className="bg-white px-4 rounded-2xl py-2  w-1/4 flex justify-between font-medium ">
        <input
          type="text"
          placeholder="Search product "
          autoComplete="off"
          spellCheck="false"
          className="w-3/4 outline-none text-slate-700"
        ></input>
        <button className="text-red-900">Search</button>
      </div>
      <div>
        <ul className="flex gap-8 font-semibold text-2xl">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/electronics">Electronics</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">AboutUS</NavLink>
          </li>
          <li>
            <NavLink to="/customer_service">Coustmer service</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
