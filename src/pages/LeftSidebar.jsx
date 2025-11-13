import React, { useState } from 'react';
import apple from "../assets/iconapple.png";
import bread from "../assets/iconbread.png";
import veg from "../assets/iconveg.png";
import dairy from "../assets/icondairy.png";
import snack from "../assets/iconsnacks.png";
import juice from "../assets/iconjuice.png";
import { Apple, ChevronDown } from 'lucide-react';
import { FaApple, FaBell, FaCookie, FaDelicious, FaHamburger, FaIceCream, FaList, FaListAlt, FaSearch, FaStar, FaUserAlt } from 'react-icons/fa';
import category1 from "../assets/category1.png";
import category10 from "../assets/category10.jpg";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import category6 from "../assets/category6.jpg";
import category8 from "../assets/category8.jpg";
import category9 from "../assets/category9.jpg";


  const categoryIcons = [
  { title: "Fruits", items: "320 Items", bgColor: "#FFF6EC", icon: apple, discount: "30%" },
  { title: "Bakery", items: "65 Items", bgColor: "#E2FDE2", icon: bread },
  { title: "Vegetables", items: "548 Items", bgColor: "#FFEAE9", icon: veg, discount: "15%" },
  { title: "Dairy & Milk", items: "48 Items", bgColor: "#FDE1F5", icon: dairy, discount: "10%" },
  { title: "Snack & Spice", items: "59 Items", bgColor: "#ECF0FF", icon: snack },
  { title: "Juice & Drinks", items: "845 Items", bgColor: "rgba(237, 237, 164, 1)", icon: juice },
]; 
const newArrivals = [
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
    title: "Multi Grain Combo Cookies",
    rating: 3,
    newPrice: "$30.00",
    oldPrice: "$25.00",
    quantity: "10kg",
  },
  {
    id: 3,
    image: category3,
    category: "Foods",
    title: "Fresh Mango Juice Pack",
    rating: 2,
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
    rating: 2,
    newPrice: "$50.00",
    oldPrice: "$45.00",
    quantity: "2pack",
  },
  {
    id: 6,
    tag: "NEW",
    image: category6,
    category: "Fresh Fruit",
    title: "Natural Cherry Karanda",
    rating: 5,
    newPrice: "$65.00",
    oldPrice: "$49.00",
  },
  {
    id: 7,
    image: category3,
    category: "Foods",
    title: "Fresh Mango Juice Pack",
    rating: 4,
    newPrice: "$21.00",
    oldPrice: "$20.00",
  },
  {
    id: 8,
    image: category8,
    category: "Tuber Root",
    title: "Fresh Organic Ginger Pack",
    rating: 2,
    newPrice: "$3.00",
    oldPrice: "$2.00",
  },
  {
    id: 9,
    tag: "NEW",
    image: category9,
    category: "Foods",
    title: "Natural Cherry Karanda",
    rating: 4,
    newPrice: "$65.00",
    oldPrice: "$49.00",
  },
  {
    id: 10,
    image: category10,
    category: "Fresh Fruit",
    title: "Fresh Mango Juice Pack",
    rating: 3,
    newPrice: "$21.00",
    oldPrice: "$20.00",
  },
  {
    id: 11,
    image: category6,
    category: "Fresh Fruit",
    title: "Fresh Mango Juice Pack",
    rating: 3,
    newPrice: "$21.00",
    oldPrice: "$20.00",
  },
  {
    id: 12,
    image: category8,
    category: "Fresh Fruit",
    title: "Fresh Mango Juice Pack",
    rating: 3,
    newPrice: "$21.00",
    oldPrice: "$20.00",
  },
];



