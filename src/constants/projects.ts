import {
  BOOTSTRAP,
  CSS,
  HTML,
  JAVASCRIPT,
  LARAVEL,
  MONGODB,
  MYSQL,
  NEXT,
  NODE,
  PHP,
  POSTGRESQL,
  REACT,
  SASS,
  TAILWIND,
  TYPESCRIPT,
} from "./Tecnologies";

export interface Project {
  id: string;
  name: string;
  description: string;
  tecnologies: string[];
  repositoryUrl?: string;
  deployedUrl?: string;
}

const projectsIds = {
  brain_games_es: "brain_games_es",
  brain_games_es_api: "brain_games_es_api",
  wave_music: "wave_music",
  blackparadox: "blackparadox",
  morse_decoder: "morse_decoder",
  url_shortener: "url_shortener",
  cinema: "cinema",
  old_portfolio: "old_portfolio",
  boxcustodia_test: "boxcustodia_test",
  bego_test: "bego_test",
};

const allProjects: Project[] = [
  {
    id: projectsIds.brain_games_es,
    name: "Brain Games",
    description:
      "I present to you a project that I call Brain Games Es, it is a game that consists of 16 levels to decipher an encrypted word, score and clues.",
    tecnologies: [TYPESCRIPT, SASS, REACT, NODE, MONGODB],
    repositoryUrl: "https://github.com/ArenasAgustin/brain-games",
    deployedUrl: "https://brain-games.vercel.app/",
  },
  {
    id: projectsIds.brain_games_es_api,
    name: "Brain Games API",
    description:
      "API for the Brain Games project, it is a game that consists of 16 levels to decipher an encrypted word, score and clues.",
    tecnologies: [JAVASCRIPT, MONGODB],
    repositoryUrl: "https://github.com/ArenasAgustin/brain-games-es-api",
  },
  {
    id: projectsIds.wave_music,
    name: "Wave Music",
    description:
      "In this project it was used to understand the GitHub flow, the scrum methodology and the responsibilities of teamwork. In the deploy Mongo Atlas was used for the database, Heroku for the server and Firebase for the front.",
    tecnologies: [JAVASCRIPT, CSS, REACT, NODE, MONGODB],
    repositoryUrl: "https://github.com/ArenasAgustin/Repo-para-PG",
  },
  {
    id: projectsIds.blackparadox,
    name: "Blackparadox Portfolio",
    description:
      "Project made from a course on Udemy to improve technologies like HTML, Scss, JQuery, Ajax and learn a little about Php and Prepros.",
    tecnologies: [PHP, HTML, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/blackparadox",
  },
  {
    id: projectsIds.morse_decoder,
    name: "Morse Decoder",
    description:
      "Morse decoder is a web application that allows you to decode messages in morse code.",
    tecnologies: [JAVASCRIPT, REACT, TAILWIND],
    repositoryUrl: "https://github.com/ArenasAgustin/morse",
    deployedUrl: "https://morsetranslator.vercel.app/",
  },
  {
    id: projectsIds.url_shortener,
    name: "Url Shortener",
    description:
      "Project carried out to practice and improve technologies such as TypeScript, Tailwind CSS, Next.js, React, PostgreSQL and Prisma ORM.",
    tecnologies: [JAVASCRIPT, REACT, TAILWIND, POSTGRESQL, NEXT],
    repositoryUrl: "https://github.com/ArenasAgustin/url-shortener",
  },
  {
    id: projectsIds.cinema,
    name: "Cinema",
    description:
      "Project to learn to use Php and Laravel. In it you can see a list of movies, see the details of each one, add movies, edit them and delete them. You can also add, edit and delete both genders and users.",
    tecnologies: [PHP, LARAVEL, BOOTSTRAP, JAVASCRIPT, MYSQL],
    repositoryUrl: "https://github.com/ArenasAgustin/cinema-app",
  },
  {
    id: projectsIds.old_portfolio,
    name: "Portfolio old version",
    description: "Old version of my portfolio.",
    tecnologies: [NEXT, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/Portfolio",
  },
  {
    id: projectsIds.boxcustodia_test,
    name: "Boxcustodia Test",
    description: "Test for a job application.",
    tecnologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/boxcustodia-test",
  },
  {
    id: projectsIds.bego_test,
    name: "Bego Test",
    description: "Test for a job application.",
    tecnologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/bego-test",
  },
];

const proyectsActves = [
  projectsIds.brain_games_es,
  projectsIds.wave_music,
  projectsIds.blackparadox,
  projectsIds.morse_decoder,
  projectsIds.url_shortener,
  projectsIds.cinema,
];

export const projects = allProjects.filter((project) =>
  proyectsActves.includes(project.id)
);
