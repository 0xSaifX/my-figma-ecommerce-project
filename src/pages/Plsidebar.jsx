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
        {products.map((product, idx) => (
        <div className="bg-gray-100 border rounded-xl overflow-hidden hover:scale-105 transition h-[22rem] flex flex-col">
        <div className="relative h-52">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"/>
      
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
  );
};

  return (
    <main style={{margin:"2rem 6rem"}}>
        <div className="product-page">
      {/* Sidebar */}
<div className="w-full lg:w-[260px]">

  <div className="bg-gray-100 rounded-lg p-4 space-y-8">

    {/* CATEGORY */}
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Category</h3>
        <ChevronDown className="w-5 h-5" />
      </div>
      <hr className="my-3" />

      <div className="space-y-3">
        {[
          { icon: <FaStar />, name: "Dried Fruit" },
          { icon: <FaCookie />, name: "Cookies" },
          { icon: <FaHamburger />, name: "Foods" },
          { icon: <FaApple />, name: "Fresh Fruit" },
          { icon: <FaBell />, name: "Tuber Root" },
          { icon: <FaApple />, name: "Vegetables" },
          { icon: <FaIceCream />, name: "Snacks" },
          { icon: <FaUserAlt />, name: "Unisex" },
          { icon: <FaDelicious />, name: "Jewellery" },
        ].map((item) => (
          <label
            key={item.name}
            className="flex items-center gap-3 text-sm cursor-pointer"
          >
            <input type="checkbox" className="accent-green-600" />
            <span className="text-gray-600">{item.icon}</span>
            <span>{item.name}</span>
          </label>
        ))}
      </div>
    </div>

    {/* WEIGHT */}
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Weight</h3>
        <ChevronDown className="w-5 h-5" />
      </div>
      <hr className="my-3" />

      <div className="space-y-3">
        {["2kg","10kg","1kg","2pack","500g","2pcs","100g","3pcs"].map((item) => (
          <label key={item} className="flex items-center gap-3 text-sm">
            <input type="checkbox" className="accent-green-600" />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>

    {/* COLOR */}
    <div>
      <div className="flex items-center justify-between text-green-600">
        <h3 className="font-semibold text-lg">Color</h3>
        <ChevronDown className="w-5 h-5" />
      </div>
      <hr className="my-3" />

      <div className="grid grid-cols-8 gap-2">
        {[
          "#ff6b6b","#feca57","#48dbfb","#1dd1a1",
          "#5f27cd","#3f2","#f7f","#3ea5",
          "#ffe2ad","#333","#5ea","rgba(9,33,33,0.13)","purple"
        ].map((color, i) => (
          <span
            key={i}
            className="w-5 h-5 rounded-full cursor-pointer border"
            style={{ background: color }}
          />
        ))}
      </div>
    </div>

    {/* PRICE */}
    <div className="text-center">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Price</h3>
        <ChevronDown className="w-5 h-5" />
      </div>

      <h5 className="mb-4">Item: {count}</h5>

      <div className="flex justify-center gap-6">
        <div>
          <p className="text-sm mb-1">From</p>
          <button
            onClick={increase}
            className="px-4 py-1 bg-white rounded shadow text-sm"
          >
            0
          </button>
        </div>

        <div>
          <p className="text-sm mb-1">To</p>
          <button
            onClick={decrease}
            className="px-4 py-1 bg-white rounded shadow text-sm"
          >
            250
          </button>
        </div>
      </div>
    </div>

    {/* TAGS */}
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Tags</h3>
        <ChevronDown className="w-5 h-5" />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {["Fruits","Cookies","Foods","Tuber","Vegetables","Snacks","Clothes","Jewellery"].map(tag => (
          <button
            key={tag}
            className="bg-[#459a88] text-white text-sm px-3 py-1 rounded"
          >
            {tag}
          </button>
        ))}
      </div>

      <button className="w-full bg-[#45a388] text-white py-2 rounded">
        Filter
      </button>
    </div>

  </div>
</div>

      <main className="max-w-7xl mx-auto px-4 py-6">

  {/* TOP SECTION */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* IMAGE SECTION */}
    <div>
      <img
        src={productImages[selectedImage]}
        alt="Product"
        className="w-full h-[350px] md:h-[420px] object-cover rounded-lg"
      />

      <div className="flex items-center justify-center gap-3 mt-4">
        <FaChevronLeft className="cursor-pointer text-gray-500" />

        {productImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            onClick={() => setSelectedImage(index)}
            className={`w-16 h-16 object-cover rounded cursor-pointer border 
              ${selectedImage === index ? "border-green-600" : "border-gray-300"}`}
          />
        ))}

        <FaChevronRight className="cursor-pointer text-gray-500" />
      </div>
    </div>

    {/* INFO SECTION */}
    <div>
      <h2 className="text-xl md:text-2xl font-semibold">
        Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.
      </h2>

      {/* RATING */}
      <div className="flex items-center gap-2 my-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < 4 ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
        <span className="text-sm text-gray-500">| 982 Ratings</span>
      </div>

      {/* PRICE */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-2xl font-bold text-green-600">$664.00</span>
        <span className="text-red-500 font-semibold">-78%</span>
        <span className="text-sm font-semibold">SKU#: WH12</span>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <span className="line-through text-gray-400">$2,999.00</span>
        <span className="text-green-600 font-medium">| IN STOCK</span>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-600 my-4">
        Lorem ipsum dolor sit, voluptas quae, qui provident natus deserunt illo minus sequi,
        impedit fuga lab cupiditate amet dolorem nihil odit.
      </p>

      <ul className="text-sm space-y-2">
        <li>Closure: Hook & Loop</li>
        <li>Sole: Polyvinyl Chloride</li>
        <li>Width: Medium</li>
        <li>Outer Material: A-Grade Standard Quality</li>
      </ul>

      {/* WEIGHT */}
      <h3 className="font-semibold mt-4">Weight</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {["250g", "500g", "1kg", "2kg"].map((w, i) => (
          <button
            key={i}
            className={`px-4 py-1 rounded border 
              ${i === 0 ? "bg-green-600 text-white" : "bg-white"}`}
          >
            {w}
          </button>
        ))}
      </div>

      {/* BUY SECTION */}
      <div className="flex flex-wrap items-center gap-3 mt-6">

        <div className="flex items-center border rounded">
          <button
            className="px-3 py-1"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >-</button>

          <span className="px-4">{quantity}</span>

          <button
            className="px-3 py-1"
            onClick={() => setQuantity(quantity + 1)}
          >+</button>
        </div>

        <button className="bg-green-600 text-white px-6 py-2 rounded text-sm">
          Add to Cart
        </button>

        <button className="p-2 bg-gray-100 rounded">
          <FaHeart />
        </button>

        <button className="p-2 bg-gray-100 rounded">
          <FaEye />
        </button>
      </div>
    </div>
  </div>

  {/* RELATED PRODUCTS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
    {relatedProducts.map((item) => (
      <div key={item.id} className="bg-gray-100 p-4 rounded">
        <img src={item.img} alt={item.title} className="h-40 w-full object-cover rounded" />
        <h4 className="mt-2 font-medium">{item.title}</h4>
        <p className="text-sm text-gray-500">{item.category}</p>

        <div className="flex gap-1 my-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < item.rating ? "text-red-500" : "text-gray-300"} />
          ))}
        </div>

        <div className="flex gap-3">
          <span className="text-green-600 font-semibold">{item.price}</span>
          <span className="line-through text-gray-400">{item.oldPrice}</span>
        </div>
      </div>
    ))}
  </div>

  {/* TABS */}
  <div className="flex flex-wrap gap-3 mb-4">
    {["Details", "Specifications", "Vendor", "Reviews"].map((tab, i) => (
      <button
        key={i}
        className={`px-4 py-2 rounded border 
          ${i === 0 ? "bg-green-600 text-white" : "bg-white"}`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* TAB CONTENT */}
  <div className="text-sm text-gray-600 space-y-3">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <ul className="list-disc ml-5">
      <li>Any product types you want</li>
      <li>Downloadable/Digital products</li>
      <li>Inventory management</li>
      <li>Flatlock seams throughout</li>
    </ul>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
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
