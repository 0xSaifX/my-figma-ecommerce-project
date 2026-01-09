import React from "react";
import perfume from "../assets/perfume.jpg";
import shirt from "../assets/menshirt3.jpg";
import berry from "../assets/berry.jpg";
import { FaStar } from "react-icons/fa";


function Compare() {
  return (
    <div className="px-4 md:px-8 lg:px-32 my-16">
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full border border-gray-200 text-sm">
          <tbody>

            <tr>
              <td className="bg-gray-100 font-semibold px-4 py-4 sticky left-0 z-10">
                Product Image
              </td>

              {[perfume, shirt, berry].map((img, i) => (
                <td key={i} className="relative text-center p-6 border">
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                    ✕
                  </button>
                  <img
                    src={img}
                    alt="product"
                    className="mx-auto max-h-36 object-contain"
                  />
                </td>
              ))}
            </tr>

            <tr>
              <td className="bg-gray-100 font-semibold px-4 py-3 sticky left-0 z-10">
                Name
              </td>
              <td className="p-4 border">Long lasting perfume</td>
              <td className="p-4 border">Men's stylish printed shirt</td>
              <td className="p-4 border">Blue berry</td>
            </tr>

            <tr>
              <td className="bg-gray-100 font-semibold px-4 py-3 sticky left-0 z-10">
                Category
              </td>
              <td className="p-4 border">Perfume</td>
              <td className="p-4 border">Men's Wear</td>
              <td className="p-4 border">Fresh Fruits</td>
            </tr>

            <tr>
              <td className="bg-gray-100 font-semibold px-4 py-3 sticky left-0 z-10">
                Ratings
              </td>

              {[1, 2, 3].map((_, i) => (
                <td key={i} className="p-4 border">
                  <div className="flex items-center gap-2 text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <FaStar key={j} />
                    ))}
                    <span className="text-gray-500">(654 Reviews)</span>
                  </div>
                </td>
              ))}
            </tr>

            <tr>
              <td className="bg-gray-100 font-semibold px-4 py-3 sticky left-0 z-10">
                Availability
              </td>
              <td className="p-4 border text-red-500 font-medium">
                Out Of Stock
              </td>
              <td className="p-4 border text-green-600 font-medium">
                Available
              </td>
              <td className="p-4 border text-red-500 font-medium">
                Out Of Stock
              </td>
            </tr>

            <tr>
              <td className="bg-gray-100 font-semibold px-4 py-3 sticky left-0 z-10">
                Location
              </td>
              <td className="p-4 border">In Store, Online</td>
              <td className="p-4 border">Online</td>
              <td className="p-4 border">Online</td>
            </tr>

            <tr>
              <td className="bg-gray-100 font-semibold px-4 py-3 sticky left-0 z-10">
                Brand
              </td>
              <td className="p-4 border">Bhisma Organice</td>
              <td className="p-4 border">Bhisma Organice</td>
              <td className="p-4 border">Bhisma Organice</td>
            </tr>

            <tr>
              <td className="bg-gray-100 font-semibold px-4 py-3 sticky left-0 z-10">
                SKU
              </td>
              <td className="p-4 border">55555</td>
              <td className="p-4 border">24433</td>
              <td className="p-4 border">23456</td>
            </tr>

            <tr>
              <td className="bg-gray-100 font-semibold px-4 py-3 sticky left-0 z-10">
                Quantity
              </td>
              <td className="p-4 border">1 Pack</td>
              <td className="p-4 border">1 Pack</td>
              <td className="p-4 border">1 Pack</td>
            </tr>

            <tr>
              <td className="bg-gray-100 font-semibold px-4 py-3 sticky left-0 z-10">
                Weight
              </td>
              <td className="p-4 border">5 pcs</td>
              <td className="p-4 border">1 pcs</td>
              <td className="p-4 border">500 g</td>
            </tr>

            <tr>
              <td className="bg-gray-100 font-semibold px-4 py-3 sticky left-0 z-10">
                Description
              </td>
              {[1, 2, 3].map((_, i) => (
                <td key={i} className="p-4 border text-gray-600">
                  Recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Compare;