function LeftSidebar ()  {
    
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (

    <div>
      <div style={{margin:"2rem 4rem"}}>

        <div className="category-icons">
             <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr",gap:"1rem",marginTop:"4rem"}}>
               {categoryIcons.map((cat) => (
                <div key={cat.title} className="category-card" style={{ backgroundColor: cat.bgColor }}>
                  <div className="category-inner">
                    <img src={cat.icon} alt={cat.title} />
                    <h4>{cat.title}</h4>
                    <p>{cat.items}</p>
                    {cat.discount && <div className="discount-badge">{cat.discount}</div>}
                 </div>
              </div>
              ))}
             </div>
        </div>

        
        <div className='fashion-layout' style={{alignItems:"flex-start",gap:"0rem",marginTop:"4rem",display:"flex"}}>
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
                <div className="filter-header" style={{paddingTop:"1rem"}}>
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
                 <div className="filter-header" style={{paddingTop:"1rem"}}>
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
              <div className="filter-header" style={{marginTop:"2rem"}}>
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

            <div className="filter-header" style={{marginTop:"2rem"}}>
                <h3>Tags</h3>
                <ChevronDown className="icon" />
              </div>
              <div className="filter-content">
                <div className="tags">
                  {["Fruits", "Cookies", "Foods", "Tuber", "Vegetables", "Snacks", "Clothes", "Jewellery"].map((tag) => (
                    <button key={tag} className="tag-btn" style={{background:"#459a88"}}>{tag}</button>
                  ))}
                </div>
              </div>

          </div>

        </div>
     </div>
                  
        <div style={{}}>
          <div className="product-toolbar" style={{display:"flex",width:"97%", justifyContent:"center",alignItems:"center",marginBottom:"0rem"}}>
           <div className="search-box" style={{position:'relative',width:"80%",height:"29px",justifySelf:"center",marginRight:"0.5rem"}}>
          <span className="search-icon" style={{position:"absolute",top:"60%",left:"10px",
            fontSize:"1.5rem",color:"#45a388",transform:"translateY(-50%)"}}><FaListAlt/><FaList style={{padding:"5px"}}/> </span>
           <input
              type="text"
              className="search-input" style={{borderRadius:"3px",width:"90%",height:"3rem",border:"1px solid #ccc"}} />
              <FaSearch style={{cursor:"pointer"}}/>
           </div>

        <div className="sort-box" style={{alignItems:"center"}}>
         <select className="sort-select" style={{borderRadius:"6px",border:"1px solid #ccc",height:"1.7rem",cursor:"pointer"}}>
          <option value="default">Sort by</option>
         <option value="price-low">Price: Low to High</option>
         <option value="price-high">Price: High to Low</option>
         <option value="newest">Newest</option>
        </select>
       </div>
      </div>
           <div className="product-grid" style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem",flex:"1",marginTop:"0rem",width:"80%"}}>
            
                {newArrivals.map((product, idx) => (
                  <div key={idx} className="product-card" style={{width:"260px",height:"fit-content"}}>
                    <div style={{display:'flex',justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem"}}></div>
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                      {product.badge && <div className={`badge ${product.badge}`}>{product.badge}</div>}
                    </div>
                    <div className="product-info">
                      <p className="category">{product.category}</p>
                      <h5>{product.title}</h5>
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < product.rating ? "star filled" : "star"} />
                        ))}
                      </div>
                      <div className="price-section">
                     <div className="price">
                     <span className="new-price">{product.newPrice}</span>
                     <span className="old-price">{product.oldPrice}</span>
                     </div>
                      {product.quantity && (
                     <span className="quantity">{product.quantity}</span>
                       )}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pagination" style={{marginTop:"2rem",float:"right",justifyContent:"center",marginLeft:"42rem"}}>
                   <button style={{cursor:"pointer",borderRadius:"5px",border:"1px solid #ddd",padding:"4px 8px",color:"#fff", margin:"0 3px",background:"#8ad1bdff"}}>Prev</button>
                   <button style={{cursor:"pointer",borderRadius:"5px",border:"1px solid #ddd",padding:"4px 8px",color:"#fff", margin:"0 3px",background:"#45a388"}}>1</button>
                   <button style={{cursor:"pointer",borderRadius:"5px",border:"1px solid #ddd",padding:"4px 8px",color:"#333", margin:"0 3px"}}>2</button>
                   <button style={{cursor:"pointer",borderRadius:"5px",border:"1px solid #ddd",padding:"4px 8px",color:"#fff", margin:"0 3px",background:"#45a388"}}>Next</button>
                 </div>
                 
              </div>
        </div>
    </div>



      </div>
    </div>
  )
}

export default LeftSidebar;
