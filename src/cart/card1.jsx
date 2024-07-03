import { array } from "../data/data";
import { useState } from "react";
import { Link } from "react-router-dom";
const Card1=()=>{
    const [product]=useState(array);
    console.log(product);
        return(
        <>
            {product.map(({id, img, price, title})=>{
                return(
                         <article key={id}>
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
export default Card1;