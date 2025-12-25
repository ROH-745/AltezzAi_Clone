import Header from "../components/Header/Header";
import Hero from "./Hero";
import Services from "./Services";

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Services/>
      </main>
    </div>
  );
}

export default Landing;
