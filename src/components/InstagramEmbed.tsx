import React, { useState, useRef, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

interface InstagramEmbedProps {
  url: string;
  title?: string;
  height?: number;
  width?: number;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({
  url,
  title = "Instagram Video",
  height = 600,
  width = 340,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Extract the post ID from the URL
  const getPostId = () => {
    const matches = url.match(/\/([^\/]+)\/(?:\?.*)?$/);
    return matches ? matches[1] : '';
  };
  
  // Create embed URL
  const embedUrl = `https://www.instagram.com/reel/${getPostId()}/embed/?utm_source=ig_embed&utm_campaign=loading&hidecaption=1`;
  
  // Handle video play/pause
  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  // Prevent navigation
  useEffect(() => {
    // Create an overlay for the entire iframe when it's loaded
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    // If we attempt to load the iframe with special attributes
    const handleIframeLoad = () => {
      try {
        // This might not work due to cross-origin restrictions
        if (iframe.contentWindow) {
          iframe.contentWindow.addEventListener('click', (e) => {
            e.stopPropagation();
          });
        }
      } catch (error) {
        // Silent fail - expected due to cross-origin policy
      }
    };
    
    iframe.addEventListener('load', handleIframeLoad);
    
    return () => {
      iframe.removeEventListener('load', handleIframeLoad);
    };
  }, []);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 border border-gray-100" style={{ width: `${width}px` }}>
      <div className="relative" style={{ height: `${height}px`, width: `${width}px` }}>
        <iframe
          ref={iframeRef}
          className={`absolute inset-0 w-full h-full ${isPlaying ? '' : 'pointer-events-none'}`}
          src={embedUrl}
          frameBorder="0"
          scrolling="no"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
          title={title}
          sandbox="allow-scripts allow-same-origin allow-popups"
        ></iframe>
        
        {/* Pause button overlay when playing */}
        {isPlaying && (
          <div 
            className="absolute top-4 right-4 z-10"
            onClick={handleVideoClick}
          >
            <button className="w-10 h-10 bg-black bg-opacity-60 rounded-full flex items-center justify-center transition hover:bg-opacity-80">
              <span className="text-white text-xl">⏸</span>
            </button>
          </div>
        )}
        
        {/* Play button overlay when not playing */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer z-10 transition-opacity duration-300"
            onClick={handleVideoClick}
          >
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center transition transform hover:scale-110">
              <FaPlay className="text-gray-900 text-xl ml-1" />
            </div>
          </div>
        )}
      </div>
      
      <div className="py-3 px-4 bg-gray-900">
        <div className="flex items-center justify-center">
          <FaPlay className="text-white mr-2" />
          <h3 className="text-sm font-medium text-center text-white">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default InstagramEmbed; 