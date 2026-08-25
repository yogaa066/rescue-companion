import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const categories = [
  ['🫀', 'Heart & Circulation', 'Chest symptoms, collapse'],
  ['🧠', 'Brain & Neurological', 'Stroke symptoms, seizures'],
  ['🫁', 'Breathing', 'Severe breathing difficulty'],
  ['🩸', 'Bleeding & Injuries', 'Severe bleeding, trauma'],
  ['😮', 'Choking & Airway', 'Blocked airway'],
  ['🤧', 'Allergic Reaction', 'Severe allergic reaction'],
  ['🔥', 'Burns & Environment', 'Burns, heat and cold'],
  ['☠️', 'Poisoning & Exposure', 'Possible poisoning or exposure'],
];

function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">✚</span>
          <div>
            <div className="brand-name">RESCUE</div>
            <div className="brand-subtitle">Companion</div>
          </div>
        </div>
        <button className="header-action" type="button">🤖 AI Navigator</button>
      </header>

      <section className="hero">
        <p className="eyebrow">Emergency companion</p>
        <h1>What’s happening?</h1>
        <p className="hero-copy">
          Choose the situation that best matches what you’re seeing. We’ll guide you through the next steps.
        </p>
      </section>

      <section className="category-grid" aria-label="Emergency categories">
        {categories.map(([icon, title, description]) => (
          <button className="category-card" key={title} type="button">
            <span className="category-icon" aria-hidden="true">{icon}</span>
            <span className="category-title">{title}</span>
            <span className="category-description">{description}</span>
            <span className="card-arrow" aria-hidden="true">→</span>
          </button>
        ))}
      </section>

      <button className="unsure-card" type="button">
        <span className="unsure-icon">🤖</span>
        <span>
          <strong>I’m not sure what’s happening</strong>
          <small>Describe the situation and get help finding the right pathway.</small>
        </span>
        <span aria-hidden="true">→</span>
      </button>

      <footer className="emergency-bar">
        <div>
          <strong>Need emergency help now?</strong>
          <span>If this is an emergency, contact your local emergency service.</span>
        </div>
        <button className="emergency-button" type="button">📞 Get emergency help</button>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);
