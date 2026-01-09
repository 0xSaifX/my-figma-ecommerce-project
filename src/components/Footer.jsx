import {
  FaShoppingBag,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-gray-200">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 py-12">

        <div>
          <h2 className="text-xl font-bold text-green-700 flex items-center gap-2">
            <FaShoppingBag className="text-green-700"/> Grabit
          </h2>
          <p className="mt-4 text-sm">
            Biggest grocery marketplace. Get your daily needs.
          </p>
        </div>

        <div>
          <h3 className="text-white mb-3">Category</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-300" >Vegetables</li>
            <li className="hover:text-green-300" >Fresh Fruits</li>
            <li className="hover:text-green-300" >Cookies</li>
            <li className="hover:text-green-300" >Dried Fruits</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-300" >About Us</li>
            <li className="hover:text-green-300" >Delivery</li>
            <li className="hover:text-green-300" >Legal Notice</li>
            <li className="hover:text-green-300" >Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 hover:text-green-300"><FaMapMarkerAlt className="hover:text-green-300" /> New York, USA</li>
            <li className="flex gap-2 hover:text-green-300"><FaWhatsapp className="hover:text-green-300" /> +00 9876543210</li>
            <li className="flex gap-2 hover:text-green-300"><FaEnvelope className="hover:text-green-300" /> example@email.com</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <FaFacebookF className="hover:text-green-300" />
            <FaTwitter className="hover:text-green-300" />
            <FaLinkedinIn className="hover:text-green-300" />
            <FaInstagram className="hover:text-green-300" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-sm py-4">
        © 2026 <span className="text-green-500">Grabit</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
