import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ToolsStrip } from "./ToolsStrip";
import { AnimatedCounter } from "./AnimatedCounter";
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-dark" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-float animation-delay-300" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 lg:mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Open to Work</span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>

        {/* Main heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 animate-fade-in-up animation-delay-100">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient glow-text">Rajvir</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 lg:mb-6 font-display animate-fade-in-up animation-delay-200">
          Product Designer with 3+ years of experience designing SaaS and enterprise platforms that simplify complex workflows and improve productivity.
        </p>

        <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto mb-10 lg:mb-10 animate-fade-in-up animation-delay-300 leading-relaxed">
          Web · Mobile · Tablet | End-to-end ownership
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mb-10 lg:mb-10 animate-fade-in-up animation-delay-400">
          <Button variant="hero" size="xl" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="/active/Rajvir-UX-Resume.pdf" download="/active/Rajvir-UX-Resume.pdf">
              Download Resume
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-500">
          {[
            {
              value: 3,
              suffix: "+",
              label: "Years Experience",
            },
            {
              value: 11,
              suffix: "",
              label: "Happy Clients",
            },
            {
              value: 12,
              suffix: "",
              label: "Projects Completed",
            },
            {
              value: 100,
              suffix: "+",
              label: "Templates Created",
            },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 lg:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tools Strip */}
        <ToolsStrip />

        {/* Scroll indicator */}
        <div className="mt-12 lg:mt-12 animate-bounce">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};


