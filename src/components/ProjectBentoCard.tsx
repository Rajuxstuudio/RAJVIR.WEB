import { ExternalLink, Clock, Smartphone, Monitor, Link2Icon } from "lucide-react";
import { getTechIcon } from "@/lib/techIcons";
import { useState } from "react";
import { color } from "framer-motion";


interface ProjectData {
  logo: string;
  name: any;
  colors: string[];
  font: string;
  isLive: boolean;
  playStoreUrl?: string;
  websiteUrl?: string;
  description: string;
  stack: string[];
  duration: string;
  mobileMockup?: string;
  webMockup?: string;
  businessDomain: string;
  appModel: string;
}

interface ProjectBentoCardProps {
  project: ProjectData;
  index: number;
}

const ProjectBentoCard = ({ project, index }: ProjectBentoCardProps) => {
  const animationDelay = index * 150;
  const [activeImage, setActiveImage] = useState<string | null>(null);


  return (
    <div
      className="bento-card-3d group animate-fade-in"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div />

      <div className="relative p-6 lg:p-8 bg-card rounded-3xl border border-border/50">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">

          {/* LEFT SECTION */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-12 gap-4">

              {/* Logo & Name */}
              <div className="col-span-12 sm:col-span-6 p-5 rounded-2xl bg-gradient-to-br from-secondary/50 to-muted/30 border border-border/30">
                <div className="flex items-center gap-4">

                  {/* Logo */}
                  <div className="w-16 h-16 rounded-xl border border-border p-2 bg-background flex items-center justify-center">
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Name & Business Model */}
                  <div>
                    <h3 className="font-bold text-xl text-foreground">
                      {project.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1">

                      {project.businessDomain}{" "}
                      <span className="mx-1 text-muted-foreground">|</span>{" "}
                      {project.appModel}
                    </p>
                  </div>

                </div>
              </div>

              {/* Colors */}
              <div className="col-span-6 sm:col-span-3 p-5 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border border-border/30">
                <p className="text-xs font-semibold mb-3">Colors</p>

                <div className="flex overflow-hidden rounded-xl h-8">
                  {project.colors.map((c, i) => (
                    <div
                      key={i}
                      className="h-full "
                      style={{
                        backgroundColor: c,
                        width: `${100 / project.colors.length}%`,
                      }}
                    />
                  ))}
                </div>
              </div>


              {/* Font & Duration */}
              <div className="col-span-6 sm:col-span-3 p-5 rounded-2xl bg-gradient-to-br from-success/5 to-primary/5 border border-border/30">
                <p className="text-xs font-semibold">Font</p>
                <p className="text-sm mb-2">{project.font}</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{project.duration}</span>
                </div>
              </div>

              {/* About */}
              <div className="col-span-12 p-5 rounded-2xl bg-gradient-to-r from-card to-secondary/20 border border-border/30">
                <p className="text-xs font-semibold mb-2">About</p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              {/* 🔁 DESKTOP MOCKUP → MOVED HERE */}
              <div className="col-span-12 px-5 pt-5 rounded-2xl bg-gradient-to-b from-primary/5 to-secondary/20 border border-border/30">
                              {/* Header */}
                <div className="flex items-center justify-between">

              <p className="text-xs font-semibold mb-4 flex items-center gap-2 shrink-0">
                <Monitor className="w-4 h-4" />
                Desktop
              </p>
              {project.isLive && project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"

                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4 group"
                >
                  Live
                  <Link2Icon className="w-4 h-4 group-hover:-translate-x-1 transition-transform " />
                </a>
              )}
              </div>
                <div className=" overflow-hidden shadow-2xl cursor-pointer 
             border-t-4 border-l-4 border-r-4 border-foreground/15 
             rounded-tl-[16px] rounded-tr-[16px]">
                  <img src={project.webMockup} alt="Desktop mockup" className="w-full h-full object-cover object-top" />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">

            {/* 🔁 TECH STACK → MOVED HERE */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-border/30">
              <p className="text-xs font-semibold mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech, i) => {
                  const { icon: Icon, color } = getTechIcon(tech);
                  return (
                    <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl border">
                      <Icon className="w-4 h-4" style={{ color }} />
                      <span className="text-sm">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* MOBILE MOCKUP */}
            <div className="flex flex-col flex-1 col-span-12 px-5 pt-5 rounded-2xl bg-gradient-to-b from-primary/5 to-secondary/20 border border-border/30">

              {/* Header */}
                <div className="flex items-center justify-between ">

              <p className="text-xs font-semibold mb-4 flex items-center gap-2 shrink-0">
                <Smartphone className="w-4 h-4" />
                Mobile
              </p>
              {project.isLive && project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"

                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4 group"
                >
                  Live
                  <Link2Icon className="w-4 h-4 group-hover:-translate-x-1 transition-transform " />
                </a>
              )}
              </div>

              {/* Auto-layout image container */}
              <div className="relative overflow-hidden shadow-2xl cursor-pointer border-t-4 border-l-4 border-r-4 border-foreground/15 rounded-tl-[16px] rounded-tr-[16px] h-[640px] md:h-[640px] lg:flex-1        ">

                <img
                  src={project.mobileMockup}
                  alt="Mobile mockup"
                  className="absolute inset-0 w-full h-full object-top sm:object-cover"
                />
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBentoCard; 