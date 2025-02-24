export interface ProjectDetail {
  title: string;
  period: string;
  overview: string;
  projectScale: {
    duration: string;
    commits: string;
    teamSize: string;
  };
  performance: string[];
  developmentPhases: Phase[];
  technicalChallenges: Challenge[];
  integrationSystems: Integration[];
}

interface Phase {
  name: string;
  period: string;
  details: string[];
}

interface Challenge {
  category: string;
  solutions: string[];
}

interface Integration {
  system: string;
  details: string[];
}
