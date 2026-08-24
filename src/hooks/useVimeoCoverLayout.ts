import { useEffect, useState, type RefObject } from "react";

export type CoverLayoutStyle = {
  width: string;
  height: string;
  transform: string;
};

const DEFAULT_COVER_STYLE: CoverLayoutStyle = {
  width: "100%",
  height: "100%",
  transform: "translate(-50%, -50%)",
};

export function useVimeoCoverLayout(
  containerRef: RefObject<HTMLElement | null>,
  videoAspectRatio: number,
  enabled: boolean
): CoverLayoutStyle {
  const [style, setStyle] = useState<CoverLayoutStyle>(DEFAULT_COVER_STYLE);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const element = containerRef.current;
    if (!element || videoAspectRatio <= 0) {
      return;
    }

    const updateLayout = () => {
      const { width, height } = element.getBoundingClientRect();
      if (width <= 0 || height <= 0) {
        return;
      }

      const containerRatio = width / height;

      if (containerRatio > videoAspectRatio) {
        setStyle({
          width: "100%",
          height: `${(width / videoAspectRatio / height) * 100}%`,
          transform: "translate(-50%, -50%)",
        });
        return;
      }

      setStyle({
        width: `${((height * videoAspectRatio) / width) * 100}%`,
        height: "100%",
        transform: "translate(-50%, -50%)",
      });
    };

    updateLayout();

    const observer = new ResizeObserver(updateLayout);
    observer.observe(element);

    return () => observer.disconnect();
  }, [containerRef, enabled, videoAspectRatio]);

  return style;
}
