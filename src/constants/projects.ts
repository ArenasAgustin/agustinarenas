import type { ImageMetadata } from 'astro';
import type { Localized } from "@/i18n/config";
import {
  BOOTSTRAP,
  CSS,
  EXPRESS,
  HTML,
  JAVASCRIPT,
  LARAVEL,
  LESS,
  MONGODB,
  MYSQL,
  NEXT,
  NODE,
  PHP,
  POSTGRESQL,
  REACT,
  SASS,
  SOLIDITY,
  TAILWIND,
  TYPESCRIPT,
  type Technology,
} from "./technologies";

import webtoolsImg      from '../assets/webtools.webp';
import brainGamesImg    from '../assets/brain_games_es.webp';
import waveMusicImg     from '../assets/wave_music.webp';
import blackparadoxImg  from '../assets/blackparadox.webp';
import jsBenchmarkImg   from '../assets/js_benchmark.webp';
import morseDecoderImg  from '../assets/morse_decoder.webp';
import urlShortenerImg  from '../assets/url_shortener.webp';
import cinemaImg        from '../assets/cinema.webp';

export interface Project {
  id: string;
  name: string;
  description: Localized;
  technologies: Technology[];
  repositoryUrl?: string;
  deployedUrl?: string;
  featured?: boolean;
  image?: ImageMetadata;
}

