import React from 'react'
import { FaApple, FaBreadSlice, FaCarrot, FaChevronRight, FaGlassWhiskey, FaStar, FaPepperHot, FaSpinner, FaShip, FaTruckMoving, FaHandHoldingMedical, FaCloudflare, FaCommentDollar, FaCloud, FaExclamationCircle, FaCircleNotch, FaChevronLeft, FaCommentMedical } from 'react-icons/fa';


import background from "../assets/background1.jpg";
import apple from "../assets/iconapple.png";
import bread from "../assets/iconbread.png";
import veg from "../assets/iconveg.png";
import dairy from "../assets/icondairy.png";
import snack from "../assets/iconsnacks.png";
import juice from "../assets/iconjuice.png";
import contain from "../assets/Container2.jpg";
import leftback from "../assets/leftback.jpg";
import rightback from "../assets/rightback.jpg";
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import category6 from "../assets/category6.jpg";
import category8 from "../assets/category8.jpg";
import category9 from "../assets/category9.jpg";
import category10 from "../assets/category10.jpg";
import latest1 from "../assets/latest1.jpg";
import latest2 from "../assets/latest2.jpg";
import latest3 from "../assets/latest3.jpg";
import latest4 from "../assets/latest4.jpg";
import latest5 from "../assets/latest5.jpg";
import topmost from "../assets/topmost.jpg";
import trend1 from "../assets/trend1.png";
import trend2 from "../assets/trend2.jpg";
import trend3 from "../assets/trend3.png";
import toprated1 from "../assets/toprated1.jpg";
import toprated2 from "../assets/toprated2.jpg";
import toprated3 from "../assets/toprated3.jpg";
import topsell1 from "../assets/topsell1.jpg";
import topsell2 from "../assets/topsell2.jpg";
import topsell3 from "../assets/topsell3.jpg";
import "../App.css";
import { CircleDivideIcon, DollarSignIcon, Fan, PersonStandingIcon } from 'lucide-react';

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
     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 my-20">
  {products.map((product) => (
    <div
      key={product.id}
      className="border rounded-xl bg-white shadow-sm hover:scale-105 transition"
    >
      <div className="relative bg-gray-50 h-56 flex items-center justify-center p-4">
        {product.tag && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.tag}
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain"
        />
      </div>

      <div className="bg-gray-50 p-4">
        <p className="text-xs text-gray-400">{product.category}</p>
        <h3 className="font-semibold text-sm text-gray-700">{product.title}</h3>

        {/* Rating */}
        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={12}
              className={i < product.rating ? "text-orange-400" : "text-gray-400"}
            />
          ))}
        </div>

        {/* Price */}
        <div className="flex justify-between items-center mt-2 text-sm">
          <div className="flex gap-2">
            <span className="font-bold">{product.newPrice}</span>
            <span className="line-through text-gray-400">
              {product.oldPrice}
            </span>
          </div>

          {product.quantity && (
            <span className="text-gray-400">{product.quantity}</span>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
  );
};


const prod = [
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
    title: "Natural Hub Cherry Karanda",
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
    title: "Natural Hub Cherry Karanda",
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
]


