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
  <div className="bg-[#f7f7f7] p-4 rounded-md w-full">
    
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-800">
        {title} <span className="text-[#45a388]">{highlight}</span>
      </h3>

      <div className="flex gap-2">
        <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-200">
          {"<"}
        </button>
        <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-200">
          {">"}
        </button>
      </div>
    </div>

    {/* Products Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex gap-3 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded"
          />

          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-800">
                {item.name}
              </h4>
              <p className="text-xs text-gray-500">
                {item.category}
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <span className="text-sm font-semibold text-[#45a388]">
                {item.price}
              </span>
              <span className="text-xs line-through text-gray-400">
                {item.oldPrice}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TrendProducts = () => {
  return (
    <section className="bg-[#f7f7f7] px-4 sm:px-6 lg:px-12 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductList title="Trending" highlight="Items" items={trending} />
        <ProductList title="Top" highlight="Rated" items={topRated} />
        <ProductList title="Top" highlight="Selling" items={topSelling} />
      </div>
    </section>
  );
};

  return (
      <div>
        <div style={{background:"#f7f7f7"}}> 

              <div className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden mb-12">
  {/* Background Image */}
  <img
    src={back1}
    alt="Glasses sale"
    className="w-full h-full object-cover"
  />

  {/* Text Overlay */}
  <div className="absolute top-1/2 left-4 sm:left-10 -translate-y-1/2 max-w-xs sm:max-w-sm text-left">
    <p className="text-[#45a388] text-sm sm:text-base leading-relaxed">
      Starting at $ 29.99
    </p>

    <h1 className="mt-2 text-xl sm:text-3xl lg:text-4xl font-semibold text-gray-100 leading-snug">
      Explore glasses <br /> sale for Women&apos;s
    </h1>

    <button className="mt-5 inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-gray-100 px-5 py-2 rounded-md transition duration-300">
      Shop Now <span>{">>"}</span>
    </button>
  </div>
</div>

              <div className="w-full mt-8 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 place-items-center">
      
      {/* Card */}
      <div className="relative w-48 bg-gray-100 rounded-md p-4 text-center">
        <button className="absolute top-2 right-2 bg-[#45a388] text-white text-xs px-2 py-0.5 rounded">
          30%
        </button>
        <img src={cloth} alt="Clothes" className="mx-auto h-20 object-contain" />
        <p className="mt-3 font-semibold">Clothes</p>
        <p className="text-sm text-gray-600">320 items</p>
      </div>

      <div className="w-48 bg-gray-100 rounded-md p-4 text-center">
        <img src={watch} alt="Watches" className="mx-auto h-20 object-contain" />
        <p className="mt-3 font-semibold">Watches</p>
        <p className="text-sm text-gray-600">65 items</p>
      </div>

      <div className="relative w-48 bg-gray-100 rounded-md p-4 text-center">
        <button className="absolute top-2 right-2 bg-[#45a388] text-white text-xs px-2 py-0.5 rounded">
          15%
        </button>
        <img src={dress} alt="Dresses" className="mx-auto h-20 object-contain" />
        <p className="mt-3 font-semibold">Dresses</p>
        <p className="text-sm text-gray-600">548 items</p>
      </div>

      <div className="relative w-48 bg-gray-100 rounded-md p-4 text-center">
        <button className="absolute top-2 right-2 bg-[#45a388] text-white text-xs px-2 py-0.5 rounded">
          10%
        </button>
        <img src={glass} alt="Glasses" className="mx-auto h-20 object-contain" />
        <p className="mt-3 font-semibold">Glasses</p>
        <p className="text-sm text-gray-600">48 items</p>
      </div>

      <div className="w-48 bg-gray-100 rounded-md p-4 text-center">
        <img src={hats} alt="Hats & Caps" className="mx-auto h-20 object-contain" />
        <p className="mt-3 font-semibold">Hat & Caps</p>
        <p className="text-sm text-gray-600">59 items</p>
      </div>

      <div className="w-48 bg-gray-100 rounded-md p-4 text-center">
        <img src={short} alt="Juice & Drinks" className="mx-auto h-20 object-contain" />
        <p className="mt-3 font-semibold">Juice & Drinks</p>
        <p className="text-sm text-gray-600">845 items</p>
      </div>

    </div>
  </div>
