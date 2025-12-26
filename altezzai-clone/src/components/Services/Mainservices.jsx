import { useState } from "react";
import Header from "../Header/Header";

function Mainservices() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const services = [
    {
      id: 1,
      title: "App Development",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      image: "/assets/Mainservices/servicesimg1.png",
      description:
        "We develop powerful mobile and web apps to meet diverse business needs. Our team builds intuitive, engaging apps for iOS, Android, and web platforms, enhancing user interaction and driving business growth with high-performance applications.",
    },
    {
      id: 2,
      title: "Web Development",
      bgColor: "bg-teal-500",
      textColor: "text-white",
      image: "/assets/Mainservices/servicesimg2.png",
      description:
        "Tailored to meet your business needs, our web development services create robust, scalable, and secure websites. We use the latest technologies to deliver high-quality solutions, from simple brochure sites to complex web applications, ensuring exceptional user experiences from concept to deployment.",
    },
    {
      id: 3,
      title: "Web Designing",
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      image: "/assets/Mainservices/servicesimg3.png",
      description:
        "Great websites start with great design. Our services focus on creating visually stunning, user-friendly interfaces that capture your brand's essence. We blend aesthetics with usability to ensure your website stands out and provides a seamless user experience.",
    },
    {
      id: 4,
      title: "Software Development",
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      image: "/assets/Mainservices/servicesimg4.png",
      description:
        "We streamline business operations with end-to-end software development. Our services include requirement analysis, design, implementation, and support. We build reliable, scalable software tailored to your specific needs, whether desktop applications or enterprise software.",
    },
    {
      id: 5,
      title: "E-commerce Development",
      bgColor: "bg-teal-500",
      textColor: "text-white",
      image: "/assets/Mainservices/servicesimg5.png",
      description:
        "Our e-commerce services create secure, scalable, and user-friendly platforms to boost sales and reach a broader audience. We handle shopping cart integration, payment gateways, inventory management, and more, ensuring a seamless shopping experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-6 lg:py-5">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-3">
          {/* Page Title */}
          <h1
            className="text-4xl lg:text-5xl font-medium text-gray-900 text-center mb-6 lg:mb-8"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Our Services
          </h1>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* First Row - 2 Cards */}
            {services.slice(0, 2).map((service) => (
              <div
                key={service.id}
                className={`${service.bgColor} rounded-3xl p-8 lg:p-10 relative overflow-hidden h-[280px] lg:h-[320px]`}
              >
                <div className="relative z-10">
                  <div className="bg-white text-gray-900 px-4 py-2 rounded-lg inline-block mb-6 lg:mb-8">
                    <span
                      className="font-medium text-lg"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      {service.title}
                    </span>
                  </div>

                  <button
                    onClick={() => openModal(service.id)}
                    className={`flex items-center gap-2 ${service.textColor} hover:opacity-70 transition-colors`}
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

                {/* Service Image */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <img
                    src={service.image}
                    alt={`${service.title} Illustration`}
                    className="w-32 lg:w-40 h-auto"
                  />
                </div>
              </div>
            ))}

            {/* Second Row - 2 Cards */}
            {services.slice(2, 4).map((service) => (
              <div
                key={service.id}
                className={`${service.bgColor} rounded-3xl p-8 lg:p-10 relative overflow-hidden h-[280px] lg:h-[320px]`}
              >
                <div className="relative z-10">
                  <div className="bg-white text-gray-900 px-4 py-2 rounded-lg inline-block mb-6 lg:mb-8">
                    <span
                      className="font-medium text-lg"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      {service.title}
                    </span>
                  </div>

                  <button
                    onClick={() => openModal(service.id)}
                    className={`flex items-center gap-2 ${service.textColor} hover:opacity-70 transition-colors`}
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

                {/* Service Image */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <img
                    src={service.image}
                    alt={`${service.title} Illustration`}
                    className="w-32 lg:w-40 h-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Third Row - 1 Card Centered */}
          <div className="flex justify-center mt-6 lg:mt-8">
            <div
              className={`${services[4].bgColor} rounded-3xl p-8 lg:p-10 relative overflow-hidden h-[280px] lg:h-[320px] w-full max-w-md lg:max-w-lg`}
            >
              <div className="relative z-10">
                <div className="bg-white text-gray-900 px-4 py-2 rounded-lg inline-block mb-6 lg:mb-8">
                  <span
                    className="font-medium text-lg"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {services[4].title}
                  </span>
                </div>

                <button
                  onClick={() => openModal(services[4].id)}
                  className={`flex items-center gap-2 ${services[4].textColor} hover:opacity-70 transition-colors`}
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

              {/* Service Image */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src={services[4].image}
                  alt={`${services[4].title} Illustration`}
                  className="w-32 lg:w-40 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3
                className="text-2xl font-medium text-gray-900"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {services.find((service) => service.id === activeModal)?.title}
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

            {/* Modal Content */}
            <div className="p-6">
              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {
                  services.find((service) => service.id === activeModal)
                    ?.description
                }
              </p>
            </div>

            {/* Modal Footer */}
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
    </div>
  );
}

export default Mainservices;
