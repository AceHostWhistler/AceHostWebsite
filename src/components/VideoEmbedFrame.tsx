import React from "react";

interface VideoEmbedFrameProps {
  src: string;
  title: string;
  className?: string;
  allow?: string;
}

const DEFAULT_ALLOW =
  "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share";

const VideoEmbedFrame: React.FC<VideoEmbedFrameProps> = ({
  src,
  title,
  className = "absolute inset-0 h-full w-full border-0",
  allow = DEFAULT_ALLOW,
}) => (
  <iframe
    src={src}
    className={className}
    allow={allow}
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
    title={title}
  />
);

export default VideoEmbedFrame;
