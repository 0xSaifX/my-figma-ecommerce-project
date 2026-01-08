import { useState } from "react";
import "./HomeFashion.css";
import fashion1 from "../assets/fashion1.jpg";
import fashion2 from "../assets/fashion2.jpg";
import { ChevronDown, ChevronLeft, ChevronRight, CircleDivideIcon, DollarSignIcon, Star } from "lucide-react";
import React from "react";
import shirt from "../assets/shirt.jpg";
import last1 from "../assets/last1.jpg";
import last2 from "../assets/last2.jpg";
import last3 from "../assets/last3.jpg";
import last4 from "../assets/last4.jpg";
import last5 from "../assets/last5.jpg";
import perfume from "../assets/perfume.jpg";
import belt from "../assets/belt.jpg";
import makeup from "../assets/makeup.jpg";
import watch from "../assets/watch.jpg";
import menshoes from "../assets/menshoes.jpg";
import toprated1 from "../assets/toprated1.jpg";
import toprated2 from "../assets/toprated2.jpg";
import toprated3 from "../assets/toprated3.jpg";
import topsell1 from "../assets/topsell1.jpg";
import topsell2 from "../assets/topsell2.jpg";
import topsell3 from "../assets/topsell3.jpg";
import trend1 from "../assets/trend1.png";
import trend2 from "../assets/trend2.jpg";
import trend3 from "../assets/trend3.png";
import { FaChevronRight, FaHandHoldingMedical, FaStar, FaTruckMoving } from "react-icons/fa";


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
const RatedProducts = () => {
  return (
    <div className="top-most">
      <ProductList  title="Trending" highlight="Items" items={trending} />
      <ProductList  title="Top" highlight="Rated" items={topRated} />
      <ProductList  title="Top" highlight="Selling" items={topSelling} />
    </div>
  );
};

