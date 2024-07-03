import { Outlet } from "react-router-dom";
import "../App.css";
import Cart from "./card";
import { array } from "../data/data";
const Homepage=()=>{
    return(
        <>
          <Outlet/>
          <div className="container">
                <h1 className="allproduct">All Product</h1>
                <Cart product={array}/> 
          </div>
         
            
        </>
    )
}
export default Homepage;