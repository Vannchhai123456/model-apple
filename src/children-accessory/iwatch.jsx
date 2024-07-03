import { useState } from "react";
import { array } from "../data/data";
import CardIwatch from "../cart/cardiwatch";
import Card1 from "../cart/card1";
const Iwatch =()=>{
    return(
       <>
        <div className="container">
            <h1 className="allproduct">Iwatch</h1>
            <CardIwatch />
        </div>
       </>
       
    )
}
export  default Iwatch;