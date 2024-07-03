import "../App.css";
import Mybank from"../img/ABA.jpg";
import Mybank1 from "../img/Acelida.png";
import Mybank2 from "../img/canadia.png";
import Mybank3 from "../img/woori bank.png";
import { LockKeyhole } from 'lucide-react';
import { Link } from "react-router-dom";
import Iphone from "../img/apple.png";
import { Map } from "lucide-react";
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';
const Footer = () => {
  return (
    <article className="footer">
      <div className="footer1">
        <div className="about">
          <h1>About</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            doloribus cupiditate non. Perferendis molestiae ea doloribus ab
            laudantium maiores eos? Saepe asperiores repellat sit beatae
            veritatis! Maiores officia eum id.
          </p>
          <div className="img-footer">
            <img src={Mybank} alt="ABA" className="img-bank"/> 
            <img src={Mybank1} alt="Acelida" className="img-bank"/>
            <img src={Mybank2} alt="Canadia" className="img-bank"/>
            <img src={Mybank3} alt="woori" className="img-bank"/>
        </div>
           
            <h4><LockKeyhole className="key"/> Online payment</h4>
        </div>
        <div className="about">
          <h1>Catagaries</h1>
          <hr />
                <Link to="/" className="navlink">Home</Link><br />
                <Link to="Accessories" className="navlink">Accessories</Link><br />
                <Link to="ipad" className="navlink">Ipad</Link><br />
                <Link to="iphone" className="navlink">Iphone</Link><br />
                <Link to="macbook" className="navlink">Macbook</Link><br />
                <Link to="iwatch" className="navlink">Iwatch</Link><br />
                <Link to="Service" className="navlink">Service</Link><br />
                <Link to="about" className="navlink">About</Link>
                <div className="apple-logo">
                    <img src={Iphone} alt="" />
                </div>
        </div>
        <div className="about">
          <h1>Contact us</h1>
          <hr />
           <p> <MapPin /> sangkat Terk Thla, Khan Sensok , Phnom penh</p>
           <hr />
           <p><Phone /> Phone: 0976866304 / 0987281235</p>
           <p><Mail/> a9094059@gmail.com</p>
           <div className="img-footer1">
                <a href=""><Facebook className="icon"/></a> 
                <a href=""><Instagram className="icon"/></a>
                <a href=""><Youtube className="icon"/></a>
                <a href=""><Twitter className="icon"/></a>
           </div>
        </div>
      </div>
    </article>
  );
};
export default Footer;
