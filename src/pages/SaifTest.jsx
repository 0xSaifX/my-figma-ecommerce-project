// import React from "react";
// import "./HomeFashion.css";
// import { ChevronDown, Star } from "lucide-react";



// function HomeFashion({ categoryIcons, newArrivals, dayOfDealProducts, trendingProducts, topRatedProducts, topSellingProducts, handlePrev, handleNext, setTrendingFashion, trendingFashion, setTopRatedFashion, topRatedFashion, setTopSellingFashion, topSellingFashion }) {
//   return (
//     <div className="fashion-page">
//       <div className="fashion-container">
//         <div className="fashion-layout">
//           {/* Sidebar */}
//           <div className="sidebar">
//             {/* Category */}
//             <div className="filter-card">
//               <div className="filter-header">
//                 <h3>Category</h3>
//                 <ChevronDown className="icon" />
//               </div>
//               <div className="filter-content">
//                 <h6>Clothes</h6>
//                 {[
//                   { name: "men's wear", count: 3 },
//                   { name: "women's wear", count: 2 },
//                   { name: "Baby Wear", count: 1 },
//                   { name: "Winter Wear", count: 1 },
//                   { name: "unisex", count: 1 },
//                 ].map((item) => (
//                   <div key={item.name} className="filter-item">
//                     <div className="filter-item-left">
//                       <div className="checkbox" />
//                       <span>{item.name}</span>
//                     </div>
//                     <span>({item.count})</span>
//                   </div>
//                 ))}
//                 <h6>Footwear</h6>
//                 {[
//                   { name: "Sports", count: 3 },
//                   { name: "party wear", count: 2 },
//                   { name: "Casual", count: 1 },
//                   { name: "Baby shoes", count: 1 },
//                 ].map((item) => (
//                   <div key={item.name} className="filter-item">
//                     <div className="filter-item-left">
//                       <div className="checkbox" />
//                       <span>{item.name}</span>
//                     </div>
//                     <span>({item.count})</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Brand */}
//             <div className="filter-card">
//               <div className="filter-header">
//                 <h3>Brand</h3>
//                 <ChevronDown className="icon" />
//               </div>
//               <div className="filter-content">
//                 {[{ name: "Bhisma Organice" }, { name: "Darsh Mart" }].map((item) => (
//                   <div key={item.name} className="filter-item">
//                     <div className="checkbox" />
//                     <span>{item.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Price */}
//             <div className="filter-card">
//               <div className="filter-header">
//                 <h3>Price</h3>
//                 <ChevronDown className="icon" />
//               </div>
//               <div className="filter-content">
//                 {[
//                   { name: "Under $50" },
//                   { name: "$50 to $100" },
//                   { name: "$100 to $200" },
//                   { name: "Above $200" },
//                 ].map((item) => (
//                   <div key={item.name} className="filter-item">
//                     <div className="checkbox" />
//                     <span>{item.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Tags */}
//             <div className="filter-card">
//               <div className="filter-header">
//                 <h3>Tags</h3>
//                 <ChevronDown className="icon" />
//               </div>
//               <div className="filter-content">
//                 <div className="tags">
//                   {["men", "women", "clothes", "shirt", "shoes", "sports", "wallet", "belt", "perfume", "shampoo", "skin", "earring", "lipstick", "makeup"].map((tag) => (
//                     <button key={tag} className="tag-btn">{tag}</button>
//                   ))}
//                 </div>
//                 <button className="filter-btn">Filter</button>
//               </div>
//             </div>

//             {/* Promo Banner */}
//             <div className="promo-banner" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/37f03bf6bc71b8d859625b80c12b510b9607ca99?width=752')" }}>
//               <div className="promo-content">
//                 <h3>Our top most products<br />check it now</h3>
//                 <button>Shop Now</button>
//               </div>
//             </div>
//           </div>

