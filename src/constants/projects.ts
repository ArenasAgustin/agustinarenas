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
  js_benchmark: "js_benchmark",
  old_portfolio: "old_portfolio",
  cv_2: "cv_2",
  boxcustodia_test: "boxcustodia_test",
  bego_test: "bego_test",
  valienta_test: "valienta_test",
  extrimian_test: "extrimian_test",
  juego_html: "juego_html",
  pixel_art: "pixel_art",
  todo_app_typescript: "todo_app_typescript",
  todo_app_2: "todo_app_2",
  todo_app: "todo_app",
  pikemons: "pikemons",
  agus_weather: "agus_weather",
  friends_page: "friends_page",
  responsive_web: "responsive_web",
  cubo_rubik: "cubo_rubik",
  celular_css: "celular_css",
  pokeball_css: "pokeball_css",
  haunter: "haunter",
  gastly: "gastly",
  merry_christmas_2: "merry_christmas_2",
  merry_christmas: "merry_christmas",
  promises: "promises",
  groot_bash: "groot_bash",
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
    tecnologies: [JAVASCRIPT, MONGODB, EXPRESS],
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
    id: projectsIds.js_benchmark,
    name: "JS Benchmark",
    description:
      "A benchmark to compare the performance of different JavaScript code snippets. This project is built with pure HTML, CSS, and JavaScript.",
    tecnologies: [JAVASCRIPT, HTML, CSS],
    repositoryUrl: "https://github.com/ArenasAgustin/benchmarck",
    deployedUrl: "https://arenasagustin.github.io/benchmarck/",
  },
  {
    id: projectsIds.old_portfolio,
    name: "Portfolio old version",
    description: "Old version of my portfolio.",
    tecnologies: [NEXT, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/Portfolio",
  },
  {
    id: projectsIds.cv_2,
    name: "CV 2",
    description: "Curriculum vitae made with HTML, CSS and TypeScript.",
    tecnologies: [NEXT, CSS, TYPESCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/Cv2.0",
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
  {
    id: projectsIds.valienta_test,
    name: "Valienta Test",
    description: "Test for a job application.",
    tecnologies: [SASS, JAVASCRIPT, REACT, NODE, MONGODB, EXPRESS],
    repositoryUrl: "https://github.com/ArenasAgustin/valienta-front-test",
  },
  {
    id: projectsIds.extrimian_test,
    name: "Extrimian Test",
    description: "Test for a job application.",
    tecnologies: [SASS, JAVASCRIPT, REACT, NODE, SOLIDITY],
    repositoryUrl: "https://github.com/ArenasAgustin/extrimian-dapp",
  },
  {
    id: projectsIds.juego_html,
    name: "Juego HTML",
    description: "Games made with HTML, CSS and JavaScript.",
    tecnologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/Juegos-HTML",
  },
  {
    id: projectsIds.todo_app_typescript,
    name: "Todo App TypeScript",
    description: "Todo app made with HTML, CSS and TypeScript.",
    tecnologies: [HTML, CSS, TYPESCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/ToDoApp2.0",
  },
  {
    id: projectsIds.todo_app_2,
    name: "Todo App 2",
    description: "Todo app made with HTML, CSS and JavaScript.",
    tecnologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/ToDoApp2.0",
  },
  {
    id: projectsIds.todo_app,
    name: "Todo App",
    description: "Todo app made with HTML, CSS and JavaScript.",
    tecnologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/ToDoApp",
  },
  {
    id: projectsIds.pikemons,
    name: "Pikemons",
    description: "Pokedex",
    tecnologies: [REACT, CSS, JAVASCRIPT, NODE, EXPRESS, POSTGRESQL],
    repositoryUrl: "https://github.com/ArenasAgustin/Pikemons",
  },
  {
    id: projectsIds.agus_weather,
    name: "Agus Weather",
    description: "Weather app made with HTML, CSS and JavaScript.",
    tecnologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/AgusWeather",
  },
  {
    id: projectsIds.friends_page,
    name: "Friends Page",
    description: "Friends page made with HTML, CSS and JavaScript.",
    tecnologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/FriendsPage",
  },
  {
    id: projectsIds.responsive_web,
    name: "Responsive Web",
    description: "Responsive web made with HTML and LESS.",
    tecnologies: [HTML, LESS],
    repositoryUrl: "https://github.com/ArenasAgustin/ResponsiveWeb",
  },
  {
    id: projectsIds.pixel_art,
    name: "Pixel Art",
    description: "Pixel art made with HTML, SASS and JavaScript.",
    tecnologies: [HTML, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/pixelart-logo",
  },
  {
    id: projectsIds.cubo_rubik,
    name: "Rubik's Cube",
    description: "Rubik's cube made with HTML, CSS and JavaScript.",
    tecnologies: [HTML, CSS],
    repositoryUrl: "https://github.com/ArenasAgustin/cubo-rubik",
  },
  {
    id: projectsIds.celular_css,
    name: "Celphone CSS",
    description: "Celphone made with CSS.",
    tecnologies: [HTML, CSS],
    repositoryUrl: "https://github.com/ArenasAgustin/celular-css",
  },
  {
    id: projectsIds.pokeball_css,
    name: "Pokeball CSS",
    description: "Pokeball made with CSS.",
    tecnologies: [HTML, CSS],
    repositoryUrl: "https://github.com/ArenasAgustin/pokeball-css",
  },
  {
    id: projectsIds.haunter,
    name: "Haunter",
    description: "Haunter made with CSS",
    tecnologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/haunter-page",
  },
  {
    id: projectsIds.gastly,
    name: "Gastly",
    description: "Gastly made with CSS",
    tecnologies: [HTML, CSS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/gastly-page",
  },
  {
    id: projectsIds.merry_christmas_2,
    name: "Merry Christmas 2",
    description: "Merry Christmas card made with HTML, SASS and JavaScript.",
    tecnologies: [HTML, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/merry-christmas2.0",
  },
  {
    id: projectsIds.merry_christmas,
    name: "Merry Christmas",
    description: "Merry Christmas card made with HTML, SASS and JavaScript.",
    tecnologies: [HTML, SASS, JAVASCRIPT],
    repositoryUrl: "https://github.com/ArenasAgustin/merry-christmas",
  },
  {
    id: projectsIds.promises,
    name: "promises",
    description: "Promises made with JavaScript.",
    tecnologies: [JAVASCRIPT, NODE],
    repositoryUrl: "https://github.com/ArenasAgustin/MyPromises",
  },
  {
    id: projectsIds.groot_bash,
    name: "Groot Bash",
    description: "Bash made with JavaScript.",
    tecnologies: [JAVASCRIPT, NODE],
    repositoryUrl: "https://github.com/ArenasAgustin/GrootBash",
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
