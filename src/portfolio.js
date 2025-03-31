const header = {
  homepage: 'https://portfolio-ten-hazel-54.vercel.app/',
  title: 'KL.',
}

const about = {
  name: 'Kaushal Lokhande',
  role: 'Full Stack Developer',
  description:
    'I am an accomplished Full-Stack Developer with expertise in React, Node.js, and Express.js. My skill set includes crafting intuitive user interfaces and delivering scalable solutions.',
  resume: 'https://drive.google.com/file/d/1GuOrInyPD2Z5DApucQK1ZoWE_XemZus7/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/kaushal-lokhande-709432256/',
    github: 'https://github.com/Kaushallokhande',
  },
}

const projects = [
  {
    "name": "CodeLive",
    "description": "CodeLive is a real-time collaborative coding platform designed for seamless peer programming and technical interviews. It enables users to create and join coding sessions, edit code collaboratively, and communicate via an integrated chat system. The platform features secure authentication, room management, syntax highlighting, and real-time updates powered by Socket.IO.",
    "stack": ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "Material UI"],
    "sourceCode": "https://github.com/Kaushallokhande/CodeLive",
    "livePreview": "https://codelive-virid.vercel.app/",
    "image": "codelive.png"
  },  
  {
    name: 'Prahari',
    description:
      'This is a React-based news application that allows users to explore news articles from various categories. The app uses the News API to fetch real-time news data.',
    stack: ['React js', 'Google OAuth', 'i18next.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/Kaushallokhande/Anti-Doping',
    livePreview: 'https://anti-doping.vercel.app/',
    image: 'antidoping.png'
  },
  {
    name: 'Headline Hub',
    description:
      'This is a React-based news application that allows users to explore news articles from various categories. The app uses the News API to fetch real-time news data.',
    stack: ['React', 'Bootstrap', 'React-Router-Dom', 'REST API', 'React-Infinite-Scroll', 'CSS'],
    sourceCode: 'https://github.com/Kaushallokhande/Headline-Hub',
    livePreview: 'https://headline-hub-tau.vercel.app/',
    image: 'newpaper.png'
  },
  {
    name: 'Chat with AI',
    description:
      'Developed a chat application using React and Node.js with MongoDB for data storage. The app fetches chat history from a backend server and displays it to the user, allowing seamless interactions.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'REST API'],
    sourceCode: 'https://github.com/Kaushallokhande/DailyNewspaper',
    livePreview: 'https://anti-doping.vercel.app/chat',
    image: 'ChatwithAI.png'
  },
  {
    name: 'Nearset Hospital',
    description:
      'Developed a web application using React and Google Maps API to help users locate the nearest hospitals. The application displays real-time hospital locations, calculates the nearest hospital, and provides route information including distance and estimated driving duration.',
    stack: [ 'React', 'Google Maps API', 'Chakra UI', 'JavaScript'],
    sourceCode: 'https://github.com/Kaushallokhande/GMap',
    livePreview: 'https://g-map-snowy.vercel.app/',
    image: 'gmap.png'
  },
  {
    name: 'iNotesBook Project',
    description:
      'Welcome to iNotesBook, a full-stack web application for managing notes, contacts, and news. This project is built using React for the frontend and Node.js with Express for the backend.',
    stack: ['React js', 'Node js', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/Kaushallokhande/Task-Management',
    livePreview: 'https://task-management-nine-ebon.vercel.app/',
    image: 'task.png'
  },
  {
    name: 'Instant Laughter',
    description:
      'This web application provides a collection of random jokes to bring a smile to your face. Click the "Get New Joke" button to enjoy a fresh dose of humor.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Kaushallokhande/Random-Jokes',
    livePreview: 'https://randomm-joke.netlify.app/',
    image: 'joke.png'
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind',
  'REST API',
  'Node',
  'Express',
  'Redux',
  'MongoDB',
  'Material UI',
  'Git & Git Hub',
]

const contact = {
  email: 'kaushallokhande3@gmail.com',
}

export { header, about, projects, skills, contact }
