import React from "react";
import { FaSearch } from "react-icons/fa";
import b from "../assets/Blogd1.jpg";
import b2 from "../assets/Blog2.jpg";
import b3 from "../assets/Blog3.jpg";
import b4 from "../assets/Blog4.jpg";
import b5 from "../assets/Blog5.jpg";
import b6 from "../assets/Blog6.jpg";

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
function BlogDetails() {
    return(
        <div>
     <div className="blog-container">
        <div className="blog-main" style={{display:"flex"}}>
          <div>
            <img src={b} style={{borderRadius:"5px"}} />
            <div style={{lineHeight:"1.5"}}>
              <h4 style={{marginTop:"1rem"}}>June 30,2022 - Organic</h4>
              <p>
                <h3 style={{marginTop:"1rem"}}><b>Marketing Guide: 5 Steps to Success.</b></h3>
              </p>
              <p style={{marginTop:"0.7rem",fontSize:"15px",lineHeight:"1.7"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, tenetur sequi, iusto eos sint rem 
                a iste dolorem at qui vitae error,enim porro quae aliquam distinctio id eligendi nemo lo
                Lorem ipsum dolor sit amet consectetur adipisicing elit. It was popularised in 1960s with the release of letrasets sheets nobis consequatur rerum, 
                totam mollitia commodi in hic voluptate quisquam.
                Lorem fugiat nulla! Iure including versions of Lorem Ipsum.
              </p>
              <p style={{marginTop:"1rem",fontSize:"13px",lineHeight:"1.9"}}><i><b>
                The standard chunk of Lorem used since 1500s is reproduced below for those interested. Sections 1.10.32 and 
                1.10.33 from `de Finibus Bonorum et Malorum` by Cicero.
              </b>
              </i></p>
              <p style={{marginTop:"1rem",fontSize:"15px",lineHeight:"1.7"}}>Contrary to popular belief,Lorem ipsum is not simply random text. It has roots in a piece of passages of lorem ipsum
                 a latin professor at Hampden-Sydney College in Virginia.
              </p>
             </div>

            <div style={{gap:"2rem", display:"flex",marginTop:"2rem"}}>
              <img src={b3} alt="" style={{borderRadius:"10px",width:"48%",height:"50%"}} />
              <img src={b4} alt="" style={{borderRadius:"10px",width:"48%",height:"50%"}} />
             </div>
             <p style={{marginTop:"1rem",fontFamily:"sans-serif",fontSize:"11px",lineHeight:"1.9"}}>
                It is a long established fact that render will be distracted by the readable content of a page distracted by the readable when looking at its 
                layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
             </p>
             <p style={{marginTop:"1rem",fontSize:"11px",lineHeight:"1.9"}}>
                There are many variations of passengers of Lorem Ipsum available, but the majority have suffered distracted by the readable alteration in 
                some form, by injected humour.
             </p>
             <p style={{marginTop:"4rem",fontSize:"13px",lineHeight:"1.9"}}>
                Please <a href="70+">login</a> or <a href="70+">register</a> to review the blog comments.
             </p>
          </div>
          
        </div>

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
            <li> <span><input type="checkbox" name="organic" id="" style={{margin:"5px"}} />Organic</span> <span style={{marginLeft:"9.8rem"}}>-2</span></li>
            <li> <span><input type="checkbox" name="organic" id="" style={{margin:"5px"}} />Fruits</span> <span style={{marginLeft:"11rem"}}>-3</span></li>
            <li> <span><input type="checkbox" name="organic" id="" style={{margin:"5px"}} />Vegetables</span> <span style={{marginLeft:"8.3rem"}}>-2</span></li>
            <li> <span><input type="checkbox" name="organic" id="" style={{margin:"5px"}} />Fastfood</span> <span style={{marginLeft:"9.5rem"}}>-2</span></li>
          </ul>
          <button className="filter-btn">Filter</button>
        </div>
      </aside>

     </div>

    </div>
    )
}

export default BlogDetails;