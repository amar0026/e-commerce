import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/teslalogo.png";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#07122A] to-[#0B1D3A] text-white px-10 py-14">
      <div className="max-w-7xl mx-auto">

        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">

          {/* Left Logo */}
          <img src={logo} alt="Tesla Logo" className="h-20" />

          {/* Right Newsletter */}
          <div className="w-full lg:w-auto">
            <h2 className="text-lg font-medium mb-3 text-center lg:text-left">
              Subscribe To Our Newsletters
            </h2>

            <div className="flex">
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full lg:w-80 px-4 py-2 rounded-l-md bg-gray-300 text-black outline-none"
              />
              <button className="relative overflow-hidden rounded-r-md group px-6">

                {/* Text */}
                <span className="relative z-10 text-white">
                  Subscribe
                </span>

                {/* Default Background */}
                <span className="absolute inset-0 bg-emerald-500"></span>

                {/* Hover Gradient Slide */}
                <span className="absolute inset-0 bg-linear-to-b from-emerald-500 to-gray-900
    -translate-y-full group-hover:translate-y-0
    transition-transform duration-500">
                </span>

              </button>
            </div>
          </div>

        </div>

        {/* MIDDLE ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3  mb-10">

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 text-sm leading-6">
              Inspired By The Vision Of Tesla,Inc.,<br />Our Platform Is Dedicated
              To Delivering<br />Cutting-Edge Electric Vehicles And<br />Sustainable Energy Solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Vehicles</li>
              <li className="hover:text-white cursor-pointer">Energy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt /> Kolkata, West Bengal, India
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope /> example@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt /> +91 123 456789
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6 flex justify-between items-center">

          <p className="text-gray-400 text-sm">
            © 2026 Tesla Energy. All Rights Reserved.
          </p>

          {/* Social Icons */}
           <div className="flex gap-4">

      {/* X (Twitter) */}
      <div className="bg-white text-black p-2 rounded-full cursor-pointer
                      transition-all duration-300 ease-in-out
                      hover:bg-black hover:text-white
                      hover:scale-110 hover:shadow-xl hover:shadow-black/40">
        <FaXTwitter size={14} />
      </div>

      {/* Facebook */}
      <div className="bg-white text-black p-2 rounded-full cursor-pointer
                      transition-all duration-300 ease-in-out
                      hover:bg-blue-600 hover:text-white
                      hover:scale-110 hover:shadow-xl hover:shadow-blue-500/40">
        <FaFacebookF size={14} />
      </div>

      {/* Instagram */}
      <div className="bg-white text-black p-2 rounded-full cursor-pointer
                      transition-all duration-300 ease-in-out
                      hover:bg-linear-to-r hover:from-pink-500 hover:to-yellow-500
                      hover:text-white
                      hover:scale-110 hover:shadow-xl hover:shadow-pink-500/40">
        <FaInstagram size={14} />
      </div>

    </div>

        </div>

      </div>
    </footer>
  );
}