function HomeFashion() {
  
    const handlePrev = (setter, Fashion) => {
      setter(Fashion === 0 ? 0 : Fashion - 1);
    };
  
    const handleNext = (setter, Fashion, length) => {
      setter(Fashion < length - 3 ? Fashion + 1 : Fashion);
    };
  const categoryIcons = [
  { title: "Clothes", items: "320 Items", bgColor: "#FFF6EC", icon: "https://api.builder.io/api/v1/image/assets/TEMP/30fd5a6db3f077d38aef59d99d39b711a1aaf3d4?width=100", discount: "30%" },
  { title: "watches", items: "65 Items", bgColor: "#E2FDE2", icon: "https://api.builder.io/api/v1/image/assets/TEMP/8af9e988851ca11027932b07a8be03f17ca96dd1?width=100" },
  { title: "Dresses", items: "548 Items", bgColor: "#FFEAE9", icon: "https://api.builder.io/api/v1/image/assets/TEMP/8aa09231cf0ca40b138a50581abb4dcd4c6e44e1?width=100", discount: "15%" },
  { title: "glasses", items: "48 Items", bgColor: "#FDE1F5", icon: "https://api.builder.io/api/v1/image/assets/TEMP/1d3342705bbdaf3567eb05a69941245c30dae0fa?width=100", discount: "10%" },
  { title: "hat & caps", items: "59 Items", bgColor: "#ECF0FF", icon: "https://api.builder.io/api/v1/image/assets/TEMP/b94c4036d8cdd627a9c68183143e4f6ebff49d9b?width=100" },
];
const newArrivals = [
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/f960537c2c30c95cda9d00e65ced3c87357b0f7f?width=548", category: "men's wear", title: "Men's stylish printed shirt", price: "$87.00", originalPrice: "$59.00", rating: 4 },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/f78eaa31a2e0b32f9c103686701c5482810c8ea7?width=548", category: "jewellery", title: "Rose Gold Earring", price: "$80.00", originalPrice: "$60.00", rating: 4, badge: "sale" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/7b8898a8deccf0da2aa552d375ea501f6ab5564f?width=548", category: "Lipstick", title: "Liquid Matte Lipstick", price: "$30.00", originalPrice: "$20.00", rating: 2 },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/0e147dea831c27a8746d616456303725dd946baa?width=548", category: "women's wear", title: "Stylish printed women's dress", price: "$85.00", originalPrice: "$78.00", rating: 4 },
  { image: shirt, title: "Printed Round Neck Tshirt", category: "Unisex", price: "$32.00", originalPrice: "$45.00",rating: 2 },
  { image: perfume, title: "Long lasting perfume", category: "Baby Wear", price: "$25.00", originalPrice: "$30.00",rating:3 },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/c9a427cc1be0ea377b13f006b63c79fa1c1c58db?width=548", category: "Body Lotion", title: "Women's Sport Shoes", price: "$500.00", originalPrice: "$600.00", badge: "new",rating:4 },
  { image: belt, title: "Men's Leather Belt", category: "Belt", price: "$65.00", originalPrice: "$62.00",rating: 3 },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/f960537c2c30c95cda9d00e65ced3c87357b0f7f?width=548", category: "men's wear", title: "Men's stylish printed shirt", price: "$87.00", originalPrice: "$59.00", rating: 4 },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/f78eaa31a2e0b32f9c103686701c5482810c8ea7?width=548", category: "jewellery", title: "Rose Gold Earring", price: "$80.00", originalPrice: "$60.00", rating: 4, badge: "sale" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/733159971dd19cfccd9a44667a1370375db7bda8?width=548", category: " Wallet ", title: "Women's Wallet Hand Purse", price: "$50.00", originalPrice: "$70.00",rating:3 },
  { image: makeup, category: "Makeup Kit", title: "Compact Makeup Kit", price: "$78.00", originalPrice: "$85.00", rating: 2 },
];
;
const dayOfDealProducts = [
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/c9a427cc1be0ea377b13f006b63c79fa1c1c58db?width=548", category: "Body Lotion", title: "Women's Casual Shoes", price: "$500.00", originalPrice: "$600.00", badge: "new",rating: 3 },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/733159971dd19cfccd9a44667a1370375db7bda8?width=548", category: "women's wear", title: "Princess Look fashion Dress", price: "$65.00", originalPrice: "$58.00", badge: "sale",rating: 2 },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/410cb337ad853a4405d2e8107329d3238e5c6b7e?width=548", category: "Sports", title: "Women's casual shoes", price: "$600.00", originalPrice: "$500.00", badge: "sale",rating: 4 },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/26a715316be1cf0b14db019519e2ff2a427ac3b4?width=548", category: "Fashion", title: "Mixed Nuts Berries Pack", price: "$56.00", originalPrice: "$45.00", badge: "sale",rating:3 },
];


  return (
    <div className="bg-white font-poppins text-gray-800 px-4 md:px-8 lg:px-12 py-10">
  <div className="max-w-[1400px] mx-auto space-y-16">

        <div className="relative w-full h-[18rem] md:h-[22rem] rounded-lg overflow-hidden">
  <img
    src={fashion1}
    alt="fashion"
    className="w-full h-full object-cover"/>

  <div className="absolute top-1/2 left-5 -translate-y-1/2 max-w-xs">
    <p className="text-blue-700 font-semibold mb-2">
      Starting at $29.99
    </p>

    <h1 className="text-2xl md:text-3xl font-bold text-emerald-500 leading-tight">
      Explore jackets <br /> sale for men's
    </h1>

    <button className="mt-4 inline-flex items-center gap-1 bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition">
      Shop Now
      <FaChevronRight />
      <FaChevronRight />
    </button>
      </div>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">

          <div className="">

            <div className="border border-gray-200 rounded-xl bg-white p-4">
          <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Category</h3>
        <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>

        <div className="space-y-4 text-sm">
        <div>
        <h6 className="font-semibold mb-2">Clothes</h6>
        {[
        { name: "men's wear", count: 3 },
        { name: "women's wear", count: 2 },
        { name: "Baby Wear", count: 1 },
        ].map(item => (
        <div key={item.name} className="flex justify-between py-1">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 border rounded-sm" />
            <span>{item.name}</span>
          </div>
          <span>({item.count})</span>
          </div>
           ))}
           </div>
          </div>
          </div>

            {/* <div className="filter-card">
              <div className="filter-header">
                <h3>Brand</h3>
                <ChevronDown className="icon" />
              </div>
              <div className="filter-content">
                {[{ name: "Bhisma Organice" }, { name: "Darsh Mart" }].map((item) => (
                  <div key={item.name} className="filter-item">
                    <div className="checkbox" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="border border-gray-200 rounded-xl bg-white p-4">
        <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Brand</h3>
        <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>

      <div className="space-y-4 text-sm">
    <div>
      {[
        { name: "Bhisma Organice" },
        { name: "Darsh Mart" },
      ].map(item => (
        <div key={item.name} className="flex justify-between py-1">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 border rounded-sm" />
            <span>{item.name}</span>
          </div>
        </div>
          ))}
        </div>
        </div>
          </div>

            <div className="filter-card">
              <div className="filter-header">
                <h3>Price</h3>
                <ChevronDown className="icon" />
              </div>
              <div className="filter-content">
                {[
                  { name: "Under $50" },
                  { name: "$50 to $100" },
                  { name: "$100 to $200" },
                  { name: "Above $200" },
                ].map((item) => (
                  <div key={item.name} className="filter-item">
                    <div className="checkbox" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="filter-card">
              <div className="filter-header">
                <h3>Tags</h3>
                <ChevronDown className="icon" />
              </div>
              <div className="filter-content">
                <div className="tags">
                  {["men", "women", "clothes", "shirt", "shoes", "sports", "wallet", "belt", "perfume", "shampoo", "skin", "earring", "lipstick", "makeup"].map((tag) => (
                    <button key={tag} className="tag-btn">{tag}</button>
                  ))}
                </div>
                <button className="filter-btn" style={{background:"#205d8f"}}>Filter</button>
              </div>
            </div> */}
            <div className="border border-gray-200 rounded-xl bg-white p-4">
        <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Tags</h3>
        <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>

        <div className="flex flex-wrap gap-2">
          {["men", "women", "clothes", "shirt", "shoes", "sports", "wallet", "belt", "perfume", "shampoo", "skin", "earring", "lipstick", "makeup"].map((tag) => (
        <button
        key={tag}
        className="bg-green-600 text-white text-xs px-3 py-1 rounded-md hover:bg-green-900" >
        {tag}
        </button>
           ))}
        </div>

        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md">
          Filter
        </button>
        </div>

            <div
            className="relative h-48 rounded-xl overflow-hidden bg-cover bg-center"
            style={{
            backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/37f03bf6bc71b8d859625b80c12b510b9607ca99?width=752')",}}>
          <div className="absolute bottom-4 left-4">
        <h3 className="text-emerald-600 font-semibold text-sm mb-2">
          Our top most products <br /> check it now
        </h3>
        <button className="bg-green-600 text-white text-sm px-3 py-1 rounded">
          Shop Now
        </button>
        </div>
          </div>
          </div>

          <div className="">

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categoryIcons.map(cat => (
        <div
        key={cat.title}
      style={{ backgroundColor: cat.bgColor }}
      className="relative rounded-xl p-4 text-center" >
      {cat.discount && (
        <span className="absolute top-2 right-2 bg-blue-700 text-white text-xs px-2 py-0.5 rounded">
          {cat.discount}
        </span>
        )}

      <img src={cat.icon} className="w-12 h-12 mx-auto mb-2" />
      <h4 className="text-emerald-600 font-semibold capitalize">{cat.title}</h4>
      <p className="text-sm text-gray-600">{cat.items}</p>
        </div>
          ))}
          </div>

            <div className="section">
              <div className="section-header">
                <h2>New <span>Arrivals</span></h2>
                <div className="tabs">
                  <button className="active" style={{background:"#205d8f"}}>All</button>
                  <button>Clothes</button>
                  <button>Footwear</button>
                  <button>Accessories</button>
                </div>
              </div>
              <div className="product-grid">
                {newArrivals.map((product, idx) => (
            <div className="bg-gray-100 border rounded-xl overflow-hidden hover:scale-105 transition h-[22rem] flex flex-col">
  <div className="relative h-52">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-cover"
    />

    {product.badge && (
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
        {product.badge}
      </span>
    )}
  </div>

  <div className="p-3 flex flex-col justify-between flex-1">
    <div>
      <p className="text-xs text-gray-400">{product.category}</p>
      <h5 className="text-sm font-semibold text-emerald-600 leading-tight">
        {product.title}
      </h5>

      <div className="flex gap-1 mt-1 text-orange-400">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < product.rating ? "" : "opacity-30"}
          />
        ))}
      </div>
    </div>

    <div className="flex gap-2 items-center mt-2">
      <span className="text-emerald-600 font-semibold">
        {product.price}
      </span>
      <span className="text-xs line-through text-gray-400">
        {product.originalPrice}
      </span>
    </div>
  </div>
            </div>
                ))}
              </div>
            </div>

          <div
  className="
    w-full 
    flex 
    flex-col 
    md:flex-row 
    justify-center 
    items-center 
    gap-6 
    mt-10
  "
