import React, { useMemo, useState, useEffect } from 'react';
import { useOrigamiScroll } from '../hooks/useOrigamiScroll';

export default function ProjectSection({ project, isActive }) {
  const { stageRef } = useOrigamiScroll(isActive);

  const [frontIndex, setFrontIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);

  // Interval for toggling isFlipped state
  useEffect(() => {
    if (!isActive) {
      setIsFlipped(false);
      setFrontIndex(0);
      setBackIndex(1);
      return;
    }

    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4500); // Toggle flip every 4.5 seconds

    return () => clearInterval(interval);
  }, [isActive]);

  // Delayed update of the hidden face to prevent visual flashing during the transition
  useEffect(() => {
    if (!isActive) return;

    const timeout = setTimeout(() => {
      if (isFlipped) {
        // Front face is now hidden on the back, update frontIndex to the next screen in cycle
        setFrontIndex((prevFront) => (backIndex + 1) % project.assets.length);
      } else {
        // Back face is now hidden, update backIndex to the next screen in cycle
        setBackIndex((prevBack) => (frontIndex + 1) % project.assets.length);
      }
    }, 1500); // 1.5s timeout allows the 1.2s transform transition to completely finish

    return () => clearTimeout(timeout);
  }, [isFlipped, isActive, project.assets.length, frontIndex, backIndex]);

  const showcaseFront = project.assets[frontIndex];
  const showcaseBack = project.assets[backIndex];

  // Distribute assets into two tracks for the background grid carousel
  // Duplicate them multiple times for a seamless infinite loop track
  const { row1Items, row2Items } = useMemo(() => {
    const row1 = [];
    const row2 = [];

    // Separate into two rows (even and odd indexes)
    project.assets.forEach((asset, index) => {
      if (index % 2 === 0) {
        row1.push(asset);
      } else {
        row2.push(asset);
      }
    });

    // Repeat to ensure seamless scrolling width
    const repeatTimes = 4;
    const row1Repeated = [];
    const row2Repeated = [];

    for (let r = 0; r < repeatTimes; r++) {
      row1.forEach((asset, idx) => {
        row1Repeated.push({ asset, key: `row1-${r}-${idx}` });
      });
      row2.forEach((asset, idx) => {
        row2Repeated.push({ asset, key: `row2-${r}-${idx}` });
      });
    }

    return { row1Items: row1Repeated, row2Items: row2Repeated };
  }, [project.assets]);

  return (
    <section className={`project-section theme-${project.theme}`} data-project={project.key}>
      <div className="sticky-stage" ref={stageRef}>
        <div className="stage-shell">
          {/* Left copy panel */}
          <div className="project-copy">
            <div>
              <p className="eyebrow">{project.eyebrow} · {project.tagline}</p>
              <h2>{project.headline}</h2>
            </div>
            <p>{project.description}</p>

            <div className="meta-grid">
              {project.cards.map((card, i) => (
                <article className="meta-card" key={i}>
                  <span className="meta-label">{card.label}</span>
                  <span className="meta-value">{card.value}</span>
                </article>
              ))}
            </div>
          </div>

          {/* Right scene panel */}
          <div className="scene">
            <div className="ambient-ring"></div>

            {/* ===== BACKGROUND: scrolling grid carousel ===== */}
            <div className="grid-carousel">
              <div className="grid-carousel-track track-1">
                {row1Items.map(({ asset, key }) => (
                  <div className="grid-carousel-item" key={key}>
                    {asset?.image ? (
                      <img src={asset.image} alt={asset.title} loading="lazy" />
                    ) : (
                      <div className="grid-carousel-placeholder">
                        {asset.title}
                      </div>
                    )}
                    <div className="grid-carousel-item-sheen"></div>
                  </div>
                ))}
              </div>
              <div className="grid-carousel-track track-2">
                {row2Items.map(({ asset, key }) => (
                  <div className="grid-carousel-item" key={key}>
                    {asset?.image ? (
                      <img src={asset.image} alt={asset.title} loading="lazy" />
                    ) : (
                      <div className="grid-carousel-placeholder">
                        {asset.title}
                      </div>
                    )}
                    <div className="grid-carousel-item-sheen"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== FOREGROUND: flip showcase ===== */}
            <div className="showcase-stage">
              <div className={`showcase-card ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="showcase-face front">
                  {showcaseFront?.image ? (
                    <img src={showcaseFront.image} alt={showcaseFront.title} />
                  ) : (
                    <div className="showcase-face placeholder-face">
                      {showcaseFront?.title}
                    </div>
                  )}
                </div>
                <div className="showcase-face back">
                  {showcaseBack?.image ? (
                    <img src={showcaseBack.image} alt={showcaseBack.title} />
                  ) : (
                    <div className="showcase-face placeholder-face">
                      {showcaseBack?.title}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="callout">
              <span className="screen-label">What this project shows</span>
              <p>{project.callout}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

