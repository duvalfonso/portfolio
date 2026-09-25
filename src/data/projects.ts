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

  overview?: string;
  challenge?: string;
  solution?: string;
  features?: string[];

  architecture?: {
    layer: string;
    description: string;
  }[];

  learnings?: string[];

  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "artblog-creations",
    title: "ArtBlogCreations",
    shortDescription:
      "Plataforma web para publicar y administrar obras artísticas.",
    description:
      "Aplicación web desarrollada con Django que permite a los usuarios registrarse, iniciar sesión y gestionar publicaciones artísticas con imágenes.",
    category: "Fullstack",
    technologies: ["Python", "Django", "SQLite", "HTML", "CSS", "Bootsrap"],
    image: "/projects/artblog.jpg",
    gallery: [
      "/projects/artblog.jpg",
      "/projects/ArtBlogCreations-02.jpg",
      "/projects/ArtBlogCreations-03.jpg",
      "/projects/ArtBlogCreations-04.jpg",
      "/projects/ArtBlogCreations-05.jpg",
      "/projects/ArtBlogCreations-06.jpg",
      "/projects/ArtBlogCreations-07.jpg",
      "/projects/ArtBlogCreations-08.jpg",
      "/projects/ArtBlogCreations-09.jpg",
    ],
    featured: true,

    overview:
      "ArtBlogCreations es una plataforma web orientada a la publicación de contenido artístico. Los usuarios pueden crear una cuenta, publicar obras, asociar imágenes y administrar sus propias publicaciones.",

    challenge:
      "El objetivo era construir una aplicación web completa incorporando autenticación, gestión de contenido, subida de imágenes, validaciones y control de permisos.",

    solution:
      "La aplicación fue desarrollada utilizando Django, aprovechando su sistema de autenticación, ORM, formularios, vistas y sistema de administración. Se implementaron restricciones para que cada usuario pueda modificar o eliminar únicamente sus propias publicaciones.",

    features: [
      "Registro e inicio de sesión de usuarios",
      "Creación de publicaciones artísticas",
      "Asociación de una o múltiples imágenes",
      "Edición y eliminación de publicaciones propias",
      "Control de permisos mediante autenticación",
      "Validación de imágenes",
      "Visualización de publicaciones para los usuarios",
      "Administración mediante Django Admin",
    ],
    architecture: [
      {
        layer: "Presentación",
        description:
          "Plantillas HTML y CSS responsables de la interfaz, formularios y visualización de las publicaciones.",
      },
      {
        layer: "Aplicación",
        description:
          "Vistas y lógica de Django encargadas de procesar solicitudes, autenticación, publicaciones y permisos.",
      },
      {
        layer: "Datos",
        description:
          "Modelos de Django y ORM utilizados para representar usuarios, publicaciones e imágenes.",
      },
      {
        layer: "Almacenamiento",
        description:
          "Base de datos SQLite para la información de la aplicación y almacenamiento de archivos multimedia.",
      },
    ],
    learnings: [
      "Implementación del sistema de autenticación de Django.",
      "Gestión de relaciones entre usuarios, publicaciones e imágenes.",
      "Control de permisos para operaciones de edición y eliminación.",
      "Validación de archivos subidos por los usuarios.",
      "Organización de una aplicación Django utilizando separación entre modelos, vistas y plantillas.",
    ],
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
    gallery: [
      "/projects/alke-wallet.jpg",
      "/projects/alke-wallet-02.jpg",
      "/projects/alke-wallet-03.jpg",
      "/projects/alke-wallet-04.jpg",
    ],
    featured: true,

    overview:
      "Aplicación desarrollada con Django para modelar y gestionar clientes y sus cuentas asociadas.",

    challenge:
      "El proyecto busca representar mediante modelos Django las relaciones entre clientes y cuentas, manteniendo restricciones e integridad en los datos.",

    solution:
      "Se utilizaron modelos de Django y el ORM para representar las entidades Cliente y Cuenta, incluyendo una relación uno a uno entre ambas.",

    features: [
      "Gestión de clientes",
      "Gestión de cuentas",
      "Relación uno a uno entre cliente y cuenta",
      "Identificación única de las cuentas",
      "Gestión del saldo mediante DecimalField",
    ],

    architecture: [
      {
        layer: "Modelos",
        description: "Modelos Django que representan clientes y cuentas.",
      },
      {
        layer: "ORM",
        description:
          "Django ORM utilizado para consultar y manipular los datos.",
      },
      {
        layer: "Base de datos",
        description: "Persistencia de la información de clientes y cuentas.",
      },
    ],
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
