import GeneratorForm from "./components/GeneratorForm";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <Hero />
      <GeneratorForm />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}