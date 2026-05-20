import React from 'react';
import logoPath from '/Logo.png';

export default function Intro() {
  return (
    <section className="splash">
      <div className="splash-content">
        <img src={logoPath} alt="Logo" className="splash-logo" />
      </div>
    </section>
  );
}
