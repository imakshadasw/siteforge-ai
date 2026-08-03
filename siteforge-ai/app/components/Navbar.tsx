export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/80 border-b border-cyan-900">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-extrabold text-cyan-400">
          SiteForge AI
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#generator" className="hover:text-cyan-400 transition">
            Generator
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-3 rounded-xl transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}