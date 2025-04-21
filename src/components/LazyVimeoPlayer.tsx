import React, { useState } from 'react';
import Image from 'next/image';

interface LazyVimeoPlayerProps {
  videoId: string;
  title: string;
  aspectRatio?: 'video' | 'square' | 'portrait'; // Default is video (16:9)
  className?: string;
  thumbnailQuality?: 'default' | 'high'; // Vimeo thumbnail quality
  autoplay?: boolean;
  loop?: boolean;
  background?: boolean;
  showByline?: boolean;
  showTitle?: boolean;
  showPortrait?: boolean;
}

const LazyVimeoPlayer: React.FC<LazyVimeoPlayerProps> = ({
  videoId,
  title,
  aspectRatio = 'video',
  className = '',
  thumbnailQuality = 'high',
  autoplay = false,
  loop = false,
  background = false,
  showByline = false,
  showTitle = false,
  showPortrait = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set aspect ratio classes
  const aspectRatioClass = aspectRatio === 'square' 
    ? 'aspect-square' 
    : aspectRatio === 'portrait' 
      ? 'aspect-[3/4]' 
      : 'aspect-video';
  
  // Build Vimeo URL with parameters
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?title=${showTitle ? 1 : 0}&byline=${showByline ? 1 : 0}&portrait=${showPortrait ? 1 : 0}&autoplay=${autoplay || isLoaded ? 1 : 0}&loop=${loop ? 1 : 0}&background=${background ? 1 : 0}`;
  
  // Generate thumbnail URL (Vimeo API)
  const thumbnailUrl = thumbnailQuality === 'high'
    ? `https://vumbnail.com/${videoId}.jpg`
    : `https://vumbnail.com/${videoId}_medium.jpg`;

  return (
    <div className={`relative ${aspectRatioClass} overflow-hidden rounded-lg shadow-lg ${className}`}>
      {!isLoaded ? (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={() => setIsLoaded(true)}
        >
          <div className="absolute inset-0 bg-black">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 hover:opacity-95 transition-opacity"
              priority={false}
            />
          </div>
          
          <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-black bg-opacity-70">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M8 5V19L19 12L8 5Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          
          <span className="sr-only">Play {title}</span>
        </div>
      ) : (
        <iframe
          src={vimeoUrl}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      )}
    </div>
  );
};

export default LazyVimeoPlayer; 