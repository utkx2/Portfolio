import {
  mobile,
  backend,
  web,
  cpp,
  python,
  tensorflow,
  azure,
  aws,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  CodeClause,
  CSCmuj,
  SpotifyClone,
  MineCraftClone,
  HDPS,
  threejs,
  notesOnCloud,
  tailwind,
  HumanActionRecognition,
  SalesforceLogo,
  Stoild
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Machine Learning Enthusiast",
    icon: mobile,
  },
  {
    title: "Cloud Computing Enthusiast",
    icon: backend,
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
    name: "C++",
    icon: cpp,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Stoild Private Limited",
    icon: Stoild,
    iconBg: "#383E56",
    date: "July 2023 - present",
    points: [
      "Leading the Frontend development team to enhance efficiency and code readability.",
      "Increased client productivity by up to 35 percent and improved code maintainability.",
      "Conducted testing and debugging on Backend side files to insure their proper functionality."
    ],
  },
  {
    title: "Salesforce Developer Trainee",
    company_name: "Salesforce",
    icon: SalesforceLogo,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Acquired relevant industry skills through hands-on training, projects, and courses from Trailhead.",
      "Collaborated with the development team to design and implement solutions based on business requirements and worked on Salesforce-provided projects to further enhance skills and knowledge.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "CodeClause",
    icon: CodeClause,
    iconBg: "#383E56",
    date: "February 2023 - March 2023",
    points: [
      "Contributed to writing the front-end code for a music streaming app using NextJS. Worked with APIs, including SpotifyAPI and Spotify Dashboard.",
      "Conducted testing and debugging on service side files to insure their proper functionality.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Deputy WebMaster",
    company_name: "Cyber Space Club, MUJ",
    icon: CSCmuj,
    iconBg: "383E56",
    date: "May 2022 - May 2023",
    points: [
      "Contributed to writing code in the development of the club's official website using React JS, node JS, express JS, sanity, swiper JS, API and bootstrap.",
      "Provided effective troubleshooting, finding and solving bugs.",
      "Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "MineCraft Clone",
    description:
      "Created a web-based version of Minecraft that can be played directly on the web browser, used reactJS and ThreeJS for modeling and controls.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: MineCraftClone,
    source_code_link: "https://github.com/utkx2/minecraft-mini",
  },
  {
    name: "Human Action Recognition System",
    description:
      "Developed a robust human action recognition system using TensorFlow, OpenCV, numpy, and pandas.",
    tags: [
      {
        name: "Tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      }
    ],
    image: HumanActionRecognition,
    source_code_link: "https://github.com/utkx2/Human-Action-Recognition"
  },
  {
    name: "Spotify Clone",
    description:
      "Developed a Spotify clone using Next.js to showcase my frontend development skills and create an interactive music platform.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
    ],
    image: SpotifyClone,
    source_code_link: "https://github.com/utkx2/music-streaming-application",
  },
  {
    name: "Heart Disease Predictions System",
    description:
      "Developed a heart disease prediction system using the UCI dataset to showcase my data analysis and machine learning skills.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: HDPS,
    source_code_link: "https://github.com/utkx2/Heart_disease_prediction",
  },
  {
    name: "Notes on Cloud",
    description:
      "made a full stack web application called notes on cloud in which the user can perform CRUD operations and store the data online to prevent any kind of data loss.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: notesOnCloud,
    source_code_link: "https://github.com/utkx2/notes-on-cloud",
  },
  {
    name: "(Under Development)",
    description:
      "Full Stack Social Media Website",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "under-development",
  }
];

export { services, technologies, experiences, projects };
