import Header from "../components/Header/Header";
import Hero from "./Hero";

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default Landing;
