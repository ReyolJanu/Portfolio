export interface Project {
  slug: string;
  title: string;
  description: string;
  category: "ui-ux" | "development" | "branding";
  tags: string[];
  year: string;
  featured: boolean;
  coverImage: string;
  images: string[];
  link?: string;
  github?: string;
  overview: string;
  challenge: string;
  solution: string;
  role: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  coverImage: string;
}
