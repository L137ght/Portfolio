import React, { useState, useEffect, useRef, useCallback } from 'react';
import Intro from './components/Intro';
import ProjectSection from './components/ProjectSection';
import Outro from './components/Outro';
import { projects } from './data/projects';

const SLIDE_TRANSITION_MS = 828;

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  activeIndexRef.current = activeIndex;

  const isLocked = useRef(false);
  const queuedIndexRef = useRef(null);

  const goToSlide = useCallback((index, options = {}) => {
    const { force = false } = options;

    if (index < 0 || index > 4) return;
    if (isLocked.current && !force) {
      queuedIndexRef.current = index;
      return;
    }
    if (index === activeIndexRef.current) return;

    queuedIndexRef.current = null;
    activeIndexRef.current = index;
    setActiveIndex(index);
    isLocked.current = true;

    setTimeout(() => {
      isLocked.current = false;
    }, SLIDE_TRANSITION_MS);
  }, []);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    if (isLocked.current) return;

    if (e.deltaY > 15) {
      goToSlide(activeIndexRef.current + 1);
    } else if (e.deltaY < -15) {
      goToSlide(activeIndexRef.current - 1);
    }
  }, [goToSlide]);

  const touchStartRef = useRef(0);

  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (isLocked.current) return;
    const deltaY = touchStartRef.current - e.touches[0].clientY;
    if (Math.abs(deltaY) > 50) { // Threshold for a swipe gesture
      if (deltaY > 0) {
        goToSlide(activeIndexRef.current + 1);
      } else {
        goToSlide(activeIndexRef.current - 1);
      }
    }
  }, [goToSlide]);

  const handleKeyDown = useCallback((e) => {
    if (isLocked.current) return;
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
      e.preventDefault();
      goToSlide(activeIndexRef.current + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
      e.preventDefault();
      goToSlide(activeIndexRef.current - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSlide(4);
    }
  }, [goToSlide]);

  // Auto-advance from splash to first project after 3 seconds
  useEffect(() => {
    if (activeIndex !== 0) return;
    const timer = setTimeout(() => goToSlide(1), 3000);
    return () => clearTimeout(timer);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove, handleKeyDown]);

  const handleSlideTransitionEnd = useCallback((e) => {
    if (e.propertyName !== 'transform') return;
    if (queuedIndexRef.current == null || queuedIndexRef.current === activeIndexRef.current) return;

    const nextIndex = queuedIndexRef.current;
    queuedIndexRef.current = null;
    goToSlide(nextIndex, { force: true });
  }, [goToSlide]);

  const slides = [
    { type: 'intro' },
    { type: 'project', data: projects.atribe },
    { type: 'project', data: projects.npire },
    { type: 'project', data: projects.remo },
    { type: 'outro' },
  ];

  const activeAccent = 
    activeIndex === 1 ? '#d10b8d' : 
    activeIndex === 2 ? '#00e0ff' : 
    activeIndex === 3 ? '#ff9f1c' : 
    '#f4a8d6';

  return (
    <div className={`portfolio-slider-viewport theme-${slides[activeIndex]?.data?.theme || 'default'}`}>
      <div 
        onTransitionEnd={handleSlideTransitionEnd}
        className="portfolio-slider" 
        style={{
          transform: `translate3d(0, -${activeIndex * 100}vh, 0)`,
          '--slide-transition-ms': `${SLIDE_TRANSITION_MS}ms`,
        }}
      >
        <div className="slide-container">
          <Intro />
        </div>
        <div className="slide-container">
          <ProjectSection project={projects.atribe} isActive={activeIndex === 1} />
        </div>
        <div className="slide-container">
          <ProjectSection project={projects.npire} isActive={activeIndex === 2} />
        </div>
        <div className="slide-container">
          <ProjectSection project={projects.remo} isActive={activeIndex === 3} />
        </div>
        <div className="slide-container">
          <Outro />
        </div>
      </div>

      {/* Floating Dot Indicators */}
      <nav className="slider-nav" style={{ '--accent': activeAccent }}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`nav-dot ${activeIndex === i ? 'is-active' : ''}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </nav>
    </div>
  );
}
