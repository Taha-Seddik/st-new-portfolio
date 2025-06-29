import { ProjectDetails } from "@/models/projectDetails";
import { HomeSections } from "./constants";
import { withBasePath } from "./withBasePath";

export const NavigationData: { text: string; scrollTo: string }[] = [
  { text: "About", scrollTo: HomeSections.Intro },
  { text: "Projects", scrollTo: HomeSections.Projects },
  { text: "Experience", scrollTo: HomeSections.EducationAndExperience },
  { text: "Skills", scrollTo: HomeSections.Skills },
];

export const EductionDataArr = [
  {
    label: "Engineer's Degree - Software Engineering",
    place: "University of sciences in Tunis",
    fromTo: "2014-2017",
    imgPath: withBasePath("/mix/fst.png"),
  },
  {
    label: "Preparatory Engineering Studies - Technology",
    place: "IPEIM",
    fromTo: "2012-2014",
    imgPath: withBasePath("/mix/ipeim.jpg"),
  },
  {
    label: "Bachelor of Technology (B.Tech.) - Technology",
    place: "Ibno Rochd high school",
    fromTo: "2012",
    imgPath: withBasePath("/mix/ibnoRochd.png"),
  },
];

export const ExperienceDataArr = [
  {
    key: "c78af883-c9b0-4ec5-9f23-2f8c24f232db",
    workLabel: "Full-stack developer",
    companyName: "Talan",
    fromTo: "January 2024 - Present",
    description: "",
    imgPath: "/mix/talan.jpg",
  },
  {
    key: "c78af883-c9b0-4ec5-9f23-2f8c24f23fdb",
    workLabel: "Frontend Team Lead",
    companyName: "TikiLearning",
    fromTo: "June 2023-January 2024",
    description: "",
    imgPath: "/mix/tiki.jpg",
  },
  {
    key: "32f60efb-4952-4815-8dfc-2fdfe714a046",
    workLabel: "Full-stack Support developer",
    companyName: "Blueberry Consulting",
    fromTo: "June 2022-May 2023",
    description: "",
    imgPath: withBasePath("/mix/blueberry.png"),
  },
  {
    key: "b0bf73a5-e181-4c9c-a7d4-9bb05025b059",
    workLabel: "Full-stack developer",
    companyName: "Tnpulse",
    fromTo: "June 2017-May 2022",
    description: "",
    imgPath: withBasePath("/mix/suivi.png"),
  },
  // {
  //   key: "c4ce2bd0-1a69-45fd-ae81-32429703826d",
  //   workLabel: "Frontend developer",
  //   companyName: "Tnpulse",
  //   fromTo: "June 2017-2020",
  //   description: "",
  //   imgPath: "/suivi.png",
  // },
];

export const LanguagesSkillsDataArr = ["Typescript", "Javascript", "C#", "C++"];
export const FrontendSkillsDataArr = [
  "ReactJS",
  "Vue 3",
  "Angular",
  "Redux",
  "Pinia",
  "Material UI",
  "Bootstrap",
  "Ionic",
  "Html",
  "CSS",
];
export const BackendSkillsDataArr = [
  ".NET core",
  "Entity framework",
  "IdentityServer",
  "SignalR",
  "AutoMapper",
  "NodeJS",
  "ExpressJS",
  "NextJS",
  "Sequelize",
  "Mongoose",
];

export const ToolsSkillsDataArr = ["XUnit", "Jest", "Webpack", "Rollup", "Vite", "GraphQL", "Apollo"];

export const DatabasesSkillsDataArr = ["MSSQL", "MYSQL", "MongoDB", "CosmosDB"];

export const ProjectsData: ProjectDetails[] = [
  {
    title: "Furniture E-commerce application",
    description: "Developed a responsive SEO optimized online store using ReactJS and ExpressJS",
    techStack: ["ExpressJS", "ReactJS"],
    demoLink: "https://art2doigt.tn/categoryProducts/Salon/97e6423f-9ef2-465a-9e41-b4944d377516",
    medias: [
      { src: withBasePath("/screenshots/shop1.png"), type: "image" },
      { src: withBasePath("/screenshots/shop2.png"), type: "image" },
      { src: withBasePath("/screenshots/shop3.png"), type: "image" },
      { src: withBasePath("/screenshots/shop4.png"), type: "image" },
      { src: withBasePath("/screenshots/shop5.png"), type: "image" },
      { src: withBasePath("/screenshots/shop6.png"), type: "image" },
    ],
  },

  {
    title: "Oklati: Best recipes app",
    description: "The award-winning application in M-developer competition, Contains best recipes in arabic countries",
    techStack: ["Angular", "Ionic"],
    githubLink: "https://github.com/Taha-Seddik/oklati-app",
    medias: [
      { src: withBasePath("/screenshots/oklati1.png"), type: "video", embedUrl: "/screenshots/oklati0.mp4" },
      { src: withBasePath("/screenshots/oklati0.jpg"), type: "image" },
      { src: withBasePath("/screenshots/oklati2.png"), type: "image" },
      { src: withBasePath("/screenshots/oklati3.png"), type: "image" },
      { src: withBasePath("/screenshots/oklati4.png"), type: "image" },
      { src: withBasePath("/screenshots/oklati5.png"), type: "image" },
      { src: withBasePath("/screenshots/oklati6.png"), type: "image" },
    ],
  },
];

// {
//   title: "Vacation tracker application",
//   description: "The award-winning application in M-developer competition, Contains best recipes in arabic countries",
//   techStack: [".NET 8", "ReactJS", "Mediator"],
//   demoLink: "http://taha992-001-site1.atempurl.com",
//   githubLink: "https://github.com/Taha-Seddik/EmployeesVacationsTracker",
//   medias: [
//     { src: "/screenshots/shop1.png", type: "image" },
//     { src: "/screenshots/shop2.png", type: "image" },
//     { src: "/screenshots/shop3.png", type: "image" },
//     { src: "/screenshots/shop4.png", type: "image" },
//     { src: "/screenshots/shop5.png", type: "image" },
//     { src: "/screenshots/shop6.png", type: "image" },
//   ],
// },
