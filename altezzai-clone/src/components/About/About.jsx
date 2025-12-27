import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />

      {/* First Image  */}
      <div className="absolute top-0 left-40 z-40">
        <img
          src="/assets/About/img1.webp"
          alt="About Altezzai"
          className="w-48 h-auto object-cover"
        />
      </div>

      <main className="py-6 lg:py-8  ">
        <div className="max-w-7xl  mx-auto px-8  sm:px-6 lg:px-3 ">
          <div className=" py-3 lg:py-2 h-[100px]  ">
            {/* Page Title */}
            <h1
              className="text-4xl lg:text-5xl font-medium text-gray-900 text-center mb-8 lg:mb-4"
              style={{ fontFamily: "Space Grotesk" }}
            >
              About
            </h1>

            {/* Subtitle */}
            <p
              className="text-sm lg:text-base text-gray-600 text-center mb-12 lg:mb-16 max-w-4xl mx-auto"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Welcome to Altezzai LLP, a startup incubated by Department of
              Information Technology, Kannur University
            </p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-10 items-start">
            <div className="relative  overflow-hidden mt-8 w-full max-w-lg mx-auto lg:max-w-lg [filter:drop-shadow(10px_10px_0_black)_drop-shadow(0_0_0_black)]">
              <img
                src="/assets/About/img2.webp"
                alt="Digital Solutions"
                className="w-full h-auto object-cover"
              />

              {/* Text Second Image */}
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center p-6">
                <h3
                  className="
    text-2xl leading-snug font-bold text-white
    text-left pl-4
    lg:text-[50px] lg:leading-[72px] lg:pl-8
  "
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Empowering Businesses with Innovative Digital Solutions
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full  pt-12 lg:w-1/2 space-y-6">
              <div className="space-y-4">
                <p
                  className="text-sm lg:text-base font-medium text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Welcome to Altezzai, a dynamic startup nestled in the vibrant
                  ecosystem of the Kannur University Innovation Centre.
                  Supported by esteemed faculty members, we are dedicated to
                  crafting innovative solutions that empower businesses to
                  thrive in the digital landscape.
                </p>

                <p
                  className="text-sm lg:text-base font-medium text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  At Altezzai, we specialize in providing precision-driven
                  technology solutions tailored to meet the unique needs of our
                  clients. Our expertise spans across web development, mobile
                  app development, and desktop software development. We build
                  responsive, user-friendly solutions that enhance your online
                  presence, enable seamless and engaging mobile experiences for
                  both iOS and Android platforms, and develop robust desktop
                  applications that streamline your business processes.
                </p>

                <p
                  className="text-sm lg:text-base font-medium text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Whether you're a budding entrepreneur or an established
                  enterprise, our team is committed to understanding your vision
                  and transforming it into reality. We leverage cutting-edge
                  technologies to develop innovative solutions that keep you
                  ahead of the competition, and our tailored approach ensures
                  that we address your specific needs over objectives.
                </p>

                <p
                  className="text-sm lg:text-base font-medium text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Join us on this exciting journey as we create digital
                  solutions that empower businesses to thrive. At Altezzai, we
                  are not just building technology; we are shaping the future.
                  Ready to take your business to the next level? Contact us
                  today to learn how Altezzai can help you achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
