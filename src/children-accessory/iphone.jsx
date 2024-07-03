import { useState } from "react";
import { array } from "../data/data";
import { Link, Outlet } from "react-router-dom";
import Cartiphone from "../cart/cartiphone";
import Cart from "../component/card";
const IPhone = () => {
  return (
    <>
      <Outlet />
      <div className="container">
        <h1 className="allproduct">Iphone</h1>
        <Cartiphone product={array} />
      </div>
    </>
  );
};
export default IPhone;
