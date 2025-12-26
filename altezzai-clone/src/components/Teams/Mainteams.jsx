import React from "react";

import Header from "../Header/Header";

function Mainteams() {
  const teamMembers = [
    // First 3 - same as Team.jsx
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

    {
      id: 4,
      name: "Muhammed Rafsal N",
      role: "UI/UX Designer",
      image: "/assets/Mainteams/4.jpg",
    },
    {
      id: 5,
      name: "Sandra m",
      role: "Frontend Developer",
      image: "/assets/Mainteams/5.jpg",
    },
    {
      id: 6,
      name: "VIVEK RAM M J",
      role: "Marketing Manager",
      image: "/assets/Mainteams/6.jpg",
    },
    {
      id: 7,
      name: "Niju Sajeev",
      role: "Flutter Developer",
      image: "/assets/Mainteams/7.jpeg",
    },
    {
      id: 8,
      name: "Mishab",
      role: "Backend developer",
      image: "/assets/Mainteams/8.jpeg",
    },
    {
      id: 9,
      name: "Adwaitha Vijosh",
      role: "Junior Marketing Manager",
      image: "/assets/Mainteams/9.jpeg",
    },
    {
      id: 10,
      name: "Anjali A B",
      role: "Fullstack intern",
      image: "/assets/Mainteams/10.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-6 lg:py-5">
        <div className="max-w-screen-2xl mx-auto px-8 sm:px-6 lg:px-8">
          <h1
            className="text-4xl lg:text-5xl font-medium text-gray-900 text-center mb-6 lg:mb-8"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Our Team
          </h1>

          {/* Team Grid - 5 cards per row on desktop, 2 per row on mobile */}
          <div className="flex flex-wrap justify-between gap-y-8 lg:gap-y-12 gap-x-4 lg:gap-x-8 max-w-screen-2xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="relative group w-[calc(50%-0.5rem)] lg:w-[calc(19%-1.6rem)]"
              >
                {/* Team Member Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[6/7]">
                  {/* Full Image Background */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlapping Info Container */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded-3xl p-3 shadow-lg flex items-center justify-between">
                      <div className="flex-1">
                        <h3
                          className="text-[10px] lg:text-sm font-medium text-gray-900 mb-0.5"
                          style={{ fontFamily: "Space Grotesk" }}
                        >
                          {member.name}
                        </h3>
                        <p
                          className="text-[8px] lg:text-[10px] text-gray-600"
                          style={{ fontFamily: "Space Grotesk" }}
                        >
                          {member.role}
                        </p>
                      </div>

                      {/* LinkedIn Logo */}
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default Mainteams;
