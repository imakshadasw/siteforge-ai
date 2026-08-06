import { Theme, Contact } from "../types/website";

type Props = {
  contact: Contact;
  theme: Theme;
};

export default function ContactSection({
  contact,
  theme,
}: Props) {
  const dark = theme === "Dark";

  return (
    <section
      className={`px-8 py-20 ${
        dark ? "bg-[#030712]" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-cyan-400 uppercase tracking-wider font-semibold">
            Contact
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Get In Touch
          </h2>

          <p
            className={`mt-5 max-w-2xl mx-auto ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We'd love to hear from you. Reach out using the details below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div
            className={`rounded-2xl p-8 ${
              dark
                ? "bg-[#111827] border border-cyan-900"
                : "bg-gray-100 border border-gray-200"
            }`}
          >
            <div className="text-4xl mb-4">📞</div>

            <h3 className="text-xl font-bold mb-3">
              Phone
            </h3>

            <p>{contact.phone}</p>
          </div>

          <div
            className={`rounded-2xl p-8 ${
              dark
                ? "bg-[#111827] border border-cyan-900"
                : "bg-gray-100 border border-gray-200"
            }`}
          >
            <div className="text-4xl mb-4">✉️</div>

            <h3 className="text-xl font-bold mb-3">
              Email
            </h3>

            <p>{contact.email}</p>
          </div>

          <div
            className={`rounded-2xl p-8 ${
              dark
                ? "bg-[#111827] border border-cyan-900"
                : "bg-gray-100 border border-gray-200"
            }`}
          >
            <div className="text-4xl mb-4">📍</div>

            <h3 className="text-xl font-bold mb-3">
              Address
            </h3>

            <p>{contact.address}</p>
          </div>

        </div>
      </div>
    </section>
  );
}