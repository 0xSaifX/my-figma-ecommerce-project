import React from "react";
import b1 from "../assets/Blog1.jpg";
import b2 from "../assets/Blog2.jpg";
import b3 from "../assets/Blog3.jpg";
import b4 from "../assets/Blog4.jpg";
import b5 from "../assets/Blog5.jpg";
import b6 from "../assets/Blog6.jpg";

import "./Blog.css";
import { FaSearch } from "react-icons/fa";

function Blog () {
    const blogs = [
    {
      img: b1,
      date: "June 30, 2022",
      category: "Organic",
      title: "Marketing Guide: 5 Steps to Success to way.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: b2,
      date: "April 02, 2022",
      category: "Fruits",
      title: "Best way to solve business deal issue in market.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: b3,
      date: "March 03, 2022",
      category: "Vegetables",
      title: "31 grocery customer service stats know in 2019.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: b4,
      date: "January 29, 2022",
      category: "Fastfood",
      title: "Business ideas to grow your business traffic.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: b5,
      date: "December 12, 2022",
      category: "Fruits",
      title: "Marketing Guide: 5 Steps way to Success.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: b6,
      date: "August 03, 2023",
      category: "Vegetables",
      title: "15 customer service stats idea know in 2023.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const recentArticles = [
    {
      img: b6,
      title: "The Best Fashion Influencers.",
      date: "June 30,2021-2022",
      category: "Organic",
    },
    {
      img: b5,
      title: "Vogue Shopping Weekend.",
      date: "April 2,2021-2022",
      category: "Fruits",
    },
    {
      img: b4,
      title: "Fashion Market Reveals Her Jacket.",
      date: "March 09,2021-2022",
      category: "Vegetables",
    },
    {
      img: b3,
      title: "Summer Trending Fashion Market.",
      date: "January 25,2021-2022",
      category: "Fastfood",
    },
    {
      img: b2,
      title: "Winter 2021 Trending Fashion Market.",
      date: "December 10,2021-2022",
      category: "Vegetables",
    },
  ];

return(
    <div>
      <div className="blog-container">

       <div className="blog-main">
        {blogs.map((b, i) => (
          <div className="blog-card" key={i}>
            <img src={b.img} alt={b.title} />
            <div className="blog-info">
              <p className="blog-meta">
                {b.date} • <span>{b.category}</span>
              </p>
              <h3>{b.title}</h3>
              <p className="blog-text">{b.text}</p>
              <a href="#" className="read-more">
                Read More »
              </a>
            </div>
          </div>
        ))}

        <div className="pagination" style={{borderTop:"1px solid #ddd",padding:"20px" }}>
          <span>Showing 1-6 of 6 item(s)</span>
          <div className="page-buttons">
            <button>Prev</button>
            <button className="active">1</button>
            <button>2</button>
            <button>Next</button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="blog-sidebar">
        <div className="search-box">
          <input type="text" placeholder="Search Our Blog" />
          <button><FaSearch/></button>
        </div>

        <div className="sidebar-section">
          <h4>Recent Articles</h4>
          {recentArticles.map((a, i) => (
            <div className="recent-item" key={i}>
              <img src={a.img} alt={a.title} />
              <div>
                <h5>{a.title}</h5>
                <p>{a.date}</p>
                <p> — <span>{a.category}</span></p>
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar-section">
          <h4>Categories</h4>
          <ul>
            <li> <span><input type="checkbox" name="organic" id="" style={{margin:"5px"}} />Organic</span> <span style={{marginLeft:"6.8rem"}}>-2</span></li>
            <li> <span><input type="checkbox" name="organic" id="" style={{margin:"5px"}} />Fruits</span> <span style={{marginLeft:"8rem"}}>-3</span></li>
            <li> <span><input type="checkbox" name="organic" id="" style={{margin:"5px"}} />Vegetables</span> <span style={{marginLeft:"5.3rem"}}>-2</span></li>
            <li> <span><input type="checkbox" name="organic" id="" style={{margin:"5px"}} />Fastfood</span> <span style={{marginLeft:"6.5rem"}}>-2</span></li>
          </ul>
          <button className="filter-btn">Filter</button>
        </div>
      </aside>
    </div>

  </div>
    )
}

export default Blog;