export type BinCommands = {
    [key: string]: (args: string[]) => string; 
  };

export type HistoryItem = {
    command: string;
    output: string;
    date: Date;
    id: number;
  };