// src/data/types.ts

export type ProjectCategory = "ux-ui" | "development";

export interface ProjectDB {
  id: string;
  logo: string;
  name: string;
  colors: string[];
  font: string;
  isLive: boolean;
  description: string;
  stack: string[];
  duration: string;
  mobileMockup?: any | null;
  webMockup?: any | null;
  category: ProjectCategory;
}

export interface TemplateDB {
  name: string;
  image: string[];
  colors: string[];
  tools: string[];
}
