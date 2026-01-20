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
            <li className="hover:text-green-300 cursor-pointer" >Vegetables</li>
            <li className="hover:text-green-300 cursor-pointer" >Fresh Fruits</li>
            <li className="hover:text-green-300 cursor-pointer" >Cookies</li>
            <li className="hover:text-green-300 cursor-pointer" >Dried Fruits</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-300 cursor-pointer" >About Us</li>
            <li className="hover:text-green-300 cursor-pointer" >Delivery</li>
            <li className="hover:text-green-300 cursor-pointer" >Legal Notice</li>
            <li className="hover:text-green-300 cursor-pointer" >Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 hover:text-green-300 cursor-pointer"><FaMapMarkerAlt className="hover:text-green-300 cursor-pointer" /> New York, USA</li>
            <li className="flex gap-2 hover:text-green-300 cursor-pointer"><FaWhatsapp className="hover:text-green-300 cursor-pointer" /> +00 987-654-321</li>
            <li className="flex gap-2 hover:text-green-300 cursor-pointer"><FaEnvelope className="hover:text-green-300 cursor-pointer" /> example@email.com</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <FaFacebookF className="hover:text-green-300 cursor-pointer" />
            <FaTwitter className="hover:text-green-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-green-300 cursor-pointer" />
            <FaInstagram className="hover:text-green-300 cursor-pointer" />
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
