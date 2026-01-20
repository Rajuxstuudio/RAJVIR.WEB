import { useEffect, useRef, useState } from "react";
import { 
  Palette, 
  Users, 
  MessageSquare, 
  Lightbulb, 
  Search, 
  Layout, 
  PlayCircle,
  Figma,
  Layers,
  Code,
  ImageIcon,
  Sparkles,
  Shield,
  Zap,
  Target,
  Trophy,
  Star,
  Flame,
  Heart
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number;
  maxLevel: number;
  xp: number;
  maxXp: number;
}

interface StatCategory {
  name: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
}

const statCategories: StatCategory[] = [
  {
    name: "DESIGN",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "User-Centric Design", icon: Users, level: 85, maxLevel: 100, xp: 8500, maxXp: 10000 },
      { name: "Visual Communication", icon: MessageSquare, level: 78, maxLevel: 100, xp: 7800, maxXp: 10000 },
      { name: "Logo & Branding", icon: ImageIcon, level: 72, maxLevel: 100, xp: 7200, maxXp: 10000 },
      { name: "Creative Thinking", icon: Lightbulb, level: 90, maxLevel: 100, xp: 9000, maxXp: 10000 },
    ],
  },
  {
    name: "UX/UI",
    icon: Layout,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "User Research", icon: Search, level: 80, maxLevel: 100, xp: 8000, maxXp: 10000 },
      { name: "Wireframing", icon: Layout, level: 88, maxLevel: 100, xp: 8800, maxXp: 10000 },
      { name: "Prototyping", icon: PlayCircle, level: 82, maxLevel: 100, xp: 8200, maxXp: 10000 },
      { name: "Case Studies", icon: Layers, level: 75, maxLevel: 100, xp: 7500, maxXp: 10000 },
    ],
  },
  {
    name: "TOOLS",
    icon: Code,
    color: "from-emerald-500 to-green-500",
    skills: [
      { name: "Figma", icon: Figma, level: 92, maxLevel: 100, xp: 9200, maxXp: 10000 },
      { name: "Photoshop", icon: ImageIcon, level: 70, maxLevel: 100, xp: 7000, maxXp: 10000 },
      { name: "VS Code", icon: Code, level: 65, maxLevel: 100, xp: 6500, maxXp: 10000 },
      { name: "AI Tools", icon: Sparkles, level: 78, maxLevel: 100, xp: 7800, maxXp: 10000 },
    ],
  },
];

const characterStats = {
  name: "DESIGNER",
  class: "UX Specialist",
  level: 28,
  totalXp: 142500,
  health: 95,
  mana: 88,
  attributes: [
    { name: "STR", value: 72, icon: Shield, label: "Strength" },
    { name: "DEX", value: 85, icon: Zap, label: "Dexterity" },
    { name: "INT", value: 94, icon: Target, label: "Intelligence" },
    { name: "CHA", value: 88, icon: Heart, label: "Charisma" },
  ],
  achievements: 24,
  quests: 156,
};

