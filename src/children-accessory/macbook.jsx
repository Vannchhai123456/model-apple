import CardMacBook from "../cart/cardmacbook";
import { Datamacbook } from "../data/data-macbook";
const Macbook =()=>{
    return(
        <div className="container">
            <h1 className="allproduct">Macbook</h1>
            <CardMacBook product={Datamacbook}/>
        </div>
    )
}
export  default Macbook;