import {
  science,
  reactdev,
  learner,
  web_dev,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  firebase,
  tailwind,
  nodejs,
  mongodb,
  git,
  mysql,
  nextjs,
  yorku,
  uoft,
  seneca,
  bemo,
  aiSummarizer,
  animeBootcamp,
  jobSeeker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web_dev,
  },
  {
    title: "Science Background",
    icon: science,
  },
  {
    title: "React Developer",
    icon: reactdev,
  },
  {
    title: "Tech Savy",
    icon: learner,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Biomedical Science Program",
    company_name: "York University",
    icon: yorku,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - Dec 2021",
    points: [
      "Develop a strong grasp of core biological concepts, including genetics, cell biology, and physiology.",
      "Gain knowledge about medical topics, human anatomy, and disease mechanisms.",
      "Acquire practical skills in laboratory techniques, data analysis, and research.",
      "Enhance problem-solving abilities and critical thinking through real-world medical challenges and scientific analysis.",
    ],
  },
  {
    title: "Full stack Development Bootcamp",
    company_name: "University of Toronto",
    icon: uoft,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Feb 2023",
    points: [
      "Attain strong coding skills in relevant programming languages and technologies.",
      "Develop effective problem-solving techniques through hands-on coding projects.",
      "Learn to collaborate in coding teams, simulating real-world development environments.",
      "Acquire skills aligned with industry demands, enhancing job readiness in tech fields.",
    ],
  },
  {
    title: "Computer Programming & Analysis",
    company_name: "Seneca",
    icon: seneca,
    iconBg: "#DA281C",
    date: "Sep 2023 - TBD",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BEMO",
    description:
      "A mobile app built with Expo and React Native, leveraging the power of Firebase for seamless backend functionality and authentication. Stores can effortlessly upload pictures of their items for sale directly from their camera roll, streamlining the selling process. Users can follow their favourite stores, stay updated with new posts, and engage through likes and comments, fostering a sense of community and customer engagement.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: bemo,
    source_code_link: "https://github.com/renfunny/BEMO-react_native",
  },
  {
    name: "AI Summarizer",
    description:
      "An AI-based article/webpage summarizer that will give the user a short and concise summary of the article or webpage given. The app works by using an openAI API which takes in the URL of the article/webpage and gives back a summary. Sumz is also able to save the last 5 summaries the user has made, as well as switch between them with a simple click.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: aiSummarizer,
    source_code_link: "https://github.com/renfunny/AI-Summarizer",
  },
  {
    name: "Anime Bootcamp",
    description:
      "A simple web app that allows users to search for their favourite anime and manga. The app uses the anime-db API to fetch the data and display it in a clean and organized manner. Users can also save their favourite anime and manga to their profile, which is stored using MongoDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: animeBootcamp,
    source_code_link: "https://github.com/renfunny/anime-bootcamp",
  },
  {
    name: "Job Seeker",
    description: `An application created with React Native which uses a third party API (JSearch) to fetch data of jobs the user might be interested on. It is able to display jobs nearby, popular jobs, full-time, part-time, and contractor jobs. The app will look for React Developer jobs in the US as a default unless the user uses the search bar to search for a specific job at a specific location. The user also has the option to tap the "Apply for job" button which will take them to the actual job posting.`,
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: jobSeeker,
    source_code_link: "https://github.com/renfunny/job_seeker-react_native",
  },
];

export { services, technologies, experiences, testimonials, projects };
