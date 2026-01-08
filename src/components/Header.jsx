import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaPhoneAlt,
  FaWhatsapp,
  FaSearch,
  FaUser,
  FaHeart,
  FaList,
  FaChevronDown
} from "react-icons/fa";
import { LocationEdit } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">

      {/* Top Bar (Desktop only) */}
      <div className="hidden md:flex justify-between items-center bg-gray-100 text-sm px-6 py-2">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><FaPhoneAlt /> +91 987 654 3210</span>
          <span className="flex items-center gap-1"><FaWhatsapp /> +91 987 654 3210</span>
        </div>
        <p>World's Fastest Online Shopping Destination</p>
        <div className="flex gap-4">
          <span>Help?</span>
          <span>Track Order?</span>
          <span className="flex items-center gap-1">English <FaChevronDown /></span>
          <span className="flex items-center gap-1">Dollar <FaChevronDown /></span>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4">

        {/* Logo */}
        <h2 className="text-2xl font-bold">
          <span className="text-green-600 flex items-center gap-1">
            <FaShoppingBag /> Grab
          </span>
          it
        </h2>

        {/* Search */}
        <div className="w-full md:w-1/2 flex">
          <input
            className="flex-grow border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none"
            placeholder="Search Products..."
          />
          <button className="bg-green-600 px-4 text-white rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaUser /> <span>Account</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHeart /> <span>Wishlist</span>
          </div>
          <div className="flex items-center gap-2">
            <FaShoppingBag /> <span>Cart</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-green-600 text-white">
        <div className="flex items-center justify-between px-4 py-3">

          <button
            className="flex items-center gap-2"
            onClick={() => setOpen(!open)}
          >
            <FaList /> Categories
          </button>

          <ul className="hidden lg:flex gap-6">
            <li><Link to="/homeGrocery">H1</Link></li>
            <li><Link to="/homeFashion">P1</Link></li>
            <li><Link to="/homeFashion2">P2</Link></li>
            <li><Link to="/leftSidebar">P3</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>

          <button className="hidden lg:flex items-center gap-2">
            <LocationEdit /> New York
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-green-700 px-4 py-4 space-y-3">
            <Link to="/homeGrocery" className="block">Home</Link>
            <Link to="/homeFashion" className="block">Fashion</Link>
            <Link to="/blog" className="block">Blog</Link>
            <Link to="/login" className="block">Login</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
