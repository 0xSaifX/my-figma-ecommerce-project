import { ChevronDown } from "lucide-react";
import React from "react";
import category6 from "../assets/category6.jpg";
import { FaStar } from "react-icons/fa";
import maestro from "../assets/maestro.svg";
import Skrill from "../assets/Skrill_logo.svg";
import visa from "../assets/visa_electron.svg";
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";


const trending = [
  { id: 1, name: "Women's Wallet Hand Purse",rating: 3, category: "Driedfruit", price: "$70.00", oldPrice: "$50.00", image: "https://api.builder.io/api/v1/image/assets/TEMP/733159971dd19cfccd9a44667a1370375db7bda8?width=200" },
  { id: 2, name: "Rose Gold Earrings",rating:4, category: "Vegetables", price: "$80.00", oldPrice: "$60.00", image: "https://api.builder.io/api/v1/image/assets/TEMP/f78eaa31a2e0b32f9c103686701c5482810c8ea7?width=200" },
  { id: 3, name: "Apple",rating:2, category: "Coffee", price: "$12.00", oldPrice: "$10.00", image: category6 },
];
const ProductList = ({ items }) => (
  <div className="product-column">
    
    {items.map((item) => (
      <div key={item.id} className="product-row">
        <img src={item.image} alt={item.name} />
        <div className="product-text">
          <h4>{item.name}</h4>
             <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < item.rating ? "star filled" : "star"} />
                 ))}
             </div>
          <div className="price">
            <span className="new">{item.price}</span>
            <span className="old">{item.oldPrice}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);
