import Header from "../components/Header/Header";
import Contact from "./Contact";
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
        <Team />
        <Contact/>
      </main>
    </div>
  );
}

export default Landing;