const SkillBar = ({ skill, delay, isVisible }: { skill: Skill; delay: number; isVisible: boolean }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <div className="group relative">
      <div className="flex items-center gap-3 p-2 rounded-lg bg-black/20 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:bg-black/30">
        {/* Skill Icon */}
        <div className="flex-shrink-0 w-8 h-8 rounded bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
          <skill.icon size={14} className="text-primary" />
        </div>
        
        {/* Skill Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-foreground/90 truncate font-body">
              {skill.name}
            </span>
            <span className="text-[10px] font-mono text-primary ml-2">
              LV.{skill.level}
            </span>
          </div>
          
          {/* XP Bar */}
          <div className="relative h-1.5 bg-black/40 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${animatedLevel}%` }}
            />
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-white/30 to-transparent rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${animatedLevel * 0.3}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCircle = ({ stat, isVisible, delay }: { stat: typeof characterStats.attributes[0]; isVisible: boolean; delay: number }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let current = 0;
        const interval = setInterval(() => {
          current += 2;
          if (current >= stat.value) {
            setAnimatedValue(stat.value);
            clearInterval(interval);
          } else {
            setAnimatedValue(current);
          }
        }, 20);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, stat.value, delay]);

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (animatedValue / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-12 h-12">
        <svg className="w-12 h-12 -rotate-90" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-white/5"
          />
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0.5)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <stat.icon size={14} className="text-primary" />
        </div>
      </div>
      <span className="text-[10px] font-mono text-muted-foreground">{stat.name}</span>
      <span className="text-xs font-bold text-foreground">{animatedValue}</span>
    </div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-background overflow-hidden">
      {/* Gaming grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative scan lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent top-1/4 animate-pulse" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent top-3/4 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container px-6 relative">
        {/* Section header with gaming style */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-mono tracking-widest uppercase text-primary border border-primary/30 rounded bg-primary/5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Flame size={14} className="animate-pulse" />
            <span>Character Stats</span>
            <Flame size={14} className="animate-pulse" />
          </div>
          <h2 className={`font-display text-4xl md:text-6xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Skills & Abilities
          </h2>
          <p className={`font-body text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Level up your understanding of my design capabilities
          </p>
        </div>

        {/* Main game UI layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Left Panel - Character Card */}
            <div className={`lg:col-span-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative p-6 bg-gradient-to-b from-card/80 to-card/40 border border-border rounded-2xl backdrop-blur-sm overflow-hidden">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/50 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/50 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-2xl" />

                {/* Character Avatar Area */}
                <div className="relative mb-6">
                  <div className="relative w-32 h-32 mx-auto">
                    {/* Glowing ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 animate-spin" style={{ animationDuration: '8s' }} />
                    <div className="absolute inset-1 rounded-full bg-background" />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 flex items-center justify-center">
                      <div className="text-4xl font-display font-bold text-primary">U</div>
                    </div>
                    {/* Level badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary rounded-full border-2 border-background">
                      <span className="text-xs font-mono font-bold text-primary-foreground">LV.{characterStats.level}</span>
                    </div>
                  </div>
                </div>

                {/* Character Info */}
                <div className="text-center mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {characterStats.name}
                  </h3>
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    {characterStats.class}
                  </span>
                </div>

                {/* HP & MP Bars */}
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                        <Heart size={10} /> HP
                      </span>
                      <span className="text-[10px] font-mono text-foreground/60">{characterStats.health}/100</span>
                    </div>
                    <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full transition-all duration-1000"
                        style={{ width: isVisible ? `${characterStats.health}%` : '0%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-blue-400 flex items-center gap-1">
                        <Zap size={10} /> MP
                      </span>
                      <span className="text-[10px] font-mono text-foreground/60">{characterStats.mana}/100</span>
                    </div>
                    <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 delay-200"
                        style={{ width: isVisible ? `${characterStats.mana}%` : '0%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Core Attributes */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {characterStats.attributes.map((stat, i) => (
                    <StatCircle key={stat.name} stat={stat} isVisible={isVisible} delay={400 + i * 100} />
                  ))}
                </div>

                {/* Achievement badges */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Trophy size={14} className="text-yellow-500" />
                    <span className="text-xs font-mono text-foreground/80">{characterStats.achievements}</span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-primary" />
                    <span className="text-xs font-mono text-foreground/80">{characterStats.quests}</span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-purple-400" />
                    <span className="text-xs font-mono text-foreground/80">{(characterStats.totalXp / 1000).toFixed(0)}K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Skills Grid */}
            <div className={`lg:col-span-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="grid md:grid-cols-3 gap-4">
                {statCategories.map((category, catIndex) => (
                  <div 
                    key={category.name}
                    className="relative p-4 bg-gradient-to-b from-card/60 to-card/20 border border-border rounded-xl backdrop-blur-sm"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                        <category.icon size={14} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-foreground tracking-wider">
                          {category.name}
                        </h4>
                        <span className="text-[10px] text-muted-foreground">
                          {category.skills.length} abilities
                        </span>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar 
                          key={skill.name} 
                          skill={skill} 
                          delay={600 + catIndex * 200 + skillIndex * 100}
                          isVisible={isVisible}
                        />
                      ))}
                    </div>

                    {/* Category total XP */}
                    <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-muted-foreground">TOTAL XP</span>
                      <span className="text-xs font-mono text-primary">
                        {category.skills.reduce((acc, s) => acc + s.xp, 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom stats bar */}
              <div className="mt-4 p-4 bg-gradient-to-r from-card/40 via-card/60 to-card/40 border border-border rounded-xl flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-foreground">12</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase">Skills</div>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-primary">80%</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase">Avg Level</div>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-foreground">3</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase">Categories</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Sparkles size={14} className="text-primary animate-pulse" />
                  <span className="text-xs font-mono text-primary">READY FOR NEXT QUEST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
