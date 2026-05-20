import React from 'react';
import logoPath from '/Logo.png';

const TECH_STACK = [
  'React', 'Vite', 'TypeScript', 'React Native', 'Expo',
  'Flutter', 'Dart', 'Tailwind CSS', 'Node.js', 'PostgreSQL',
  'Supabase', 'Shopify API', 'REST', 'GraphQL', 'Python',
  'FastAPI', 'Docker', 'Netlify', 'Vercel', 'Figma',
];

export default function Outro() {
  return (
    <section className="outro">
      <div className="outro-copy">
        <div className="capability-cards">
          {[
            { label: 'Web UI Design', desc: 'React, Vite, TypeScript interfaces for dashboards, product flows, and marketing surfaces.' },
            { label: 'Mobile Product Design', desc: 'iOS and Android experiences for touch-first onboarding, browsing, and transactions.' },
            { label: 'Database-Aware Product Thinking', desc: 'Data models, content structures, and admin relationships as part of product design.' },
            { label: 'Shopify Apps', desc: 'Commerce tooling, storefront extensions, and merchant-facing workflows.' },
            { label: 'CLI Tools', desc: 'Internal tools and command-line workflows for operators, creators, and product teams.' },
            { label: 'AI Integration', desc: 'LLM-powered workflows, context-aware tooling, and agent-native product surfaces.' },
          ].map((cap, i) => (
            <article className="cap-card" key={i}>
              <span className="cap-label">{cap.label}</span>
              <span className="cap-desc">{cap.desc}</span>
            </article>
          ))}
        </div>

        <div className="tech-carousel-wrap">
          <span className="tech-carousel-label">Tech stack</span>
          <div className="tech-carousel-viewport">
            <div className="tech-carousel-track">
              {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <span className="tech-chip" key={i}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <img src={logoPath} alt="Logo" className="outro-logo" />
    </section>
  );
}
