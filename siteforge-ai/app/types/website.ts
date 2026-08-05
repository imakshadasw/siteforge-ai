export type Testimonial = {
  name: string;
  review: string;
};

export type Contact = {
  phone: string;
  email: string;
  address: string;
};

export type WebsiteData = {
  heroTitle: string;
  heroSubtitle: string;

  about: string;

  services: string[];

  whyChooseUs: string[];

  testimonials: Testimonial[];

  contact: Contact;
};

export type Theme = "Dark" | "Light";