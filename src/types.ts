export interface Treatment {
  id: string;
  name: string;
  category: string;
  description: string;
  expectedResults: string;
  duration: string;
  recovery: string;
  price?: string; // Made price optional
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image?: string; // Made image optional
  quote: string;
  treatment: string;
}