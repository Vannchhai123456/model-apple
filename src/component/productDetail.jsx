import { useParams } from "react-router-dom";
import "../App.css";
import { array } from "../data/data";
import { Datawactch } from "../data/data-watch";
const ProductDetail = () => {
  const { id } = useParams();
  const {
    img,
    title,
    color,
    chip,
    display,
    resolution,
    price,
    battery,
    ram,
    operating_system,
    Storage,
    mermery,
    refresh,
  } = array.find((d) => d.id ==id);
  if(id<10){
    return (
      <article className="productdetail">
        <div className="pic">
        <h4 className="namephone">{title}</h4>
          <img src={img} alt="" />
        </div>
        <div className="spech">
          <hr />
          <h4 className="sizefont">Color: {color}</h4>
          <hr />
          <h4 className="sizefont">Chip: {chip}</h4>
          <hr />
          <h4 className="sizefont">Display: {display}</h4>
          <hr />
          <h4 className="sizefont">Resolution: {resolution}</h4>
          <hr />
          <h4 className="sizefont">Price: {price}</h4>
          <hr />
          <h4 className="sizefont">Battery: {battery}</h4>
          <hr />
          <h4 className="sizefont">Storage: {ram}</h4>
          <hr />
        </div>
      </article>
    );
  }
  else if(id>9&&id<14){
    return (
      <article className="productdetail">
        <div className="pic">
        <h4 className="namephone">{title}</h4>
          <img src={img} alt="" />
        </div>
        <div className="spech">
          <hr />
          <h4 className="sizefont">Color: {color}</h4>
          <hr />
          <h4 className="sizefont">Chip: {chip}</h4>
          <hr />
          <h4 className="sizefont">Display: {display}</h4>
          <hr />
          <h4 className="sizefont">Price: {price}</h4>
          <hr />
          <h4 className="sizefont">Power battery: {battery}</h4>
          <hr />
        </div>
      </article>
    );
  }else if(id>13&&id<19){
    return(
      <article className="productdetail">
        <div className="pic">
        <h4 className="namephone">{title}</h4>
          <img src={img} alt="" />
        </div>
        <div className="spech">
          <hr />
          <h4 className="sizefont">Color: {color}</h4>
          <hr />
          <h4 className="sizefont">Chip: {chip}</h4>
          <hr />
          <h4 className="sizefont">Display: {display}</h4>
          <hr />
          <h4 className="sizefont">Refresh Rate: {refresh}</h4>
          <hr />
          <h4 className="sizefont">Price: {price}</h4>
          <hr />
          <h4 className="sizefont">Operating-system: {operating_system}</h4>
          <hr />
          <h4 className="sizefont">Storage: {Storage}</h4>
          <hr />
        </div>
      </article>
    )
  }
  else if(id>18){
      return (
        <article className="productdetail">
          <div className="pic">
          <h4 className="namephone">{title}</h4>
            <img src={img} alt="" />
          </div>
          <div className="spech">
            <hr />
            <h4 className="sizefont">Color: {color}</h4>
            <hr />
            <h4 className="sizefont">Chip: {chip}</h4>
            <hr />
            <h4 className="sizefont">Display: {display}</h4>
            <hr />
            <h4 className="sizefont">Resolution: {resolution}</h4>
            <hr />
            <h4 className="sizefont">Price: {price}</h4>
            <hr />
            <h4 className="sizefont">Battery: {battery}</h4>
            <hr />
            <h4 className="sizefont">Storage: {Storage}</h4>
            <hr />
          </div>
        </article>
      );
  }
  
};
export default ProductDetail;