</div>

              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">

  {/* Day Of The Deal */}
  <div className="mb-12">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-700">
          Day Of The <span className="text-[#45a388]">Deal</span>
        </h2>
        <p className="text-gray-500 text-sm">
          Don't wait. The time will never be just right.
        </p>
      </div>

      <div className="flex gap-2">
        <button className="p-2 border rounded hover:bg-gray-100">
          <ChevronLeft />
        </button>
        <button className="p-2 border rounded hover:bg-gray-100">
          <ChevronRight />
        </button>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-gray-100 p-4 rounded">
      {dayOfDealProducts.map((product, idx) => (
        <div key={idx} className="bg-white rounded shadow-sm p-3">
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded"
            />
            {product.badge && (
              <span className="absolute top-2 left-2 bg-[#45a388] text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </span>
            )}
          </div>

          <div className="mt-3">
            <p className="text-xs text-gray-500">{product.category}</p>
            <h5 className="text-sm font-medium">{product.title}</h5>

            <div className="flex gap-1 my-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={12}
                  className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>

            <div className="flex gap-2 text-sm">
              <span className="font-semibold">{product.price}</span>
              <span className="line-through text-gray-400">
                {product.originalPrice}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Promo Banner */}
  <div className="relative mb-16">
    <img
      src={back2}
      className="w-full h-[280px] sm:h-[350px] object-cover rounded"
      alt=""
    />

    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right text-white max-w-xs">
      <p className="text-sm mb-2">30% off sale</p>
      <h1 className="text-2xl font-semibold leading-snug">
        Latest Exclusive <br /> Summer Collection
      </h1>
      <button className="mt-3 bg-[#45a388] px-4 py-2 rounded text-sm">
        Shop Now
      </button>
    </div>
  </div>

  {/* New Arrivals */}
  <div className="mb-14">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <h2 className="text-2xl font-semibold">
        New <span className="text-[#45a388]">Arrivals</span>
      </h2>

      <div className="flex gap-3 text-sm">
        <button className="text-[#45a388] font-medium">All</button>
        <button className="text-gray-500 hover:text-black">Clothes</button>
        <button className="text-gray-500 hover:text-black">Footwear</button>
        <button className="text-gray-500 hover:text-black">Accessories</button>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-gray-100 p-4 rounded">
      {newArrivals.map((product, idx) => (
        <div key={idx} className="bg-white rounded shadow-sm p-3">
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded"
            />
            {product.badge && (
              <span className="absolute top-2 left-2 bg-[#45a388] text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </span>
            )}
          </div>

          <div className="mt-3">
            <p className="text-xs text-gray-500">{product.category}</p>
            <h5 className="text-sm font-medium">{product.title}</h5>

            <div className="flex gap-1 my-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={12}
                  className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>

            <div className="flex gap-2 text-sm">
              <span className="font-semibold">{product.price}</span>
              <span className="line-through text-gray-400">
                {product.originalPrice}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Category Banners */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {[{img:womens,title:"Women's"},
      {img:kids,title:"Kid's"},
      {img:men,title:"Men's"}].map((item,i)=>(
      <div key={i} className="relative">
        <img
          src={item.img}
          className="w-full h-[260px] object-cover rounded"
          alt=""
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-right text-white">
          <span className="bg-white text-black text-xs px-2 py-1">
            50% Off
          </span>
          <h2 className="text-2xl font-semibold mt-2">
            {item.title} <br /> Collection
          </h2>
          <button className="mt-2 bg-[#45a388] px-4 py-2 text-sm rounded">
            Shop Now
          </button>
        </div>
      </div>
    ))}
  </div>

</section>

              <div className="w-full bg-white px-4 sm:px-6 lg:px-20 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">

    {/* Free Shipping */}
    <div className="border border-gray-200 rounded-md h-40 flex flex-col items-center justify-center shadow-sm transition-shadow duration-300 hover:shadow-md">
      <FaTruckMoving className="text-[#45a388] w-10 h-8 mb-2" />
      <h4 className="font-medium leading-snug">Free Shipping</h4>
      <p className="text-xs text-gray-600 px-4">
        Free shipping on all US order or order above $200
      </p>
    </div>

    {/* Support */}
    <div className="border border-gray-200 rounded-md h-40 flex flex-col items-center justify-center shadow-sm transition-shadow duration-300 hover:shadow-md">
      <FaHandHoldingMedical className="text-[#45a388] w-10 h-8 mb-2" />
      <h4 className="font-medium leading-snug">24X7 Support</h4>
      <p className="text-xs text-gray-600 px-4">
        Contact us 24 hours a day, 7 days a week
      </p>
    </div>

    {/* Return */}
    <div className="border border-gray-200 rounded-md h-40 flex flex-col items-center justify-center shadow-sm transition-shadow duration-300 hover:shadow-md">
      <CircleDivideIcon className="text-[#45a388] w-10 h-8 mb-2" />
      <h4 className="font-medium leading-snug">30 Days Return</h4>
      <p className="text-xs text-gray-600 px-4">
        Simply return it within 30 days for an exchange
      </p>
    </div>

    {/* Payment */}
    <div className="border border-gray-200 rounded-md h-40 flex flex-col items-center justify-center shadow-sm transition-shadow duration-300 hover:shadow-md">
      <DollarSignIcon className="text-[#45a388] w-8 h-8 mb-2" />
      <h4 className="font-medium leading-snug">Payment Secure</h4>
      <p className="text-xs text-gray-600 px-4">
        Contact us 24 hours a day, 7 days a week
      </p>
    </div>

  </div>
</div>

            <div className="w-full flex justify-center px-4 sm:px-6 lg:px-12 my-8">
  <div className="w-full max-w-7xl">
    <TrendProducts />
  </div>
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
