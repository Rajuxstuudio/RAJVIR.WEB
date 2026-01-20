import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Smartphone, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Layout, Code2, Sparkles, Layers, Zap, Brush, Terminal, Database, Cloud } from "lucide-react";
import {
  SiFigma,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiFlutter,
  SiAdobexd,
  SiWordpress,
  SiFramer
} from "react-icons/si";
import WorkHeader from "@/components/WorkHeader";
import { useState } from "react";
import ProjectBentoCard from "@/components/ProjectBentoCard";
import TemplateCard from "@/components/TemplateCard";
import { developmentDB } from "@/database/development.db";
import { uxuiDB } from "@/database/uxui.db";
import { templatesDB } from "@/database/templates.db";

// Tab-specific decorative elements configuration
const tabDecorations = {
  "ux-ui": {
    gradient: "from-violet-500/20 via-pink-500/20 to-orange-500/20",
    accentColor: "text-violet-400",
    icons: [Palette, Brush, Layers, Sparkles],
    particles: ["#7C3AED", "#EC4899", "#F97316"],
  },
  "templates": {
    gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    accentColor: "text-cyan-400",
    icons: [Layout, Monitor, Smartphone, Layers],
    particles: ["#06B6D4", "#3B82F6", "#6366F1"],
  },
  "development": {
    gradient: "from-emerald-500/20 via-teal-500/20 to-green-500/20",
    accentColor: "text-emerald-400",
    icons: [Code2, Terminal, Database, Cloud],
    particles: ["#10B981", "#14B8A6", "#22C55E"],
  },
};

// Floating icon component
const FloatingIcon = ({ icon: Icon, delay, x, y, color }: { icon: any; delay: number; x: string; y: string; color: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.6, 0.6, 0],
      scale: [0.5, 1, 1, 0.5],
      y: [0, -20, -20, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`absolute ${color}`}
    style={{ left: x, top: y }}
  >
    <Icon className="w-6 h-6 md:w-8 md:h-8" />
  </motion.div>
);

// Animated particle component
const AnimatedParticle = ({ color, delay, size, x, y }: { color: string; delay: number; size: number; x: string; y: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0],
      y: [0, -30, -60],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
    className="absolute rounded-full blur-sm"
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      backgroundColor: color,
    }}
  />
);

const googleColors = [
  "linear-gradient(135deg, #4285F4 0%, #2B5CBC 100%)",
  "linear-gradient(135deg, #EA4335 0%, #C5221F 100%)",
  "linear-gradient(135deg, #FBBC04 0%, #E8A400 100%)",
  "linear-gradient(135deg, #34A853 0%, #1E8E3E 100%)",
  "linear-gradient(135deg, #4285F4 0%, #34A853 100%)",
  "linear-gradient(135deg, #EA4335 0%, #FBBC04 100%)",
];

const projectsData = [...uxuiDB, ...developmentDB];
const templatesData = templatesDB;

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ux-ui");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = project.category === activeTab;
    const matchesSearch = !searchQuery.trim() ||
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.stack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  const filteredTemplates = templatesData.filter((template) => {
    const matchesSearch = !searchQuery.trim() ||
      template.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const tabProjects = projectsData.filter((p) => p.category === activeTab);

   const currentDecoration = tabDecorations[activeTab as keyof typeof tabDecorations] || tabDecorations["ux-ui"];


  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${activeTab}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 pointer-events-none overflow-hidden"
        >
          {/* Large gradient orbs */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br ${currentDecoration.gradient} blur-3xl opacity-50`}
          />
          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr ${currentDecoration.gradient} blur-3xl opacity-40`}
          />
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-tl ${currentDecoration.gradient} blur-3xl opacity-30`}
          />

          {/* Floating Icons */}
          {currentDecoration.icons.map((Icon, index) => (
            <FloatingIcon
              key={index}
              icon={Icon}
              delay={index * 1.2}
              x={`${15 + index * 22}%`}
              y={`${20 + (index % 2) * 40}%`}
              color={currentDecoration.accentColor}
            />
          ))}

          {/* Animated Particles */}
          {currentDecoration.particles.map((color, index) => (
            <AnimatedParticle
              key={index}
              color={color}
              delay={index * 0.8}
              size={8 + index * 4}
              x={`${25 + index * 25}%`}
              y={`${60 + (index % 2) * 20}%`}
            />
          ))}

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </motion.div>
      </AnimatePresence>
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back Link---------------------- */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          {/* header Section----------------------------------------*/}
          <WorkHeader
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onSearch={setSearchQuery}
            projectCount={activeTab === "templates" ? templatesData.length : tabProjects.length}
            avgTime="3-4 weeks"
            successRate="98%"
          />
          {/* Projects Grid */}
          <div className="mt-10">
            {activeTab === "templates" ? (
              // Template Gallery View
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTemplates.length > 0 ? (
                  filteredTemplates.map((template, index) => (
                    <TemplateCard key={template.name} template={template} index={index} />
                  ))
                ) : (
                  <div className="col-span-full bento-card p-12 text-center rounded-3xl">
                    <p className="text-muted-foreground text-lg">No templates found matching your search.</p>
                  </div>
                )}
              </div>
            ) : (
              // Bento Card View for UX/UI and Development
              <div className="space-y-8">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <ProjectBentoCard key={project.name} project={project} index={index} />
                  ))
                ) : (
                  <div className="bento-card p-12 text-center rounded-3xl">
                    <p className="text-muted-foreground text-lg">No projects found matching your search.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
