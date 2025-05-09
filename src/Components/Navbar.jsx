import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import Logo from "../assets/tumbuhin-logo.svg";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isIndex, setIsIndex] = useState(true);

  useEffect(() => {
    setIsIndex(location.pathname === "/");
    
    if (location.hash === "#about") {
      setTimeout(() => {
        const element = document.getElementById("about");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleAboutClick = (e) => {
    if (!isIndex) {
      e.preventDefault();
      navigate("/tumbuhin");
      setTimeout(() => {
        const element = document.getElementById("about");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className={`w-full px-6 md:px-16 py-6 fixed top-0 z-50 transition duration-300 ${isIndex ? "bg-transparent" : "bg-white]"}`}>
      <div className="flex justify-between items-center">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
  
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center bg-[#E0F8AC] py-3 px-12 rounded-full">
          <Link to="/tumbuhin" className="font-semibold text-lg text-gray-800 hover:text-green-700 transition">
            Home
          </Link>
          {isIndex ? (
            <a href="#about" className="font-semibold text-lg text-gray-800 hover:text-green-700 transition">
              About
            </a>
          ) : (
            <Link
              to="/"
              onClick={handleAboutClick}
              className="font-semibold text-lg text-gray-800 hover:text-green-700 transition"
            >
              About
            </Link>
          )}
          <Link to="/blogPage" className="font-semibold text-lg text-gray-800 hover:text-green-700 transition">
            Blog
          </Link>

          <Link to="/tokotani" className="font-semibold text-lg text-gray-800 hover:text-green-700 transition">
            Shop
          </Link>
        </div>
  
        {/* Desktop Button */}
        <div className="hidden md:flex justify-between gap-2">
          <Link
            to="/login"
            className="bg-[#294B29] text-[#F3FDE3] py-2 px-6 rounded-full font-medium hover:bg-[#3a4230] transition">
            Get Started Now
          </Link>
        </div>
  
        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <Link
            to="/login"
            className="bg-[#4C563C] text-white p-3 rounded-md hover:bg-[#3a4230] transition"
          >
            <FaBars size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
  
}
