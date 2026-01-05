import { ProjectDB } from "./type";

// mockups
import mobileMockup1 from "@/assets/mockup-mobile-1.png";
import desktopMockup1 from "@/assets/mockup-desktop-1.png";
import mobileMockup2 from "@/assets/mockup-mobile-2.png";
import desktopMockup2 from "@/assets/mockup-desktop-2.png";

export const uxuiDB: ProjectDB[] = [
  {
    id: "1",
    logo: "",
    name: "Utility Plus",
    colors: ["#7e34ffff", "#EC4899", "#F472B6", "#1E1E2E"],
    font: "Inter",
    isLive: true,
    description:
      "Help agencies manage billing, track records, and streamline user data efficiently.",
    stack: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    duration: "—",
    mobileMockup: mobileMockup1,
    webMockup: desktopMockup1,
    category: "ux-ui",
  },
  { 
    id: "2",
    logo: "",
    name: "CloudGavel",
    colors: ["#EA4335"],
    font: "Inter",
    isLive: false,
    description:
      "An innovative eWarrant solution that streamlines approvals for law enforcement.",
    stack: ["Figma", "React", "Node.js", "Firebase"],
    duration: "—",
    mobileMockup: mobileMockup2,
    webMockup: desktopMockup2,
    category: "ux-ui",
  },
];
