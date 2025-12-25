import Header from "../components/Header/Header";
import Hero from "./Hero";
import Services from "./Services";
import Works from "./Works";

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Services />
        <Works />
      </main>
    </div>
  );
}

export default Landing;
