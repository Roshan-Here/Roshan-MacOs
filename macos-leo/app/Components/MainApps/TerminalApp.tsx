import { useState,useEffect } from "react";
import { RingLoader } from "react-spinners";

function TerminalApp() {
  const TERMINAL_URL = "https://macos-terminal.vercel.app/";
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false); 
      }
    }, 2500); 

    return () => clearTimeout(timer);
  }, [loading]);

  const handleLoad = () => {
    setLoading(false); 
  };
  return (
    <>
      {loading ? (
        <div className="flex flex-col justify-center items-center  w-full h-full">
          <RingLoader color="#33e50f" />
        </div>
      ) : (
        <div className="w-full h-full overflow-hidden">
          <iframe
            src={TERMINAL_URL}
            className="w-full h-full"
            onLoad={handleLoad}
          ></iframe>
        </div>
      )}
    </>
  );
}

export default TerminalApp;