//           {/* Main Section */}
//           <div className="main-section">
//             {/* Category Icons */}
//             <div className="category-icons">
//               {categoryIcons.map((cat) => (
//                 <div key={cat.title} className="category-card" style={{ backgroundColor: cat.bgColor }}>
//                   <div className="category-inner">
//                     <img src={cat.icon} alt={cat.title} />
//                     <h4>{cat.title}</h4>
//                     <p>{cat.items}</p>
//                     {cat.discount && <div className="discount-badge">{cat.discount}</div>}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* New Arrivals */}
//             <div className="section">
//               <div className="section-header">
//                 <h2>New <span>Arrivals</span></h2>
//                 <div className="tabs">
//                   <button className="active">All</button>
//                   <button>Clothes</button>
//                   <button>Footwear</button>
//                   <button>Accessories</button>
//                 </div>
//               </div>
//               <div className="product-grid">
//                 {newArrivals.map((product, idx) => (
//                   <div key={idx} className="product-card">
//                     <div className="product-image">
//                       <img src={product.image} alt={product.title} />
//                       {product.badge && <div className={`badge ${product.badge}`}>{product.badge}</div>}
//                     </div>
//                     <div className="product-info">
//                       <p className="category">{product.category}</p>
//                       <h5>{product.title}</h5>
//                       <div className="stars">
//                         {[...Array(5)].map((_, i) => (
//                           <Star key={i} className={i < product.rating ? "filled" : ""} />
//                         ))}
//                       </div>
//                       <div className="price">
//                         <span className="current">{product.price}</span>
//                         <span className="old">{product.originalPrice}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="section">
//               <div className="section-header">
//                 <h2>
//                   Day of <span>Deal</span>
//                 </h2>
//                 <div className="nav-btns">
//                   <button onClick={handlePrev}>
//                     <ChevronLeft />
//                   </button>
//                   <button onClick={handleNext}>
//                     <ChevronRight />
//                   </button>
//                 </div>
//               </div>

//               <div className="product-grid">
//                 {dayOfDealProducts.map((product, idx) => (
//                   <div key={idx} className="product-card">
//                     <div className="product-image">
//                       <img src={product.image} alt={product.title} />
//                       {product.badge && (
//                         <div className={`badge ${product.badge}`}>{product.badge}</div>
//                       )}
//                     </div>
//                     <div className="product-info">
//                       <p className="category">{product.category}</p>
//                       <h5>{product.title}</h5>
//                       <div className="stars">
//                         {[...Array(5)].map((_, i) => (
//                           <Star key={i} className={i < product.rating ? "filled" : ""} />
//                         ))}
//                       </div>
//                       <div className="price">
//                         <span className="current">{product.price}</span>
//                         <span className="old">{product.originalPrice}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Trending, Top Rated, Top Selling */}
//             <div className="section-group">
//               {[ 
//                 { title: "Trending", products: trendingProducts, state: trendingFashion, setState: setTrendingFashion },
//                 { title: "Top Rated", products: topRatedProducts, state: topRatedFashion, setState: setTopRatedFashion },
//                 { title: "Top Selling", products: topSellingProducts, state: topSellingFashion, setState: setTopSellingFashion }
//               ].map((section) => (
//                 <div key={section.title} className="section">
//                   <div className="section-header">
//                     <h2>{section.title}</h2>
//                     <div className="tabs">
//                       {["All", "Men", "Women", "Accessories"].map((tab) => (
//                         <button
//                           key={tab}
//                           className={section.state === tab ? "active" : ""}
//                           onClick={() => section.setState(tab)}
//                         >
//                           {tab}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="product-grid small">
//                     {section.products.map((product, idx) => (
//                       <div key={idx} className="product-card">
//                         <div className="product-image small">
//                           <img src={product.image} alt={product.title} />
//                         </div>
//                         <div className="product-info small">
//                           <h5>{product.title}</h5>
//                           <div className="stars">
//                             {[...Array(5)].map((_, i) => (
//                               <Star key={i} className={i < product.rating ? "filled" : ""} />
//                             ))}
//                           </div>
//                           <div className="price">
//                             <span className="current">{product.price}</span>
//                             <span className="old">{product.originalPrice}</span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeFashion;












// import React, { useState } from "react";
// import styled from "styled-components";
// import { ChevronDown, Star } from "lucide-react";

// // ===== Styled Components =====
// const PageContainer = styled.div`
//   min-height: 100vh;
//   background: #fff;
//   padding: 2rem 1rem;

//   @media (min-width: 1024px) {
//     padding: 3rem 2rem;
//   }
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   justify-content: space-between;

//   @media (min-width: 1024px) {
//     flex-direction: row;
//   }
// `;

// const Sidebar = styled.aside`
//   width: 100%;
//   max-width: 350px;
//   flex-shrink: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const FilterBox = styled.div`
//   border: 1px solid #e5e7eb;
//   border-radius: 10px;
//   background: #fff;
//   overflow: hidden;
// `;

// const FilterHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
// `;

// const FilterTitle = styled.h3`
//   font-size: 17px;
//   font-weight: 600;
//   color: #047857;
// `;

