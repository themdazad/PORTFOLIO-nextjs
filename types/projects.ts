// src/types/project.ts
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  screenshots: string[];
  github: string;
  live?: string; // Optional field
}