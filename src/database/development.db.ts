import { ProjectDB } from "./type";

// mockups
import rajvirMobileMockup from "@/database/DevelopmentAssets/rajvirMobileMockup.jpeg";
import rajvirWebMockup from "@/database/DevelopmentAssets/rajvirwebmockup.png";
import profileAvatar from "@/assets/profile-avatar.png"

export const developmentDB: ProjectDB[] = [
  {
    id: "",
    logo: profileAvatar,
    name: "Rajvir-Portfolio",
    colors: ["#6026BB", "#DA4DF0", "#110F18", "#ffffff"],
    font: "DM Sans/ Sora",
    isLive: true,
    websiteUrl: "https://rajvir.vercel.app/",
    description:
      "Portalio Website crafted from scratch, featuring immersive 3D design and fluid animated elements. It combines striking visuals with intuitive usability, ensuring a modern, engaging, and user‑friendly experience throughout.",
    stack: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    duration: "2 weeks",
    mobileMockup: rajvirMobileMockup,
    webMockup: rajvirWebMockup,
    category: "development",
    businessDomain: "Personal Portfolio",
    appModel: "Web Application",
  },
  // {
  //   id: "cloudgavel",
  //   logo: "",
  //   name: "CloudGavel",
  //   colors: ["#4285F4"],
  //   font: "Inter",
  //   isLive: false,
  //   description:
  //     "An innovative eWarrant solution that streamlines the warrant approval process, enabling faster approvals and improved law enforcement efficiency.",
  //   stack: ["Figma", "React", "Node.js", "Firebase"],
  //   duration: "—",
  //   mobileMockup: "/mockups/cloudgavel/mobile.png",
  //   webMockup: "/mockups/cloudgavel/web.png",
  //   category: "development",
  // },
  // {
  //   id: "echelon-constructors",
  //   logo: "",
  //   name: "Echelon Constructors",
  //   colors: ["#34A853"],
  //   font: "Inter",
  //   isLive: false,
  //   description:
  //     "Construction project management software designed to handle planning, scheduling, and resource management in a centralized web platform.",
  //   stack: ["Figma", "React", "TypeScript", "Tailwind CSS"],
  //   duration: "—",
  //   mobileMockup: null,
  //   webMockup: "/mockups/echelon/web.png",
  //   category: "development",
  // },
  // {
  //   id: "captable",
  //   logo: "",
  //   name: "Captable",
  //   colors: ["#FBBC05"],
  //   font: "Inter",
  //   isLive: false,
  //   description:
  //     "Fintech web application that helps agencies manage billing, track records, and streamline financial data with an improved user experience.",
  //   stack: ["Adobe XD", "React", "TypeScript"],
  //   duration: "—",
  //   mobileMockup: null,
  //   webMockup: "/mockups/captable/web.png",
  //   category: "development",
  // },
  // {
  //   id: "bumper-mandi",
  //   logo: "",
  //   name: "Bumper Mandi",
  //   colors: ["#EA4335"],
  //   font: "Inter",
  //   isLive: false,
  //   description:
  //     "A digital mandi platform that helps farmers sell grain securely and transparently. Ensures fair pricing, verified buyers, real-time updates, and direct transactions.",
  //   stack: ["Figma", "Flutter", "Firebase"],
  //   duration: "2 months",
  //   mobileMockup: "/mockups/bumper-mandi/mobile.png",
  //   webMockup: "/mockups/bumper-mandi/web.png",
  //   category: "development",
  // },
  // {
  //   id: "react-portfolio",
  //   logo: "",
  //   name: "React Portfolio Website",
  //   colors: ["#9C27B0"],
  //   font: "Inter",
  //   isLive: true,
  //   description:
  //     "A modern, responsive portfolio website built with React featuring smooth navigation, reusable components, and a clean UI.",
  //   stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  //   duration: "—",
  //   mobileMockup: "/mockups/portfolio/mobile.png",
  //   webMockup: "/mockups/portfolio/web.png",
  //   category: "development",
  // },
];
