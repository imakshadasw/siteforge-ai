export type Testimonial = {
  name: string;
  review: string;
};

export type Contact = {
  phone: string;
  email: string;
  address: string;
};

export type DesignSystem = {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  style: string;
  borderRadius: "rounded" | "soft" | "sharp";
};

export type VisualContent = {
  heroImagePrompt: string;
  galleryImagePrompts: string[];

  heroImage?: string;
  galleryImages?: string[];
};

export type WebsiteData = {
  heroTitle: string;
  heroSubtitle: string;

  about: string;

  services: string[];

  whyChooseUs: string[];

  testimonials: Testimonial[];

  contact: Contact;

  design?: DesignSystem;

  visuals?: VisualContent;
};

export type Theme = "Dark" | "Light";