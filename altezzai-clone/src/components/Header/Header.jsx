import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="mx-auto py-6 flex items-center justify-between px-8 sm:px-12 lg:px-16">
       
        <div>
          <img src="public/assets/logo.png" alt="AltezzAi Logo" className="h-12" />
        </div>

        
        <div className="hidden md:flex items-center gap-8">
          {/* Navigation Menu */}
          <nav className="flex gap-8 text-base font-normal text-black">
            <a className="border-b-2 border-black pb-1 cursor-pointer">Home</a>
            <a className="cursor-pointer hover:opacity-70">About Us</a>
            <a className="cursor-pointer hover:opacity-70">Services</a>
            <a className="cursor-pointer hover:opacity-70">Our Work</a>
            <a className="cursor-pointer hover:opacity-70">Our Team</a>
            <a className="cursor-pointer hover:opacity-70">Our Product</a>
          </nav>

         
          <button className="bg-black text-white px-6 py-3 rounded-full text-base hover:bg-gray-800 transition">
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
        <div className="md:hidden px-6 py-8 flex flex-col gap-6 border-t border-gray-100 bg-white text-base">
          <a>Home</a>
          <a>About Us</a>
          <a>Services</a>
          <a>Our Work</a>
          <a>Our Team</a>
          <a>Our Product</a>
          <button className="mt-6 bg-black text-white py-3 rounded-full">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
