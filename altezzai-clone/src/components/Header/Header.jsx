import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname === path) return true;
    return false;
  };

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
              className={`cursor-pointer ${
                isActive("/")
                  ? "border-b-2 border-black pb-1"
                  : "hover:text-blue-500"
              }`}
              onClick={() => (window.location.href = "/")}
            >
              Home
            </a>
            <a
              className={`cursor-pointer ${
                isActive("/about")
                  ? "border-b-2 border-black pb-1"
                  : "hover:text-blue-500"
              }`}
              onClick={() => navigate("/about")}
            >
              About Us
            </a>
            <a
              className={`cursor-pointer ${
                isActive("/services")
                  ? "border-b-2 border-black pb-1"
                  : "hover:text-blue-500"
              }`}
              onClick={() => navigate("/services")}
            >
              Services
            </a>
            <a
              className={`cursor-pointer ${
                isActive("/works")
                  ? "border-b-2 border-black pb-1"
                  : "hover:text-blue-500"
              }`}
              onClick={() => navigate("/works")}
            >
              Our Work
            </a>
            <a
              className={`cursor-pointer ${
                isActive("/teams")
                  ? "border-b-2 border-black pb-1"
                  : "hover:text-blue-500"
              }`}
              onClick={() => navigate("/teams")}
            >
              Our Team
            </a>
            <div
              className="relative"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <a className="cursor-pointer hover:text-blue-500">Our Product</a>

              {/* Product Dropdown */}
              {productDropdownOpen && (
                <div className="absolute top-full -left-5 bg-white border border-gray-200 rounded-lg shadow-lg py-2 px-4 w-32 z-50">
                  <div className="space-y-2">
                    <a
                      onClick={() => navigate("/product")}
                      className="block text-gray-700 hover:text-cyan-500 cursor-pointer text-sm"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      Cluesinsight
                    </a>
                    <a
                      onClick={() => navigate("/product")}
                      className="block text-gray-700 hover:text-cyan-500 cursor-pointer text-sm"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      Smart School
                    </a>
                    <a
                      onClick={() => navigate("/product")}
                      className="block text-gray-700 hover:text-cyan-500 cursor-pointer text-sm"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      Shopynker
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 hover:scale-110 transition-all duration-200"
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
