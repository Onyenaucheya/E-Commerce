import React from "react";
import './Landing.css'
import product_1 from '../images/all_products.js/product_1.png'
import product_2 from '../images/all_products.js/product_2.png'
import product_3 from '../images/all_products.js/product_3.png'
import product_4 from '../images/all_products.js/product_4.png'
import product_5 from '../images/all_products.js/product_5.png'
import product_6 from '../images/all_products.js/product_6.png'
import product_7 from '../images/all_products.js/product_7.png'
import product_8 from '../images/all_products.js/product_8.png'
import product_9 from '../images/all_products.js/product_9.png'
import product_10 from '../images/all_products.js/product_10.png'
import product_11 from '../images/all_products.js/product_11.png'
import product_12 from '../images/all_products.js/product_12.png'
import product_132 from '../images/all_products.js/product_13 (2).png'
import product_13 from '../images/all_products.js/product_13.png'
import product_14 from '../images/all_products.js/product_14.png'
import product_15 from '../images/all_products.js/product_15.png'
import product_16 from '../images/all_products.js/product_16.png'
import icon_1 from '../images/icon_1.png'
import icon_2 from '../images/icon_2.png'
import icon_3 from '../images/icon_3.png'
import icon_4 from '../images/icon_4.png'
import icon_5 from '../images/icon_5.png'
import icon_6 from '../images/icon_6.png'

import fb_icon from '../images/fb_icon.png'
import ig_icon from '../images/ig_icon.png'
import tweet_icon from '../images/tweet_icon.png'
import Vector_2 from '../images/Vector_2.png'