// const FilterBody = styled.div`
//   border-top: 1px solid #f3f4f6;
//   padding: 1rem;
// `;

// const FilterOption = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 0.5rem;
//   color: #4b5563;

//   span:last-child {
//     color: #9ca3af;
//   }
// `;

// const CheckboxOption = styled.label`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   color: #4b5563;
//   margin-bottom: 0.5rem;

//   input {
//     accent-color: #2563eb;
//   }
// `;

// const Main = styled.main`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;
// `;

// const CategoryGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 1.5rem;

//   @media (min-width: 640px) {
//     justify-content: space-between;
//   }
// `;

// const CategoryCard = styled.div`
//   width: 180px;
//   height: 170px;
//   border-radius: 10px;
//   position: relative;
//   background: ${(props) => props.bgColor || "#fff"};
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
// `;

// const DiscountTag = styled.span`
//   position: absolute;
//   top: 8px;
//   right: 8px;
//   background: #2563eb;
//   color: white;
//   font-size: 12px;
//   padding: 2px 6px;
//   border-radius: 4px;
// `;

// const CategoryTitle = styled.h4`
//   font-weight: 600;
//   color: #047857;
//   margin-top: 0.5rem;
// `;

// const CategoryItems = styled.p`
//   font-size: 14px;
//   color: #6b7280;
// `;

// const SectionHeader = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1.5rem;
// `;

// const SectionTitle = styled.h2`
//   font-size: 24px;
//   font-weight: 700;
//   color: #047857;

//   span {
//     color: #2563eb;
//   }
// `;

// const Tabs = styled.div`
//   display: flex;
//   gap: 1rem;
//   font-size: 14px;
//   color: #6b7280;
// `;

// const TabButton = styled.button`
//   text-transform: uppercase;
//   color: ${(props) => (props.active ? "#2563eb" : "#6b7280")};
//   font-weight: ${(props) => (props.active ? "600" : "400")};
//   transition: color 0.2s ease;

//   &:hover {
//     color: #047857;
//   }
// `;

// const ProductGrid = styled.div`
//   display: grid;
//   gap: 1.5rem;
//   grid-template-columns: repeat(1, 1fr);

//   @media (min-width: 640px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (min-width: 1280px) {
//     grid-template-columns: repeat(4, 1fr);
//   }
// `;

// const ProductCard = styled.div`
//   border: 1px solid #e5e7eb;
//   border-radius: 10px;
//   background: white;
//   overflow: hidden;
//   transition: box-shadow 0.3s ease;

//   &:hover {
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
//   }
// `;

// const ProductImage = styled.div`
//   position: relative;
//   img {
//     width: 100%;
//     height: 14rem;
//     object-fit: cover;
//   }
// `;

// const Badge = styled.div`
//   position: absolute;
//   top: 12px;
//   right: 12px;
//   padding: 3px 8px;
//   border-radius: 4px;
//   color: white;
//   font-size: 12px;
//   background: ${(props) =>
//     props.type === "sale" ? "#ef4444" : "#16a34a"};
// `;

// const ProductInfo = styled.div`
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   gap: 0.3rem;

//   p {
//     color: #9ca3af;
//     font-size: 14px;
//   }

//   h5 {
//     color: #047857;
//     font-weight: 500;
//     line-height: 1.3;
//   }
// `;

// const PriceRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   span:first-child {
//     color: #047857;
//     font-weight: 600;
//   }

//   span:last-child {
//     color: #9ca3af;
//     text-decoration: line-through;
//   }
// `;

// // ===== Dummy Data =====
// const categoryIcons = [
//   { title: "Clothes", items: "320 Items", bgColor: "#FFF6EC" },
//   { title: "Watches", items: "65 Items", bgColor: "#E2FDE2" },
//   { title: "Dresses", items: "548 Items", bgColor: "#FFEAE9", discount: "15%" },
//   { title: "Glasses", items: "48 Items", bgColor: "#FDE1F5", discount: "10%" },
//   { title: "Hats & Caps", items: "59 Items", bgColor: "#ECF0FF" },
// ];

// const newArrivals = [
//   { category: "Men's Wear", title: "Stylish Printed Shirt", price: "$87.00", originalPrice: "$59.00", rating: 4 },
//   { category: "Jewellery", title: "Rose Gold Earring", price: "$80.00", originalPrice: "$60.00", rating: 4, badge: "sale" },
//   { category: "Lipstick", title: "Matte Lipstick", price: "$30.00", originalPrice: "$20.00", rating: 2 },
//   { category: "Women's Wear", title: "Printed Dress", price: "$85.00", originalPrice: "$78.00", rating: 4 },
// ];

