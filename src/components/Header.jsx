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

const navLinks = [
  { name: "Home", path: "/homeGrocery" },
  { name: "Fashion", path: "/homeFashion" },
  { name: "Fashion 2", path: "/homeFashion2" },
  { name: "Sidebar", path: "/leftSidebar" },
  { name: "PL Sidebar", path: "/plsidebar" },
  { name: "Checkout", path: "/checkout" },
  { name: "Wishlist", path: "/wishlist" },
  { name: "Product", path: "/productFull" },
  { name: "Blog", path: "/blog" },
  { name: "Blog Details", path: "/blogDetails" },
  { name: "About", path: "/aboutUs" },
  { name: "Cart", path: "/cart" },
  { name: "Orders", path: "/orders" },
  { name: "Compare", path: "/compare" },
  { name: "FAQ", path: "/faq" },
  { name: "Login", path: "/login" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">

      {/* Top Bar */}
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

        {/* ✅ FIXED Logo Alignment */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaShoppingBag className="text-green-600" />
          <span>
            <span className="text-green-600">Grab</span>it
          </span>
        </Link>

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
          <div className="flex items-center gap-2 cursor-pointer">
            <FaUser /> <span>Account</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaHeart /> <span>Wishlist</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaShoppingBag /> <span>Cart</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-green-600 text-white">
        <div className="flex items-center justify-between px-4 py-3">

          {/* Mobile Toggle */}
          <button
            className="flex items-center gap-2 lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <FaList /> Menu
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-5 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-yellow-300 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="hidden lg:flex items-center gap-2">
            <LocationEdit /> New York
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-green-700 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
