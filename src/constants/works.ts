import {
  BOOTSTRAP,
  EXPRESS,
  JAVASCRIPT,
  JQUERY,
  LARAVEL,
  LESS,
  MARIADB,
  MYSQL,
  NEXT,
  NODE,
  PHP,
  REACT,
  SASS,
  SEQUELIZE,
  WEB3,
  type Technology,
} from "./technologies";
import type { Localized } from "@/i18n/config";

export interface Work {
  id: string;
  title: Localized;
  subtitle: string;
  description: Localized;
  time: Localized;
  summary?: Localized;
  responsibilities?: Localized[];
  stack?: Technology[];
  businessContext?: Localized;
}

const allWorks: Work[] = [
  {
    id: "dequo",
    title: { en: "Full-Stack Developer", es: "Desarrollador Full-Stack" },
    subtitle: "Dequo",
    description: {
      en: "I carried out improvement and maintenance tasks for the Tiendaquick product across frontend and backend, using PHP, Laravel, LESS, Bootstrap, MariaDB, JavaScript, and React, with a focus on design and performance.",
      es: "Realicé tareas de mejora y mantenimiento del producto Tiendaquick en frontend y backend, utilizando PHP, Laravel, LESS, Bootstrap, MariaDB, JavaScript y React, con foco en el diseño y el rendimiento.",
    },
    time: { en: "January 2024 - Present", es: "Enero 2024 - Actualidad" },
    summary: {
      en: "I work on continuous improvement of Tiendaquick, with a focus on performance, SEO, UI design quality, and code refactoring.",
      es: "Trabajo en la mejora continua de Tiendaquick, con foco en el rendimiento, el SEO, la calidad del diseño de interfaz y la refactorización de código.",
    },
    responsibilities: [
      {
        en: "Maintain and evolve frontend and backend features for production use.",
        es: "Mantener y evolucionar funcionalidades de frontend y backend en producción.",
      },
      {
        en: "Improve site performance and technical SEO foundations.",
        es: "Mejorar el rendimiento del sitio y las bases del SEO técnico.",
      },
      {
        en: "Refactor legacy code to improve readability and maintainability.",
        es: "Refactorizar código heredado para mejorar su legibilidad y mantenibilidad.",
      },
      {
        en: "Collaborate on UI improvements aligned with product needs.",
        es: "Colaborar en mejoras de interfaz alineadas con las necesidades del producto.",
      },
    ],
    stack: [JAVASCRIPT, REACT, PHP, LARAVEL, MARIADB, BOOTSTRAP, LESS],
    businessContext: {
      en: "E-commerce product (Tiendaquick) used by businesses to manage and improve their online sales operations.",
      es: "Producto de comercio electrónico (Tiendaquick) que las empresas utilizan para gestionar y mejorar sus operaciones de venta en línea.",
    },
  },
  {
    id: "sellers_latam",
    title: { en: "Frontend Developer", es: "Desarrollador Frontend" },
    subtitle: "Sellers Latam",
    description: {
      en: "I performed maintenance and enhancements on the Sellers Latam website and created the website for Nuvex Uruguay. For both websites, I utilized JavaScript, Sass, React, and Next.js. Additionally, I developed a script for a Tiendanube application using JavaScript, jQuery, and Bootstrap.",
      es: "Realicé el mantenimiento y las mejoras del sitio web de Sellers Latam y creé el sitio web de Nuvex Uruguay. En ambos sitios utilicé JavaScript, Sass, React y Next.js. Además, desarrollé un script para una aplicación de Tiendanube con JavaScript, jQuery y Bootstrap.",
    },
    time: { en: "March 2022 - January 2024", es: "Marzo 2022 - Enero 2024" },
    summary: {
      en: "I expanded the project scope across multiple web properties and improved visual design and frontend consistency.",
      es: "Amplié el alcance del proyecto a varios sitios web y mejoré el diseño visual y la consistencia del frontend.",
    },
    responsibilities: [
      {
        en: "Implement and maintain features for Sellers Latam and Nuvex Uruguay websites.",
        es: "Implementar y mantener funcionalidades de los sitios web de Sellers Latam y Nuvex Uruguay.",
      },
      {
        en: "Improve visual design and UI consistency across pages.",
        es: "Mejorar el diseño visual y la consistencia de la interfaz entre páginas.",
      },
      {
        en: "Develop supporting scripts for Tiendanube integrations.",
        es: "Desarrollar scripts de soporte para integraciones con Tiendanube.",
      },
      {
        en: "Support iterative delivery of new sections and enhancements.",
        es: "Acompañar la entrega iterativa de nuevas secciones y mejoras.",
      },
    ],
    stack: [JAVASCRIPT, REACT, NEXT, SASS, JQUERY, BOOTSTRAP],
    businessContext: {
      en: "Digital presence and web growth for commercial brands, including website expansion and frontend optimization.",
      es: "Presencia digital y crecimiento web para marcas comerciales, incluida la ampliación de sitios y la optimización del frontend.",
    },
  },
  {
    id: "last_horde",
    title: { en: "Full-Stack Developer", es: "Desarrollador Full-Stack" },
    subtitle: "Last Horde",
    description: {
      en: "I created an NFT card marketplace and NFT card packs using JavaScript, React, Sass, Bootstrap, and Web3.js. Additionally, I developed a back-end for data storage using Node.js, Express, Sequelize, and MySQL.",
      es: "Creé un marketplace de cartas NFT y paquetes de cartas NFT con JavaScript, React, Sass, Bootstrap y Web3.js. Además, desarrollé un backend para el almacenamiento de datos con Node.js, Express, Sequelize y MySQL.",
    },
    time: { en: "February 2022 - July 2022", es: "Febrero 2022 - Julio 2022" },
    summary: {
      en: "I fixed product bugs, integrated NFT smart-contract interactions, and built the core e-commerce marketplace flows.",
      es: "Corregí errores del producto, integré las interacciones con los contratos inteligentes NFT y construí los flujos principales del marketplace.",
    },
    responsibilities: [
      {
        en: "Fix functional and UX bugs in the NFT marketplace.",
        es: "Corregir errores funcionales y de experiencia de usuario en el marketplace NFT.",
      },
      {
        en: "Establish integration between frontend flows and NFT contracts.",
        es: "Integrar los flujos del frontend con los contratos NFT.",
      },
      {
        en: "Build core e-commerce features for listing and purchasing NFT packs.",
        es: "Construir las funcionalidades principales de comercio electrónico para publicar y comprar paquetes NFT.",
      },
      {
        en: "Develop and maintain the API and persistence layer.",
        es: "Desarrollar y mantener la API y la capa de persistencia.",
      },
    ],
    stack: [
      JAVASCRIPT,
      REACT,
      WEB3,
      NODE,
      EXPRESS,
      SEQUELIZE,
      MYSQL,
      SASS,
      BOOTSTRAP,
    ],
    businessContext: {
      en: "Web3 marketplace focused on NFT card products and digital commerce flows.",
      es: "Marketplace Web3 enfocado en productos de cartas NFT y flujos de comercio digital.",
    },
  },

  {
    id: "praga_revestimientos",
    title: { en: "Sales and customer service", es: "Ventas y atención al cliente" },
    subtitle: "Praga Revestimientos",
    description: {
      en: "I tracked customer satisfaction for all company products and services. I assisted in troubleshooting and finding solutions for existing issues.",
      es: "Realicé el seguimiento de la satisfacción de los clientes con todos los productos y servicios de la empresa. Colaboré en la resolución de problemas y en la búsqueda de soluciones.",
    },
    time: { en: "August 2020 - November 2021", es: "Agosto 2020 - Noviembre 2021" },
  },

  {
    id: "municipalidad_de_cordoba",
    title: { en: "Customer Service (Internships)", es: "Atención al cliente (pasantía)" },
    subtitle: "Municipalidad de Córdoba",
    description: {
      en: "I personally handled customer inquiries and managed internal operations to enhance service quality.",
      es: "Atendí personalmente las consultas de los clientes y gestioné operaciones internas para mejorar la calidad del servicio.",
    },
    time: { en: "October 2019 - November 2019", es: "Octubre 2019 - Noviembre 2019" },
  },
];

// WARNING: entries added to allWorks must also be added here to appear in the UI.
const worksActives: string[] = [
  "dequo",
  "sellers_latam",
  "last_horde",
];

export const works = allWorks.filter((work) => worksActives.includes(work.id));
