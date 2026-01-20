import { TemplateDB } from "./type";
import desktopMockup1 from "@/assets/mockup-desktop-1.png";
import desktopMockup2 from "@/assets/mockup-desktop-2.png";
import Qilixlogo from "@/assets/QilixLogo.png";
import QilixM from "@/assets/QilixMockup.png";
import QilixT from "@/assets/QilixTemplete.png";
import RecruitEase from "@/database/Logo/RecruitEase.png";
import lenss from "@/database/Logo/LENSS.png";
import w2wd from "@/database/Logo/W2WD.png";
import map from "@/database/illustration/BumperMandi.png";
import banking from "@/database/illustration/Banking.png";
import utility from "@/database/illustration/utilitygrid.png";

export const templatesDB: TemplateDB[] = [
  {
    name: "Qilix Logo & Branding Kit",
    image: [QilixM,Qilixlogo, QilixT],
    colors: ["#A7F3D0", "#6EE7B7"],
    tools: ["figma", "photoshop"],
  },
  {
    name: "LOGO Design",
    image: [RecruitEase, lenss, w2wd],
    colors: ["#BFDBFE", "#383f47ff"],
    tools: ["figma", "canva"],
  },
  {
    name: "Illustration + landing page",
    image: [map, banking, utility],
    colors: ["#FED7AA", "#FDBA74"],
    tools: ["figma", "illustrator"],
  },

];