>
  {/* Card 1 */}
  <div
    className="
      relative 
      w-full 
      md:w-1/2 
      min-w-[280px] 
      h-64 
      rounded-xl 
      overflow-hidden
    "
  >
    <img
      src={watch}
      alt="Wrist watch"
      className="w-full h-full object-cover"
    />

    <div className="absolute top-1/2 right-5 -translate-y-1/2 text-right">
      <h2 className="text-[#43a588] text-xl font-semibold leading-tight mb-2">
        Digital <br /> Smartwatch
      </h2>
      <p className="text-gray-500 mb-4">50% OFF</p>
      <button className="bg-[#205d8f] text-white px-4 py-2 rounded-md hover:bg-[#184b73] transition">
        Shop Now
      </button>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="
      relative 
      w-full 
      md:w-1/2 
      min-w-[280px] 
      h-64 
      rounded-xl 
      overflow-hidden
    "
  >
    <img
      src={menshoes}
      alt="Men's shoes"
      className="w-full h-full object-cover"
    />

    <div className="absolute top-1/2 right-5 -translate-y-1/2 text-right">
      <h2 className="text-[#43a588] text-xl font-semibold leading-tight mb-2">
        Men's Sport <br /> Shoes
      </h2>
      <p className="text-gray-500 mb-4">70% OFF</p>
      <button className="bg-[#205d8f] text-white px-4 py-2 rounded-md hover:bg-[#184b73] transition">
        Shop Now
      </button>
    </div>
  </div>
          </div>

          <div className="w-full space-y-6">
  {/* Section Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <h2 className="text-2xl font-semibold text-[#459a88]">
      Day Of The <span className="text-[#205d8f]">Deal</span>
    </h2>

    <div className="flex gap-2">
      <button
        onClick={handlePrev}
        className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
      >
        <ChevronRight />
      </button>
    </div>
  </div>

  {/* Product Grid */}
  <div
    className="
      grid 
      grid-cols-2 
      sm:grid-cols-3 
      lg:grid-cols-4 
      gap-5
    "
  >
    {dayOfDealProducts.map((product, idx) => (
      <div
        key={idx}
        className="
          bg-gray-100 
          border 
          rounded-xl 
          overflow-hidden 
          hover:scale-105 
          transition 
          duration-300
        "
      >
        {/* Image */}
        <div className="relative h-44">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />

          {product.badge && (
            <span
              className={`
                absolute 
                top-2 left-2 
                px-2 py-0.5 
                text-xs 
                text-white 
                rounded
                ${product.badge === "sale" ? "bg-red-400" : "bg-[#459a88]"}
              `}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-3 space-y-1">
          <p className="text-xs text-gray-400">{product.category}</p>
          <h5 className="text-sm font-medium text-[#459a88] line-clamp-2">
            {product.title}
          </h5>

          {/* Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={12}
                className={
                  i < product.rating
                    ? "text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#459a88] font-semibold">
              {product.price}
            </span>
            <span className="line-through text-gray-400">
              {product.originalPrice}
            </span>
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
                height: "16rem",
                overflow: "hidden",
                borderRadius: "8px",
                }}>
              <img src={fashion2} alt="banner"
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
             <h1 style={{color:"#45a388"}}>Shopping Today <br />Fashion sale</h1>
             <p style={{lineHeight:"2"}}>
             <span style={{ color: "#205d8f", fontWeight: "bold" }}>30% off sale</span>{" "}
             Hurry up!!!
             </p>
             <button
              style={{
              background: "#205d8f",
              padding: "10px 15px",
              marginTop: "1rem",
              color: "#eee",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
                }} > Shop Now</button>
              </div>
             </div>

           <RatedProducts/>

          </div>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-center">

    <div className="border border-gray-200 rounded-lg shadow-sm p-6 h-40 flex flex-col items-center justify-center hover:shadow-md transition">
  <FaTruckMoving className="text-green-500 w-8 h-8 mb-2" />

  <h4 className="text-gray-700 font-semibold">
    Free Shipping
  </h4>

  <p className="text-xs text-gray-400 mt-1">
    Free shipping within the country for orders above $200
  </p>
</div>

<div className="border border-gray-200 rounded-lg shadow-sm p-6 h-40 flex flex-col items-center justify-center hover:shadow-md transition">
  <FaHandHoldingMedical className="text-green-500 w-8 h-8 mb-2" />

  <h4 className="text-gray-700 font-semibold">
    24X7 Support
  </h4>

  <p className="text-xs text-gray-400 mt-1">
     Contact us 24 hours a day, 7 days a week
  </p>
</div>

<div className="border border-gray-200 rounded-lg shadow-sm p-6 h-40 flex flex-col items-center justify-center hover:shadow-md transition">
  <CircleDivideIcon className="text-green-500 w-8 h-8 mb-2" />

  <h4 className="text-gray-700 font-semibold">
    30 Days Return
  </h4>

  <p className="text-xs text-gray-400 mt-1">
     Simply return it within 30 days for an exchange
  </p>
</div>

<div className="border border-gray-200 rounded-lg shadow-sm p-6 h-40 flex flex-col items-center justify-center hover:shadow-md transition">
  <DollarSignIcon className="text-green-500 w-8 h-8 mb-2" />

  <h4 className="text-gray-700 font-semibold">
    Payment Secure
  </h4>

  <p className="text-xs text-gray-400 mt-1">
     Contact us 24 hours a day, 7 days a week
  </p>
</div>

        {/* <div style={{border:"1px solid #e5e7eb",borderRadius:"5px",height:"10rem",alignContent:"center",width:"260px",
          justifyItems:"center",alignItems:"center",transition:"box-shadow 0.5s ease",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.1)"}}>
          <FaHandHoldingMedical color='#5799d0ff' style={{marginBottom:"0.5rem", width:"3rem",height:"2rem"}} /> 
          <h4 style={{lineHeight:"1.5rem",color:"#45a388"}}>24X7 Support</h4>
          <p style={{fontSize:"0.75rem",lineHeight:"1.5",color:"#9ca3af"}}>Contact us 24 hours a day, 7 days a week </p>
        </div>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"5px",height:"10rem",alignContent:"center",width:"260px",
          justifyItems:"center",alignItems:"center",transition:"box-shadow 0.5s ease",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.1)"}}>
          <CircleDivideIcon color='#5799d0ff' style={{marginBottom:"0.5rem", width:"3rem",height:"2rem"}} /> 
          <h4 style={{lineHeight:"1.5rem",color:"#45a388"}}>30 Days Return</h4>
          <p style={{fontSize:"0.75rem",lineHeight:"1.5",color:"#9ca3af"}}>Simply return it within 30 days for an exchange </p>
        </div>
        <div style={{border:"1px solid #e5e7eb",borderRadius:"5px",height:"10rem",alignContent:"center",width:"260px",
          justifyItems:"center",alignItems:"center",transition:"box-shadow 0.5s ease",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.1)"}}>
          <DollarSignIcon color='#5799d0ff' style={{marginBottom:"0.5rem", width:"25px",height:"2rem"}} /> 
          <h4 style={{lineHeight:"1.5rem",color:"#45a388"}}>Payment Secure</h4>
          <p style={{fontSize:"0.75rem",lineHeight:"1.5",color:"#9ca3af"}}>Contact us 24 hours a day, 7 days a week </p>
        </div> */}
      </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-12">
  <div>
    <h2 className="text-2xl font-semibold text-emerald-600">
      Latest <span className="text-blue-500">Blog</span>
    </h2>
    <p className="text-gray-500 text-sm">
      We tackle interesting topics every day in 2023.
    </p>
  </div>

  <button className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
    All Blogs <FaChevronRight />
  </button>
        </div>
      
          <div className="w-full mt-12">
  <div
    className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-5 
      gap-6
    "
  >
    {[last1, last2, last3, last4, last5].map((img, index) => (
      <div
        key={index}
        className="
          bg-white 
          border 
          border-gray-200 
          rounded-lg 
          overflow-hidden 
          shadow-sm 
          hover:shadow-lg 
          transition-shadow 
          duration-300
          cursor-pointer
          flex 
          flex-col
        "
      >
        {/* Image */}
        <img
          src={img}
          alt="Blog"
          className="w-full h-40 object-cover"
        />

        {/* Content */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <h4 className="text-[#45a388] font-semibold text-sm leading-snug mb-2">
            {[
              "Marketing Guide: 5 Steps to Success to way.",
              "Best way to solve business deal issue in market.",
              "31 grocery customer service stats know in 2019.",
              "Business ideas to grow your business traffic.",
              "Marketing Guide: 5 Steps to Success to way.",
            ][index]}
          </h4>

          <p className="text-sm text-gray-500 hover:text-[#205d8f] transition-colors">
            Read More <span className="ml-1">{">>"}</span>
          </p>
        </div>
      </div>
    ))}
  </div>
      </div>

      </div>
    </div>
  );
}

export default HomeFashion;