// // ===== Component =====
// export default function HomeFashion() {
//   const [activeTab, setActiveTab] = useState("All");

//   return (
//     <PageContainer>
//       <ContentWrapper>
//         {/* Sidebar */}
//         <Sidebar>
//           <FilterBox>
//             <FilterHeader>
//               <FilterTitle>Category</FilterTitle>
//               <ChevronDown />
//             </FilterHeader>
//             <FilterBody>
//               {["Men's wear", "Women's wear", "Baby wear", "Winter wear", "Unisex"].map((item) => (
//                 <FilterOption key={item}>
//                   <span>{item}</span>
//                   <span>(3)</span>
//                 </FilterOption>
//               ))}
//             </FilterBody>
//           </FilterBox>

//           <FilterBox>
//             <FilterHeader>
//               <FilterTitle>Price</FilterTitle>
//               <ChevronDown />
//             </FilterHeader>
//             <FilterBody>
//               {["Under $50", "$50-$100", "$100-$200", "Above $200"].map((item) => (
//                 <CheckboxOption key={item}>
//                   <input type="checkbox" />
//                   {item}
//                 </CheckboxOption>
//               ))}
//             </FilterBody>
//           </FilterBox>
//         </Sidebar>

//         {/* Main Content */}
//         <Main>
//           {/* Category Section */}
//           <CategoryGrid>
//             {categoryIcons.map((cat) => (
//               <CategoryCard key={cat.title} bgColor={cat.bgColor}>
//                 <CategoryTitle>{cat.title}</CategoryTitle>
//                 <CategoryItems>{cat.items}</CategoryItems>
//                 {cat.discount && <DiscountTag>{cat.discount}</DiscountTag>}
//               </CategoryCard>
//             ))}
//           </CategoryGrid>

//           {/* Product Section */}
//           <section>
//             <SectionHeader>
//               <SectionTitle>
//                 New <span>Arrivals</span>
//               </SectionTitle>
//               <Tabs>
//                 {["All", "Clothes", "Footwear", "Accessories"].map((tab) => (
//                   <TabButton
//                     key={tab}
//                     active={tab === activeTab}
//                     onClick={() => setActiveTab(tab)}
//                   >
//                     {tab}
//                   </TabButton>
//                 ))}
//               </Tabs>
//             </SectionHeader>

//             <ProductGrid>
//               {newArrivals.map((p, i) => (
//                 <ProductCard key={i}>
//                   <ProductImage>
//                     <img
//                       src={`https://api.builder.io/api/v1/image/assets/TEMP/?width=548`}
//                       alt={p.title}
//                     />
//                     {p.badge && <Badge type={p.badge}>{p.badge}</Badge>}
//                   </ProductImage>
//                   <ProductInfo>
//                     <p>{p.category}</p>
//                     <h5>{p.title}</h5>
//                     <div>
//                       {[...Array(5)].map((_, idx) => (
//                         <Star
//                           key={idx}
//                           size={16}
//                           color={idx < p.rating ? "#facc15" : "#d1d5db"}
//                           fill={idx < p.rating ? "#facc15" : "none"}
//                         />
//                       ))}
//                     </div>
//                     <PriceRow>
//                       <span>{p.price}</span>
//                       <span>{p.originalPrice}</span>
//                     </PriceRow>
//                   </ProductInfo>
//                 </ProductCard>
//               ))}
//             </ProductGrid>
//           </section>
//         </Main>
//       </ContentWrapper>
//     </PageContainer>
//   );
// }




import { ChevronDown, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
];

const trendingProducts = [
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/6405bcb5f9a6764b7e92e9cbc03a625dc6f1de52?width=150", title: "Men's stylish printed shirt", category: "Fashion", price: "$45.00", originalPrice: "$42.00" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/9ecc202ac4d034d3823b1c5ce0121c71c75a3c5b?width=150", title: "Cotton Clothes Sets for Boys", category: "Baby Wear", price: "$30.00", originalPrice: "$25.00" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/dfaf080776f4cf77736b39392bebe19dd2e824ff?width=150", title: "Men's Leather Belt", category: "Belt", price: "$65.00", originalPrice: "$62.00" },
];

