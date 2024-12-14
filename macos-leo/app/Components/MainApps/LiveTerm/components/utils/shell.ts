// Import all command functions from the `bin` module
import { BinCommands, HistoryItem } from "../Types/shellProps";
import * as bin from "./bin";

export const shell = async (
  command: string,
  setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
  const args = command.split(" ");
  const cmd = args[0].toLowerCase();

  if (cmd === "clear") {
    clearHistory();
    return;
  }

  if (command === "") {
    setHistory((prevHistory) => [
      ...prevHistory,
      { command, output: "", date: new Date(), id: prevHistory.length },
    ]);
    return;
  }

  if (!(cmd in bin)) {
    setHistory((prevHistory) => [
      ...prevHistory,
      {
        command,
        output: `shell: command not found: ${cmd}. Try 'help' to get started.`,
        date: new Date(),
        id: prevHistory.length,
      },
    ]);
    return;
  }

  try {
    const output = await (
      bin[cmd as keyof typeof bin] as (args: string[]) => string
    )(args.slice(1));

    setHistory((prevHistory) => [
      ...prevHistory,
      { command, output, date: new Date(), id: prevHistory.length },
    ]);
  } catch (error) {
    setHistory((prevHistory) => [
      ...prevHistory,
      {
        command,
        output: `Error executing command: ${error}`,
        date: new Date(),
        id: prevHistory.length,
      },
    ]);
  }

  setCommand("");
};
