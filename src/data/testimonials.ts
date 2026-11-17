import type { ImageMetadata } from "astro";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  business: string;
  photo?: ImageMetadata;
};

export const TESTIMONIALS: Testimonial[] = [];