const topRatedProducts = [
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/60db410a9271034a07e2dcac5d14cc07bae1eab9?width=150", title: "Rose Gold Earring", category: "jewellery", price: "$65.00", originalPrice: "$62.00" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/de3efca52f8d8fed7449f7d2d1d6dd4f3365e3b9?width=150", title: "Men's Wear printed shirt", category: "Fashion", price: "$78.00", originalPrice: "$56.00" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/ad92a1f8a15f995bc0550e9624706fd208d89f36?width=150", title: "Women's casual shoes", category: "shoes", price: "$30.00", originalPrice: "$25.00" },
];

const topSellingProducts = [
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/93aebd551bcd3c8135e3acc2fc2cbcf1da28ee8d?width=150", title: "Liquid Matte Lipstick", category: "Lipstick", price: "$55.00", originalPrice: "$50.00" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/3c356bcb1e103e86bb168e85126353902f5e7a49?width=150", title: "Women's wallet Hand Purse", category: "wallet", price: "$55.00", originalPrice: "$52.00" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/45d79ce33bc8bd546416524797a9a0170ce5b023?width=150", title: "Long lasting perfume", category: "perfume", price: "$11.00", originalPrice: "$10.00" },
];

const dayOfDealProducts = [
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/c9a427cc1be0ea377b13f006b63c79fa1c1c58db?width=548", category: "Body Lotion", title: "Body Lotion for Dry Skin", price: "$3.00", originalPrice: "$2.00", badge: "new" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/733159971dd19cfccd9a44667a1370375db7bda8?width=548", category: "women's wear", title: "Princess Look fashion Dress", price: "$65.00", originalPrice: "$58.00", badge: "sale" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/410cb337ad853a4405d2e8107329d3238e5c6b7e?width=548", category: "Sports", title: "Women's casual shoes", price: "$600.00", originalPrice: "$500.00", badge: "sale" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/26a715316be1cf0b14db019519e2ff2a427ac3b4?width=548", category: "Fashion", title: "Mixed Nuts Berries Pack", price: "$56.00", originalPrice: "$45.00", badge: "sale" },
];

 function HomeFashion() {
  const [trendingFashion, setTrendingFashion] = useState(0);
  const [topRatedFashion, setTopRatedFashion] = useState(0);
  const [topSellingFashion, setTopSellingFashion] = useState(0);

  const handlePrev = (setter, Fashion) => {
    setter(Fashion === 0 ? 0 : Fashion - 1);
  };

  const handleNext = (setter, Fashion, length) => {
    setter(Fashion < length - 3 ? Fashion + 1 : Fashion);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[376px] flex flex-col gap-6 flex-shrink-0">
            <div className="rounded-[5px] border border-[#EEEEEE] bg-white">
              <div className="flex items-center justify-between px-4 py-5">
                <h3 className="font-poppins text-[17px] font-medium text-green-primary">Category</h3>
                <ChevronDown className="w-4 h-4 text-[#212529]" />
              </div>
              <div className="border-t border-[#EEEEEE] px-4 py-4 max-h-[500px] overflow-y-auto">
                <h6 className="font-manrope text-[15px] font-bold text-gray-text mb-4">Clothes</h6>
                {[
                  { name: "men's wear", count: 3 },
                  { name: "women's wear", count: 2 },
                  { name: "Baby Wear", count: 1 },
                  { name: "Winter Wear", count: 1 },
                  { name: "unisex", count: 1 },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-[18px] h-[18px] rounded-[5px] border border-[#EEEEEE] bg-white" />
                      <span className="font-poppins text-[14px] text-gray-text capitalize">{item.name}</span>
                    </div>
                    <span className="font-poppins text-[14px] text-gray-text">({item.count})</span>
                  </div>
                ))}

                <h6 className="font-manrope text-[15px] font-bold text-gray-text mt-6 mb-4">Footwear</h6>
                {[
                  { name: "Sports", count: 3 },
                  { name: "party wear", count: 2 },
                  { name: "Casual", count: 1 },
                  { name: "Baby shoes", count: 1 },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-[18px] h-[18px] rounded-[5px] border border-[#EEEEEE] bg-white" />
                      <span className="font-poppins text-[14px] text-gray-text capitalize">{item.name}</span>
                    </div>
                    <span className="font-poppins text-[14px] text-gray-text">({item.count})</span>
                  </div>
                ))}

                <h6 className="font-manrope text-[15px] font-bold text-gray-text mt-6 mb-4">Accessories</h6>
                {[
                  { name: "wallet", count: 1 },
                  { name: "Belt", count: 1 },
                  { name: "perfume", count: 1 },
                  { name: "shampoo", count: 1 },
                  { name: "Body Lotion", count: 1 },
                  { name: "jewellery", count: 1 },
                  { name: "Lipstick", count: 1 },
                  { name: "makeup kit", count: 1 },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-[18px] h-[18px] rounded-[5px] border border-[#EEEEEE] bg-white" />
                      <span className="font-poppins text-[14px] text-gray-text capitalize">{item.name}</span>
                    </div>
                    <span className="font-poppins text-[14px] text-gray-text">({item.count})</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[5px] border border-[#EEEEEE] bg-white">
              <div className="flex items-center justify-between px-4 py-5">
                <h3 className="font-poppins text-[17px] font-medium text-green-primary">Brand</h3>
                <ChevronDown className="w-4 h-4 text-[#212529]" />
              </div>
              <div className="border-t border-[#EEEEEE] px-4 py-4">
                {[{ name: "Bhisma Organice" }, { name: "Darsh Mart" }].map((item) => (
                  <div key={item.name} className="flex items-center gap-3 mb-4">
                    <div className="w-[18px] h-[18px] rounded-[5px] border border-[#EEEEEE] bg-white" />
                    <span className="font-poppins text-[14px] text-gray-text capitalize">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[5px] border border-[#EEEEEE] bg-white">
              <div className="flex items-center justify-between px-4 py-5">
                <h3 className="font-poppins text-[17px] font-medium text-green-primary">Price</h3>
                <ChevronDown className="w-4 h-4 text-[#212529]" />
              </div>
              <div className="border-t border-[#EEEEEE] px-4 py-4">
                {[
                  { name: "Under $50" },
                  { name: "$50 to $100" },
                  { name: "$100 to $200" },
                  { name: "Above $200" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3 mb-4">
                    <div className="w-[18px] h-[18px] rounded-[5px] border border-[#EEEEEE] bg-white" />
                    <span className="font-poppins text-[14px] text-gray-text capitalize">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[5px] border border-[#EEEEEE] bg-white">
              <div className="flex items-center justify-between px-4 py-5">
                <h3 className="font-poppins text-[17px] font-medium text-green-primary">Tags</h3>
                <ChevronDown className="w-4 h-4 text-[#212529]" />
              </div>
              <div className="border-t border-[#EEEEEE] px-4 py-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["men", "women", "clothes", "shirt", "shoes", "sports", "wallet", "belt", "perfume", "shampoo", "skin", "earring", "lipstick", "makeup"].map((tag) => (
                    <button key={tag} className="px-2 py-1 rounded-[5px] bg-blue-primary text-white font-poppins text-[13px] font-light capitalize">
                      {tag}
                    </button>
                  ))}
                </div>
                <button className="px-4 py-2 rounded-[5px] bg-blue-primary text-white font-poppins text-[14px] font-medium">
                  Filter
                </button>
              </div>
            </div>

            <div className="rounded-[5px] bg-cover bg-center overflow-hidden relative h-[400px]" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/37f03bf6bc71b8d859625b80c12b510b9607ca99?width=752')" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="p-8 flex flex-col justify-center h-[180px] relative z-10">
                <h3 className="font-poppins text-[22px] font-semibold text-green-primary leading-[32px] capitalize mb-6">
                  Our top most products<br />check it now
                </h3>
                <button className="px-4 py-1.5 rounded-[5px] bg-blue-primary text-white font-poppins text-[14px] font-medium w-fit">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-6 overflow-x-auto pb-4 mb-12">
              {categoryIcons.map((cat) => (
                <div key={cat.title} className={`w-full sm:w-[215px] h-[180px] rounded-[5px] relative flex-shrink-0`} style={{ backgroundColor: cat.bgColor }}>
                  <div className="w-full h-full bg-gradient-to-b from-white/0 via-white/50 to-white absolute inset-0" />
                  <div className="relative w-[185px] h-[150px] m-[15px] rounded-[5px] bg-white shadow-[0_5px_15px_rgba(88,110,125,0.1)]">
                    <img src={cat.icon} alt={cat.title} className="w-[50px] h-[50px] absolute left-1/2 transform -translate-x-1/2 top-[25px]" />
                    <h4 className="absolute left-1/2 transform -translate-x-1/2 top-[85px] font-manrope text-[15px] font-bold text-green-primary capitalize text-center">
                      {cat.title}
                    </h4>
                    <p className="absolute left-1/2 transform -translate-x-1/2 top-[111px] font-poppins text-[13px] font-light text-gray-text text-center">
                      {cat.items}
                    </p>
                    {cat.discount && (
                      <div className="absolute right-0 top-0 px-1.5 py-0.5 rounded-tr-[5px] bg-blue-primary">
                        <span className="font-poppins text-[12px] font-semibold text-white">{cat.discount}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-manrope text-[25px] font-bold text-green-primary">
                  New <span className="text-blue-primary">Arrivals</span>
                </h2>
                <div className="flex gap-8 text-[14px] font-poppins font-medium uppercase tracking-[0.7px] text-gray-text">
                  <button className="text-blue-primary">All</button>
                  <button>Clothes</button>
                  <button>Footwear</button>
                  <button>accessories</button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newArrivals.map((product, idx) => (
                  <div key={idx} className="w-full rounded-[5px] border border-[#EEEEEE] overflow-hidden bg-white hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img src={product.image} alt={product.title} className="w-full h-[240px] object-cover" />
                      {product.badge && (
                        <div className={`absolute top-[11px] right-[11px] px-2.5 py-1 rounded-[5px] ${product.badge === 'sale' ? 'bg-[#FF7070]' : 'bg-green-primary'}`}>
                          <span className="font-poppins text-[11px] font-medium text-white uppercase tracking-wide">
                            {product.badge}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="border-t border-[#EEEEEE] p-5">
                      <p className="font-manrope text-[13px] text-gray-light capitalize mb-2">{product.category}</p>
                      <h5 className="font-poppins text-[14px] text-green-primary capitalize mb-4 leading-[22px] tracking-[0.85px]">
                        {product.title}
                      </h5>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-[13px] h-[14px] ${i < product.rating ? 'fill-[#F27D0C] text-[#F27D0C]' : 'fill-gray-text text-gray-text'} opacity-50`} />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-poppins text-[14px] font-bold text-green-primary">{product.price}</span>
                        <span className="font-poppins text-[14px] text-gray-text line-through">{product.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-manrope text-[25px] font-bold text-green-primary">
                  Day of the <span className="text-blue-primary">deal</span>
                </h2>
                <div className="px-6 py-2 rounded-[5px] bg-[#F8F8FB] flex items-center gap-2">
                  <span className="font-poppins text-[15px] font-semibold text-green-primary">25</span>
                  <span className="font-poppins text-[14px] text-green-primary">Days</span>
                  <span className="font-poppins text-[15px] font-semibold text-green-primary">:</span>
                  <span className="font-poppins text-[15px] font-semibold text-green-primary">23</span>
                  <span className="font-poppins text-[15px] font-semibold text-green-primary">:</span>
                  <span className="font-poppins text-[15px] font-semibold text-green-primary">59</span>
                  <span className="font-poppins text-[15px] font-semibold text-green-primary">:</span>
                  <span className="font-poppins text-[15px] font-semibold text-green-primary">54</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {dayOfDealProducts.map((product, idx) => (
                  <div key={idx} className="w-full rounded-[5px] border border-[#EEEEEE] overflow-hidden bg-white hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img src={product.image} alt={product.title} className="w-full h-[240px] object-cover" />
                      {product.badge && (
                        <div className={`absolute top-[11px] right-[11px] px-2.5 py-1 rounded-[5px] ${product.badge === 'sale' ? 'bg-[#FF7070]' : 'bg-green-primary'}`}>
                          <span className="font-poppins text-[11px] font-medium text-white uppercase tracking-wide">
                            {product.badge}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="border-t border-[#EEEEEE] p-5">
                      <p className="font-manrope text-[13px] text-gray-light capitalize mb-2">{product.category}</p>
                      <h5 className="font-poppins text-[14px] text-green-primary capitalize mb-4 leading-[22px] tracking-[0.85px]">
                        {product.title}
                      </h5>
                      <div className="flex items-center gap-2">
                        <span className="font-poppins text-[14px] font-bold text-green-primary">{product.price}</span>
                        <span className="font-poppins text-[14px] text-gray-text line-through">{product.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[5px] bg-cover bg-center h-[400px] mb-12 flex items-center justify-end px-8 relative overflow-hidden" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/ff0aaa200776300bceb21bb9653a00e3241029d7?width=2352')" }}>
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10 text-right max-w-[390px]">
                <h2 className="font-manrope text-[50px] font-bold text-green-primary leading-[65px] mb-8">
                  Shopping Today<br />Fashion sale
                </h2>
                <p className="font-manrope text-[28px] font-light text-blue-primary mb-6">
                  30% off <span className="text-gray-text">Hurry up!!!</span>
                </p>
                <button className="px-4 py-2 rounded-[5px] bg-blue-primary text-white font-poppins text-[14px] font-medium">
                  Shop now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-manrope text-[25px] font-bold text-green-primary">
                    Trending <span className="text-blue-primary">Items</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  {trendingProducts.map((product, idx) => (
                    <div key={idx} className="w-full h-[111px] rounded-[5px] border border-[#EEEEEE] bg-white flex items-center gap-4 px-4 hover:shadow-md transition-shadow">
                      <div className="w-[75px] h-[66px] rounded-[5px] overflow-hidden flex-shrink-0">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-poppins text-[14px] font-medium text-gray-text capitalize mb-1 leading-[24px] tracking-[0.2px] truncate">
                          {product.title}
                        </h5>
                        <p className="font-manrope text-[13px] text-gray-light capitalize mb-2 leading-[24px] tracking-[0.3px]">
                          {product.category}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="font-poppins text-[14px] font-bold text-green-primary">{product.price}</span>
                          <span className="font-poppins text-[12px] text-gray-text line-through">{product.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button onClick={() => handlePrev(setTrendingFashion, trendingFashion)} className="p-2">
                    <ChevronLeft className="w-[9px] h-[30px] text-green-primary opacity-75" />
                  </button>
                  <button onClick={() => handleNext(setTrendingFashion, trendingFashion, trendingProducts.length)} className="p-2">
                    <ChevronRight className="w-[9px] h-[30px] text-green-primary opacity-75" />
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-manrope text-[25px] font-bold text-green-primary">
                    Top <span className="text-blue-primary">Rated</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  {topRatedProducts.map((product, idx) => (
                    <div key={idx} className="w-full h-[111px] rounded-[5px] border border-[#EEEEEE] bg-white flex items-center gap-4 px-4 hover:shadow-md transition-shadow">
                      <div className="w-[75px] h-[66px] rounded-[5px] overflow-hidden flex-shrink-0">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-poppins text-[14px] font-medium text-gray-text capitalize mb-1 leading-[24px] tracking-[0.2px] truncate">
                          {product.title}
                        </h5>
                        <p className="font-manrope text-[13px] text-gray-light capitalize mb-2 leading-[24px] tracking-[0.3px]">
                          {product.category}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="font-poppins text-[14px] font-bold text-green-primary">{product.price}</span>
                          <span className="font-poppins text-[12px] text-gray-text line-through">{product.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button onClick={() => handlePrev(setTopRatedFashion, topRatedFashion)} className="p-2">
                    <ChevronLeft className="w-[9px] h-[30px] text-green-primary opacity-75" />
                  </button>
                  <button onClick={() => handleNext(setTopRatedFashion, topRatedFashion, topRatedProducts.length)} className="p-2">
                    <ChevronRight className="w-[9px] h-[30px] text-green-primary opacity-75" />
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-manrope text-[25px] font-bold text-green-primary">
                    Top <span className="text-blue-primary">Selling</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  {topSellingProducts.map((product, idx) => (
                    <div key={idx} className="w-full h-[111px] rounded-[5px] border border-[#EEEEEE] bg-white flex items-center gap-4 px-4 hover:shadow-md transition-shadow">
                      <div className="w-[75px] h-[66px] rounded-[5px] overflow-hidden flex-shrink-0">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-poppins text-[14px] font-medium text-gray-text capitalize mb-1 leading-[24px] tracking-[0.2px] truncate">
                          {product.title}
                        </h5>
                        <p className="font-manrope text-[13px] text-gray-light capitalize mb-2 leading-[24px] tracking-[0.3px]">
                          {product.category}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="font-poppins text-[14px] font-bold text-green-primary">{product.price}</span>
                          <span className="font-poppins text-[12px] text-gray-text line-through">{product.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button onClick={() => handlePrev(setTopSellingFashion, topSellingFashion)} className="p-2">
                    <ChevronLeft className="w-[9px] h-[30px] text-green-primary opacity-75" />
                  </button>
                  <button onClick={() => handleNext(setTopSellingFashion, topSellingFashion, topSellingProducts.length)} className="p-2">
                    <ChevronRight className="w-[9px] h-[30px] text-green-primary opacity-75" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HomeFashion;