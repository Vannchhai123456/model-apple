import { useState } from "react";
import { Ipad } from "../data/dataipad";
import { Link } from "react-router-dom";
const CardIpad=()=>{
    const [product]=useState(Ipad);
    return(
        <>
            {product.map(({img, title, price, id})=>{
                
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
export default CardIpad;