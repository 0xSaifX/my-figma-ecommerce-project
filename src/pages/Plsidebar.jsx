import React, { useState } from "react";
import category9 from "../assets/category9.jpg";
import category2 from "../assets/category2.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import "./Plsidebar.css";
import { FaStar, FaChevronLeft, FaChevronRight, FaHamburger, FaApple, FaBell, FaIceCream, FaUserAlt, FaDelicious, FaCookie, FaHeart, FaEye } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import category1 from "../assets/category1.png";
import category3 from "../assets/category3.png";

function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const productImages = [
    category9,
    category2,
    category4,
    category5,
];

  const relatedProducts = [
    { title: "Honey Spiced Nuts",img: category2,  price: "$32", oldPrice: "$56", rating: 3 },
    { title: "Dates Value Pouch",img: category4,  price: "$56", oldPrice: "$63", rating: 5 },
    { title: "Grapes Mix Snack",img: category5,  price: "$28", oldPrice: "$35", rating: 2 },
  ];
   const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  
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

  return (
    <main style={{margin:"2rem 6rem"}}>
        <div className="product-page">
      {/* Sidebar */}
       <div className="sidebar">

            <div className="filter-card" style={{width:"260px",background:"#eee"}}>
              <div className="filter-header">
                <h3>Category</h3>
                <ChevronDown className="icon" />
              </div> <hr />
              <div className="filter-content">
                {[
                  {icon: <FaStar/>, name: "Dried Fruit ",  },
                  {icon: <FaCookie/>, name: "Cookies " },
                  {icon: <FaHamburger/>, name: "Foods " },
                  {icon: <FaApple/>, name: "Fresh Fruit " },
                  {icon: <FaBell/>, name: "Tuber Root" },
                  {icon: <FaApple/>, name: "Vegetables" },
                  {icon: <FaIceCream/>, name: "Snacks" },
                  {icon: <FaUserAlt/>, name: "Unisex" },
                  {icon: <FaDelicious/>, name: "Jewellery" },
                ].map((item) => (
                  <div key={item.name} className="filter-item">
                    <div className="filter-item-left">
                      <div className="checkbox" />
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  </div>
                ))}
                <div className="filter-header" style={{paddingTop:"3rem"}}>
                <h3>Weight</h3>
                <ChevronDown className="icon" />
              </div> <hr />
                {[{ name: "2kg" },
                 { name: "10kg" },
                 { name: "1kg" },
                 { name: "2pack" },
                 { name: "500g" },
                 { name: "2pcs" },
                 { name: "100g" },
                 { name: "3pcs" }
                ].map((item) => (
                  <div key={item.name} className="filter-item">
                    <div className="filter-item-left">
                      <div className="checkbox" />
                      <span>{item.name}</span>
                    </div>
                  </div>
                ))}

                <div className="filter-section" style={{color:"#27ae60"}}>
                 <div className="filter-header" style={{paddingTop:"3rem"}}>
                <h3>Color</h3>
                <ChevronDown className="icon" />
              </div> <hr />
            <div className="color-palette" style={{display:"grid",gap:"0.5rem",marginTop:"1rem",
              gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",objectFit:"cover"}}>
              <span className="color" style={{ background: "#ff6b6b",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "#feca57",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "#48dbfb",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "#1dd1a1",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "#5f27cd",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "#3f2",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "#f7f",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "#3ea5",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "#ffe2ad",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "#333",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "#5ea",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "rgba(9, 33, 33, 0.13)",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
              <span className="color" style={{ background: "purple",width:"20px",height:"20px",borderRadius:"50%",display:"inline-block" }}></span>
            </div>
           </div>

            <div style={{textAlign:"center"}}>
              <div className="filter-header" style={{marginTop:"3rem",marginBottom:"2rem"}}>
                <h3>Price</h3>
                <ChevronDown className="icon" />
              </div>               
              <h5>Item:{count} </h5>
             <div style={{display:"flex",justifyContent:"center",gap:"1rem"}}>
               <div style={{textAlign:"center",marginTop:"10px",padding:"10px"}}>
                From <br /> <button onClick={increase} style={{padding:"5px 15px",background:"#fff",border:"none",borderRadius:"3px"}} >0</button> 
              </div> 
              <div style={{textAlign:"center",marginTop:"10px",padding:"10px"}}> 
                To <br /> <button onClick={decrease} style={{padding:"5px 15px",background:"#fff",border:"none",borderRadius:"3px"}} >250</button> 
              </div>
             </div>
            </div>

            <div className="filter-header" style={{marginTop:"3rem",marginBottom:"2rem"}}>
                <h3>Tags</h3>
                <ChevronDown className="icon" />
              </div>
              <div className="filter-content">
                <div className="tags" style={{marginBottom:"2rem"}}>
                  {["Fruits", "Cookies", "Foods", "Tuber", "Vegetables", "Snacks", "Clothes", "Jewellery"].map((tag) => (
                    <button key={tag} className="tag-btn" style={{background:"#459a88"}}>{tag}</button>
                  ))}
                </div>
                <button style={{background:"#45a388",
                    border:"none",padding:"10px 20px",
                    borderRadius:"5px",float:"right",
                    color:"white"}}>Filter</button>
              </div>

          </div>

        </div>
     </div>

      {/* Main content */}
      <main className="main-content">
        <div className="top-section">
          <div className="image-section">
            <img
              src={productImages[selectedImage]}
              alt="Product"
              className="main-image"
            />
            <div className="thumbnail-row">
              <FaChevronLeft className="nav-icon" />
              {productImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  className={`thumb ${selectedImage === index ? "active" : ""}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
              <FaChevronRight className="nav-icon" />
            </div>
          </div>

          <div className="info-section">
            <h2>
              Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips &
              Snacks.
            </h2>
            <div className="rating" style={{margin:"1rem 0rem 2rem"}}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < 4 ? "filled" : ""}  />
              ))}
              <span style={{marginLeft:"0.9rem"}}>| 982 Ratings</span>
            </div>
            <div className="price" style={{width:"100%"}}>
              <span className="new">$664.00</span>
              <span className="discount">-78%
              </span>
                <p className="sku" style={{paddingTop:"14px",marginLeft:"40px"}}><b>SKU#: WH12</b> </p>
            </div>
              <div style={{paddingTop:"1rem",paddingBottom:"1rem",display:"flex"}}>M.R.P.: <span style={{textDecoration:"line-through",color:"#999"}}> 
                $2,999.00
                </span>
                <p style={{color:"#45a388",marginLeft:"75px",paddingBottom:"1rem"}}>| IN STOCK </p>
              </div>
            <div>
            </div>
            
            <ul className="details">
                <p>Lorem ipsum dolor sit, voluptas quae, qui provident natus deserunt illo minus sequi,
                 impedit fuga lab cupiditate amet dolorem nihil odit.</p>
              <li style={{marginTop:"1rem"}}>Closure: Hook & Loop</li>
              <li style={{marginTop:"0.5rem"}}>Sole: Polyvinyl Chloride</li>
              <li style={{marginTop:"0.5rem"}}>Width: Medium</li>
              <li style={{marginTop:"0.5rem"}}>Outer Material: A-Grade Standard Quality</li>
            </ul>                
            <h3 style={{paddingTop:"1rem"}}>Weight</h3>
            <div className="tabs">
          <button className="active">250g</button>
          <button>500g</button>
          <button>1kg</button>
          <button>2kg</button>
        </div>
            <div className="buy-section">
              <div className="qty-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="add-btn">Add to Cart</button>
              <button style={{padding:"7px 13px",background:"whitesmoke",border:"2px #555",borderRadius:"5px"}} ><FaHeart/></button>
              <button style={{padding:"7px 13px",background:"whitesmoke",border:"2px #555",borderRadius:"5px"}}><FaEye/></button>
            </div>
          </div>
        </div>

         <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"2rem",margin:"2rem 0rem"}}>
      {relatedProducts.map((item) => (
      <div key={item.id} className="product-row" style={{background:"#eee"}}>
        <img src={item.img} alt={item.title} />
        <div className="product-text" style={{display:"block"}}>
          <h4 style={{fontWeight:"10px"}}>{item.title}</h4>
          <p className="category">{item.category}</p>
           <div className="stars" style={{color:"red"}}>
            {[...Array(5)].map((_, i) => (
              <FaStar 
              key={i} 
              className={i < item.rating ? "star filled" : ""} />
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

        <div className="tabs">
          <button className="active">Details</button>
          <button>Specifications</button>
          <button>Vendor</button>
          <button>Reviews</button>
        </div>
        <div className="tab-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tincidunt, sapien nec vulp amet consectetur adipisicing elit. Inventore quasi et cupiditate,
            adipisci laboriosam quos atque ea, ut odio necessitatibus veniam libero cum dicta architecto hic.
            Quidem iste fugiat quaerat!
          </p>
          <ul style={{marginTop:"1rem",marginBottom:"1rem"}}>
            <li>Any product types You want - Simple, Configurable</li>
            <li>Downloadable/Digital Products, Virtual Products </li>
            <li>Inventory Management with Backordered items </li>
            <li>Flatlock seams throughout. </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit a at ad magnam earum rerum accusantium, 
            ipsum suscipit praesentium iste eos autem illum deserunt optio, nulla ut nesciunt sit?
          </p>
          <p>
            There are many variations of passages of lorem ipsum available, but majority have suffered alteration in some forms, 
            by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage
          </p>
        </div>

      </main>




    </div>
    <section>
        <div style={{textAlign:"center",justifyContent:"center",marginTop:"5rem"}}>
            <h2 style={{margin:"1rem"}}>Related <span className="green">Products</span> </h2>
            <p>Browse The Collection of Top Products</p>
        </div>
        <ProductGrid products={products} />
    </section>

    </main>
  );
}

export default ProductDetail;
