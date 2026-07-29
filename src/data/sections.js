import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaBriefcase, FaTrophy, FaHammer, FaFileAlt, FaComments } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi";

export const sections = [
  { id: "home", label: "Home", icon: <AiOutlineHome />, description: "Introduction and overview" },
  { id: "explore", label: "Explore", icon: <HiOutlineSparkles />, description: "Browse all chapters" },
  { id: "about", label: "About", icon: <AiOutlineUser />, description: "Background and tech stack" },
  { id: "experience", label: "Experience", icon: <FaBriefcase />, description: "Roles, impact, and growth" },
  { id: "building", label: "Currently Building", icon: <FaHammer />, description: "GitSense AI — active work" },
  { id: "projects", label: "Projects", icon: <AiOutlineFundProjectionScreen />, description: "Shipped builds and demos" },
  { id: "achievements", label: "Achievements", icon: <FaTrophy />, description: "Hackathons and recognition" },
  { id: "testimonials", label: "Testimonials", icon: <FaComments />, description: "What colleagues say" },
  { id: "resume", label: "Resume", icon: <FaFileAlt />, description: "Download CV" },
  { id: "contact", label: "Contact", icon: <SiGmail />, description: "Get in touch" },
];

export const primaryNav = [
  { id: "home", label: "Home" },
  { id: "explore", label: "Explore" },
  { id: "contact", label: "Contact" },
];

export const exploreChapters = sections.filter(
  (s) => !["home", "explore", "contact"].includes(s.id)
);
