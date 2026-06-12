import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
