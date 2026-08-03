import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import GeneratorForm from "./components/GeneratorForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">

      <Navbar />

      <Hero />

      <Features />

      <GeneratorForm />

      <Footer />

    </main>
  );
}