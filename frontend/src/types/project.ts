export type ArchitectureItem = {
  layer: string;
  description: string;
};

export type ProjectImage = {
  id: number;
  image: string;
  order: number;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  description: string;
  category: string;
  technologies: string[];
  images: ProjectImage[];
  featured: boolean;
  github: string | null;
  demo: string | null;

  overview: string;
  challenge: string;
  solution: string;

  features: string[];

  architecture: ArchitectureItem[];

  learnings: string[];

  created_at: string;
  updated_at: string;
};
