export interface Work {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  time: string;
  summary?: string;
  responsibilities?: string[];
  stack?: string[];
  businessContext?: string;
}

const worksIds = {
  dequo: "dequo",
  sellers_latam: "sellers_latam",
  last_horde: "last_horde",
  praga_revestimientos: "praga_revestimientos",
  municipalidad_de_cordoba: "municipalidad_de_cordoba",
};

const allWorks: Work[] = [
  {
    id: worksIds.dequo,
    title: "Full-Stack Developer",
    subtitle: "Dequo",
    description:
      "I carried out improvement and maintenance tasks for the Tiendaquick product across frontend and backend, using PHP, Laravel, LESS, Bootstrap, MariaDB, JavaScript, and React, with a focus on design and performance.",
    time: "January 2024 - Present",
    summary:
      "I work on continuous improvement of Tiendaquick, with a focus on performance, SEO, UI design quality, and code refactoring.",
    responsibilities: [
      "Maintain and evolve frontend and backend features for production use.",
      "Improve site performance and technical SEO foundations.",
      "Refactor legacy code to improve readability and maintainability.",
      "Collaborate on UI improvements aligned with product needs.",
    ],
    stack: [
      "JavaScript",
      "React",
      "PHP",
      "Laravel",
      "MariaDB",
      "Bootstrap",
      "LESS",
    ],
    businessContext:
      "E-commerce product (Tiendaquick) used by businesses to manage and improve their online sales operations.",
  },
  {
    id: worksIds.sellers_latam,
    title: "Frontend Developer",
    subtitle: "Sellers Latam",
    description:
      "I performed maintenance and enhancements on the Sellers Latam website and created the website for Nuvex Uruguay. For both websites, I utilized JavaScript, Sass, React, and Next.js. Additionally, I developed a script for a Tiendanube application using JavaScript, jQuery, and Bootstrap.",
    time: "March 2022 - January 2024",
    summary:
      "I expanded the project scope across multiple web properties and improved visual design and frontend consistency.",
    responsibilities: [
      "Implement and maintain features for Sellers Latam and Nuvex Uruguay websites.",
      "Improve visual design and UI consistency across pages.",
      "Develop supporting scripts for Tiendanube integrations.",
      "Support iterative delivery of new sections and enhancements.",
    ],
    stack: [
      "JavaScript",
      "React",
      "Next.js",
      "Sass",
      "jQuery",
      "Bootstrap",
    ],
    businessContext:
      "Digital presence and web growth for commercial brands, including website expansion and frontend optimization.",
  },
  {
    id: worksIds.last_horde,
    title: "Full-Stack Developer",
    subtitle: "Last Horde",
    description:
      "I created an NFT card marketplace and NFT card packs using JavaScript, React, Sass, Bootstrap, and Web3.js. Additionally, I developed a back-end for data storage using Node.js, Express, Sequelize, and MySQL.",
    time: "February 2022 - July 2022",
    summary:
      "I fixed product bugs, integrated NFT smart-contract interactions, and built the core e-commerce marketplace flows.",
    responsibilities: [
      "Fix functional and UX bugs in the NFT marketplace.",
      "Establish integration between frontend flows and NFT contracts.",
      "Build core e-commerce features for listing and purchasing NFT packs.",
      "Develop and maintain the API and persistence layer.",
    ],
    stack: [
      "JavaScript",
      "React",
      "Web3.js",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "Sass",
      "Bootstrap",
    ],
    businessContext:
      "Web3 marketplace focused on NFT card products and digital commerce flows.",
  },

  {
    id: worksIds.praga_revestimientos,
    title: "Sales and customer service",
    subtitle: "Praga Revestimientos",
    description:
      "I tracked customer satisfaction for all company products and services. I assisted in troubleshooting and finding solutions for existing issues.",
    time: "August 2020 - November 2021",
  },

  {
    id: worksIds.municipalidad_de_cordoba,
    title: "Customer Service (Internships)",
    subtitle: "Municipalidad de Córdoba",
    description:
      "I personally handled customer inquiries and managed internal operations to enhance service quality.",
    time: "October 2019 - November 2019",
  },
];

const worksActives = [
  worksIds.dequo,
  worksIds.sellers_latam,
  worksIds.last_horde,
];

export const works = allWorks.filter((work) => worksActives.includes(work.id));
