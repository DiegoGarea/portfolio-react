import {
  blueplanet,
  moon,
  earth,
  sun,
  javascript,
  supabase,
  html,
  css,
  reactjs,
  tailwind,
  nextjs,
  git,
  planet1,
  planet2,
  planet3,
  planet4,
  moviesearch,
  amazonclone,
  metaverse,
  modernbank,
  shirt,
  atm,
  rockpaperscissors,
  youtube,
  supabasefetch,
  threejs,
  instagram,
  mygithub,
  linkedin,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'Experience',
    title: 'Experience',
  },
  {
    id: 'Projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: blueplanet,
  },
  {
    title: 'React Developer',
    icon: earth,
  },
  {
    title: 'Content Creator',
    icon: sun,
  },
  {
    title: 'Continuous Learning',
    icon: moon,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Supabase',
    icon: supabase,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
];

const experiences = [
  {
    title: '- HTML -',

    icon: planet1,
    iconBg: '#383E56',
    points: [
      "I've refined my skills in crafting robust semantic structures that enhance user experiences and bolster SEO. HTML serves as the cornerstone for constructing solid webpage structures. These proficiencies, among others, play a pivotal role in my journey as a web developer.",
    ],
  },
  {
    title: '- CSS & Tailwind -',

    icon: planet2,
    iconBg: '#E6DEDD',
    points: [
      "With a nice grasp of CSS and understanding of Tailwind, These skills are integral to my ongoing journey in web development, working seamlessly alongside my HTML knowledge. As an advocate of perpetual learning, I'm dedicated to staying current with industry trends and continuously bolstering my CSS and Tailwind capabilities.",
    ],
  },
  {
    title: '- Javascript -',

    icon: planet3,
    iconBg: '#383E56',
    points: [
      "With a solid understanding of JavaScript, I've consistently endeavored to develop dynamic web applications that engage users effectively. These skills are an essential part of my journey in web development.  I remain dedicated to keeping up with evolving technologies, continuously enhancing my JavaScript skills, and crafting innovative web solutions.",
    ],
  },
  {
    title: 'Frontend',

    icon: planet4,
    iconBg: '#E6DEDD',
    points: [
      'As a Front-End Developer, I create web apps with React.js and various technologies like Framer Motion, Three.js, React Router, Canvas, Tilt, Supabase, and more. My focus is on responsive design and cross-browser compatibility for exceptional user experiences. I continually learn and improve to become a better developer',
    ],
  },
];

const projects = [
  {
    name: 'Metaverse',
    description:
      'Next.js-powered web app with Framer Motion used for animation and Tailwind used for responsive & styling. These technologie tools make it look amazing',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'FramerMotion',
        color: 'pink-text-gradient',
      },
    ],
    image: metaverse,
    source_code_link: 'https://github.com/DiegoGarea/metaversus',
    link_live: 'https://diegogarea.github.io/metaversus/',
  },
  {
    name: 'Supabase REST API',
    description:
      'Supabase is a versatile REST API that empowers developers to create, manage, and manipulate... used (GET, POST, PATCH, and DELETE).',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'API',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: supabasefetch,
    source_code_link: 'https://github.com/DiegoGarea/React-Supabase-fetch',
    link_live: 'https://diegogarea.github.io/React-Supabase-fetch/',
  },
  {
    name: 'Movie Search',
    description:
      'React-powered web app with CSS and a API, explore an external movie database enjoying an intuitive interface to discover  films and TV series',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'API',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: moviesearch,
    source_code_link: 'https://github.com/DiegoGarea/react-movie-api/',
    link_live: 'https://diegogarea.github.io/react-movie-api/',
  },
  {
    name: 'Amazon Clone',
    description:
      'Javascript-powered web app with CSS and HTML. The project aims to replicate the Amazon web interface and basic functionality.',
    tags: [
      {
        name: 'Javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'HTML',
        color: 'pink-text-gradient',
      },
    ],
    image: amazonclone,
    source_code_link: 'https://github.com/DiegoGarea/amazon-clone',
    link_live: 'https://diegogarea.github.io/amazon-clone/',
  },
  {
    name: 'Bank',
    description:
      'React-powered web app with Tailwind used for responsive & styling - this technology tools make it elegant and nice looking modern design',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: modernbank,
    source_code_link: 'https://github.com/DiegoGarea/reactjs-bank-modern',
    link_live: 'https://diegogarea.github.io/reactjs-bank-modern/',
  },
  {
    name: '3D Shirt Page',
    description:
      'React-powered web app with Framer Motion for animations, and Tailwind for responsive design and styling. This technological tools results in a stunning visual experience.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'FramerMotion',
        color: 'pink-text-gradient',
      },
    ],
    image: shirt,
    source_code_link:
      'https://github.com/DiegoGarea/reactjs-3d-Shirt-threejs-valtio-tailwind',
    link_live:
      'https://diegogarea.github.io/reactjs-3d-Shirt-threejs-valtio-tailwind/',
  },
  {
    name: 'ATM simulator',
    description:
      'Javascript-powered web app with CSS, interactive ATM simulation experience withdrawals, deposits, bill payments, balances, and more at your fingertips.',
    tags: [
      {
        name: 'Javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: atm,
    source_code_link: 'https://github.com/DiegoGarea/VanillaJS-ATM-project',
    link_live: 'https://diegogarea.github.io/VanillaJS-ATM-project/',
  },
  {
    name: 'Rock Paper Scissors',
    description:
      'Javascript-powered Rock Paper Scissors, choose your move or let it play automatically. Reset the score button and localstorage to save the score',
    tags: [
      {
        name: 'Javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: rockpaperscissors,
    source_code_link: 'https://github.com/DiegoGarea/Rock-Paper-Scissors',
    link_live: 'https://diegogarea.github.io/Rock-Paper-Scissors/',
  },
  {
    name: 'Youtube Clone',
    description:
      'This YouTube-clone exemplifies the dynamic fusion of CSS and HTML, crafting visually stunning websites with only this two powerfull tools.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: youtube,
    source_code_link: 'https://github.com/DiegoGarea/HTML-CSS-YouTube-Clone',
    link_live: 'https://diegogarea.github.io/HTML-CSS-YouTube-Clone/',
  },
];

const socialNetworks = [
  {
    title: 'github',
    icon: mygithub,
    link: 'https://github.com/DiegoGarea',
  },
  {
    title: 'instagram',
    icon: instagram,
    link: 'https://www.instagram.com/diego_garea/',
  },
  {
    title: 'linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/diego-garea-59307228b/',
  },
];

export {services, technologies, experiences, projects, socialNetworks};
