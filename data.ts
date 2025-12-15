import { AiOutlineGithub } from "react-icons/ai"
import {
  FaSkype,
  FaDiscord,
  FaEye,
  FaLinkedin,
  FaRegListAlt,
  FaRegUser,
  FaWhatsapp,
  FaLink,
} from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { MdComputer, MdDashboard } from "react-icons/md"
import {
  SiFigma,
  SiChatbot,
  SiDatabricks,
  SiGitextensions,
  SiNodedotjs,
  SiUikit,
  SiThreedotjs,
  SiGmail
} from "react-icons/si"
import About from "./components/aboutPage/About"
import Contact from "./components/contactPage/Contact"
import GuestBook from "./components/guestbookPage/GuestBook"
import Resume from "./components/resumePage/Resume"
import Stats from "./components/statistics/Stats"
import Works from "./components/worksPage/Works"
import {
  ClientData,
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
  resumeLink:"https://drive.google.com/file/d/1p0Fe-WnPP4yrXxugLCgLN_As1EUhgeTq/view?usp=sharing",
  phone:"+1 (409) 250-2162",
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
    mediaUrl: "mailto:alexuptal@gmail.com",
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
    Icon: FaWhatsapp,
    label: "Whatsapp",
    logoColor: "#25d366",
    mediaUrl: "https://web.whatsapp.com/",
    info: "Feel free to call me anytime you want (+1 (409) 250-2162)",
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

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  userName: "Albert Schweitzer",
  userProfession: "Alsatian Polymath | Theologian | Musicologist",
  userImage: { url: "/images/albert.jfif" },
}
