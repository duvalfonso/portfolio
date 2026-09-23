export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  featured: boolean;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "artblog-creations",
    title: "ArtBlogCreations",
    shortDescription:
      "Plataforma web para publicar y administrar obras artísticas.",
    description:
      "Aplicación web desarrollada con Django que permite a los usuarios registrarse, iniciar sesión y gestionar publicaciones artísticas con imágenes. Incluye control de permisos, validaciones y operaciones CRUD.",
    category: "Fullstack",
    technologies: ["Python", "Django", "SQLite", "HTML", "CSS"],
    image: "/projects/artblog.jpg",
    featured: true,
  },

  {
    slug: "alke-wallet",
    title: "Alke Wallet",
    shortDescription: "Sistema web para la gestión de clientes y cuentas.",
    description:
      "Aplicación orientada a la gestión de clientes y cuentas, utilizando Django y su ORM para modelar las relaciones entre las distintas entidades del sistema.",
    category: "Backend",
    technologies: ["Python", "Django", "Django ORM"],
    image: "/projects/alke-wallet.jpg",
    featured: true,
  },

  {
    slug: "sistema-vehiculos",
    title: "Sistema de gestión de vehículos",
    shortDescription:
      "Backend para gestionar conductores, vehículos, kilometraje y mantenimiento.",
    description:
      "Sistema backend desarrollado con Node.js y Express para administrar conductores, vehículos y registros de kilometraje, incorporando roles de usuario y reglas relacionadas con mantenimiento.",
    category: "Backend",
    technologies: ["Node.js", "Express", "MySQL", "JWT"],
    image: "/projects/vehiculos.jpg",
    featured: true,
  },

  {
    slug: "sistema-ventas",
    title: "Sistema de ventas",
    shortDescription:
      "Aplicación web para gestionar productos, stock y ventas.",
    description:
      "Sistema desarrollado con ASP.NET Web Forms y SQL Server para administrar productos, controlar stock y registrar ventas y sus respectivos detalles.",
    category: "Web",
    technologies: ["C#", "ASP.NET", "SQL Server"],
    image: "/projects/ventas.jpg",
    featured: false,
  },

  {
    slug: "gestion-clientes-python",
    title: "Gestión de clientes",
    shortDescription:
      "Aplicación orientada a objetos para administrar clientes.",
    description:
      "Proyecto desarrollado en Python aplicando programación orientada a objetos, validaciones, herencia, polimorfismo, encapsulación y patrones como Factory y Repository.",
    category: "POO",
    technologies: ["Python", "POO", "JSON", "Pytest"],
    image: "/projects/clientes.jpg",
    featured: false,
  },
];
