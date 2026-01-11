import { useState } from "react";
import { Search, Sparkles } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: string;
}

const tabs: Tab[] = [
  { id: "ux-ui", label: "UX/UI", icon: "🎨" },
  { id: "templates", label: "Templates", icon: "📐" },
  { id: "development", label: "Development", icon: "💻" },
];

interface WorkHeaderProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onSearch: (query: string) => void;
  projectCount: number;
  avgTime: string;
  successRate: string;
}

const WorkHeader = ({
  activeTab,
  onTabChange,
  onSearch,
  projectCount,
  avgTime,
  successRate,
}: WorkHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="space-y-8">
      {/* My Work Heading */}
      <div className="text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
          My Work
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Sparkles className="w-5 h-5 text-accent" />
          <span>Crafted with passion and precision</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center animate-fade-in" style={{ animationDelay: "100ms" }}>
        <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-card text-foreground shadow-md scale-105 dark:bg-muted/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center">
            <Search className="absolute left-5 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects, technologies, or descriptions..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Content Row with Description and Stats */}
      <div 
        className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 rounded-3xl bg-gradient-to-r from-card via-card to-secondary/30 border border-border/30 animate-fade-in"
        style={{ animationDelay: "300ms" }}
      >
        {/* Left - Description */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            {activeTab === "ux-ui" && "Project Showcase"}
            {activeTab === "templates" && "Template Collection"}
            {activeTab === "development" && "Development Portfolio"}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {activeTab === "ux-ui" && "Explore my latest work and creative endeavors in user experience and interface design."}
            {activeTab === "templates" && "Browse my collection of ready-to-use templates and design systems."}
            {activeTab === "development" && "Discover full-stack applications and technical implementations."}
          </p>
        </div>

        {/* Right - Stats */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="stat-card">
            <span className="stat-value">{projectCount}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="h-10 w-px bg-border/50" />
          <div className="stat-card">
            <span className="stat-value">{avgTime}</span>
            <span className="stat-label">Avg Time</span>
          </div>
          <div className="h-10 w-px bg-border/50" />
          <div className="stat-card">
            <span className="stat-value">{successRate}</span>
            <span className="stat-label">Success</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHeader;
