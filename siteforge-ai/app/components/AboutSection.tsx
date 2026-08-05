import { Theme } from "../types/website";

type Props = {
  about: string;
  theme: Theme;
};

export default function AboutSection({
  about,
  theme,
}: Props) {
  const dark = theme === "Dark";

  return (
    <section
      className={`px-8 py-20 ${
        dark ? "bg-[#030712]" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <span className="text-cyan-400 font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Passionate About Delivering Quality
          </h2>

          <p
            className={`mt-6 leading-8 text-lg ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {about}
          </p>

          <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl transition">
            Learn More
          </button>
        </div>

        <div
          className={`rounded-3xl p-10 ${
            dark
              ? "bg-[#111827] border border-cyan-900"
              : "bg-gray-100 border border-gray-200"
          }`}
        >
          <div className="grid grid-cols-2 gap-6">

            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                10+
              </h3>
              <p className="mt-2 opacity-80">
                Years Experience
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                500+
              </h3>
              <p className="mt-2 opacity-80">
                Happy Clients
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                24/7
              </h3>
              <p className="mt-2 opacity-80">
                Support
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                ★★★★★
              </h3>
              <p className="mt-2 opacity-80">
                Customer Rating
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}