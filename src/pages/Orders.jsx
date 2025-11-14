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
    return(
    <div style={{display:"block",gap:"0rem",padding:"0 auto",
        margin:"0 auto"
    }}>
      <div className="wishlist-container">

        <div className="wishlist-header">
        <h1>
          Product <span className="highlight">Order List</span>
        </h1>
        <p>Your product Order is our first priority.</p>
        </div>

        <div className="wishlist-card">
            <div className="wishlist-title-row">
          <h2>PENDING ORDERS</h2>
          <button className="shop-btn"
          onClick={() => {
            document.getElementById("my-product").scrollIntoView({behavior:"smooth"});
          }}>Shop Now</button>
        </div>

        <table className="wishlist-table">
          <thead>
            <tr>
              <th>Orders ID</th>
              <th>Shipping</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishitem.map((item) => (
              <tr key={item.id}>
                <td>{item.orderID}</td>
                <td>
                 {item.shipping}
                </td>
                <td>{item.quantity}</td>
                <td>{item.date}</td>
                <td>{item.price}</td>
                <td
                  className={
                    item.status === "Pending"
                      ? "Pending"
                      : "Completed"
                  }
                >
                  {item.status}
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="delete-btn"
                    style={{background:"#45a388"}}> View </button>
                  </div>
                </td>
              </tr>
            ))}
            <tr style={{height:"2rem"}}><hr style={{color:"#ddd",width:"100%"}} /></tr>
          </tbody>
        </table>
        </div>

      </div>

       <div className="wishlist-container"
       style={{marginTop:"2rem"}}>
        <div className="wishlist-card">
          <div className="wishlist-title-row">
          <h2>COMPLETED ORDERS</h2>
          </div>

        <table className="wishlist-table">
          <thead>
            <tr>
              <th>Orders ID</th>
              <th>Shipping</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <tr key={item.id}>
                <td>{item.ordersID}</td>
                <td>
                 {item.shipping}
                </td>
                <td>{item.quantity}</td>
                <td>{item.date}</td>
                <td>{item.price}</td>
                <td
                  className={
                    item.status === "Pending"
                      ? "Pending"
                      : "Completed"
                  }
                >
                  {item.status}
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="delete-btn"
                    style={{background:"#45a388"}}> View </button>
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
    )
}

export default Orders;