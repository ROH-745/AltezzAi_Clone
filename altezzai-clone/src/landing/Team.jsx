import React from "react";
import { useNavigate } from "react-router-dom";

function Team() {
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: 1,
      name: "Ishaque Risan P",
      role: "CEO and Founder",
      image: "/assets/team1.jpeg",
    },
    {
      id: 2,
      name: "Aswin K",
      role: "CTO and Co-founder",
      image: "/assets/team2.jpeg",
    },
    {
      id: 3,
      name: "Aswin k",
      role: "Flutter Developer",
      image: "/assets/team3.jpeg",
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
          Our Team
        </h2> */}
        <h2
          className="text-4xl lg:text-5xl font-medium text-gray-900 mb-12 lg:mb-16"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Our Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 max-w-screen-2xl mx-auto justify-between">
          {teamMembers.map((member) => (
            <div key={member.id} className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white rounded-3xl p-3 shadow-lg flex items-center justify-between">
                    <div className="flex-1">
                      <h3
                        className="text-sm lg:text-base font-medium text-gray-900 mb-0.5"
                        style={{ fontFamily: "Space Grotesk" }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-xs lg:text-sm text-gray-600"
                        style={{ fontFamily: "Space Grotesk" }}
                      >
                        {member.role}
                      </p>
                    </div>

                    {/* LINKEDIN LOGO */}
                    <div className="ml-3">
                      <div
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/login",
                            "_blank"
                          )
                        }
                        className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* View All Team Card */}
          <div className="relative group">
            <div
              onClick={() => navigate("/teams")}
              className="bg-gray-900 rounded-3xl flex items-center justify-center aspect-[3/4] hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-gray-900"
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
                <p
                  className="text-white text-sm lg:text-base font-medium"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  View all Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
