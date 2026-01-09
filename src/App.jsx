import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeGrocery from "./pages/HomeGrocery";
import HomeFashion from "./pages/HomeFashion";
import HomeFashion2 from "./pages/HomeFashion2";
import LeftSidebar from "./pages/LeftSidebar";
import Plsidebar from "./pages/Plsidebar";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import ProductFull from "./pages/ProductFull";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Compare from "./pages/Compare";
import Faq from "./pages/Faq";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeGrocery />} />
          <Route path="/homeFashion" element={<HomeFashion />} />
          <Route path="/homeFashion2" element={<HomeFashion2 />} />
          <Route path="/leftSidebar" element={<LeftSidebar />} />
          <Route path="/plsidebar" element={<Plsidebar />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/productFull" element={<ProductFull />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
