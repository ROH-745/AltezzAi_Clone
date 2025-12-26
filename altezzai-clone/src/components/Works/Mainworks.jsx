import React from "react";

import Header from "../Header/Header";

function Mainworks() {
  const works = [
    {
      id: 1,
      title: "Era Creatio Developers",
      description:
        "An innovative and user-friendly website has been developed for Era Creatio, a dynamic construction company kno...",
      images: ["/assets/works1.jpg", "/assets/works2.jpg"],
      bgColor: "bg-gray-100",
      link: "https://eracreatiodevelopers.com/",
    },
    {
      id: 2,
      title: "Sree Narayana College",
      description:
        "Sree Narayana College , Vatakara was established by the SNDP Union Development and Welfare Society,Vatakara in....",
      images: ["/assets/works3.jpg", "/assets/works4.jpg"],
      bgColor: "bg-gray-100",
      link: "https://sncollegevadakara.org/",
    },

    {
      id: 3,
      title: "Tech Solutions Inc",
      description:
        "A comprehensive digital platform has been developed for Tech Solutions Inc, a leading technology company specializing in...",
      images: ["/assets/works1.jpg", "/assets/works2.jpg"],
      bgColor: "bg-gray-100",
      link: "https://example.com",
    },
    {
      id: 4,
      title: "Green Valley Resort",
      description:
        "Green Valley Resort's website showcases luxury accommodations and premium services with an elegant design approach...",
      images: ["/assets/works3.jpg", "/assets/works4.jpg"],
      bgColor: "bg-gray-100",
      link: "https://example.com",
    },
    {
      id: 5,
      title: "Digital Marketing Pro",
      description:
        "A modern and responsive website created for Digital Marketing Pro, featuring advanced analytics and user engagement...",
      images: ["/assets/works1.jpg", "/assets/works2.jpg"],
      bgColor: "bg-gray-100",
      link: "https://example.com",
    },
    {
      id: 6,
      title: "Healthcare Plus",
      description:
        "Healthcare Plus platform provides seamless patient management and appointment scheduling with intuitive interface...",
      images: ["/assets/works3.jpg", "/assets/works4.jpg"],
      bgColor: "bg-gray-100",
      link: "https://example.com",
    },
    {
      id: 7,
      title: "E-Commerce Hub",
      description:
        "A robust e-commerce solution built for E-Commerce Hub, featuring secure payment integration and inventory management...",
      images: ["/assets/works1.jpg", "/assets/works2.jpg"],
      bgColor: "bg-gray-100",
      link: "https://example.com",
    },
    {
      id: 8,
      title: "Educational Institute",
      description:
        "Educational Institute's learning management system provides comprehensive online education with interactive features...",
      images: ["/assets/works3.jpg", "/assets/works4.jpg"],
      bgColor: "bg-gray-100",
      link: "https://example.com",
    },
    {
      id: 9,
      title: "Financial Services",
      description:
        "Financial Services platform offers secure banking solutions with advanced encryption and user-friendly interface...",
      images: ["/assets/works1.jpg", "/assets/works2.jpg"],
      bgColor: "bg-gray-100",
      link: "https://example.com",
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
            Our Works
          </h1>

          {/* Works Grid - 3 columns on desktop, 1 column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 ">
            {works.map((work) => (
              <div
                key={work.id}
                className={`${work.bgColor} rounded-3xl p-6 lg:p-8 relative h-[400px] lg:h-[450px]`}
              >
                {/* Images Container */}
                <div className="mb-6 relative h-40 lg:h-48">
                  {/* First Image - Background */}
                  <div className="absolute inset-0">
                    <img
                      src={work.images[0]}
                      alt={`${work.title} Screenshot 1`}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  {/* Second Image - Overlapping in center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5">
                    <img
                      src={work.images[1]}
                      alt={`${work.title} Screenshot 2`}
                      className="w-full h-full object-cover rounded-xl shadow-xl border-4 border-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-lg lg:text-xl font-medium text-gray-900"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      {work.title}
                    </h3>

                    {/* Link Icon */}
                    <button
                      onClick={() => window.open(work.link, "_blank")}
                      className="text-teal-500 hover:text-teal-600 transition-colors"
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </div>

                  <p
                    className="text-gray-600 text-sm lg:text-base leading-relaxed"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Mainworks;
