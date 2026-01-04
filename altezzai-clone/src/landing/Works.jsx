import React, { useState } from "react";

function Works() {
  const [flippedCards, setFlippedCards] = useState({});

  const handleImageClick = (workId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [workId]: !prev[workId],
    }));
  };
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
      title: "kannur university research cell",
      description:
        "kannur university research cells application for guidship....",
      images: ["/assets/works5.jpg", "/assets/work6.jpg"],
      bgColor: "bg-gray-100",
      link: "https://www.kannuruniversity.ac.in/en/",
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-3">
        {/* Section Title */}
        {/* <h2
          className="text-4xl lg:text-5xl font-medium text-gray-900 text-center mb-12 lg:mb-16"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Our Works
        </h2> */}
        <h2
          className="text-4xl lg:text-5xl font-medium text-gray-900 mb-12 lg:mb-16"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Our Works
        </h2>

        {/* Works Cards Container */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 mb-12">
          {works.map((work, index) => (
            <div
              key={work.id}
              className={`${
                work.bgColor
              } rounded-3xl p-8 lg:p-10 relative h-[450px] lg:h-[500px] w-full lg:w-[400px] ${
                index === 0 ? "lg:self-start" : "lg:self-end"
              }`}
            >
              {/* Images Container */}
              <div
                className="mb-8 relative h-48 lg:h-56"
                onMouseEnter={() => handleImageClick(work.id)}
                onMouseLeave={() => handleImageClick(work.id)}
              >
                {/* First Image - Background (initially behind) */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    flippedCards[work.id] ? "z-20 scale-105" : "z-10 scale-100"
                  }`}
                >
                  <img
                    src={work.images[0]}
                    alt={`${work.title} Screenshot 1`}
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
                {/* Second Image - Overlapping in center (initially on top) */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 transition-all duration-500 ${
                    flippedCards[work.id]
                      ? "z-10 scale-90 opacity-70"
                      : "z-20 scale-100"
                  }`}
                >
                  <img
                    src={work.images[1]}
                    alt={`${work.title} Screenshot 2`}
                    className="w-full h-full object-cover rounded-xl shadow-xl border-4 border-white"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3
                    className="text-xl lg:text-2xl font-medium text-gray-900"
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
                      className="w-6 h-6"
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
                  className="text-gray-600 text-base lg:text-lg leading-relaxed"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button
            onClick={() => (window.location.href = "/works")}
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
    </section>
  );
}

export default Works;