export const products = [
  {
    id: 1,
    tag: "SALE",
    image: category1,
    category: "Dried Fruits",
    title: "Mixed Nuts Berries Pack",
    rating: 4,
    newPrice: "$56.00",
    oldPrice: "$45.00",
  },
  {
    id: 2,
    tag: "SALE",
    image: category2,
    category: "Cookies",
    title: "Multi Grain Combo Cookies",
    rating: 4,
    newPrice: "$30.00",
    oldPrice: "$25.00",
    quantity: "10kg",
  },
  {
    id: 3,
    image: category3,
    category: "Foods",
    title: "Fresh Mango Juice Pack",
    rating: 3,
    newPrice: "$65.00",
    oldPrice: "$48.00",
  },
  {
    id: 4,
    tag: "SALE",
    image: category4,
    category: "Dried Fruits",
    title: "Dates Value Fresh Pouch",
    rating: 3,
    newPrice: "$85.00",
    oldPrice: "$78.00",
  },
  {
    id: 5,
    tag: "NEW",
    image: category5,
    category: "Foods",
    title: "Stick Fiber Masala Magic",
    rating: 3,
    newPrice: "$50.00",
    oldPrice: "$45.00",
    quantity: "2pack",
  },
];
export const ProductGrid = () => {
  return (
      <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            {product.tag && (
              <span className={`badge ${product.tagColor}`}>{product.tag}{product.tagnew} </span>
            )}
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-info">
            <p className="category">{product.category}</p>
            <h3 className="title">{product.title}</h3>

            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={12}
                  className={i < product.rating ? "star filled" : "star"}
                />
              ))}
            </div>

            <div className="price-section">
              <div className="price">
                <span className="new-price">{product.newPrice}</span>
                <span className="old-price">{product.oldPrice}</span>
              </div>
              {product.quantity && (
                <span className="quantity" style={{fontWeight:"100"}}>{product.quantity}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function Checkout () {
    return(
        <div>
            <div className="product-page" style={{margin:"2rem 4rem",gap:"2rem",justifyContent:"space-between"}}>

             <div className="sidebar">

            <div className="filter-card" style={{width:"480px",background:"#eee"}}>
              <div className="filter-header">
                <h3>Summary</h3>
              </div>
              <div style={{display:"flex",lineHeight:"2.5rem"}}>
                <span>Sub-Total</span>
                <span style={{marginLeft:"19rem"}}> <b>$162.00</b> </span>
              </div>
              <div style={{display:"flex",lineHeight:"2.5rem"}}>
                <span>Delivery Charges</span>
                <span style={{marginLeft:"15.8rem"}}> <b>$32.40</b> </span>
              </div>
              <div style={{display:"flex",lineHeight:"2.5rem"}}>
                <span>Coupon Discount</span>
                <span style={{marginLeft:"3rem"}}><a href="www.ecommerce.com">Apply Discount</a></span>
              </div> <hr style={{marginTop:"1rem",marginBottom:"1rem"}}/>
              <div style={{display:"flex"}}>
                <span><b>Total Amount</b></span>
                <span style={{marginLeft:"16.6rem"}}> <b>$194.40</b> </span>
              </div> 
              <div className="top=most">
                <ProductList  title="Trending" highlight="Items" items={trending} />
              </div>

            </div>

            <div className="filter-card" style={{width:"480px",background:"#eee"}}>
              <div className="filter-header" style={{display:"grid"}}>
                <h3><b>Delivery Method</b></h3>
                <p style={{fontSize:"12px",paddingTop:"0.2rem"}}>Please select the preferred shipping method to use on this order. </p>
              </div>
              <div style={{display:"flex",gap:"7rem"}}>
                <span>
                    <h4 style={{marginBottom:"0.5rem"}}>Free Shipping</h4>
                    <p><input type="radio"/>Rate - $0.00</p>
                </span>
                <span>
                    <h4 style={{marginBottom:"0.5rem"}}>Flat Rate</h4>
                    <p><input type="radio"/>Rate - $5.00</p>
                </span>
              </div>
                <div style={{margin:"1rem 0rem 1rem"}}>
                    <h4>Add Comments Above Your Order</h4>
                 <textarea type="text" name="text" placeholder="Comments" 
                 style={{height:"6rem",width:"100%",background:"#eee",
                 border:"#ddd 1px solid",borderRadius:"5px",padding:"5px"}} /> 
                </div>

              </div>

            <div className="filter-card" style={{width:"480px",background:"#eee"}}>
              <div>
                <h3><b>Payment Method</b></h3>
                <p style={{fontSize:"12px",paddingTop:"0.2rem"}}>Please select the preferred payment method to use on this order.</p>
              </div>
              <div style={{display:"flex",marginTop:"1rem"}}>
               <input type="radio" name="" id="" />
               <p style={{marginLeft:"5px"}}>Cash On Delivery</p>
              </div>
              <div style={{margin:"1rem 0rem 1rem"}}>
               <h4>Add Comments Above Your Order</h4>
                 <textarea type="text" name="text" placeholder="Comments" 
                 style={{height:"6rem",width:"100%",background:"#eee",
                 border:"#ddd 1px solid",borderRadius:"5px",padding:"5px"}} /> 
                </div>
                <div style={{marginTop:"1rem"}}>
                  <input type="checkbox" name="" id="" />
                <span style={{marginLeft:"10px"}}>i have read and agree to the <b>Terms & Conditions.</b></span>
                </div>
            </div>
            <div className="filter-card" style={{width:"480px",background:"#eee"}}>
                  <h3>Payment Method</h3>
                   <div className="payment-logos">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                   <img src={Skrill} alt="Skrill" style={{height:"35px",marginLeft:"10px"}} />
                   <img src={maestro} alt="Maestro" style={{height:"35px",marginLeft:"10px"}} />
                   <img src={visa} alt="Visa Electron" style={{height:"35px",marginLeft:"10px"}} />
                   </div>
             </div>
            </div>
            <main className="main-content" style={{width:"300px",marginLeft:"12rem"}}>
                <h3><b>New <br />Customer</b></h3>
                <h5 style={{marginTop:'1rem'}}>Checkout Options</h5>
                <div style={{display:"flex",gap:"1rem",marginTop:"1rem",marginBottom:"1rem"}}>
                <p><input type="radio" name="" id="" /> Guest Account </p>
                <p><input type="radio" name="" id="" /> Register Account </p>
                <p><input type="radio" name="" id="" /> Login Account </p>
                </div>
                <p style={{fontSize:"12px",lineHeight:"1.9"}}>By creating an account you will be able to shop faster, be up to date on an order's status,
                   and keep track of the orders you have previously made. </p>
                  <button className="filter-btn">Continue</button>
            </main>

            </div>

            <div style={{margin:"0rem 4rem"}}>
              <div style={{textAlign:"center",justifyContent:"center",marginTop:"5rem"}}>
               <h2 style={{margin:"1rem"}}>New <span className="green">Arrivals</span> </h2>
               <p>Browse The Collection of Top Products</p>
              </div>
               <ProductGrid products={products} />
            </div>

        </div>
    )
}

export default Checkout;