import { useCallback, useRef } from "react";

const SWIPE_MIN_PX = 72;
/** Horizontal movement must dominate vertical (avoids swipe during pinch/pan). */
const HORIZONTAL_RATIO = 1.5;

/**
 * Touch handlers for fullscreen photo galleries.
 * Ignores multi-touch (pinch-zoom) and requires a deliberate horizontal swipe.
 */
export function usePhotoSwipeNavigation(
  onSwipeToNext: () => void,
  onSwipeToPrev: () => void
) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const end = useRef<{ x: number; y: number } | null>(null);
  const multiTouch = useRef(false);

  const reset = useCallback(() => {
    start.current = null;
    end.current = null;
    multiTouch.current = false;
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 1) {
      multiTouch.current = true;
      start.current = null;
      end.current = null;
      return;
    }
    multiTouch.current = false;
    start.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    end.current = null;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 1) {
      multiTouch.current = true;
      return;
    }
    if (start.current && !multiTouch.current) {
      end.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (multiTouch.current || !start.current || !end.current) {
      reset();
      return;
    }

    const dx = start.current.x - end.current.x;
    const dy = start.current.y - end.current.y;

    if (
      Math.abs(dx) >= SWIPE_MIN_PX &&
      Math.abs(dx) > Math.abs(dy) * HORIZONTAL_RATIO
    ) {
      if (dx > 0) {
        onSwipeToNext();
      } else {
        onSwipeToPrev();
      }
    }

    reset();
  }, [onSwipeToNext, onSwipeToPrev, reset]);

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
}
