interface IActData {
  id: number;
  title: string;
  period: string;
  caption: string;
}

interface IStackItem {
  name: string;
  caption: string;
}

interface IPlotData {
  id: number;
  title: string;
  period: string;
  caption: string;
  plot: string[];
  stack: IStackItem[];
  gitLink: string;
  gitImage: string;
  pubLink: string;
  pubImage: string;
}
