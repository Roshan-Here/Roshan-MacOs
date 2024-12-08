import { useEffect, useState } from "react";
import VCard from "../Youtube/Vcard";
import VModal from "../Youtube/Vmodel";
import { Video } from "../Youtube/YoutubeItems";
import { videos as initialVideos } from "../Youtube/YoutubeItems";
import { UserThemeStore } from "@/app/state/store";

const shuffleArray = (array: Video[]): Video[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function YoutubeApp() {
  const { isDark } = UserThemeStore();
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  useEffect(() => {
    setVideos(shuffleArray(initialVideos));
  }, []);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className={`min-h-screen ${isDark?"bg-slate-700":"bg-slate-200"}`}>
      <header className="shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-red-600">YouTube Clone</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
          {videos.map((video) => (
            <VCard
              key={video.id}
              video={video}
              onVideoClick={handleVideoClick}
            />
          ))}
        </div>
      </main>
      {selectedVideo && (
        <VModal video={selectedVideo} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default YoutubeApp;
