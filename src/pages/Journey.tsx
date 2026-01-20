import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Map,
} from "lucide-react";
import TimelineCard from "@/components/TimelineCard";
import { motion } from "framer-motion";
import SkillsSection from "@/components/SkillsSection";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const timelineData = [
{
    year: "2024 - Present",
    title: "Master of Computer Applications",
    subtitle: "Modi Institute of Technology, Kota",
    description: "Pursuing advanced computer science education to complement design expertise with technical depth.",
    type: "education" as const,
    icon: GraduationCap,
    city: "Kota, Rajasthan",
    skills: ["Development", "Innovation"],
  },
  {
    year: "2022 - 2025",
    title: "UX/UI Designer",
    subtitle: "Fusionstak",
    description: "Worked on 7 mobile, 2 tablet, and 11+ web applications. Conducted user research, created wireframes, mockups & prototypes. Successfully designed multiple applications as the sole designer.",
    type: "work" as const,
    icon: Briefcase,
    city: "Remote",
    achievements: [
      "Designed 20+ applications across platforms",
      "Enhanced flagship project UX/UI",
      "Managed all design aspects independently"
    ],
    skills: ["Figma", "UI Design", "UX Design", "Prototyping", "Mobile Design", "Web Design"],
  },
  {
    year: "2022 - Present",
    title: "Freelance UX/UI Consultant",
    subtitle: "Independent",
    description: "Successfully freelanced on multiple UI/UX projects. Guided new designers as a tutor, sharing knowledge and fostering their growth in the field.",
    type: "work" as const,
    icon: Sparkles,
    city: "Worldwide",
    skills: ["User Research", "Design Systems", "Wireframing", "Creative"],
  },
  {
    year: "2020 - 2022",
    title: "Master of Commerce",
    subtitle: "BK Birla College, Kalyan",
    description: "Advanced commerce studies building business acumen and analytical thinking.",
    type: "education" as const,
    icon: GraduationCap,
    city: "Kalyan, Maharashtra",
    skills: ["Innovation"],
  },
  {
    year: "2017 - 2020",
    title: "Bachelor of Commerce",
    subtitle: "Government Commerce College, Kota",
    description: "Foundation in commerce and business principles, sparking interest in design thinking and problem-solving.",
    type: "education" as const,
    icon: GraduationCap,
    city: "Kota, Rajasthan",
    skills: ["Innovation"],
  },
];

const Journey = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="container px-6">
          {/* ---------------- Header ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center mb-28"
          >
            {/* Header */}

            <motion.div variants={itemVariants} initial="hidden" animate="visible">
              <Badge variant="default" className="mb-4 px-4 py-2">
                <Map className="w-4 h-4 mr-2" />
                The Journey
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              A Walk Through Time
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each milestone represents a chapter of growth, learning, and
              creative evolution — shaping how I think, design, and build today.
            </p>
          </motion.div>

          {/* ---------------- End Marker ---------------- */}
          <div className="mt-12 mb-12 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">
              Still evolving — the journey continues.
            </p>
          </div>

          {/* ---------------- Timeline ---------------- */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line (softened) */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent md:-translate-x-1/2" />

            <div className="space-y-24">
              {timelineData.map((item, index) => (
                <TimelineCard
                  key={index}
                  {...item}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>

          {/* ---------------- End Marker ---------------- */}
          <div className="mt-32 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">
              the journey Start.
            </p>
          </div>
        </div>
      </main>
              {/* <SkillsSection /> */}


      <Footer />
    </div>
  );
};

export default Journey;
