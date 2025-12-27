import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      {/* <header className="bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50" > */}
      <div className="mx-auto py-6 flex items-center justify-between px-8 sm:px-12 lg:px-16">
        <div>
          <img
            src="public/assets/logo.png"
            onClick={() => (window.location.href = "/")}
            alt="AltezzAi Logo"
            className="h-12"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {/* Navigation Menu */}
          <nav className="flex gap-8 text-base font-normal text-black">
            <a
              className="border-b-2 border-black pb-1 cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </a>
            <a
              className="cursor-pointer hover:opacity-70"
              onClick={() => navigate("/about")}
            >
              About Us
            </a>
            <a
              className="cursor-pointer hover:opacity-70"
              onClick={() => navigate("/services")}
            >
              Services
            </a>
            <a
              className="cursor-pointer hover:opacity-70"
              onClick={() => navigate("/works")}
            >
              Our Work
            </a>
            <a
              className="cursor-pointer hover:opacity-70"
              onClick={() => navigate("/teams")}
            >
              Our Team
            </a>
            <a className="cursor-pointer hover:opacity-70">Our Product</a>
          </nav>

          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-6 py-3 rounded-full text-base hover:bg-gray-800 transition"
          >
            Contact Us
          </button>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-8 flex flex-col gap-6 border-t border-gray-100 bg-white text-base cursor-pointer">
          <a onClick={() => (window.location.href = "/")}>Home</a>
          <a onClick={() => navigate("/about")}>About Us</a>
          <a onClick={() => navigate("/services")}>Services</a>
          <a onClick={() => navigate("/works")}>Our Work</a>
          <a onClick={() => navigate("/teams")}>Our Team</a>
          <a>Our Product</a>
          <button
            onClick={() => navigate("/contact")}
            className="mt-6 bg-black text-white py-3 rounded-full"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
