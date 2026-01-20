import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layout,
  Lightbulb,
  Code2,
  Brush,
  Sparkles,
  Zap,
  Target,
  Layers,
  Clock,
  Users,
  TrendingUp
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const servicesData: Record<string, {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  gradient: string;
  focusAreas: { title: string; description: string; icon: React.ComponentType<{ className?: string }> }[];
  longDescription: string;
  stats: { value: string; label: string }[];
  process: { title: string; description: string }[];
  deliverables: string[];
}> = {
  "ux-ui": {
    title: "UX/UI Design",
    description: "I design intuitive, user-first interfaces grounded in usability, structure, and visual clarity — ensuring every interaction feels purposeful and easy to use.",
    icon: Layout,
    color: "from-primary via-accent to-primary",
    gradient: "bg-gradient-to-br from-primary/20 via-accent/10 to-transparent",
    focusAreas: [
      { title: "User Research & Journeys", description: "Deep understanding of user behaviors, pain points, and motivations", icon: Users },
      { title: "Wireframes → High-Fidelity UI", description: "From quick sketches to pixel-perfect, production-ready designs", icon: Layers },
      { title: "Design Systems & Accessibility", description: "Scalable, inclusive design that works for everyone", icon: Target }
    ],
    stats: [
      { value: "12+", label: "Live Projects" },
      { value: "50+", label: "UI Screens" },
      { value: "98%", label: "Client Satisfaction" }
    ],
    longDescription: "Great design isn't just about aesthetics — it's about creating experiences that feel natural and intuitive. I focus on understanding your users, their needs, and their behaviors to craft interfaces that guide them effortlessly toward their goals. Every pixel serves a purpose, every interaction is intentional.",
    process: [
      { title: "Discovery", description: "Understanding your business goals, user needs, and competitive landscape" },
      { title: "Research", description: "User interviews, journey mapping, and identifying pain points" },
      { title: "Wireframing", description: "Low-fidelity sketches and information architecture" },
      { title: "Visual Design", description: "High-fidelity mockups with your brand identity" },
      { title: "Prototyping", description: "Interactive prototypes for testing and validation" },
      { title: "Handoff", description: "Developer-ready specs and design system documentation" }
    ],
    deliverables: [
      "User research findings & personas",
      "User flow diagrams",
      "Wireframes (low & high fidelity)",
      "Visual design mockups",
      "Interactive prototypes",
      "Design system documentation",
      "Developer handoff files"
    ]
  },
  "product": {
    title: "Product Design",
    description: "From early concepts to production-ready designs, I create research-driven digital products that solve real user and business problems.",
    icon: Lightbulb,
    color: "from-success via-primary to-success",
    gradient: "bg-gradient-to-br from-success/20 via-primary/10 to-transparent",
    focusAreas: [
      { title: "Product Strategy & Thinking", description: "Aligning design decisions with business objectives", icon: TrendingUp },
      { title: "UX Problem-Solving", description: "Finding elegant solutions to complex user challenges", icon: Zap },
      { title: "Scalable System-Based Design", description: "Building foundations that grow with your product", icon: Layers }
    ],
    stats: [
      { value: "8+", label: "Products Shipped" },
      { value: "200K+", label: "Users Impacted" },
      { value: "40%", label: "Avg. Conversion Lift" }
    ],
    longDescription: "Product design is about solving the right problems in the right way. I work alongside you to define product strategy, validate ideas quickly, and build solutions that scale. My approach combines user-centered thinking with business acumen to create products that people love and that drive results.",
    process: [
      { title: "Strategy", description: "Aligning product vision with business objectives" },
      { title: "Ideation", description: "Brainstorming and concept exploration" },
      { title: "Validation", description: "Testing assumptions with real users" },
      { title: "Design", description: "Creating scalable, systematic solutions" },
      { title: "Iteration", description: "Refining based on feedback and data" },
      { title: "Launch Support", description: "Ensuring successful product release" }
    ],
    deliverables: [
      "Product strategy documentation",
      "Feature prioritization",
      "User stories & requirements",
      "Design specifications",
      "Usability test reports",
      "Launch-ready design files"
    ]
  },
  "web": {
    title: "Web Development",
    description: "I build responsive, high-performance websites that translate design into clean, maintainable code — without compromising speed, usability, or scalability.",
    icon: Code2,
    color: "from-warning via-destructive to-warning",
    gradient: "bg-gradient-to-br from-warning/20 via-destructive/10 to-transparent",
    focusAreas: [
      { title: "Modern JavaScript Frameworks", description: "React, Next.js, and cutting-edge web technologies", icon: Code2 },
      { title: "Component-Driven Architecture", description: "Reusable, maintainable code that scales", icon: Layers },
      { title: "Performance & Responsiveness", description: "Lightning-fast experiences on every device", icon: Zap }
    ],
    stats: [
      { value: "15+", label: "Sites Deployed" },
      { value: "95+", label: "Performance Score" },
      { value: "<2s", label: "Avg. Load Time" }
    ],
    longDescription: "Development isn't just about writing code — it's about building experiences that perform flawlessly across all devices and contexts. I specialize in modern web technologies, creating fast, accessible, and maintainable applications that bring designs to life exactly as envisioned.",
    process: [
      { title: "Architecture", description: "Planning the technical foundation" },
      { title: "Setup", description: "Configuring development environment and tools" },
      { title: "Development", description: "Building components and features" },
      { title: "Integration", description: "Connecting APIs and backend services" },
      { title: "Testing", description: "Ensuring quality across browsers and devices" },
      { title: "Deployment", description: "Launching to production with CI/CD" }
    ],
    deliverables: [
      "Fully responsive website/application",
      "Clean, documented codebase",
      "Performance optimization",
      "SEO implementation",
      "Analytics integration",
      "Deployment setup"
    ]
  },
  "identity": {
    title: "Identity Design",
    description: "I craft cohesive brand identities — from logos to visual systems — that communicate clarity, trust, and personality across digital touchpoints.",
    icon: Brush,
    color: "from-accent via-primary to-accent",
    gradient: "bg-gradient-to-br from-accent/20 via-primary/10 to-transparent",
    focusAreas: [
      { title: "Logo & Visual Identity", description: "Memorable marks that capture your essence", icon: Sparkles },
      { title: "Brand Systems", description: "Comprehensive guidelines for consistency", icon: Layers },
      { title: "Digital-First Storytelling", description: "Narratives that resonate across platforms", icon: Target }
    ],
    stats: [
      { value: "20+", label: "Brands Created" },
      { value: "100%", label: "Unique Designs" },
      { value: "5★", label: "Avg. Rating" }
    ],
    longDescription: "Your brand is more than a logo — it's the feeling people get when they interact with your product. I create comprehensive identity systems that tell your story consistently across every touchpoint, building recognition, trust, and emotional connection with your audience.",
    process: [
      { title: "Brand Discovery", description: "Understanding your values, audience, and positioning" },
      { title: "Research", description: "Competitive analysis and market research" },
      { title: "Concept Development", description: "Exploring visual directions" },
      { title: "Refinement", description: "Perfecting the chosen direction" },
      { title: "System Creation", description: "Building comprehensive brand guidelines" },
      { title: "Application", description: "Applying across all touchpoints" }
    ],
    deliverables: [
      "Logo design (primary & variations)",
      "Color palette & typography",
      "Brand guidelines document",
      "Icon & illustration style",
      "Social media templates",
      "Business collateral designs"
    ]
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-muted flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/services" className="text-primary hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </motion.div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="min-h-screen bg-background overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
            className={`absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full ${service.gradient} blur-3xl`}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full ${service.gradient} blur-3xl`}
          />
        </div>

        {/* Hero Section */}
        <section className="container relative py-12 lg:py-20 px-4">
          <div className="container py-4 mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Services
              </Link>
            </motion.div>

            {/* Hero Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <Badge variant="secondary" className="mb-4 px-3 py-1">
                  <Sparkles className="w-3 h-3 mr-2" />
                  Service
                </Badge>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
                  {service.title}
                </h1>

                <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {service.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  onClick={() => setIsFormOpen(true)}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Request This Service
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
              
              

              {/* Right Side - Icon Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                className="relative perspective"
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-20 blur-2xl scale-110`} />

                  {/* Main Card */}
                  <div className={`relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br ${service.color} shadow-2xl`}>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center justify-center"
                    >
                      <Icon className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute top-6 right-6 w-8 h-8 border-2 border-white/30 rounded-lg"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-6 left-6 w-4 h-4 bg-white/30 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container relative py-16 lg:py-24 px-4">
          <div className="container   mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 lg:p-12 rounded-3xl bg-card border border-border/50 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }} />
              </div>

              <div className="relative">
                <Badge variant="outline" className="mb-4">
                  <Clock className="w-3 h-3 mr-2" />
                  About This Service
                </Badge>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl">
                  {service.longDescription}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="container relative py-16 lg:py-24 px-4">
          <div className="container   mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge variant="secondary" className="mb-4">Focus Areas</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">What I Specialize In</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {service.focusAreas.map((area, index) => {
                const AreaIcon = area.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    <div className="relative">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                        <AreaIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="container relative py-16 lg:py-24 px-4 bg-muted/30">
          <div className="container   mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge variant="secondary" className="mb-4">My Process</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">How I Work</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-md`}
                    >
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="container relative py-16 lg:py-24 px-4">
          <div className="container   mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge variant="secondary" className="mb-4">Deliverables</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">What You'll Get</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 lg:p-12 rounded-3xl bg-card border border-border/50 overflow-hidden"
            >
              {/* Decorative Gradient */}
              <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${service.gradient} opacity-50`} />

              <div className="relative grid md:grid-cols-2 gap-4">
                {service.deliverables.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        {/* Service Request Form */}
        <section id="request-form" className="py-16 lg:py-24 px-4 bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8"
          >
            <ServiceRequestForm defaultService={service.title} />
          </motion.div>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default ServiceDetail;
