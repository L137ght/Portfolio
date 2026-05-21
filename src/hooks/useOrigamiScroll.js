import { useRef, useEffect, useCallback } from 'react';

const SECTION_TRANSITION_MS = 828;

export function useOrigamiScroll(isActive) {
  const stageRef = useRef(null);
  const progressRef = useRef(0);
  const animFrameRef = useRef(null);
  const isAnimating = useRef(false);

  const applyLayout = useCallback((p) => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty('--progress', p.toFixed(4));
  }, []);

  const animateTo = useCallback((target) => {
    isAnimating.current = true;

    const duration = SECTION_TRANSITION_MS;
    const start = progressRef.current;
    const startTime = performance.now();

    const tick = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      const p = start + (target - start) * eased;
      progressRef.current = p;
      applyLayout(p);

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        progressRef.current = target;
        applyLayout(target);
        isAnimating.current = false;
      }
    };

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(tick);
  }, [applyLayout]);

  useEffect(() => {
    animateTo(isActive ? 1 : 0);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isActive, animateTo]);

  return { stageRef };
}
