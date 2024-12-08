import React, { useRef, useState } from "react";
import { Video } from "./YoutubeItems";
import { UserThemeStore } from "@/app/state/store";

interface VideoCardProps {
  video: Video;
  onVideoClick: (video: Video) => void;
}

const VCard: React.FC<VideoCardProps> = ({ video, onVideoClick }) => {
  const { isDark } = UserThemeStore();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${
        isDark ? "bg-slate-800" : "bg-slate-200"
      } rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onVideoClick(video)}
    >
      <div className="relative aspect-video">
        {isHovered ? (
          <iframe
            src={`${video.videoUrl}?autoplay=1&mute=1&controls=0&modestbranding=1`}
            allow="autoplay; encrypted-media"
            className="w-full h-full"
            title={video.title}
          />
        ) : (
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-3">
        <div className="flex items-start space-x-3">
          <img
            src={video.channelImage}
            alt={video.channelName}
            className="w-8 h-8 rounded-full flex-shrink-0"
          />
          <div className="flex-grow min-w-0">
            <h3 className="font-semibold text-sm sm:text-base line-clamp-2 mb-1">
              {video.title}
            </h3>
            <p className="text-xs sm:text-sm truncate">{video.channelName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VCard;
