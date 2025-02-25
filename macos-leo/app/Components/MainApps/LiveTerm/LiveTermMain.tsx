import React, { useEffect, useCallback, useRef } from "react";
import { useHistory } from "./components/hooks/HistoryHook";
import { History } from "./components/Reusable/History";
import { banner } from "./components/utils/bin";
import Input from "./components/Reusable/Input";

const LiveTermMain: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null!);
  const terminalRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = useCallback(() => {
    setHistory((prevHistory) => {
      if (prevHistory.length === 0) {
        return [
          ...prevHistory,
          {
            id: prevHistory.length,
            date: new Date(),
            command: "",
            output: banner(),
          },
        ];
      }
      return prevHistory;
    });
  }, [setHistory]);

  useEffect(() => {
    init();
  }, []);   

  useEffect(() => {
    if (inputRef.current) {
      // inputRef.current.scrollIntoView(); -bug
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        terminalRef.current &&
        !terminalRef.current.contains(event.target as Node)
      ) {
        focusInput();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex-grow" ref={terminalRef} onClick={focusInput}>
      <div className="p-1 overflow-hidden h-full rounded">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />
          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </div>
  );
};

export default LiveTermMain;
