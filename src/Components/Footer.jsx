import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/tumbuhin-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#294B29] text-white py-8 px-6 mt-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-start">
            <img src={Logo} alt="Logo" className="w-25 h-16 mb-4" />
            {/*  <img src={Logo} alt="Logo" className="w-10 h-10" /> */}
            <p className="text-sm text-[]">
              Meningkatkan kualitas hasil pertanian dengan teknologi terbaru untuk masa depan yang lebih hijau dan berkelanjutan.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-green-500">Home</a></li>
              <li><a href="/about" className="hover:text-green-500">About</a></li>
              <li><a href="/blog" className="hover:text-green-500">Blog</a></li>
            </ul>
          </div>


          {/* Column 4: Social Media */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="text-[#F5F7ED] hover:text-green-500">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-[#F5F7ED] hover:text-green-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-[#F5F7ED] hover:text-green-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-[#F5F7ED] hover:text-green-500">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <h1 className="text-[16rem] font-bold text-[#DBE7C9]">TUMBUHIN</h1>

        <div className="mt-8 text-center text-sm text-gray-400">
            
          <p>&copy; 2025 GreenTech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
