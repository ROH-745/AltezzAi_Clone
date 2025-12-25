function Hero() {
  return (
    <section className="bg-white py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="/assets/heroimg.png"
              alt="Digital Solutions Illustration"
              className="w-3/4 lg:w-full max-w-lg h-auto"
            />
          </div>

          <div className="order-2 lg:order-1">
            <h1
              className="text-gray-900 mb-6"
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "clamp(32px, 5vw, 60px)",
                fontWeight: 500,
                lineHeight: "clamp(38px, 6vw, 70px)",
              }}
            >
              Empowering Businesses with Innovative Digital Solutions
            </h1>

            <p
              className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed"
              style={{ fontFamily: "Space Grotesk", fontWeight: 500 }}
            >
              Our digital solutions help businesses grow and succeed online
              through a range of services including web development, mobile app
              development, and desktop software development.
            </p>

            <button
              className="bg-gray-900 text-white px-14 py-5 rounded-lg text-xl font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Let's Talk
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
      </div>
    </section>
  );
}

export default Hero;
