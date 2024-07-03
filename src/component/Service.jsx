import { Outlet } from "react-router-dom";
import "../style/service.css";
import { Link } from "react-router-dom";
import pic from "../img/picture iphone '.jpeg";
import pic1 from"../img/MacBook Pro Mockup.jpeg";
import pic2 from"../img/Novo iPad Pro da Apple com tela de OLED Chegará em Maio.jpeg";
import pic3 from "../img/Apple Watch Wallpaper Blue.jpeg";
import video from"../img/video.mp4";
const Service = () => {
  return (
    <>
      <Outlet />
      <article className="service">
        <div className="background">
          <video src={video} autoPlay loop muted/>
        </div>
        <div className="container-service">
        <h1 className="text">Our service</h1>  
                    <div className="box-service">
                         
                        <article className="picture">
                            <Link to="/iphone"><img src={pic} alt="" /></Link>
                        </article>
                        <div className="title">
                          <h1>Iphone</h1>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse iusto perferendis, eum eligendi ea beatae! Alias sed esse quasi dolorem.</p>
                        </div>
                    </div>
                    <div className="box-service">
                          <article className="picture">
                              <Link to="/macbook"><img src={pic1} alt="" /></Link>
                          </article>
                          <div className="title">
                            <h1>Macbook</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae numquam recusandae obcaecati voluptate iusto aspernatur non at unde dolor facere.</p>
                        </div>
                    </div>
                    <div className="box-service">
                          <article className="picture">
                              <Link to="/ipad"><img src={pic2} alt="" /></Link>
                          </article>
                          <div className="title">
                            <h1>Ipad</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus quibusdam repellendus amet cum ad ratione pariatur quo error aut.</p>
                        </div>
                    </div>
                    <div className="box-service">
                          <article className="picture">
                              <Link to="/iwatch"><img src={pic3} alt="" /></Link>
                          </article>
                          <div className="title">
                            <h1>Iwatch</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quibusdam. Quidem ducimus eligendi ratione in facilis eum consequatur tempora cum.</p>
                        </div>
                    </div>
        </div>
      </article>
    </>
  );
};
export default Service;