const allProjects: Project[] = [
  {
    id: "webdev_tools",
    name: "Webdev Tools",
    description: {
      en: "A collection of useful tools for web developers, built with React 19, TypeScript, Vite, and Tailwind CSS.",
      es: "Colección de herramientas útiles para desarrolladores web, creada con React 19, TypeScript, Vite y Tailwind CSS.",
    },
    technologies: [TYPESCRIPT, REACT, TAILWIND],
    repositoryUrl: "https://github.com/ArenasAgustin/webdev.tools",
    deployedUrl: "https://arenas-webtools.vercel.app/",
    featured: true,
    image: webtoolsImg,
  },
  {
    id: "brain_games_es",
    name: "Brain Games",
    description: {
      en: "Word puzzle game with 16 levels where players decode encrypted words using clues, scoring, and progressive difficulty. Backed by its own Express + MongoDB REST API.",
      es: "Juego de acertijos de palabras con 16 niveles en el que se descifran palabras encriptadas mediante pistas, puntaje y dificultad progresiva. Respaldado por su propia API REST con Express y MongoDB.",
    },
    technologies: [TYPESCRIPT, SASS, REACT, NODE, EXPRESS, MONGODB],
    repositoryUrl: "https://github.com/ArenasAgustin/brain-games",
    deployedUrl: "https://brain-games.vercel.app/",
    featured: true,
    image: brainGamesImg,
  },
  {
    id: "wave_music",
    name: "Wave Music",
    description: {
      en: "Collaborative music platform developed with agile teamwork practices, using MongoDB Atlas, Heroku, and Firebase for deployment.",
      es: "Plataforma musical colaborativa desarrollada con prácticas ágiles de trabajo en equipo, utilizando MongoDB Atlas, Heroku y Firebase para el despliegue.",
    },
    technologies: [JAVASCRIPT, CSS, REACT, NODE, MONGODB],
    repositoryUrl: "https://github.com/ArenasAgustin/Repo-para-PG",
    featured: true,
    image: waveMusicImg,
  },
  {
    id: "blackparadox",
    name: "Blackparadox Portfolio",
    description: {
      en: "Portfolio project built to strengthen practical skills in HTML, Sass, jQuery, Ajax, and PHP tooling.",
      es: "Proyecto de portafolio creado para afianzar habilidades prácticas en HTML, Sass, jQuery, Ajax y herramientas de PHP.",
    },
    technologies: [PHP, HTML, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/blackparadox",
    featured: true,
    image: blackparadoxImg,
  },
  {
    id: "js_benchmark",
    name: "JS Benchmark Tool",
    description: {
      en: "A benchmark to compare the performance of different JavaScript code snippets. This project is built with pure HTML, CSS, and JavaScript.",
      es: "Benchmark para comparar el rendimiento de distintos fragmentos de código JavaScript. Este proyecto está hecho con HTML, CSS y JavaScript puros.",
    },
    technologies: [JAVASCRIPT, HTML, CSS],
    repositoryUrl: "https://github.com/ArenasAgustin/benchmarck",
    deployedUrl: "https://arenasagustin.github.io/benchmarck/",
    featured: true,
    image: jsBenchmarkImg,
  },
  {
    id: "morse_decoder",
    name: "Morse Decoder",
    description: {
      en: "Web application that translates and decodes Morse code messages through a simple and responsive interface.",
      es: "Aplicación web que traduce y decodifica mensajes en código Morse mediante una interfaz simple y adaptable.",
    },
    technologies: [JAVASCRIPT, REACT, TAILWIND],
    repositoryUrl: "https://github.com/ArenasAgustin/morse",
    deployedUrl: "https://morsetranslator.vercel.app/",
    featured: true,
    image: morseDecoderImg,
  },
  {
    id: "url_shortener",
    name: "Url Shortener",
    description: {
      en: "URL shortener built to practice TypeScript, React, Next.js, Tailwind CSS, PostgreSQL, and Prisma ORM.",
      es: "Acortador de URL creado para practicar TypeScript, React, Next.js, Tailwind CSS, PostgreSQL y Prisma ORM.",
    },
    technologies: [TYPESCRIPT, REACT, TAILWIND, POSTGRESQL, NEXT],
    repositoryUrl: "https://github.com/ArenasAgustin/url-shortener",
    featured: true,
    image: urlShortenerImg,
  },
  {
    id: "cinema",
    name: "Cinema",
    description: {
      en: "Cinema management app built with PHP and Laravel, including CRUD flows for movies, genres, and users.",
      es: "Aplicación de gestión de cine hecha con PHP y Laravel, con flujos CRUD para películas, géneros y usuarios.",
    },
    technologies: [PHP, LARAVEL, BOOTSTRAP, JAVASCRIPT, MYSQL],
    repositoryUrl: "https://github.com/ArenasAgustin/cinema-app",
    featured: true,
    image: cinemaImg,
  },
  {
    id: "old_portfolio",
    name: "Portfolio old version",
    description: {
      en: "Old version of my portfolio.",
      es: "Versión anterior de mi portafolio.",
    },
    technologies: [NEXT, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/Portfolio",
  },
  {
    id: "cv_2",
    name: "CV 2",
    description: {
      en: "Curriculum vitae made with HTML, CSS and TypeScript.",
      es: "Currículum vitae hecho con HTML, CSS y TypeScript.",
    },
    technologies: [NEXT, CSS, TYPESCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/Cv2.0",
  },
  {
    id: "boxcustodia_test",
    name: "Boxcustodia Test",
    description: {
      en: "Test for a job application.",
      es: "Prueba técnica para una postulación laboral.",
    },
    technologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/boxcustodia-test",
  },
  {
    id: "bego_test",
    name: "Bego Test",
    description: {
      en: "Test for a job application.",
      es: "Prueba técnica para una postulación laboral.",
    },
    technologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/bego-test",
  },
  {
    id: "valienta_test",
    name: "Valienta Test",
    description: {
      en: "Test for a job application.",
      es: "Prueba técnica para una postulación laboral.",
    },
    technologies: [SASS, JAVASCRIPT, REACT, NODE, MONGODB, EXPRESS],
    repositoryUrl: "https://github.com/ArenasAgustin/valienta-front-test",
  },
  {
    id: "extrimian_test",
    name: "Extrimian Test",
    description: {
      en: "Test for a job application.",
      es: "Prueba técnica para una postulación laboral.",
    },
    technologies: [SASS, JAVASCRIPT, REACT, NODE, SOLIDITY],
    repositoryUrl: "https://github.com/ArenasAgustin/extrimian-dapp",
  },
  {
    id: "juego_html",
    name: "Juego HTML",
    description: {
      en: "Games made with HTML, CSS and JavaScript.",
      es: "Juegos hechos con HTML, CSS y JavaScript.",
    },
    technologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/Juegos-HTML",
  },
  {
    id: "todo_app_typescript",
    name: "Todo App TypeScript",
    description: {
      en: "Todo app made with HTML, CSS and TypeScript.",
      es: "Aplicación de tareas hecha con HTML, CSS y TypeScript.",
    },
    technologies: [HTML, CSS, TYPESCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/ToDoApp2.0",
  },
  {
    id: "todo_app_2",
    name: "Todo App 2",
    description: {
      en: "Todo app made with HTML, CSS and JavaScript.",
      es: "Aplicación de tareas hecha con HTML, CSS y JavaScript.",
    },
    technologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/ToDoApp2.0",
    featured: false,
  },
  {
    id: "todo_app",
    name: "Todo App",
    description: {
      en: "Todo app made with HTML, CSS and JavaScript.",
      es: "Aplicación de tareas hecha con HTML, CSS y JavaScript.",
    },
    technologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/ToDoApp",
  },
  {
    id: "pikemons",
    name: "Pikemons",
    description: {
      en: "Pokedex",
      es: "Pokédex",
    },
    technologies: [REACT, CSS, JAVASCRIPT, NODE, EXPRESS, POSTGRESQL],
    repositoryUrl: "https://github.com/ArenasAgustin/Pikemons",
  },
  {
    id: "agus_weather",
    name: "Agus Weather",
    description: {
      en: "Weather app made with HTML, CSS and JavaScript.",
      es: "Aplicación del clima hecha con HTML, CSS y JavaScript.",
    },
    technologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/AgusWeather",
  },
  {
    id: "friends_page",
    name: "Friends Page",
    description: {
      en: "Friends page made with HTML, CSS and JavaScript.",
      es: "Página de amigos hecha con HTML, CSS y JavaScript.",
    },
    technologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/FriendsPage",
  },
  {
    id: "responsive_web",
    name: "Responsive Web",
    description: {
      en: "Responsive web made with HTML and LESS.",
      es: "Sitio web adaptable hecho con HTML y LESS.",
    },
    technologies: [HTML, LESS],
    repositoryUrl: "https://github.com/ArenasAgustin/ResponsiveWeb",
  },
  {
    id: "pixel_art",
    name: "Pixel Art",
    description: {
      en: "Pixel art made with HTML, SASS and JavaScript.",
      es: "Pixel art hecho con HTML, SASS y JavaScript.",
    },
    technologies: [HTML, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/pixelart-logo",
  },
  {
    id: "cubo_rubik",
    name: "Rubik's Cube",
    description: {
      en: "Rubik's cube made with HTML, CSS and JavaScript.",
      es: "Cubo de Rubik hecho con HTML, CSS y JavaScript.",
    },
    technologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/cubo-rubik",
  },
  {
    id: "celular_css",
    name: "Cellphone CSS",
    description: {
      en: "Cellphone made with CSS.",
      es: "Celular hecho con CSS.",
    },
    technologies: [HTML, CSS],
    repositoryUrl: "https://github.com/ArenasAgustin/celular-css",
  },
  {
    id: "pokeball_css",
    name: "Pokeball CSS",
    description: {
      en: "Pokeball made with CSS.",
      es: "Pokébola hecha con CSS.",
    },
    technologies: [HTML, CSS],
    repositoryUrl: "https://github.com/ArenasAgustin/pokeball-css",
  },
  {
    id: "haunter",
    name: "Haunter",
    description: {
      en: "Haunter made with CSS",
      es: "Haunter hecho con CSS",
    },
    technologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/haunter-page",
  },
  {
    id: "gastly",
    name: "Gastly",
    description: {
      en: "Gastly made with CSS",
      es: "Gastly hecho con CSS",
    },
    technologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/gastly-page",
  },
  {
    id: "merry_christmas_2",
    name: "Merry Christmas 2",
    description: {
      en: "Merry Christmas card made with HTML, SASS and JavaScript.",
      es: "Tarjeta navideña hecha con HTML, SASS y JavaScript.",
    },
    technologies: [HTML, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/merry-christmas2.0",
  },
  {
    id: "merry_christmas",
    name: "Merry Christmas",
    description: {
      en: "Merry Christmas card made with HTML, SASS and JavaScript.",
      es: "Tarjeta navideña hecha con HTML, SASS y JavaScript.",
    },
    technologies: [HTML, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/merry-christmas",
  },
  {
    id: "promises",
    name: "Promises",
    description: {
      en: "Promises made with JavaScript.",
      es: "Promesas implementadas con JavaScript.",
    },
    technologies: [JAVASCRIPT, NODE],
    repositoryUrl: "https://github.com/ArenasAgustin/MyPromises",
  },
  {
    id: "groot_bash",
    name: "Groot Bash",
    description: {
      en: "Bash made with JavaScript.",
      es: "Bash hecho con JavaScript.",
    },
    technologies: [JAVASCRIPT, NODE],
    repositoryUrl: "https://github.com/ArenasAgustin/GrootBash",
  },
];

export const projects = allProjects.filter((project) => project.featured === true);

export const FEATURED_PROJECTS_COUNT = projects.length;
export const allProjectsList = allProjects;
