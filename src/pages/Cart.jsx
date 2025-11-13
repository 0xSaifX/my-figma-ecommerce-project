import { ChevronDown, ShoppingBasket } from "lucide-react";
import React from "react";
import category6 from "../assets/category6.jpg";
import { FaStar } from "react-icons/fa";
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";

const wishitem = [
    {
      image:  "https://api.builder.io/api/v1/image/assets/TEMP/733159971dd19cfccd9a44667a1370375db7bda8?width=200" , 
      name: "Women's wallet Hand Purse",
      price: "$70",
      quantity: "- 1 +",
      total: "$70",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f78eaa31a2e0b32f9c103686701c5482810c8ea7?width=200", 
      name: "Rose Gold Earring",
      price: "$80",
      quantity: "- 1 +",
      total: "$80",
    },
    {
      image: category6, 
      name: "Apple",
      price: "$12",
      quantity: "- 1 +",
      total: "$12",
    },
  ];

  const products = [
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

const ProductGrid = () => {
  return (
      <div className="product-grid" style={{margin:"2rem 3rem"}}>
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

function Cart () {
    return(
      <div>
        <div className="product-page">
       <div className="sidebar" style={{margin:"3rem 4rem",display:"grid",gridTemplateColumns:"1fr 1fr"}}>


             <div className="filter-card" style={{width:"460px",background:"#eee"}}>

              <div className="filter-header">
                <h3>Summary</h3>
              </div>
              <div style={{display:"flex",lineHeight:"2.5rem"}}>
                <span style={{color:"#666"}}> <b>Estimate-Shipping</b> </span>
                <span style={{marginLeft:"14rem"}}> 
                    <b><ChevronDown style={{cursor:"pointer"}}/> </b> </span>
              </div> <hr color="#ddd" />
              <div style={{display:"grid",lineHeight:"2.5rem"}}>
                <span style={{fontSize:"13px"}}>Enter your Destination to get a shipping estimate </span>
                <span><b>Country *</b></span>
                <span style={{width:"100%"}}>
                  <input type="text" placeholder="Country"
                   style={{position:"relative",width:"99%",height:"3rem",padding:"10px",border:"#eee 3px solid"}} />
                  <ChevronDown style={{position:"absolute",right:"60%",marginTop:"0.7rem",cursor:"pointer"}}/>
                </span>
              </div>

              <div style={{display:"grid",lineHeight:"2.5rem",marginTop:"2rem"}}>
                <span><b>State/Province </b></span>
                <input type="text" id="state" 
                style={{position:"relative",width:"99%",height:"3rem",padding:"10px",border:"#eee 3px solid"}}/>
                <ChevronDown style={{position:"absolute",right:"60%",marginTop:"3.3rem",cursor:"pointer"}}/>
              </div> <hr color="#ddd" style={{marginTop:"1rem",marginBottom:"1rem"}}/>

              <div style={{display:"grid",lineHeight:"2.5rem",marginTop:"2rem"}}>
                <span><b>Zip/Postal Code </b></span>
                <input type="text" placeholder="Zip/Postal Code" 
                style={{position:"relative",width:"99%",height:"3rem",padding:"10px",
                border:"#ddd 1px solid",background:"#eee"}}/>
              </div>
              <div style={{display:"flex",marginTop:"2rem"}}>
                <span>Sub-Total</span>
                <span style={{marginLeft:"16.8rem"}}> <b>$162.00</b> </span>
              </div> 
              <div style={{display:"flex",marginTop:"1rem"}}>
                <span>Delivery Charges</span>
                <span style={{marginLeft:"13.7rem"}}> <b>$32.40</b> </span>
              </div> 
              <div style={{display:"flex",marginTop:"1rem",marginBottom:"2rem"}}>
                <span style={{marginRight:"3.5rem"}}>Coupon Discount</span>
                <span><a href="www.70+web.com"
                 style={{color:"#45a388"}}>Apply Discount</a>
                </span>
              </div> <hr color="#ddd" />
              <div style={{marginTop:"1rem"}}>
                <span><b>Total Amount</b></span>
                <span style={{marginLeft:"14.7rem"}}><b>$194.40</b></span>
              </div>
            </div>

        <div  style={{minWidth:"600px",maxHeight:"30rem"}}>

        <table className="wishlist-table" style={{maxWidth:"65%"}}>
          <thead>
            <tr style={{padding:"5px 15px"}}>
              <th>Img</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishitem.map((item) => (
              <tr key={item.id}>
                <td style={{padding:"5px 10px"}}>
                  <img src={item.image} alt={item.name} className="product-img" />
                </td>
                <td style={{margin:"5px 10px",fontSize:"10px"}}>{item.name}</td>
                <td style={{padding:"5px 10px"}}>{item.price}</td>
                <td style={{padding:"5px 10px"}}>{item.quantity}</td>
                <td style={{padding:"5px 10px"}}>
                  {item.total}
                </td>
                <td style={{padding:"5px 10px"}}>
                  <div className="action-buttons">
                    <button className="delete-btn"> <b>X</b> </button>
                  </div>
                </td>
              </tr>
            ))}
            <tr style={{height:"2rem"}}><hr style={{color:"#ddd",width:"100%"}} /></tr>
          </tbody>
        </table>
        <div style={{width:"100%",Top:"30rem"}}>
          <span><a href="www.grabit.com" style={{color:"#333"}}>Continue Shopping</a></span>
          <button style={{padding:"10px 15px",background:"#45a388",float:"right",borderRadius:"5px"}}>
            <a href="grabitstore.com" style={{color:"#fff"}}>Check Out</a></button>
      </div>

      </div>


       </div>
       
      </div>
      <div style={{textAlign:"center",justifyContent:"center",marginTop:"5rem"}}>
            <h2 style={{margin:"1rem"}}>Related <span className="green">Products</span> </h2>
            <p>Browse The Collection of Top Products</p>
        </div>
          <ProductGrid products={products} />
      </div>
      
    )
}export default Cart;