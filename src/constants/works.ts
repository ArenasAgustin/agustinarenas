export interface Work {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  time: string;
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
    title: "Full Stack Developer",
    subtitle: "Dequo",
    description:
      "I carried out improvement and maintenance tasks for the Tiendaquick product, both on the front-end and back-end, using PHP, Laravel, LESS, Bootstrap, MariaDB, JavaScript, and React, focusing on improving the design and performance of the product.",
    time: "January 2024 - Present",
  },
  {
    id: worksIds.sellers_latam,
    title: "Front-end Developer",
    subtitle: "Sellers Latam",
    description:
      "I performed maintenance and enhancements on the Sellers Latam website and created the website for Nuvex Uruguay. For both websites, I utilized JavaScript, Sass, React, and Next.js. Additionally, I developed a script for a Tiendanube application using JavaScript, jQuery, and Bootstrap.",
    time: "March 2022 - January 2024",
  },
  {
    id: worksIds.last_horde,
    title: "Full Stack Developer",
    subtitle: "Last Horde",
    description:
      "I created an NFT card marketplace and NFT card packs using JavaScript, React, Sass, Bootstrap, and Web3.js. Additionally, I developed a back-end for data storage using Node.js, Express, Sequelize, and MySQL.",
    time: "February 2022 - July 2022",
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
