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
      name: "Women's wallet",
      price: "$70",
      quantity: "- 1 +",
      total: "$70",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f78eaa31a2e0b32f9c103686701c5482810c8ea7?width=200", 
      name: "Gold Earring",
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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative w-full h-52 bg-gray-100">
              {product.tag && (
                <span
                  className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold text-white rounded ${
                    product.tagColor || "bg-green-600"
                  }`}
                >
                  {product.tag}
                  {product.tagnew}
                </span>
              )}

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 space-y-2">
              <p className="text-xs uppercase text-gray-500">
                {product.category}
              </p>

              <h3 className="text-sm font-semibold line-clamp-2">
                {product.title}
              </h3>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={12}
                    className={
                      i < product.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-semibold">
                    {product.newPrice}
                  </span>
                  <span className="text-gray-400 text-sm line-through">
                    {product.oldPrice}
                  </span>
                </div>

                {product.quantity && (
                  <span className="text-xs text-gray-500 font-light">
                    {product.quantity}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Cart() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-gray-100 rounded-lg p-6 w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>

          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-gray-600 font-semibold">
              Estimate Shipping
            </span>
            <ChevronDown className="cursor-pointer" />
          </div>

          <hr className="border-gray-300 mb-4" />

          <div className="space-y-4 text-sm">
            <p className="text-gray-500">
              Enter your destination to get a shipping estimate
            </p>

            <div>
              <label className="font-semibold block mb-1">
                Country *
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full h-12 px-3 border border-gray-300 rounded bg-white"
                />
                <ChevronDown className="absolute right-3 top-3 cursor-pointer" />
              </div>
            </div>

            <div>
              <label className="font-semibold block mb-1">
                State / Province
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-12 px-3 border border-gray-300 rounded bg-white"
                />
                <ChevronDown className="absolute right-3 top-3 cursor-pointer" />
              </div>
            </div>

            <div>
              <label className="font-semibold block mb-1">
                Zip / Postal Code
              </label>
              <input
                type="text"
                placeholder="Zip / Postal Code"
                className="w-full h-12 px-3 border border-gray-300 rounded bg-gray-100"
              />
            </div>
          </div>

          <hr className="border-gray-300 my-6" />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span className="font-semibold">$162.00</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="font-semibold">$32.40</span>
            </div>

            <div className="flex justify-between">
              <span>Coupon Discount</span>
              <a href="#" className="text-green-600">
                Apply Discount
              </a>
            </div>
          </div>

          <hr className="border-gray-300 my-4" />

          <div className="flex justify-between font-semibold">
            <span>Total Amount</span>
            <span>$194.40</span>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-[700px] w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Img</th>
                <th className="px-4 py-3 text-left">Product</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Total</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {wishitem.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-3 text-xs">
                    {item.name}
                  </td>
                  <td className="px-4 py-3">{item.price}</td>
                  <td className="px-4 py-3">
                    <button className="px-3 py-1 border rounded">
                      {item.quantity}
                    </button>
                  </td>
                  <td className="px-4 py-3">{item.total}</td>
                  <td className="px-4 py-3">
                    <button className="text-red-600 font-bold">
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
            <a href="#" className="text-gray-700">
              Continue Shopping
            </a>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Check Out
            </button>
          </div>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">
          Related <span className="text-green-600">Products</span>
        </h2>
        <p className="text-gray-500">
          Browse the collection of top products
        </p>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}

export default Cart;