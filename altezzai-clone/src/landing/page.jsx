import Header from "../components/Header/Header";
import Hero from "./Hero";
import Services from "./Services";
import Team from "./Team";
import Works from "./Works";

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Services />
        <Works />
        <Team/>
      </main>
    </div>
  );
}

export default Landing;
