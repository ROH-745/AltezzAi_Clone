
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Product() {
  return (
    <div className=" min-h-screen flex flex-col">
      
      <Header />

      
      <main className="flex-1 flex items-center justify-center">
        <div className="h-[80vh] flex items-center justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
            COMING SOON...
          </h1>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Product;
