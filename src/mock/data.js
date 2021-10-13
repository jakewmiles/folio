import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio | Jake Miles', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey there! 👋 I'm",
  name: 'Jake Miles',
  subtitle: 'A software engineer, currently based in London',
  cta: 'Tell me more!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "🌍 I'm all about creating sleek, reliable applications that bring people together to change the world for the better.",
  paragraphTwo: "🐛 I'm relentless when it comes to squashing bugs and solving tricky problems.",
  paragraphThree:
    "📚 I'm always learning! My recent focus has been on functional programming, particularly Elixir and the Phoenix Framework.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'slendercards.png',
    title: 'slendercards',
    info: 'slendercards is a full-stack web app built to help people learn languages. Users can choose a language pair and automatically generate context-based flashcards based on personal search terms.',
    info2:
      'Built from the ground up using Svelte, ExpressJS and Mongoose, with web scraping via Cheerio to generate flashcard information.',
    url: '',
    repo: 'https://github.com/jakewmiles/slendercards', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kanban.jpg',
    title: 'kanban',
    info: 'A app to help teams be productive. See updates across collaborators in real time.',
    info2:
      'Built using Phoenix, Phoenix LiveView and Elixir with a PostgreSQL database. Realtime functionality thanks to Phoenix PubSub.',
    url: '',
    repo: 'https://github.com/jakewmiles/kanban', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bogo.png',
    title: 'boGo',
    info: 'Bogo aims to connect travellers with locals in cities around the world and is fully functional on both Android and iOS.',
    info2:
      'Bogo was built using React Native with expo on the front-end and Apollo GraphQL and Sequelize/PostgreSQL on the back-end.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];
