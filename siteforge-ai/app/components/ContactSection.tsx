"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Contact, Theme } from "../types/website";

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
      className={`relative overflow-hidden px-8 py-28 ${
        dark
          ? "bg-[#0b1120] text-white"
          : "bg-slate-50 text-gray-900"
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            <Sparkles size={16} />
            Get In Touch
          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              connect
            </span>
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              dark
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            Have a question or want to work with us?
            We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {/* Phone */}
          <ContactCard
            icon={Phone}
            title="Phone"
            value={contact.phone}
            href={
              contact.phone
                ? `tel:${contact.phone}`
                : undefined
            }
            theme={theme}
            index={0}
          />

          {/* Email */}
          <ContactCard
            icon={Mail}
            title="Email"
            value={contact.email}
            href={
              contact.email
                ? `mailto:${contact.email}`
                : undefined
            }
            theme={theme}
            index={1}
          />

          {/* Address */}
          <ContactCard
            icon={MapPin}
            title="Visit Us"
            value={contact.address}
            theme={theme}
            index={2}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className={`mt-12 rounded-3xl border p-8 text-center md:p-12 ${
            dark
              ? "border-cyan-900 bg-white/[0.04]"
              : "border-gray-200 bg-white"
          }`}
        >
          <h3 className="text-2xl font-bold md:text-3xl">
            Ready to get started?
          </h3>

          <p
            className={`mx-auto mt-4 max-w-2xl ${
              dark
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            Reach out today and let's discuss how we can
            help you achieve your goals.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            Contact Us
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

type ContactCardProps = {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
  theme: Theme;
  index: number;
};

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  theme,
  index,
}: ContactCardProps) {
  const dark = theme === "Dark";

  const content = (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
      }}
      className={`group h-full rounded-3xl border p-8 transition-all duration-300 ${
        dark
          ? "border-cyan-900 bg-white/[0.04] hover:border-cyan-500 hover:bg-white/[0.07]"
          : "border-gray-200 bg-white hover:border-cyan-400 hover:shadow-xl"
      }`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
        <Icon size={27} />
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p
        className={`mt-3 break-words leading-7 ${
          dark
            ? "text-gray-300"
            : "text-gray-600"
        }`}
      >
        {value || "Information coming soon"}
      </p>
    </motion.div>
  );

  if (href && value) {
    return (
      <a
        href={href}
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return content;
}