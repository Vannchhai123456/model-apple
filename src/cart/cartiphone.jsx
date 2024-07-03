import { Link } from "react-router-dom";
import { Dataiphone } from "../data/dataiphone";
import { useState } from "react";
import"../App.css";
const Cartiphone=()=>{
   const[product] =useState(Dataiphone);
    return(
        <>
        {product.map(({id, img, price, title})=>{

            return(
                     <article key={id} className="iphone">
                            <div className="img">
                                <img src={img} alt="" />
                            </div>
                            <h1 className="price">{title}</h1>
                            <h1 className="numprice">{price}</h1>
                           <Link to={`/product/${id}`}><button className="btnDetail">Detail</button></Link>
                    </article>
            )    
        })}
    </>
    )
}
export default Cartiphone;