const ProductGrid2 = () => {
  return (
      <div className="product-grid">
      {prod.map((product) => (
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
                <span className="quantity">{product.quantity}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const trending = [
  { id: 1, name: "Healthy Nutmix, 200g Pack", category: "Driedfruit", price: "$45.00", oldPrice: "$42.00", image: trend1 },
  { id: 2, name: "Organic Fresh Tomato", category: "Vegetables", price: "$30.00", oldPrice: "$25.00", image: trend2 },
  { id: 3, name: "Coffee With Chocolate Cream Mix", category: "Coffee", price: "$65.00", oldPrice: "$62.00", image: trend3 },
];

const topRated = [
  { id: 1, name: "Ginger - Organic", category: "Vegetables", price: "$65.00", oldPrice: "$62.00", image: toprated1 },
  { id: 2, name: "Dates Value Pouch", category: "Driedfruit", price: "$78.00", oldPrice: "$56.00", image: toprated2 },
  { id: 3, name: "Blue Berry", category: "Fruits", price: "$30.00", oldPrice: "$25.00", image: toprated3 },
];

const topSelling = [
  { id: 1, name: "Lemon - Seedless", category: "Vegetables", price: "$45.00", oldPrice: "$42.00", image: topsell1 },
  { id: 2, name: "Mango - Kesar", category: "Fruits", price: "$65.00", oldPrice: "$62.00", image: topsell2 },
  { id: 3, name: "Mixed Nuts & Almonds Dry Fruits", category: "Driedfruit", price: "$11.00", oldPrice: "$10.00", image: topsell3 },
];

const ProductList = ({ title, highlight, items }) => (
  <div className="product-column">
    <div className="product-header">
      <h3>
        {title} <span>{highlight}</span>
      </h3>
      <div className="nav-icons">
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
    </div>
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
);

const TopProducts = () => {
  return (
    <div className="top-products">
      <div className="promo-section">
        <img src={topmost}  />
        <div className="promo-text">
          <h2>
            Our Top Most Products <br /> Check It Now
          </h2>
          <button>Shop Now</button>
        </div>
      </div>

      <ProductList title="Trending" highlight="Items" items={trending} />
      <ProductList title="Top" highlight="Rated" items={topRated} />
      <ProductList title="Top" highlight="Selling" items={topSelling} />
    </div>
  );
};

  const categoryIcons = [
  { title: "Fruits", items: "320 Items", bgColor: "#FFF6EC", icon: apple, discount: "30%" },
  { title: "Bakery", items: "65 Items", bgColor: "#E2FDE2", icon: bread },
  { title: "Vegetables", items: "548 Items", bgColor: "#FFEAE9", icon: veg, discount: "15%" },
  { title: "Dairy & Milk", items: "48 Items", bgColor: "#FDE1F5", icon: dairy, discount: "10%" },
  { title: "Snack & Spice", items: "59 Items", bgColor: "#ECF0FF", icon: snack },
  { title: "Juice & Drinks", items: "845 Items", bgColor: "rgba(237, 237, 164, 1)", icon: juice },
];




function HomeGrocery () {
  return (
    <div className='main-body'>
      <div className='section' style={{padding:"2rem 4rem"}}>

        <div className="relative rounded-lg overflow-hidden">
  <img
    src={background}
    className="w-full h-[300px] md:h-[400px] object-cover"
    alt=""
  />

  <div className="absolute inset-0 flex items-center">
    <div className="px-6 md:px-16 max-w-md">
      <p className="text-green-500 font-semibold">
        Starting at $ <b>29.99</b>
      </p>
      <h1 className="text-2xl md:text-4xl font-bold my-2">
        Explore fresh & juicy fruits
      </h1>

      <button className="mt-4 bg-slate-700 text-white px-4 py-2 rounded flex items-center gap-1">
        Shop Now <FaChevronRight />
      </button>
    </div>
  </div>
</div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
  {categoryIcons.map((cat) => (
    <div
      key={cat.title}
      className="relative rounded-xl p-4 text-center"
      style={{ backgroundColor: cat.bgColor }}
    >
      <img
        src={cat.icon}
        alt={cat.title}
        className="mx-auto w-14 h-14 object-contain mb-2"
      />

      <h4 className="text-green-600 font-semibold">{cat.title}</h4>
      <p className="text-gray-700 text-sm">{cat.items}</p>

      {cat.discount && (
        <span className="absolute top-2 right-2 bg-blue-700 text-white text-xs px-2 py-0.5 rounded-md">
          {cat.discount}
        </span>
      )}
    </div>
  ))}
</div>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between my-20 w-full">
    <div>
    <h2 className="text-xl md:text-2xl font-semibold">
      Day Of The <span className="text-green-600">Deal</span>
    </h2>
    <p className="text-gray-500 mt-1 text-sm md:text-base">
      Don't wait. The time will never be just right.
    </p>
  </div>

  <div className="bg-gray-100 px-4 py-2 rounded-md text-sm md:text-base font-medium">
    <b>25</b> Days <b>23 : 59 : 54</b>
  </div>

</div>

        <ProductGrid products={products} />

       <div
          style={{
          position: "relative",
          width: "100%",
          height: "16rem",
          overflow: "hidden",
          borderRadius: "8px",
          }}>
        <img src={contain} alt="banner"
        style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        borderRadius: "8px",
        }}/>

       <div
        style={{
        width:"20rem",
        position: "absolute",
        top: "50%",
        right: "5%",
        transform: "translateY(-50%)",
        textAlign: "right",
        }}>
       <h1>Fresh Fruits Healthy Products</h1>
       <p>
       <span style={{ color: "#45a388", fontWeight: "bold" }}>30% off sale</span>{" "}
       Hurry up!!!
       </p>
       <button
        style={{
        background: "#45a388",
        padding: "10px 15px",
        marginTop: "1rem",
        color: "#eee",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
          }} > Shop Now</button>
        </div>
       </div>

        <div style={{display:"flex",gap:"20rem",margin:"5rem 0rem",width:"100%",alignItems:"center"}}>
          <span>
            <h2>New <span className='green'>Arrivals</span></h2>
            <p>Shop online for new arrivals and get free shipping!</p>
          </span>
          <span style={{display:"flex"}}>
            <h4 className='green'>All</h4>
            <h4 style={{marginLeft:"10px"}}>Snack & Spices</h4>
            <h4 style={{marginLeft:"10px"}}>Fruits</h4>
            <h4 style={{marginLeft:"10px"}}>Vegetables</h4>
          </span>
        </div>

          <ProductGrid2/>

        <div style={{width: "100%",display:"flex",justifyContent: "center",alignItems: "center",gap: "2rem",flexWrap: "wrap", margin: "4rem 0",}}>

     <div style={{position: "relative",width: "48%",minWidth: "320px",height: "16rem",borderRadius:"10px",overflow:"hidden",}} >
    <img src={leftback} alt="Tasty Snacks"
        style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block" }} />

    <div style={{position: "absolute",top: "50%",right: "5%",width:"8",transform: "translateY(-50%)",}} >
      <h2 style={{ marginBottom: "0.5rem" }}>Tasty Snack <br /> & Fastfood</h2>
      <p style={{ marginBottom: "1rem" }}>The Flavor Of <br /> Something Special</p>
      <button
          style={{
          background: "#45a388",
          padding: "10px 15px",
          color: "#eee",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}>
        Shop Now
      </button>
    </div>
  </div>
  
  <div
    style={{ position: "relative",width: "48%",minWidth: "320px",height: "16rem",borderRadius:"10px",overflow:"hidden", }}>
    <img src={rightback} alt="Fresh Fruits & Veggies"
        style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }} />

    <div style={{ position:"absolute",top:"50%",right: "5%",width:"8",transform:"translateY(-50%)",}}>
      <h2 style={{ marginBottom: "0.5rem" }}>Fresh Fruits <br /> & Veggies</h2>
      <p style={{ marginBottom: "1rem" }}>A Healthy Meal <br /> For Everyone</p>
      <button style={{
          background: "#45a388",
          padding: "10px 15px",
          color: "#eee",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer", }}> Shop Now </button>
      </div>
    </div>
  </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16 text-center">
  {[
    { icon: <FaTruckMoving />, title: "Free Shipping", desc: "Orders over $200" },
    { icon: <FaHandHoldingMedical />, title: "24X7 Support", desc: "Anytime help" },
    { icon: <CircleDivideIcon />, title: "30 Days Return", desc: "Easy returns" },
    { icon: <DollarSignIcon />, title: "Secure Payment", desc: "100% safe" },
  ].map((item, i) => (
    <div
      key={i}
      className="border rounded-lg p-6 shadow-sm hover:shadow-md justify-center transition"
    >
      <div className="text-green-500 items-center text-3xl mb-2">{item.icon}</div>
      <h4 className="font-semibold">{item.title}</h4>
      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
    </div>
  ))}
</div>

        <TopProducts/>

        <div style={{display:"flex",gap:"35rem",margin:"3rem 0rem",width:"100%",alignItems:"center",objectFit:"cover"}}>
          <span>
            <h2>Latest <span className='green'>Blog</span></h2>
            <p>We tackle interesting topics every day in 2023.</p>
          </span>
          <span>All Blogs<FaChevronRight style={{cursor:"pointer"}}/>
          <FaChevronRight style={{cursor:"pointer"}}/></span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
  {[latest1, latest2, latest3, latest4, latest5].map((img, i) => (
    <div key={i}>
      <img src={img} className="rounded-md w-full" />
      <p className="text-xs text-gray-500 mt-2">
        June 2023 · Organic
      </p>
      <h4 className="text-sm font-semibold mt-1">
        Marketing Guide: 5 Steps to Success
      </h4>
    </div>
  ))}
</div>
          

      </div>
    </div>
  )
}

export default HomeGrocery;
