import React from 'react'
import back1 from "../assets/fashion2back.jpg";
import back2 from "../assets/fashion2back2.jpg";
import belt from "../assets/belt.jpg";
import perfume from "../assets/perfume.jpg";
import earing from "../assets/earings.jpg";
import shoe from "../assets/shoe.jpg";
import shampoo from "../assets/shampoo.jpg";
import lipstick from "../assets/lipstick.jpg";
import wallet from "../assets/wallet.jpg";
import princess from "../assets/princess.jpg";
import menshirt from "../assets/menshirt.jpg";
import shirt from "../assets/shirt.jpg";
import menshirt2 from "../assets/menshirt2.jpg";
import menshirt3 from "../assets/menshirt3.jpg";
import menjacket from "../assets/menjacket.jpg";
import cotton from "../assets/cottoncloth.jpg";
import stylish from "../assets/stylishwomen.jpg";
import cloth from "../assets/clothes.png";
import watch from "../assets/wathches.png";
import dress from "../assets/dresses.png";
import glass from "../assets/glasses.png";
import hats from "../assets/hats.png";
import short from "../assets/shorts.png";
import womens from "../assets/womencol.jpg";
import kids from "../assets/kidscol.jpg";
import men from "../assets/mencol.jpg";

import { FaChevronRight, FaHandHoldingMedical, FaStar, FaTruckMoving } from 'react-icons/fa';
import { ChevronLeft, ChevronRight, CircleDivideIcon, DollarSignIcon, Star } from 'lucide-react';
import last1 from "../assets/last1.jpg";
import last2 from "../assets/last2.jpg";
import last3 from "../assets/last3.jpg";
import last4 from "../assets/last4.jpg";
import last5 from "../assets/last5.jpg";








