import { Outlet } from "react-router-dom";

const Product=()=>{
    return(
        <>
            <Outlet/>
            <h1>Product page</h1>
        </>
    )
}
export default Product;