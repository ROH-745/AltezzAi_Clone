import React from "react";
import Header from "../Header/Header";

function Maincontact() {
  const handleEmailClick = () => {
    window.open("mailto:enquiry@altezzai.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-3">
          
          <h1
            className="text-4xl lg:text-5xl font-medium text-gray-900 text-center mb-8 lg:mb-10"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Contact Us
          </h1>

          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start max-w-4xl mx-auto">
            
            {/* IMAGE SECTION */}
            <div className="w-full lg:w-2/5 relative flex justify-center">
              <div className="relative max-w-xs lg:max-w-sm w-full">
                <img
                  src="/assets/contact1.png"
                  alt="Contact Us"
                  className="w-full h-auto rounded-3xl"
                />

                
                <div className="absolute bottom-6 left-6 right-6 flex justify-center">
                  <button
                    onClick={handleEmailClick}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse hover:animate-none"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    enquiry@altezzai.com
                  </button>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="w-full lg:w-1/2 lg:ml-16">
              <div className="bg-gray-50 rounded-3xl pt-3 px-3 pb-6 lg:pt-5 lg:px-5 lg:pb-8">
                <h3
                  className="text-xl lg:text-2xl font-medium text-gray-900 mb-2"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Fill the form below:
                </h3>

                <form className="space-y-3 mt-4">

                  <div>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      style={{ fontFamily: "Space Grotesk" }}
                    />
                  </div>

                  
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      style={{ fontFamily: "Space Grotesk" }}
                    />
                  </div>

                  
                  <div>
                    <input
                      type="email"
                      placeholder="E-mail address"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      style={{ fontFamily: "Space Grotesk" }}
                    />
                  </div>

                  
                  <div>
                    <textarea
                      placeholder="Message"
                      rows="4"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                      style={{ fontFamily: "Space Grotesk" }}
                    ></textarea>
                  </div>

                  
                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-xl font-medium transition-colors duration-300"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Maincontact;
