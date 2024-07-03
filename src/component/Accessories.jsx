import { Outlet } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
import { array } from "../data/data";
import { useState } from "react";
import Card1 from "../cart/card1";
const Accesories=()=>{
    const [product]= useState(array);
    return(
        <>
            <div className="container">
                <h1 className="allproduct">
                    Accessories
                </h1>
                <Card1 />
            </div>
        </>
    )
}
export default Accesories;