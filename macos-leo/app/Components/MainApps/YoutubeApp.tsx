import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

function YoutubeApp() {
    const YoutubeURL = "https://www.youtube.com/";  // Regular YouTube URL
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (loading) {
                setLoading(false); // This will stop the loading spinner after 1.5 seconds
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, [loading]);

    const handleLoad = () => {
        setLoading(false); // Stop loading spinner once iframe has fully loaded
    };

    return (
        <>
            {loading ? (
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <RingLoader color="#33e50f" />
                </div>
            ) : (
                <div className="w-full h-full overflow-hidden">
                    <iframe
                        src={YoutubeURL}
                        className="w-full h-full"
                        onLoad={handleLoad}
                    ></iframe>
                </div>
            )}
        </>
    );
}

export default YoutubeApp;
