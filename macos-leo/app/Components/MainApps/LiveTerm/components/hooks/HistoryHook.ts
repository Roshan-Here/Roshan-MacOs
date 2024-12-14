import React from 'react';
import { History } from '../Types/History';

export const useHistory = (defaultValue: Array<History>) => {
  const [history, setHistory] = React.useState<Array<History>>(defaultValue);
  const [command, setCommand] = React.useState<string>('');
  const [lastCommandIndex, setLastCommandIndex] = React.useState<number>(0);

  return {
    history,
    command,
    lastCommandIndex,
    setHistory,
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};