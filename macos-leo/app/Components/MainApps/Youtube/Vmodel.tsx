
import { X } from "lucide-react"; 
import React, { useEffect, useRef } from "react";
import { Video } from "./YoutubeItems";
import { UserThemeStore } from "@/app/state/store";


interface VideoModalProps {
  video: Video | null;
  onClose: () => void;
}

const VModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const { isDark } = UserThemeStore();
  if (!video) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className={`${isDark?'bg-gray-900':"bg-white"} rounded-lg overflow-hidden flex flex-col w-full max-w-4xl mt-3 mb-3`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold truncate">{video.title}</h2>
          <button
            onClick={onClose}
            className="focus:outline-none p-1 rounded-full bg-red-500"
          >
            <X size={20}/>
          </button>
        </div>
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            src={`${video.videoUrl}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            title={video.title}
          />
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3">
            <img src={video.channelImage} alt={video.channelName} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">{video.channelName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default VModal;
