import { useState } from "react";

function Services() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-3">
        {/* Section Title */}
        <h2
          className="text-4xl lg:text-5xl font-medium text-gray-900 mb-12 lg:mb-16"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Our Services
        </h2>

        {/* Services Cards Container */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* App Development Card */}
          <div className="flex-1 bg-gray-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden order-1 lg:order-1 min-h-[200px] lg:w-[600px] lg:h-[310px]">
            <div className="relative z-10">
              <div className="bg-white text-gray-900 px-4 py-2 rounded-lg inline-block mb-6 lg:mb-8">
                <span
                  className="font-medium text-lg"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  App Development
                </span>
              </div>

              <button
                onClick={() => openModal("app")}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <span
                  className="text-lg font-medium"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Learn more
                </span>
              </button>
            </div>

            {/* App Development Image */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <img
                src="/assets/servicesimg1.png"
                alt="App Development Illustration"
                className="w-32 lg:w-40 h-auto"
              />
            </div>
          </div>

          {/* Web Development Card */}
          <div className="flex-1 bg-teal-500 rounded-3xl p-8 lg:p-10 relative overflow-hidden order-2 lg:order-2 min-h-[200px] lg:w-[600px] lg:h-[310px]">
            <div className="relative z-10">
              <div className="bg-white text-gray-900 px-4 py-2 rounded-lg inline-block mb-6 lg:mb-8">
                <span
                  className="font-medium text-lg"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Web Development
                </span>
              </div>

              <button
                onClick={() => openModal("web")}
                className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <span
                  className="text-lg font-medium"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Learn more
                </span>
              </button>
            </div>

            
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <img
                src="/assets/servicesimg2.png"
                alt="Web Development Illustration"
                className="w-32 lg:w-40 h-auto"
              />
            </div>
          </div>
        </div>

        
        <div className="flex justify-center order-3">
          <button
            onClick={() => (window.location.href = "/services")}
            className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            style={{ fontFamily: "Space Grotesk" }}
          >
            View More
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

     
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3
                className="text-2xl font-medium text-gray-900"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {activeModal === "app" ? "App Development" : "Web Development"}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            
            <div className="p-6">
              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {activeModal === "app"
                  ? "We develop powerful mobile and web apps to meet diverse business needs. Our team builds intuitive, engaging apps for iOS, Android, and web platforms, enhancing user interaction and driving business growth with high-performance applications."
                  : "Tailored to meet your business needs, our web development services create robust, scalable, and secure websites. We use the latest technologies to deliver high-quality solutions, from simple brochure sites to complex web applications, ensuring exceptional user experiences from concept to deployment."}
              </p>
            </div>

            
            <div className="flex justify-end p-6 border-t border-gray-200">
              <button
                onClick={closeModal}
                className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                style={{ fontFamily: "Space Grotesk" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
