import { TemplateDB } from "./type";
import desktopMockup1 from "@/assets/mockup-desktop-1.png";
import desktopMockup2 from "@/assets/mockup-desktop-2.png";
import Qilixlogo from "@/assets/QilixLogo.png";
import QilixM from "@/assets/QilixMockup.png";
import QilixT from "@/assets/QilixTemplete.png";
import RecruitEase from "@/assets/RecruitEase.png";

export const templatesDB: TemplateDB[] = [
  {
    name: "Qilix Logo & Branding Kit",
    image: [Qilixlogo, QilixM, QilixT],
    colors: ["#A7F3D0", "#6EE7B7"],
    tools: ["figma", "photoshop"],
  },
  {
    name: "LOGO Design",
    image: [RecruitEase, desktopMockup2],
    colors: ["#BFDBFE", "#383f47ff"],
    tools: ["figma", "canva"],
  },
  {
    name: "E-commerce Mobile UI",
    image: [desktopMockup1, desktopMockup2],
    colors: ["#FED7AA", "#FDBA74"],
    tools: ["figma", "illustrator"],
  },
  {
    name: "Qilix",
    image: [desktopMockup1, desktopMockup2],
    colors: ["#DDD6FE", "#C4B5FD"],
    tools: ["illustrator", "photoshop"],
  },
  {
    name: "Startup Website",
    image: [desktopMockup1, desktopMockup2],
    colors: ["#BAE6FD", "#7DD3FC"],
    tools: ["figma", "canva"],
  },

];
