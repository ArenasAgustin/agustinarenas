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

export const projects: Project[] = [
  {
    id: "brain_games_es",
    name: "Brain Games",
    description:
      "I present to you a project that I call Brain Games Es, it is a game that consists of 16 levels to decipher an encrypted word, score and clues.",
    tecnologies: [TYPESCRIPT, SASS, REACT, NODE, MONGODB],
    repositoryUrl: "https://github.com/ArenasAgustin/brain-games",
    deployedUrl: "https://brain-games.vercel.app/",
  },
  {
    id: "wave_music",
    name: "Wave Music",
    description:
      "In this project it was used to understand the GitHub flow, the scrum methodology and the responsibilities of teamwork. In the deploy Mongo Atlas was used for the database, Heroku for the server and Firebase for the front.",
    tecnologies: [JAVASCRIPT, CSS, REACT, NODE, MONGODB],
    repositoryUrl: "https://github.com/ArenasAgustin/Repo-para-PG",
  },
  {
    id: "blackparadox",
    name: "Blackparadox Portfolio",
    description:
      "Project made from a course on Udemy to improve technologies like HTML, Scss, JQuery, Ajax and learn a little about Php and Prepros.",
    tecnologies: [PHP, HTML, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/blackparadox",
  },
  {
    id: "morse_decoder",
    name: "Morse Decoder",
    description:
      "Morse decoder is a web application that allows you to decode messages in morse code.",
    tecnologies: [JAVASCRIPT, REACT, TAILWIND],
    repositoryUrl: "https://github.com/ArenasAgustin/morse",
    deployedUrl: "https://morsetranslator.vercel.app/",
  },
  {
    id: "url_shortener",
    name: "Url Shortener",
    description:
      "Project carried out to practice and improve technologies such as TypeScript, Tailwind CSS, Next.js, React, PostgreSQL and Prisma ORM.",
    tecnologies: [JAVASCRIPT, REACT, TAILWIND, POSTGRESQL, NEXT],
    repositoryUrl: "https://github.com/ArenasAgustin/url-shortener",
  },
  {
    id: "cinema",
    name: "Cinema",
    description:
      "Project to learn to use Php and Laravel. In it you can see a list of movies, see the details of each one, add movies, edit them and delete them. You can also add, edit and delete both genders and users.",
    tecnologies: [PHP, LARAVEL, BOOTSTRAP, JAVASCRIPT, MYSQL],
    repositoryUrl: "https://github.com/ArenasAgustin/cinema-app",
  },
];
