import { ProjectDB } from "./type";

// mockups
import mobileMockup1 from "@/assets/mockup-mobile-1.png";
import desktopMockup1 from "@/assets/mockup-desktop-1.png";
import mobileMockup2 from "@/assets/mockup-mobile-2.png";
import desktopMockup2 from "@/assets/mockup-desktop-2.png";
import bumpermandi from "@/assets/logo/bumpermandi.png"
import eclelon from "@/assets/logo/eclelon.png"
import utility from "@/assets/logo/Utility.png"
import cloudgavel from "@/assets/logo/cloudgavel.png"
import rajvir from "@/assets/logo/RLogo.png"
import captable from "@/assets/logo/Captable.png"
import utilityplusM from "@/database/Uxui/utlityplusM.png"
import utilityplusW from "@/database/Uxui/utlityplusW.png"
import cloudgavelM from "@/database/Uxui/cloudgavelM.png"
import CloudgavelW from "@/database/Uxui/cloudgavelW.png"
import echelonW from "@/database/Uxui/echelon.png"
import captableL from "@/database/Uxui/captableL.png"
import bumpermandiM from "@/database/Uxui/bumpermandiM.png"
import bumpermandiW from "@/database/Uxui/bumpermandiW.png"

export const uxuiDB: ProjectDB[] = [
  {
    id: "1",
    logo: bumpermandi,
    name: "Bumper Mandi",
    colors: ["#141E55", "#EAC478"],
    font: "VVDS Fifties, Satoshi",
    isLive: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=bumper.mandi",
    websiteUrl: "https://bumpermandi.com",
    description: "Bumper Mandi is a digital marketplace designed to modernize the traditional mandi system. It empowers farmers to sell their crops directly and enables traders or entities to seamlessly buy and trade commodities. The platform ensures a smooth, transparent, and efficient flow for both buying and selling through its web and mobile applications.\n App flow: Seller Registration → Crop Listing → Buyer Discovery → Transaction (Sell) → Payment Received\n",
    stack: ["Figma", "React", "Mobile UX"],
    duration: "8 Weeks",
    mobileMockup: bumpermandiM,
    webMockup: bumpermandiW,
    category: "ux-ui",
    businessDomain: "Agritech",
    appModel: "Marketplace Platform",
  },

  {
    id: "2",
    logo: utility,
    name: "Utility Plus",
    colors: ["#00CAE3","#FFFFFF","#1947A7"],
    font: "Inter",
    isLive: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=utility.plus",
    websiteUrl: "https://utilityplus.app",
    description:
      "A comprehensive billing management system helping agencies manage billing, track records, and streamline user data efficiently. Improved existing UX and UI to enhance user interaction and simplify user flows.",
    stack: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    duration: "—",
    mobileMockup: utilityplusM,
    webMockup: utilityplusW,
    category: "ux-ui",
    businessDomain: "Enterprise Utilities",
    appModel: "SaaS Dashboard",
  },

  {
    id: "3",
    logo: cloudgavel,
    name: "CloudGavel",
    colors: ["#039BE5", "#FFFFFF", "#F1561C"],
    font: "Inter",
    isLive: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.fusionstak.CloudGavel365&pcampaignid=web_share",
    websiteUrl: "https://app.cloudgavel.com/",
    description:
      "CloudGavel is a cutting-edge electronic warrant (eWarrants) platform that transforms how law enforcement and the judicial system operate. By digitizing the entire warrant process in a secure cloud environment, CloudGavel enables officers to request and receive warrant approvals in minutes — not hours.",
    stack: ["Figma", "React", "Node.js", "Firebase"],
    duration: "—",
    mobileMockup: cloudgavelM,
    webMockup: CloudgavelW,
    category: "ux-ui",
    businessDomain: "LegalTech",
    appModel: "Workflow Automation System",
  },

  {
    id: "4",
    logo: eclelon,
    name: "Echelon Constructors",
    colors: ["#039BE5", "#F68C3C", "#979B9E", "#3D455A"],
    font: "Inter",
    isLive: false,
    description:
      "Construction Project Management Software designed to handle project planning, scheduling, resource allocation, and progress tracking with detailed reports.",
    stack: ["Figma", "React", "TypeScript"],
    duration: "3 Months",
    mobileMockup: "",
    webMockup: echelonW,
    category: "ux-ui",
    businessDomain: "Construction Tech",
    appModel: "Project Management System",
  },

  {
    id: "5",
    logo: captable,
    name: "Captable",
    colors: ["#039BE5", "#F68C3C", "#979B9E", "#3D455A"],
    font: "Inter",
    isLive: true,
    websiteUrl: "https://captable.app",
    description:
      "A fintech product focused on cap table management and investment tracking with improved UX.",
    stack: ["Figma", "React", "Fintech UX"],
    duration: "2 Months",
    mobileMockup: "",
    webMockup: captableL,
    category: "ux-ui",
    businessDomain: "Fintech",
    appModel: "Financial Management Platform",
  },
];

