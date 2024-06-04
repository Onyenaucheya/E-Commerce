import React, { useState } from 'react' 
import './Footer.css'

// import card_icon from '../Assets/Front End Standardization Test Design'
import fb_icon from '../images/fb_icon.png'
import ig_icon from '../images/ig_icon.png'
import tweet_icon from '../images/tweet_icon.png'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <p>BANDAGE</p>
            </div>

            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="social">
                <div className="icons">
                    <img src={ig_icon} alt="" />
                </div>
                <div className="icons">
                    <img src={fb_icon} alt="" />
                </div>
                <div className="icons">
                    <img src={ig_icon} alt="" />
                </div>
                <div className="icons">
                    <img src={tweet_icon} alt="" />
                </div>
            </div>
            <div className="copyright">
                <hr />
                <p>Copyright @ 2023 - All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer;