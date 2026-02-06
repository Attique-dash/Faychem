"use client";

import { useState } from "react";

const VideoPlayer = ({ videoId, title = "YouTube video", caption = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Generate YouTube thumbnail URL (maxresdefault for highest quality)
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  // Fallback to standard quality if maxres doesn't exist
  const fallbackThumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Video Player */}
      <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg bg-black">
        {!isPlaying ? (
          <>
            {/* Thumbnail Image */}
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = fallbackThumbnail;
              }}
            />

            {/* Red Overlay - Continuous YouTube Style */}
            <div className="absolute inset-0 bg-red-600/20"></div>

            {/* Play Button */}
            <div
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              {/* White Play Button */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                {/* Play Icon */}
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 ml-1 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          // Load iframe only when user clicks play
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>

      {/* Video Caption */}
      {caption && (
        <div className="text-center px-2">
          <p className="text-sm sm:text-base font-medium text-gray-700 leading-relaxed">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
