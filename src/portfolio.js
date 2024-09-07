const header = {
  homepage: 'https://react-pro-folio.netlify.app/',
  title: 'KL.',
}

const about = {
  name: 'Kaushal Lokhande',
  role: 'Front End Developer',
  description:
    'I am an accomplished Full-Stack Developer with expertise in React, Node.js, and Express.js. My skill set includes crafting intuitive user interfaces and delivering scalable solutions.',
  resume: 'https://drive.google.com/file/d/14-7qLBu9NkgAJkOMLN_6LM5gF0hytWXE/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/kaushal-lokhande-709432256/',
    github: 'https://github.com/Kaushallokhande',
  },
}

const projects = [
  {
    name: 'Daily Newspaper',
    description:
      'This is a React-based news application that allows users to explore news articles from various categories. The app uses the News API to fetch real-time news data.',
    stack: ['React', 'API', 'Bootstrap'],
    sourceCode: 'https://github.com/Kaushallokhande/DailyNewspaper',
    livePreview: 'https://www.youtube.com/watch?v=vvWJPjjEmIE',
    image: 'newpaper.png'
  },
  {
    name: 'iNotesBook Project',
    description:
      'Welcome to iNotesBook, a full-stack web application for managing notes, contacts, and news. This project is built using React for the frontend and Node.js with Express for the backend.',
    stack: ['React', 'Node', 'Express','MongooseDB'],
    sourceCode: 'https://github.com/Kaushallokhande/Task-Management',
    livePreview: 'https://www.youtube.com/watch?v=cJDfHY7y5m4',
    image: 'task.png'
  },
  {
    name: 'Instant Laughter Generator',
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
