export interface CommandHistory {
  id: number;
  date: Date;
  command: string;
  output: string;
}

export interface InputProps {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  containerRef: React.MutableRefObject<HTMLDivElement>;
  command: string;
  history: { command: string; output: string; date: Date; id: number }[]; 
  lastCommandIndex: number;
  setCommand: React.Dispatch<React.SetStateAction<string>>;
  setHistory: React.Dispatch<React.SetStateAction<{ command: string; output: string; date: Date; id: number }[]>>;
  setLastCommandIndex: React.Dispatch<React.SetStateAction<number>>;
  clearHistory: () => void;
}