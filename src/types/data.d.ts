interface IProjectData {
  id: number;
  title: string;
  plot: string;
  stack: string;
  image: string;
}

interface IPlotData {
  id: number;
  type: string;
  title: string;
  period: string;
  caption: string;
  plot: string[];
  stack: string[{ name: string; caption: string }];
  gitLink: string;
  gitImage: string;
}
