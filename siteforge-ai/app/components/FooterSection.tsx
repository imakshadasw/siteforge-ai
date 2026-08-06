import { Theme } from "../types/website";

type Props = {
  businessName: string;
  theme: Theme;
};

export default function FooterSection({
  businessName,
  theme,
}: Props) {
  const dark = theme === "Dark";

  return (
    <footer
      className={`px-8 py-12 ${
        dark
          ? "bg-[#020617] border-t border-cyan-900"
          : "bg-gray-100 border-t border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              {businessName}
            </h2>

            <p
              className={`mt-4 ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Professional solutions tailored for your business.
              We are committed to delivering quality service and
              exceptional customer satisfaction.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              SiteForge AI
            </h3>

            <p
              className={`${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              AI-powered website generation for modern businesses.
            </p>
          </div>

        </div>

        <div
          className={`mt-10 pt-6 border-t text-center ${
            dark
              ? "border-cyan-900 text-gray-400"
              : "border-gray-300 text-gray-500"
          }`}
        >
          © {new Date().getFullYear()} {businessName}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}