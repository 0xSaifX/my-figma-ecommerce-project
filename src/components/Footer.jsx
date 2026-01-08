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
    <footer className="bg-gray-500 text-gray-300">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 py-12">

        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FaShoppingBag /> Grabit
          </h2>
          <p className="mt-4 text-sm">
            Biggest grocery marketplace. Get your daily needs.
          </p>
        </div>

        <div>
          <h3 className="text-white mb-3">Category</h3>
          <ul className="space-y-2 text-sm">
            <li>Vegetables</li>
            <li>Fresh Fruits</li>
            <li>Cookies</li>
            <li>Dried Fruits</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><FaMapMarkerAlt /> New York, USA</li>
            <li className="flex gap-2"><FaWhatsapp /> +00 9876543210</li>
            <li className="flex gap-2"><FaEnvelope /> example@email.com</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
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
