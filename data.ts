import { AiOutlineGithub } from "react-icons/ai"
import {
  FaEye,
  FaLinkedin,
  FaRegListAlt,
  FaRegUser,
  FaPhone,
} from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { MdComputer, MdDashboard } from "react-icons/md"
import {
  SiChatbot,
  SiDatabricks,
  SiGitextensions,
  SiNodedotjs,
  SiGmail
} from "react-icons/si"
import About from "./components/aboutPage/About"
import Contact from "./components/contactPage/Contact"
import GuestBook from "./components/guestbookPage/GuestBook"
import Resume from "./components/resumePage/Resume"
import Stats from "./components/statistics/Stats"
import Works from "./components/worksPage/Works"
import {
  MenuData,
  ServiceData,
  SocialMedia,
  TestimonialData,
} from "./types"

export const profile={
  name:"Christian Gonzalez",
  address :"Austin",
  country:"Texas",
  addressOnMap:"https://www.google.com/maps?q=Austin,+TX&output=embed",
  resumeLink:"https://drive.google.com/file/d/1fxZbfdZGjTMlDUpMpj9zT6T95dVIizYW/view?usp=sharing",
  phone:"+1 (402) 284-3534",
}

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: "links",
    Icon: MdDashboard,
    Component: Stats,
  },
  {
    id: 5,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 6,
    label: "guest book",
    Icon: MdComputer,
    Component: GuestBook,
  },
]

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: SiGmail,
    label: "Mail",
    logoColor: "#D14836",
    mediaUrl: "mailto:chragonz@gmail.com",
    info: "Leave me a email and keep touch with each other",
  },
  {
    id: 2,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://github.com/cozy-fox",
    info: "Star my projects on Github",
  },
  {
    id: 3,
    Icon: FaPhone,
    label: "Phone",
    logoColor: "#25d366",
    mediaUrl: "",
    info: "Feel free to call me anytime you want (+1 (402) 284-3534)",
  },
  {
    id: 4,
    Icon: FaLinkedin,
    label: "LinkedIn",
    logoColor: "#0077b5",
    mediaUrl: "https://linkedin.com/in/agfu",
    info: "Do you prefer LinkedIn? No Problem",
  }
]

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Backend",
    Icon: SiDatabricks,
    description:
      "Django by Python, as well as Node.js and Spring Boot frameworks",
  },
  {
    id: 2,
    title: "Frontend",
    Icon: SiNodedotjs,
    description:
      "React.js, Angular, JavaScript, TypeScript",
  },
  {
    id: 3,
    title: "AI",
    Icon: SiChatbot,
    description:
      "NumPy, Pandas, Scikit-learn, Matplotlib, spaCy, NLTK",
  },
  {
    id: 4,
    title: "DevOps",
    Icon: SiGitextensions,
    description:
      "Docker, Git, GitHub, GitLab, Bitbucket, Jenkins, AWS, GCP",
  },
]