function HomeFashion2 () {

const dayOfDealProducts = [
  { image: menshirt, category: "Fashion", title: "Mixed Nuts Berries Pack", price: "$56.00", originalPrice: "$45.00", badge: "sale",rating: 4 },
  { image: princess, category: "Women's Wear", title: "Princess Look fashion Dress", price: "$65.00", originalPrice: "$58.00", badge: "sale",rating: 3 },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/c9a427cc1be0ea377b13f006b63c79fa1c1c58db?width=548", category: "Sports", title: "Women's Sport Shoes", price: "$78.00", originalPrice: "$85.00",rating: 2 },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/410cb337ad853a4405d2e8107329d3238e5c6b7e?width=548", category: "Body Lotion", title: "Body Lotion for Dry Skin", price: "$45.00", originalPrice: "$50.00", badge: "sale",rating: 3 },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/7b8898a8deccf0da2aa552d375ea501f6ab5564f?width=548", category: "Lipstick", title: "Liquid Matte Lipstick", price: "$49.00", originalPrice: "$65.00", badge: "new",rating: 2 },
];

const newArrivals = [
  { image: menshirt, category: "Men's Wear", title: "Men's Stylish Printed Shirt", price: "$59.00", originalPrice: "$87.00", rating: 2,badge: "new" },
  { image: princess, category: "Women's Wear", title: "Princess Look Dress", price: "$58.00", originalPrice: "$65.00", rating: 4, badge: "sale" },
  { image: menshirt3, category: "Men's Wear", title: "Men's Stylish Printed Shirt", price: "$59.00", originalPrice: "$87.00", rating: 4 },
  { image: stylish, category: "Women's Wear", title: "Stylish Printed Women's Dress", price: "$78.00", originalPrice: "$85.00", rating: 3,badge: "sale" },
  { image: menshirt2, title: "Men Stylish Printed Shirt", category: "Men's Wear", price: "$25.00", originalPrice: "$35.00",badge: "new", rating:"3" },
  { image: cotton, category: "Baby Wear", title: "Cotton Clothes Sets For Boys", price: "$25.00", originalPrice: "$30.00",rating:4, badge: "sale" },
  { image: menjacket, category: "Winter Wear", title: "Men's Jacket Fashion Coat", price: "$49.00", originalPrice: "$65.00", badge: "sale",rating:2 },
  { image: shirt, title: "Printed Round Neck Tshirt", category: "Unisex", price: "$32.00", originalPrice: "$45.00", rating: "4" },
  { image: menshirt, category: "men's wear", title: "Men's stylish printed shirt", price: "$87.00", originalPrice: "$59.00", rating: 2,badge:"new" },
  { image: princess, category: "Women's Wear", title: "Princess Look Dress", price: "$58.00", originalPrice: "$65.00", rating: 3, badge: "sale" },
];

const trending = [
  { id: 1, name: "Healthy Nutmix, 200g Pack", category: "Driedfruit", price: "$45.00", oldPrice: "$42.00", image: menshirt3, rating: 3 },
  { id: 2, name: "Organic Fresh Tomato", category: "Vegetables", price: "$30.00", oldPrice: "$25.00", image: cotton, rating: 4 },
  { id: 3, name: "Coffee With Chocolate Cream Mix", category: "Coffee", price: "$65.00", oldPrice: "$62.00", image: belt },
  { id: 3, name: "Coffee With Chocolate Cream Mix", category: "Coffee", price: "$65.00", oldPrice: "$62.00", image: perfume, rating: 3},
];

const topRated = [
  { id: 1, name: "Ginger - Organic", category: "Vegetables", price: "$65.00", oldPrice: "$62.00", image: earing },
  { id: 2, name: "Dates Value Pouch", category: "Driedfruit", price: "$78.00", oldPrice: "$56.00", image: menshirt2 },
  { id: 3, name: "Blue Berry", category: "Fruits", price: "$30.00", oldPrice: "$25.00", image: shoe },
  { id: 3, name: "Blue Berry", category: "Fruits", price: "$30.00", oldPrice: "$25.00", image: shampoo },
];

const topSelling = [
  { id: 1, name: "Lemon - Seedless", category: "Vegetables", price: "$45.00", oldPrice: "$42.00", image: lipstick },
  { id: 2, name: "Mango - Kesar", category: "Fruits", price: "$65.00", oldPrice: "$62.00", image: wallet },
  { id: 3, name: "Mixed Nuts & Almonds Dry Fruits", category: "Driedfruit", price: "$11.00", oldPrice: "$10.00", image: perfume },
  { id: 3, name: "Mixed Nuts & Almonds Dry Fruits", category: "Driedfruit", price: "$11.00", oldPrice: "$10.00", image: cotton },
]; 
const ProductList = ({ title, highlight, items }) => (
  <div className="product-column" style={{background:"#f7f7f7"}}>
    <div className="product-header">
      <h3>
        {title} <span>{highlight}</span>
      </h3>
      <div className="nav-icons">
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"2rem"}}>
      {items.map((item) => (
      <div key={item.id} className="product-row">
        <img src={item.image} alt={item.name} />
        <div className="product-text">
          <h4>{item.name}</h4>
          <p className="category">{item.category}</p>
          <div className="price">
            <span className="new">{item.price}</span>
            <span className="old">{item.oldPrice}</span>
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
);
const TrendProducts = () => {
  return (
    <div className="top-most" style={{background:"#f7f7f7",display:"flex",justifyContent:"space-between",gap:"1.5rem",flexWrap:"wrap"}}>
      <ProductList  title="Trending" highlight="Items" items={trending} />
      <ProductList  title="Top" highlight="Rated" items={topRated} />
      <ProductList  title="Top" highlight="Selling" items={topSelling} />
    </div>
  );
};

  return (
      <div>
        <div style={{background:"#f7f7f7"}}> 

              <div 
                style={{
                position: "relative",
                width: "100%",
                height: "70%",
                background:"transparent",
                overflow: "hidden",
                marginBottom:"3rem"
                }}>
                <img src={back1} 
                  style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  }}  />
                  <div className="back-text" 
                  style={{
                  width:"20rem",
                  position: "absolute",
                  top: "50%",
                  left: "5%",
                  transform: "translateY(-50%)",
                  textAlign: "left",
                  }} >
                  <p style={{lineHeight:"2.5",color:"#45a388"}}>Starting at $ 29.99</p>
                  <h1 style={{color:"#eee"}}>Explore glasses <br /> sale for Women's</h1>
                  <button 
                   style={{
                   background: "#5d5d5eff",
                   padding: "10px 15px",
                   marginTop: "1rem",
                   color: "#eee",
                   borderRadius: "5px",
                   border: "none",
                   cursor: "pointer",
                   }} >Shop Now {">>"}</button>
                </div>
              </div>

              <div style={{justifyContent:"center",alignItems:"center",display:"flex",
                 fontFamily:"poppins",gap:"1rem",width:"100%",background:"#fff",overflow:"hidden",objectFit:"cover", marginTop:"2rem",height:"18rem"}}>
          
                    <div style={{textAlign:"center",borderRadius:"5px",alignItems:"center", background:" whiteSmoke",border:"2px", width:"12rem",padding:"15px 15px"}}>
                     <div className='card-start'>
                      <button style={{float:"right",background:"#45a388",border:"none",padding:"4px"}}>30%</button>
                       <img src={cloth} />
                      <p><b>Clothes</b></p>
                      <p>320 items</p>
                     </div>
                    </div>
                    <div style={{textAlign:"center",borderRadius:"5px",alignItems:"center", backgroundColor:" whiteSmoke",border:"2px",width:"12rem",padding:"15px 15px",}}>
                      <div className='card-start'>
                        <p style={{padding:"10px"}}></p>
                        <img src={watch} />
                      <p><b>Watches</b></p>
                      <p>65 items</p>
                      </div>
                    </div>
                    <div style={{textAlign:"center",borderRadius:"5px",alignItems:"center", backgroundColor:" whiteSmoke",border:"2px",width:"12rem",padding:"15px 15px",}}>
                     <div className='card-start'> 
                      <button style={{float:"right",background:"#45a388",border:"none",padding:"4px"}}>15%</button>
                      <img src={dress} />
                      <p><b>Dresses</b></p>
                      <p>548 items</p>
                      </div>
                    </div>
                    <div style={{textAlign:"center",borderRadius:"5px",alignItems:"center", backgroundColor:" whiteSmoke",border:"2px",width:"12rem",padding:"15px 15px",}}>
                      <div className='card-start'>
                        <button style={{float:"right",background:"#45a388",border:"none",padding:"4px"}}>10%</button>
                        <img src={glass} />
                      <p><b>Glasses</b></p>
                      <p>48 items</p>
                      </div>
                    </div>
                    <div style={{textAlign:"center",borderRadius:"5px",alignItems:"center", backgroundColor:" whiteSmoke",border:"2px",width:"12rem",padding:"15px 15px",}}>
                     <div className='card-start'>
                      <p style={{padding:"10px"}}></p>
                       <img src={hats}  />
                      <p><b>Hat & Caps</b></p>
                      <p>59 items</p>
                     </div>
                    </div>
                    <div style={{textAlign:"center",borderRadius:"5px",alignItems:"center", backgroundColor:" whiteSmoke",border:"2px",width:"12rem",padding:"15px 15px",}}>
                      <div className='card-start'>
                        <p style={{padding:"10px"}}></p>
                       <img src={short}  />
                      <p><b>Juice & Drinks</b></p>
                      <p>845 items</p>
                      </div>
                    </div>
              </div>


           <section style={{margin:"2rem 8rem"}}>

             <div className="section">
              <div className="section-header" style={{display:"flex"}}>
               <div>
                 <h2 style={{color:"#4a4949"}}>
                  Day Of The <span style={{color:"#45a388"}}>Deal</span>
                </h2>
                <p>Don't wait. The time will never be just right.</p>
               </div>
                <div className="nav-btns">
                  <button>
                    <ChevronLeft />
                  </button>
                  <button>
                    <ChevronRight />
                  </button>
                </div>
              </div>

              <div className="product-grid" style={{background:"#f7f7f7",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr"}}>
                {dayOfDealProducts.map((product, idx) => (
                  <div key={idx} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                      {product.badge && (
                        <div className={`badge ${product.badge}`}>{product.badge}</div>
                      )}
                    </div>
                    <div className="product-info">
                      <p className="category">{product.category}</p>
                      <h5>{product.title}</h5>
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                          key={i} 
                          size={12} className={i < product.rating ? "star filled" : "star"} />
                        ))}
                      </div>
                      <div className="price">
                        <span className="current">{product.price}</span>
                        <span className="old">{product.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          <div 
              style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              marginBottom:"5rem"
              }}>
            <img src={back2} 
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                }}  />
              <div className="back-text" 
                style={{
                width:"20rem",
                position: "absolute",
                top: "50%",
                right: "5%",
                transform: "translateY(-50%)",
                textAlign: "right",
                }} >
              <p style={{lineHeight:"2.5",color:"#eee"}}>30% off sale</p>
                <h1 style={{color:"#eee"}}>Latest Exclusive <br />Summer Collection</h1>
                  <button 
                     style={{
                     background: "#45a388",
                     padding: "10px 15px",
                     marginTop: "1rem",
                     color: "#eee",
                     border: "none",
                     cursor: "pointer",
                     }} >Shop Now</button>
                  </div>
            </div>

            <div className="section">
              <div className="section-header">
                <h2>New <span>Arrivals</span></h2>
                  <div className="tabs">
                     <button className="active">All</button>
                     <button>Clothes</button>
                     <button>Footwear</button>
                     <button>Accessories</button>
                  </div>
                 </div>
               <div className="product-grid" style={{background:"#f7f7f7",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr"}}>
                  {newArrivals.map((product, idx) => (
                    <div key={idx} className="product-card">
                      <div className="product-image">
                        <img src={product.image} alt={product.title} />
                        {product.badge && <div className={`badge ${product.badge}`}>{product.badge}</div>}
                      </div>
                <div className="product-info">
                  <p className="category">{product.category}</p>
                    <h5>{product.title}</h5>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < product.rating ? " star filled" : "star"} />
                      ))}
                     </div>
                     <div className="price">
                        <span className="current">{product.price}</span>
                        <span className="old">{product.originalPrice}</span>
                      </div>
                     </div>
                    </div>
                    ))}
                </div>
              </div>


        <div style={{width:"100%",display:"flex", justifyContent:"spaceBetween",alignItems:"center",gap:"1rem"}}>
            <div 
              style={{
              position: "relative",
              overflow: "hidden",
              marginBottom:"2rem"
              }}>
            <img src={womens} 
                style={{
                objectFit: "cover",
                width:"100%",
                height:"100%",
                display: "block",
                }}  /> 
              <div className="back-text" 
                style={{
                width:"20rem",
                position: "absolute",
                top: "50%",
                right: "5%",
                transform: "translateY(-50%)",
                textAlign: "right",
                }} >
                  <button style={{borderRadius:"0px",border:"none",padding:"5px"}}>50% Off</button>
                <h1 style={{color:"#eee",marginTop:"1rem"}}>Women's <br />Collection</h1>
                  <button 
                     style={{
                     background: "#45a388",
                     padding: "10px 15px",
                     marginTop: "0.2rem",
                     color: "#eee",
                     border: "none",
                     cursor: "pointer",
                     }} >Shop Now</button>
                  </div>
            </div>

            <div 
              style={{
              position: "relative",
              overflow: "hidden",
              marginBottom:"2rem"
              }}>
            <img src={kids} 
                style={{
                objectFit: "cover",
                width:"100%",
                display: "block",
                }}  />
              <div className="back-text" 
                style={{
                width:"20rem",
                position: "absolute",
                top: "50%",
                right: "5%",
                transform: "translateY(-50%)",
                textAlign: "right",
                }} >
                  <button style={{borderRadius:"0px",border:"none",padding:"5px"}}>50% Off</button>
                <h1 style={{color:"#eee",marginTop:"1rem"}}>Kid's <br />Collection</h1>
                  <button 
                     style={{
                     background: "#45a388",
                     padding: "10px 15px",
                     marginTop: "0.2rem",
                     color: "#eee",
                     border: "none",
                     cursor: "pointer",
                     }} >Shop Now</button>
                  </div>
            </div>

            <div 
              style={{
              position: "relative",
              overflow: "hidden",
              marginBottom:"2rem"
              }}>
            <img src={men} 
                style={{
                objectFit: "cover",
                width:"100%",
                display: "block",
                }}  />
              <div className="back-text" 
                style={{
                width:"20rem",
                position: "absolute",
                top: "50%",
                right: "5%",
                transform: "translateY(-50%)",
                textAlign: "right",
                }} >
                  <button style={{borderRadius:"0px",border:"none",padding:"5px"}}>50% Off</button>
                <h1 style={{color:"#eee",marginTop:"1rem"}}>Men's <br />Collection</h1>
                  <button 
                     style={{
                     background: "#45a388",
                     padding: "10px 15px",
                     marginTop: "0.2rem",
                     color: "#eee",
                     border: "none",
                     cursor: "pointer",
                     }} >Shop Now</button>
                  </div>
             </div>
          </div>


          </section>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr ",width:"100%",alignItems:"center",background:"#fff", 
         padding:"2rem 8rem",alignItems:"center", justifyContent:"center",gap:"1rem",textAlign:"center"}}>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"5px",height:"10rem",alignContent:"center",justifyItems:"center",alignItems:"center",transition:"box-shadow 0.5s ease",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.1)",}}>
          <FaTruckMoving color='#45a388' style={{marginBottom:"0.5rem", width:"3rem",height:"2rem"}}  />
          <h4 style={{lineHeight:"1.5"}}>Free Shipping</h4>
           <p style={{fontSize:"0.75rem"}}>Free shipping on all US order or order above $200</p>
        </div>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"5px",height:"10rem",alignContent:"center",justifyItems:"center",alignItems:"center",transition:"box-shadow 0.5s ease",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.1)"}}>
          <FaHandHoldingMedical color='#45a388' style={{marginBottom:"0.5rem", width:"3rem",height:"2rem"}} /> 
          <h4 style={{lineHeight:"1.5"}}>24X7 Support</h4>
          <p style={{fontSize:"0.75rem"}}>Contact us 24 hours a day, 7 days a week </p>
        </div>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"5px",height:"10rem",alignContent:"center",justifyItems:"center",alignItems:"center",transition:"box-shadow 0.5s ease",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.1)"}}>
          <CircleDivideIcon color='#45a388' style={{marginBottom:"0.5rem", width:"3rem",height:"2rem"}} /> 
          <h4 style={{lineHeight:"1.5"}}>30 Days Return</h4>
          <p style={{fontSize:"0.75rem"}}>Simply return it within 30 days for an exchange </p>
        </div>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"5px",height:"10rem",alignContent:"center",justifyItems:"center",alignItems:"center",transition:"box-shadow 0.5s ease",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.1)"}}>
          <DollarSignIcon color='#45a388' style={{marginBottom:"0.5rem", width:"25px",height:"2rem"}} /> 
          <h4 style={{lineHeight:"1.5"}}>Payment Secure</h4>
          <p style={{fontSize:"0.75rem"}}>Contact us 24 hours a day, 7 days a week </p>
        </div>
      </div>


      <div style={{margin:"2rem 5rem",justifyContent:"center",alignItems:"center"}}>
        <TrendProducts/>
      </div>
      
      <div style={{background:"#fff",padding:"1rem 8rem",marginBottom:"5rem",margin:"3rem 0rem"}}>
             <div style={{display:"flex",gap:"29rem",margin:"2rem 0rem",width:"100%",alignItems:"center",objectFit:"cover"}}>
                <span>
                  <h2>Latest <span className='green'>Blog</span></h2>
                  <p>We tackle interesting topics every day in 2023.</p>
                </span>
                <span style={{cursor:"pointer"}}>All Blogs {">>"} </span>
              </div>
      
              <div className='last-sect' style={{alignContent:"center"}}>
                <div className='last-text'>
                  <img src={last1} alt="" />
                  <h4 style={{fontSize:"0.65rem"}}>Marketing Guide: 5 Steps to Success to way.</h4>
                  <p style={{cursor:"pointer"}}>Read More {">>"} </p>
                </div>
                <div className='last-text'>
                  <img src={last2} alt="" />
                  <h4 style={{fontSize:"0.65rem"}}>Best way to solve business deal issue in market.</h4>
                  <p style={{cursor:"pointer"}}>Read More {">>"} </p>
                </div>
                <div className='last-text'>
                  <img src={last3} alt="" />
                  <h4 style={{fontSize:"0.65rem"}}>31 grocery customer service stats know in 2019.</h4>
                  <p style={{cursor:"pointer"}}>Read More {">>"} </p>
                </div>
                <div className='last-text'>
                  <img src={last4} alt="" />
                  <h4 style={{fontSize:"0.65rem"}}>Business ideas to grow your business traffic.</h4>
                  <p style={{cursor:"pointer"}}>Read More {">>"} </p>
                </div>
                <div className='last-text'>
                  <img src={last5} alt="" />
                  <h4 style={{fontSize:"0.65rem"}}>Marketing Guide: 5 Steps to Success to way.</h4>
                  <p style={{cursor:"pointer"}}>Read More {">>"} </p>
                </div>
              </div>
      </div>

      <div style={{height:"10px", width:"100%",background:"#f7f7f7"}}>

      </div>

      </div>
    </div>
  )
}

export default HomeFashion2;
