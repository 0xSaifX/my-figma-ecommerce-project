import React from 'react'
import HomeGrocery from './pages/HomeGrocery';
import HomeFashion from './pages/HomeFashion';
import HomeFashion2 from './pages/HomeFashion2';
import LeftSidebar from './pages/LeftSidebar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Skrill from "./assets/Skrill_logo.svg";
import maestro from "./assets/maestro.svg";
import visa from "./assets/visa_electron.svg";
import { FaShoppingBag,FaPhoneAlt,FaMapMarkerAlt,FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaEnvelope, FaWhatsapp,FaChevronDown,FaSearch,FaUser,FaHeart, FaList, } from 'react-icons/fa';
import "./App.css";
import { LocationEdit } from 'lucide-react';
import Plsidebar from './pages/Plsidebar';
import Checkout from './pages/Checkout';
import Wishlist from "./pages/Wishlist";
import ProductFull from "./pages/ProductFull";
import Blog from "./pages/Blog";
import BlogDetails from './pages/BlogDetails';
import About from './pages/AboutUs';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Compare from './pages/Compare';
import Faq from './pages/Faq';
import Login from './pages/Login';


function App () {
  return (
    <div>
      <div className='body-container'>

        <header className='main-header'>
          <div className="top-bar">
        <div className="left-info">
          <span><FaPhoneAlt/> +91 987 654 3210</span>
          <span><FaWhatsapp/> +91 987 654 3210</span>
        </div>
          <span>World's Fastest Online Shopping Destination</span>
        <div className="right-info">
          <span>Help?</span>
          <span>Track Order?</span>
          <span>English <FaChevronDown/></span>
          <span>Dollar <FaChevronDown/></span>
        </div>
      </div>

      <div className="middle-bar">
        <div className="logo">
          <h2>
            <span className="logo-green"><FaShoppingBag/> G</span>rab<span className="logo-green">it</span>
          </h2>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search Products..." />
          <button><FaSearch/></button>
        </div>

        <div className="account-info">
         <FaUser style={{objectFit:"cover",height:"1.5rem"}}/> <span> Account <br />LOGIN </span>
         <FaHeart style={{objectFit:"cover",height:"1.5rem"}}/> <span> Wishlist <br />3-ITEMS</span>
         <FaShoppingBag style={{objectFit:"cover",height:"1.5rem"}}/> <span> Cart <br /> 3-ITEMS</span>
        </div>
      </div>

      <nav className="bottom-nav">
        <button className="categories-btn"><FaList/> All Categories <FaChevronDown/></button>
        <ul>
          <li><Link to="/homeGrocery">H1 <FaChevronDown/></Link></li>
          <li><Link to="/homeFashion">P1 <FaChevronDown/></Link></li>
          <li><Link to="/homeFashion2">P2 <FaChevronDown/></Link></li>
          <li><Link to="/leftSidebar">P3 <FaChevronDown/></Link></li>
          <li><Link to="/plsidebar">P4 <FaChevronDown/></Link></li>
          <li><Link to="/checkout">P5 <FaChevronDown/></Link></li>
          <li><Link to="/wishlist">P6 <FaChevronDown/></Link></li>
          <li><Link to="/productFull">P7 <FaChevronDown/></Link></li>
          <li><Link to="/blog">P8 <FaChevronDown/></Link></li>
          <li><Link to="/blogDetails">P9 <FaChevronDown/></Link></li>
          <li><Link to="/aboutUs">P10 <FaChevronDown/></Link></li>
          <li><Link to="/cart">P11 <FaChevronDown/></Link></li>
          <li><Link to="/ORDERS">P12 <FaChevronDown/></Link></li>
          <li><Link to="/Compare">P13 <FaChevronDown/></Link></li>
          <li><Link to="/Faq">P14 <FaChevronDown/></Link></li>
          <li><Link to="/Login">P15 <FaChevronDown/></Link></li>
        </ul>
        <button className="location-btn"> <LocationEdit/> New York <FaChevronDown/></button>
      </nav>
        </header>

        
          <Routes>
            <Route path='/homeGrocery' element={<HomeGrocery/>} />
            <Route path='/homeFashion' element={<HomeFashion/>} />
            <Route path='/homeFashion2' element={<HomeFashion2/>} />
            <Route path='/leftSidebar' element={<LeftSidebar/>} />
            <Route path='/plsidebar' element={<Plsidebar/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
            <Route path='/productFull' element={<ProductFull/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/blogDetails' element={<BlogDetails/>} />
            <Route path='/aboutUs' element={<About/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/ORDERS' element={<Orders/>} />
            <Route path='/Compare' element={<Compare/>} />
            <Route path='/Faq' element={<Faq/>} />
            <Route path='/Login' element={<Login/>} />
          </Routes>


         <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <h2 className="footer-logo">
            <span className="green"><FaShoppingBag/> Grab</span>it
          </h2>
          <p className="footer-desc">
            Grabit is the biggest market of grocery products. Get your daily needs from our store.
          </p>
          <div className="app-buttons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
          </div>
        </div>

        <div className="footer-section">
          <h3>Category</h3> <hr style={{color:"#f9f9fb"}} />
          <ul> 
            <li>Dried Fruit</li>
            <li>Cookies</li>
            <li>Foods</li>
            <li>Fresh Fruit</li>
            <li>Tuber Root</li>
            <li>Vegetables</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3> <hr style={{color:"#f9f9fb"}} />
          <ul>
            <li>About us</li>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms & conditions</li>
            <li>Secure payment</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Account</h3> <hr style={{color:"#f9f9fb"}} />
          <ul>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>Return Policy</li>
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Payments</li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3>Contact</h3> <hr style={{color:"#f9f9fb"}} />
          <ul>
            <li><FaMapMarkerAlt className="icon" /> 2548 Broaddus Maple Court, Madisonville KY 4783, USA.</li>
            <li><FaWhatsapp className="icon" /> +00 9876543210</li>
            <li><FaEnvelope className="icon" /> example@email.com</li>
          </ul>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © <span className="green">Grabit</span> all rights reserved. Powered by Grabit.
        </p>
        <div className="payment-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          <img src={Skrill} alt="Skrill" style={{height:"35px",marginLeft:"10px"}} />
          <img src={maestro} alt="Maestro" style={{height:"35px",marginLeft:"10px"}} />
          <img src={visa} alt="Visa Electron" style={{height:"35px",marginLeft:"10px"}} />
        </div>
      </div>
    </footer>          



      </div>
    </div>
  )
}

export default App;
