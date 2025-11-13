import React from "react";
import { FaStar } from "react-icons/fa";
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import category6 from "../assets/category6.jpg";
import "./Wishlist.css";
import { ShoppingBasket, ShoppingCart } from "lucide-react";


const wishitem = [
    {
      id: 1,
      image:  "https://api.builder.io/api/v1/image/assets/TEMP/733159971dd19cfccd9a44667a1370375db7bda8?width=200" , 
      name: "Women's wallet Hand Purse",
      date: "22/01/2025",
      price: "$70",
      status: "Available",
    },
    {
      id: 2,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f78eaa31a2e0b32f9c103686701c5482810c8ea7?width=200", 
      name: "Rose Gold Earring",
      date: "22/01/2025",
      price: "$80",
      status: "Out Of Stock",
    },
    {
      id: 3,
      image: category6, 
      name: "Apple",
      date: "22/01/2025",
      price: "$12",
      status: "Available",
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

function Wishlist () {
    return(
        <div>

     <div>
     <div className="wishlist-container">
      <div className="wishlist-header">
        <h1>
          Product <span className="highlight">Wishlist</span>
        </h1>
        <p>Your product wish is our first priority.</p>
      </div>

      <div className="wishlist-card">
        <div className="wishlist-title-row">
          <h2>WISHLIST</h2>
          <button className="shop-btn"
          onClick={() => {
            document.getElementById("my-product").scrollIntoView({behavior:"smooth"});
          }}>Shop Now</button>
        </div>

        <table className="wishlist-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishitem.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.image} alt={item.name} className="product-img" />
                </td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.price}</td>
                <td
                  className={
                    item.status === "Available"
                      ? "status available"
                      : "status out"
                  }
                >
                  {item.status}
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="add-btn"><ShoppingBasket/></button>
                    <button className="delete-btn"> <b>X</b> </button>
                  </div>
                </td>
              </tr>
            ))}
            <tr style={{height:"2rem"}}><hr style={{color:"#ddd",width:"100%"}} /></tr>
          </tbody>
        </table>
      </div>
    </div>
            </div>
            <div className="my-product" style={{margin:"0rem 4rem"}}>
              <div style={{textAlign:"center",justifyContent:"center",marginTop:"5rem"}}>
               <h2 style={{margin:"1rem"}}>New <span className="green">Arrivals</span> </h2>
               <p>Browse The Collection of Top Products</p>
              </div>
               <ProductGrid products={products} />
            </div>

        </div>
    )
}

export default Wishlist;