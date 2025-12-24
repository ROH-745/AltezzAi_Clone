

function Hero() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="/assets/heroimg.png"
              alt="Digital Solutions Illustration"
              className="w-full max-w-lg h-auto"
            />
          </div>

         
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Empowering Businesses with Innovative Digital Solutions
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Our digital solutions help businesses grow and succeed online
              through a range of services including web development, mobile app
              development, and desktop software development.
            </p>

            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
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
