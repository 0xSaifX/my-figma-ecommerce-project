import React from "react";


const wishitem = [
    {
      orderID: 47394,
      shipping:  "free" , 
      quantity: 3,
      date: "23/01/2025",
      price: "$106.8",
      status: "Pending",
    },
  ];
const order =[
    {
      ordersID: 65820,
      shipping: "free", 
      quantity: 3,
      date: "23/01/2025",
      price: "$194.4",
      status: "Completed",
    },
    {
      ordersID: 31264,
      shipping: "free", 
      quantity: 3,
      date: "23/01/2025",
      price: "$181.2",
      status: "Completed",
    },
]

function Orders() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">
          Product <span className="text-green-600">Order List</span>
        </h1>
        <p className="text-gray-500">
          Your product order is our first priority.
        </p>
      </div>

      {/* Pending Orders */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h2 className="text-lg font-semibold">PENDING ORDERS</h2>
          <button
            onClick={() =>
              document
                .getElementById("my-product")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
          >
            Shop Now
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full text-sm border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Order ID</th>
                <th className="px-4 py-3 text-left">Shipping</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {wishitem.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{item.orderID}</td>
                  <td className="px-4 py-3">{item.shipping}</td>
                  <td className="px-4 py-3">{item.quantity}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">{item.price}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="bg-green-600 text-white px-4 py-1.5 rounded text-xs hover:bg-green-700">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Completed Orders */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-6">COMPLETED ORDERS</h2>

        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full text-sm border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Order ID</th>
                <th className="px-4 py-3 text-left">Shipping</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {order.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{item.ordersID}</td>
                  <td className="px-4 py-3">{item.shipping}</td>
                  <td className="px-4 py-3">{item.quantity}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">{item.price}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="bg-green-600 text-white px-4 py-1.5 rounded text-xs hover:bg-green-700">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default Orders;