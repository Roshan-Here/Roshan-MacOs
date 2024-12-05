import { useState,useEffect } from "react";
import { RingLoader } from "react-spinners";

function GloblaProfileApp() {
  const ProfileURL = "https://globalprofile.vercel.app/";
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false); 
      }
    }, 1500); 

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
            src={ProfileURL}
            className="w-full h-full"
            onLoad={handleLoad}
          ></iframe>
        </div>
      )}
    </>
  );
}

export default GloblaProfileApp;
