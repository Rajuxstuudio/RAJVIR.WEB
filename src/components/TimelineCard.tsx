import { LucideIcon, CheckCircle, MapPin, Figma, Layers, PenTool, Monitor, Smartphone, Users, Lightbulb, Target, Palette, Layout, Code, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TimelineCardProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "work";
  icon: LucideIcon;
  achievements?: string[];
  index: number;
  isLeft: boolean;
  city?: string;
  skills?: string[];
}

// Simple map grid pattern component
const MapBackground = ({ city }: { city?: string }) => {
  // Generate pseudo-random position based on city name for the pin
  const getPinPosition = (cityName: string) => {
    const hash = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const x = 30 + (hash % 40); // 30-70% range
    const y = 25 + ((hash * 7) % 50); // 25-75% range
    return { x, y };
  };

  const pinPos = city ? getPinPosition(city) : { x: 50, y: 50 };

  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl opacity-[0.08] pointer-events-none">
      {/* Map grid lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </pattern>
          <pattern id="mapGridSmall" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mapGridSmall)" />
        <rect width="100%" height="100%" fill="url(#mapGrid)" />
        
        {/* Abstract road/path lines */}
        <path 
          d="M 0 60 Q 50 40 100 70 T 200 50 T 300 80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-primary"
          opacity="0.6"
        />
        <path 
          d="M 0 120 Q 80 100 150 130 T 280 110" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="text-primary"
          opacity="0.4"
        />
        <path 
          d="M 50 0 Q 70 50 60 100 T 80 200" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="text-primary"
          opacity="0.4"
        />
      </svg>
      
      {/* Location pin */}
      {city && (
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-full"
          style={{ left: `${pinPos.x}%`, top: `${pinPos.y}%` }}
        >
          <div className="relative">
            <MapPin size={28} className="text-primary fill-primary/30" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-ping" />
          </div>
        </div>
      )}
    </div>
  );
};

// Map skill names to icons
const skillIconMap: Record<string, LucideIcon> = {
  "Figma": Figma,
  "UI Design": Palette,
  "UX Design": Users,
  "Prototyping": Layers,
  "Design Systems": Layout,
  "User Research": Target,
  "Wireframing": PenTool,
  "Mobile Design": Smartphone,
  "Web Design": Monitor,
  "Innovation": Lightbulb,
  "Development": Code,
  "Creative": Sparkles,
};

const TimelineCard = ({
  year,
  title,
  subtitle,
  description,
  type,
  icon: Icon,
  achievements,
  index,
  isLeft,
  city,
  skills,
}: TimelineCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative flex items-center ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
        <div className={`w-4 h-4 rounded-full bg-primary ${isVisible ? 'animate-pulse-glow' : ''}`} />
        <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/50 animate-ping" style={{ animationDuration: '2s' }} />
      </div>

      {/* Content */}
      <div
        className={`w-full md:w-1/2 ${
          isLeft ? "md:pr-16 pl-8 md:pl-0" : "md:pl-16 pl-8 md:pr-0"
        } ${isLeft ? "md:text-right" : "md:text-left"}`}
      >
        <div
          className={`transform transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {/* Year badge */}
          <div className={`flex items-center gap-2 mb-4 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-body font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              {year}
            </span>
          </div>

          {/* Card */}
          <div className="group relative p-6 bg-card-gradient border border-border rounded-xl transition-all duration-500 hover:border-primary/30 hover:exhibit-glow museum-shadow overflow-visible">
            {/* Floating skill icons around card edges - desktop only */}
            {skills && skills.length > 0 && (
              <>
                {skills.slice(0, 6).map((skill, i) => {
                  const SkillIcon = skillIconMap[skill] || Sparkles;
                  // Position icons around the card edges
                  const positions = [
                    { top: '15%', right: '-14px' },
                    { top: '45%', right: '-14px' },
                    { top: '75%', right: '-14px' },
                    { top: '15%', left: '-14px' },
                    { top: '45%', left: '-14px' },
                    { top: '75%', left: '-14px' },
                  ];
                  const pos = positions[i];
                  return (
                    <div
                      key={skill}
                      className="hidden md:flex absolute z-20 items-center justify-center w-7 h-7 rounded-full 
                        bg-background/95 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10
                        opacity-0 scale-75 translate-x-0 group-hover:opacity-100 group-hover:scale-100
                        transition-all duration-500 ease-out pointer-events-none"
                      style={{
                        ...pos,
                        transitionDelay: `${i * 50}ms`,
                      }}
                      title={skill}
                    >
                      <SkillIcon size={12} className="text-primary/80" />
                    </div>
                  );
                })}
              </>
            )}
            
            {/* Map background */}
            <MapBackground city={city} />
            
            {/* Card content */}
            <div className="relative z-10">
              {/* Icon and type */}
              <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:flex-row-reverse" : "md:flex-row"}`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
                  <Icon size={20} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-body tracking-widest uppercase text-muted-foreground">
                    {type === "education" ? "Education" : "Experience"}
                  </span>
                  {city && (
                    <span className="flex items-center gap-1 text-xs font-body text-primary/60">
                      <MapPin size={10} />
                      {city}
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>

              {/* Subtitle */}
              <p className="font-body text-sm text-primary/80 mb-4">{subtitle}</p>

              {/* Description */}
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                {description}
              </p>

              {/* Achievements */}
              {achievements && achievements.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-border/50">
                  {achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2 ${isLeft ? "md:flex-row-reverse md:text-right" : ""}`}
                    >
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-body text-secondary-foreground">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Mobile-only skill tags inside card */}
              {skills && skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-border/30 md:hidden">
                  {skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary/70 border border-primary/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Empty space for other side */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
};

export default TimelineCard;