const Landing = () => {
    return (
        <div className="hero">
          <div className="hero-top-row1">
            <img className="first-image" src={product_1} alt="" />
            <div className="first-div">
            {/* <img className="first-image" src={product_2} alt="" /> */}
            </div>
            <div className="first-image-box">
            <img className="first-image" src={product_2} width="200%" height="70%" />
            <div className="first-image-box1">
            <img className="first-image" src={product_3} width="120%" height="100%" />
            <img className="first-image" src={product_4}  width="100%" height="100%"/>
            </div>
            </div>
            </div>
          <div className="hero-bottom-container">
            <div className="hero-first-header">
            <p style={{ textAlign: 'center' }}>Featured Products</p>
            <h2 style={{ textAlign: 'center' }}>BESTSELLER PRODUCTS</h2>
            <p style={{ textAlign: 'center' }}>Problems trying to resolve the conflict between</p>
            </div>
            
            <div className="hero-main-container">
              <div className="hero-card-row1">
                <div className="hero-card">
                  <img src={product_5} alt="" />
                  <div className="hero-title-text">
                  <h3 style={{ textAlign: 'center' }}>Graphic Design</h3>
                  <p style={{ textAlign: 'center' }}>English Department</p>
                  <p style={{ textAlign: 'center', color:  'rgb(0, 100, 0)' }} > $6.48</p>
                  </div>
                </div>
                <div className="hero-card">
                <img src={product_6} alt="" />
                <div className="hero-title-text">
                <h3 style={{ textAlign: 'center' }}>Graphic Design</h3>
                  <p style={{ textAlign: 'center' }}>English Department</p>
                  <p style={{ textAlign: 'center', color:  'rgb(0, 100, 0)' }} > $6.48</p>
                  </div>
                </div>
                <div className="hero-card">
                <img src={product_7} alt="" />
                <div className="hero-title-text">
                <h3 style={{ textAlign: 'center' }}>Graphic Design</h3>
                  <p style={{ textAlign: 'center' }}>English Department</p>
                  <p style={{ textAlign: 'center', color:  'rgb(0, 100, 0)' }} > $6.48</p>
                  </div>
                </div>
                <div className="hero-card">
                <img src={product_132} alt="" />
                <div className="hero-title-text">
                <h3 style={{ textAlign: 'center' }}>Graphic Design</h3>
                  <p style={{ textAlign: 'center' }}>English Department</p>
                  <p style={{ textAlign: 'center', color:  'rgb(0, 100, 0)' }} > $6.48</p>
                  </div>
                </div>
                <div className="hero-card">
                <img src={product_8} alt="" />
                <div className="hero-title-text">
                <h3 style={{ textAlign: 'center' }}>Graphic Design</h3>
                  <p style={{ textAlign: 'center' }}>English Department</p>
                  <p style={{ textAlign: 'center', color:  'rgb(0, 100, 0)' }} > $6.48</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-card-row2">
                <div className="hero-card">
                  <img src={product_9} alt="" />
                  <div className="hero-title-text">
                  <h3 style={{ textAlign: 'center' }}>Graphic Design</h3>
                  <p style={{ textAlign: 'center' }}>English Department</p>
                  <p style={{ textAlign: 'center', color:  'rgb(0, 100, 0)' }} > $6.48</p>
                  </div>
                </div>
                <div className="hero-card">
                <img src={product_10} alt="" />
                <div className="hero-title-text">
                <h3 style={{ textAlign: 'center' }}>Graphic Design</h3>
                  <p style={{ textAlign: 'center' }}>English Department</p>
                  <p style={{ textAlign: 'center', color:  'rgb(0, 100, 0)' }} > $6.48</p>
                  </div>
                </div>
                <div className="hero-card">
                <img src={product_11} alt="" />
                <div className="hero-title-text">
                <h3 style={{ textAlign: 'center' }}>Graphic Design</h3>
                  <p style={{ textAlign: 'center' }}>English Department</p>
                  <p style={{ textAlign: 'center', color:  'rgb(0, 100, 0)' }} > $6.48</p>
                  </div>
                </div>
                <div className="hero-card">
                <img src={product_12} alt="" />
                <div className="hero-title-text">
                <h3 style={{ textAlign: 'center' }}>Graphic Design</h3>
                  <p style={{ textAlign: 'center' }}>English Department</p>
                  <p style={{ textAlign: 'center', color:  'rgb(0, 100, 0)' }} > $6.48</p>
                  </div>
                </div>
                <div className="hero-card">
                <img src={product_13} alt="" />
                <div className="hero-title-text">
                <h3 style={{ textAlign: 'center' }}>Graphic Design</h3>
                  <p style={{ textAlign: 'center' }}>English Department</p>
                  <p style={{ textAlign: 'center', color:  'rgb(0, 100, 0)' }} > $6.48</p>
                  </div>
                </div>
              </div>
            
          </div>
          <div className="hero-click">
          <button style={{ color:  'rgb(67, 147, 174)' }}>LOAD MORE PRODUCTS</button>
          </div>
          <div className="hero-second-container">
          <div className="hero-second-header">
            <p style={{ textAlign: 'center' }}>Featured Products</p>
            <h2 style={{ textAlign: 'center' }}>THE BEST SERVICES</h2>
            <p style={{ textAlign: 'center' }}>Problems trying to resolve the conflict between</p>
            </div>
            <div className="hero-again-row1">
               <img src={icon_1} alt="" />
               <div className="hero-again-title-text">
                <h2 style={{ textAlign: 'center' }}>Easy Wins</h2>
                <p style={{ textAlign: 'center' }}>Get your best looking smile now!</p>
               </div>
               
               <div className="hero-again-row1">
               <img src={icon_2} alt="" />
               <div className="hero-again-title-text">
                <h2 style={{ textAlign: 'center' }}>Concrete</h2>
                <p style={{ textAlign: 'center' }}>Defalcate is most focused in helping you discover your most beautiful smile</p>
               </div>
               </div>
               <div className="hero-again-row1">
               <img src={icon_3} alt="" />
               <div className="hero-again-title-text">
                <h2 style={{ textAlign: 'center' }}>Hack Growth</h2>
                <p style={{ textAlign: 'center' }}>Overcome any hurdle or anyother problem.</p>
               </div>
               </div>
               </div>
               <div className="hero-practice">
                 <div className="hero-advice">
                 <p style={{ textAlign: 'center', color:  'rgb(67, 147, 174)' }}>Practice Advice</p>
                 <h2 style={{ textAlign: 'center' }}>Featured Posts</h2>
                 </div>
               </div>
               <div className="hero-new-products-main-container">
               <div className="hero-new-products">
               <img className="it-image" src={product_14} alt="IT"></img>
                <div className="hero-new-products-text">
                <p className="hero-new-products-text-price" style={{ color: 'rgb(67, 147, 174)' }}>Google</p>
                <p className="hero-new-products-price">Trending</p>
                <p className="hero-new-products-price2">New</p>
              </div>
              <div className="texts">
              <h3>Loudest `a la Madison #1 (L'integral)</h3>
              <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away</p>
              </div>
              
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={icon_4} alt=""></img>
                  <p>22 April 2021</p>
                </div>
                <div className="saved-user-count">
                  <img src={icon_5} alt="" />
                  <p>10 comments</p>
                </div>
                </div>
                <div className="saved-user-arrow">
                  <h3>Learn More</h3>
                  <img src={icon_6} alt=""></img>
                </div>
              </div>
               
               <div className="hero-new-products">
               <img className="it-image" src={product_15} alt="IT"></img>
                <div className="hero-new-products-text">
                <p className="hero-new-products-text-price" style={{ color: 'rgb(67, 147, 174)' }}>Google</p>
                <p className="hero-new-products-price">Trending</p>
                <p className="hero-new-products-price2">New</p>
              </div>
              <div className="texts">
              <h3>Loudest `a la Madison #1 (L'integral)</h3>
              <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away</p>
              </div>
              
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={icon_4} alt=""></img>
                  <p>22 April 2021</p>
                </div>
                <div className="saved-user-count">
                  <img src={icon_5} alt="" />
                  <p>10 comments</p>
                </div>
                </div>
                <div className="saved-user-arrow">
                  <h3>Learn More</h3>
                  <img src={icon_6} alt=""></img>
                </div>
              </div>
              <div className="hero-new-products">
               <img className="it-image" src={product_16} alt="IT"></img>
                <div className="hero-new-products-text">
                <p className="hero-new-products-text-price" style={{ color: 'rgb(67, 147, 174)' }}>Google</p>
                <p className="hero-new-products-price">Trending</p>
                <p className="hero-new-products-price2">New</p>
              </div>
              <div className="texts">
              <h3>Loudest `a la Madison #1 (L'integral)</h3>
              <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away</p>
              </div>
              
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={icon_4} alt=""></img>
                  <p>22 April 2021</p>
                </div>
                <div className="saved-user-count">
                  <img src={icon_5} alt="" />
                  <p>10 comments</p>
                </div>
                </div>
                <div className="saved-user-arrow">
                  <h3>Learn More</h3>
                  <img src={icon_6} alt=""></img>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>



        
    )
}

export default Landing 