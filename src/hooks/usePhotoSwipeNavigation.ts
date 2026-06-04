import { useCallback, useRef } from "react";

const SWIPE_MIN_PX = 80;
/** Horizontal movement must dominate vertical (avoids swipe during pinch/pan). */
const HORIZONTAL_RATIO = 2;

/**
 * Touch handlers for fullscreen photo galleries.
 * Ignores multi-touch (pinch-zoom) and requires a deliberate horizontal swipe.
 * Pair with `blockGalleryTouchPropagation` on the zoomable image wrapper.
 */
export function usePhotoSwipeNavigation(
  onSwipeToNext: () => void,
  onSwipeToPrev: () => void
) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const end = useRef<{ x: number; y: number } | null>(null);
  const maxTouches = useRef(0);

  const reset = useCallback(() => {
    start.current = null;
    end.current = null;
    maxTouches.current = 0;
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    maxTouches.current = Math.max(maxTouches.current, e.touches.length);
    if (e.touches.length > 1) {
      start.current = null;
      end.current = null;
      return;
    }
    start.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    end.current = null;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    maxTouches.current = Math.max(maxTouches.current, e.touches.length);
    if (e.touches.length > 1) {
      start.current = null;
      end.current = null;
      return;
    }
    if (start.current) {
      end.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  }, []);

  const finishGesture = useCallback(() => {
    if (maxTouches.current > 1 || !start.current || !end.current) {
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

  const handleTouchEnd = useCallback(() => {
    finishGesture();
  }, [finishGesture]);

  const handleTouchCancel = useCallback(() => {
    reset();
  }, [reset]);

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleTouchCancel,
  };
}

/** Stop touch events from bubbling to the lightbox swipe layer (pinch-zoom on image). */
export const blockGalleryTouchPropagation = {
  onTouchStart: (e: React.TouchEvent) => e.stopPropagation(),
  onTouchMove: (e: React.TouchEvent) => e.stopPropagation(),
  onTouchEnd: (e: React.TouchEvent) => e.stopPropagation(),
  onTouchCancel: (e: React.TouchEvent) => e.stopPropagation(),
};
