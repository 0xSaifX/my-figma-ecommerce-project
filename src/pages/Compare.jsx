import React from "react";
import perfume from "../assets/perfume.jpg";
import shirt from "../assets/menshirt3.jpg";
import berry from "../assets/berry.jpg";
import { FaStar } from "react-icons/fa";

 const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
    marginTop: "40px",
  };
  const leftHeaderStyle = {
    width: "200px",
    background: "#fafafa",
    fontWeight: "bold",
    padding: "15px",
    border: "1px solid #eee",
  };
  const cellStyle = {
    padding: "15px",
    color:"#7e7b6b",
    border: "1px solid #eee",
    textAlign: "left",
    fontSize: "11px",
    lineHeight: "1.5"
  };
  const productImgContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
  };
  const productImg = {
    maxWidth: "140px",
    height: "auto",
    objectFit: "cover",
    width: "100%",height:"100%"
  };
  const removeIcon = {
    position: "absolute",
    right: "15px",
    top: "10px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const greenText = { color: "green" };
  const redText = { color: "red" };
  const star = { color: "#f6a700", marginRight: "2px" };


function Compare () {
  return(
    <div>

      <div style={{ margin: "4rem 8rem" }}>

      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={leftHeaderStyle}>Product Image</td>

            <td style={{ ...cellStyle, position: "relative" }}>
              <span style={removeIcon}>✕</span>
              <div style={productImgContainer}>
                <img
                  src={perfume}
                  style={productImg}/>
              </div>
            </td>

            <td style={{ ...cellStyle, position: "relative" }}>
              <span style={removeIcon}>✕</span>
              <div style={productImgContainer}>
                <img
                  src={shirt}
                  style={productImg}/>
              </div>
            </td>

            <td style={{ ...cellStyle, position: "relative" }}>
              <span style={removeIcon}>✕</span>
              <div style={productImgContainer}>
                <img
                  src= {berry}
                  style={{ maxWidth: "180px" }}/>
              </div>
            </td>
          </tr>

          <tr>
            <td style={leftHeaderStyle}>Name</td>
            <td style={cellStyle}>Long lasting perfume</td>
            <td style={cellStyle}>Men's stylish printed shirt</td>
            <td style={cellStyle}>Blue berry</td>
          </tr>

          <tr>
            <td style={leftHeaderStyle}>Category</td>
            <td style={cellStyle}>perfume</td>
            <td style={cellStyle}>men's wear</td>
            <td style={cellStyle}>Fresh Fruits</td>
          </tr>

          <tr>
            <td style={leftHeaderStyle}>Ratings</td>
            <td style={cellStyle}>
              <span style={star}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> (654 Review)
            </td>
            <td style={cellStyle}>
              <span style={star}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> (654 Review)
            </td>
            <td style={cellStyle}>
              <span style={star}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> (654 Review)
            </td>
          </tr>

          <tr>
            <td style={leftHeaderStyle}>Availability</td>
            <td style={{ ...cellStyle, ...redText }}>Out Of Stock</td>
            <td style={{ ...cellStyle, ...greenText }}>Available</td>
            <td style={{ ...cellStyle, ...redText }}>Out Of Stock</td>
          </tr>

          <tr>
            <td style={leftHeaderStyle}>Location</td>
            <td style={cellStyle}>in Store, Online</td>
            <td style={cellStyle}>Online</td>
            <td style={cellStyle}>Online</td>
          </tr>

          <tr>
            <td style={leftHeaderStyle}>Brand</td>
            <td style={cellStyle}>Bhisma Organice</td>
            <td style={cellStyle}>Bhisma Organice</td>
            <td style={cellStyle}>Bhisma Organice</td>
          </tr>

          <tr>
            <td style={leftHeaderStyle}>SKU</td>
            <td style={cellStyle}>55555</td>
            <td style={cellStyle}>24433</td>
            <td style={cellStyle}>23456</td>
          </tr>

          <tr>
            <td style={leftHeaderStyle}>Quantity</td>
            <td style={cellStyle}>1 Pack</td>
            <td style={cellStyle}>1 Pack</td>
            <td style={cellStyle}>1 Pack</td>
          </tr>

          <tr>
            <td style={leftHeaderStyle}>Weight</td>
            <td style={cellStyle}>5 pcs</td>
            <td style={cellStyle}>1 pcs</td>
            <td style={cellStyle}>500 g</td>
          </tr>

          <tr>
            <td style={leftHeaderStyle}>Description</td>
            <td style={cellStyle}>
              Recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </td>
            <td style={cellStyle}>
              Recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </td>
            <td style={cellStyle}>
              Recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    

  </div>
  )
}

export default Compare;