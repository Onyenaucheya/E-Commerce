import React, { act } from "react";
import './LoginRegister.css'
import { useState } from "react";
import password from '../images/password.png'
import person from '../images/person.png'
import email from '../images/email.png'

const LoginRegister = () => {

    const [action, setAction] = useState ("Register");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={person} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}
                
                <div className="input">
                    <img src={email} alt="" />
                    <input type="email" placeholder="Email Id"/>
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action==="Register"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Register")}}>Register</div>
                <div className={action==="Register"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginRegister 