import { Link, NavLink } from "react-router-dom"
import "../App.css";
import { Clock, LogIn, Menu } from "lucide-react";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";
import { ChevronRight } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Search } from "lucide-react";
import { Store } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { X } from "lucide-react";
const Navbar=()=>{
   const [btn, setbtn]= useState(false);
   const [search, setsearch]=useState(false);
   const [shop, setshop]=useState(false);
   function Clickbtn(){
    if(btn){
        setbtn(false)
    }
    else setbtn(true)
   }
   function btnsearch(){
        if(search){
            setsearch(false);
        }
        else{
            setsearch(true)
        }
   }
   function btnshop(){
    if(shop){
        setshop(false)
    }
    else{
        setshop(true);
    }
   }
   function Alert(){
    return(
        <div className="alert">
                <NavLink to="/" onClick={()=> setbtn(false)}>Home</NavLink>
                <div className="acceessory1">
                    <NavLink to="Accessories" onClick={()=> setbtn(false)} className="acc1">Accessories <ChevronDown className="icon"/></NavLink>
                    <div className="menu2">
                        <Link to="ipad" onClick={()=>setbtn(false)}>Ipad</Link>
                        <Link to="iphone" onClick={()=>setbtn(false)}>Iphone</Link>
                        <Link to="macbook" onClick={()=>setbtn(false)}>Macbook</Link>
                        <Link to="iwatch" onClick={()=>setbtn(false)}>Iwatch</Link>
                    </div>
                </div>
                <NavLink to="Service" onClick={()=> setbtn(false)}>Service</NavLink>
                <NavLink to="About" onClick={()=> setbtn(false)}>About</NavLink>
        </div>
    )
   }
   function Sch(){
    return(
        <div className="search">
            <button className="close" onClick={btnsearch}><X /></button>
            <form action="" className="containersearch"> <input type="search" name="search" id="" placeholder="Search..."/><button type="submit"><Search /></button></form>
        </div>
    )
   }
   function Alertlogin(){
    return(
        <div className="background1">
                <div className="shop">
                    <button className="close1" onClick={btnshop}><X /></button>
                    <h1>Login </h1>
                    <form action="" className="login">
                        <input type="email" name="" id="" placeholder="Username..."/><br />
                        <input type="email" name="" id="" placeholder="Password..."/>
                        <button className="btnlogin">Login</button>
                    </form>
                </div>
            </div>
    )
   }
    return (
        <>
        <nav>
             <button onClick={Clickbtn} className="btnbar">
                <Menu />
            </button>
            
            <h1 className="h1">Iphone</h1>
           
            <div className="menu">
                <NavLink to="/" >Home</NavLink>
                <div className="accessory">
                    <NavLink to="Accessories" className="">Accessories <ChevronDown className="icon"/></NavLink>
                    <div className="menu1">
                        <Link to="ipad" >Ipad</Link>
                        <Link to="iphone" >Iphone</Link>
                        <Link to="macbook" >Macbook</Link>
                        <Link to="iwatch" >Iwatch</Link>
                    </div>
                </div>
               
                <NavLink to="Service">Service</NavLink>
                <NavLink to="about">About</NavLink>
            </div>
            <div className="btnsearch">
                <button  onClick={btnsearch}><Search /></button>
                <button  onClick={btnshop}><ShoppingBag /></button>
            </div>
        </nav>
        {shop? <Alertlogin />:null}
        {search? <Sch />:null}
        {btn? <Alert />: null}
    </>
    )
}
export default Navbar;