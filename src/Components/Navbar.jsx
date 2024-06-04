import React from "react";
import { useState } from "react";
import './Navbar.css'
import logo from '../images/logo.png'
import cart from '../images/cart.png'
import top from '../images/top.jpg'
import register from '../images/register.png'
import search from '../images/search.png'
import heart from '../images/heart.png'
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const localCart = JSON.parse(localStorage.getItem('cart'))

  const [menu,setMenu] = useState("Home");
  const navigate = useNavigate()
    return (
        <div className="navbar">
          <div className="nav">
          <img src={top} alt="" />
            <div className="second-div">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    
                </div>
                <ul className="nav-menu"> 
                  <Link to="/"><li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li></Link>
                  <Link to="/shop"><li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li></Link>
                  <Link to="/about"><li onClick={()=>{setMenu("about")}}>About{menu==="about"?<hr/>:<></>}</li></Link>
                  <Link to="/blog"><li onClick={()=>{setMenu("blog")}}>Blog{menu==="blog"?<hr/>:<></>}</li></Link>
                  <Link to="/contact"><li onClick={()=>{setMenu("contact")}}>Contact{menu==="contact"?<hr/>:<></>}</li></Link>
                  <Link to="/pages"><li onClick={()=>{setMenu("pages")}}>Pages{menu==="pages"?<hr/>:<></>}</li></Link>
                </ul>
                <div className="nav-login-cart">
                  <img src={register} width="50%"height="50%" />
                  <button onClick={() => navigate("/login")}>Login/Register</button>
                  <div className="nav-login-cart-t">
                    <img src={search} alt="" />  
                    <img src={cart} alt=""  />  
                    {/* <div className="nav-cart-count">0
                    </div> */}
                    <img src={heart} alt="" />             
                     </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Navbar