import React, { useState } from 'react';
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

const heartPathway = {
  title: 'Possible heart emergency',
  intro: 'Some heart emergencies can look different from person to person. If you suspect a heart emergency, get professional help quickly.',
  signs: [
    'Chest discomfort, pressure, squeezing, fullness or pain',
    'Discomfort in the arm, back, neck, jaw or stomach',
    'Shortness of breath',
    'Cold sweat, nausea or lightheadedness',
  ],
  actions: [
    'Contact your local emergency service now.',
    'Follow the emergency operator’s instructions while help is coming.',
    'Stay with the person and watch for changes in responsiveness or breathing.',
  ],
  source: 'American Heart Association + American Red Cross first-aid guidance',
};

function Home({ onSelectHeart, onOpenAI }) {
  return (
    <>
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">✚</span>
          <div>
            <div className="brand-name">RESCUE</div>
            <div className="brand-subtitle">Companion</div>
          </div>
        </div>
        <button className="header-action" type="button" onClick={onOpenAI}>🤖 AI Navigator</button>
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
          <button
            className="category-card"
            key={title}
            type="button"
            onClick={title === 'Heart & Circulation' ? onSelectHeart : undefined}
          >
            <span className="category-icon" aria-hidden="true">{icon}</span>
            <span className="category-title">{title}</span>
            <span className="category-description">{description}</span>
            <span className="card-arrow" aria-hidden="true">→</span>
          </button>
        ))}
      </section>

      <button className="unsure-card" type="button" onClick={onOpenAI}>
        <span className="unsure-icon">🤖</span>
        <span>
          <strong>I’m not sure what’s happening</strong>
          <small>Describe the situation and get help finding the right pathway.</small>
        </span>
        <span aria-hidden="true">→</span>
      </button>
    </>
  );
}

function HeartPathway({ onBack }) {
  return (
    <section className="pathway-page">
      <button className="back-button" type="button" onClick={onBack}>← Back</button>

      <div className="pathway-header">
        <span className="pathway-icon">🫀</span>
        <div>
          <p className="eyebrow">Heart & Circulation</p>
          <h1>{heartPathway.title}</h1>
        </div>
      </div>

      <div className="urgent-panel">
        <strong>🚨 Get professional emergency help</strong>
        <p>{heartPathway.intro}</p>
        <button className="primary-action" type="button">📞 Contact emergency services</button>
      </div>

      <div className="pathway-grid">
        <article className="info-card">
          <p className="step-label">01 · RECOGNIZE</p>
          <h2>What you may notice</h2>
          <ul>
            {heartPathway.signs.map((sign) => <li key={sign}>{sign}</li>)}
          </ul>
        </article>

        <article className="info-card">
          <p className="step-label">02 · WHILE HELP IS COMING</p>
          <h2>Keep the focus simple</h2>
          <ul>
            {heartPathway.actions.map((action) => <li key={action}>{action}</li>)}
          </ul>
        </article>
      </div>

      <button className="contact-card" type="button">
        <span>🤝</span>
        <span><strong>Get someone else here</strong><small>Family · trusted neighbour · family doctor · close friend</small></span>
        <span>→</span>
      </button>

      <div className="source-note">
        <strong>ⓘ Verified guidance</strong>
        <span>{heartPathway.source}. This prototype does not diagnose or replace professional medical care.</span>
      </div>
    </section>
  );
}

function AINavigator({ onBack }) {
  return (
    <section className="ai-page">
      <button className="back-button" type="button" onClick={onBack}>← Back</button>
      <p className="eyebrow">AI Navigator</p>
      <h1>Tell me what’s happening.</h1>
      <p className="hero-copy">I’ll help you find the closest emergency pathway. I’m not a doctor and I won’t diagnose the situation.</p>
      <div className="chat-placeholder">
        <div className="bot-bubble">🤖 Start by describing what you’re seeing in your own words.</div>
        <div className="chat-options">
          <button type="button">Someone collapsed</button>
          <button type="button">They have chest symptoms</button>
          <button type="button">They are having trouble breathing</button>
          <button type="button">I’m not sure</button>
        </div>
      </div>
    </section>
  );
}

function EmergencyBar() {
  return (
    <footer className="emergency-bar">
      <div>
        <strong>Need emergency help now?</strong>
        <span>If this is an emergency, contact your local emergency service.</span>
      </div>
      <button className="emergency-button" type="button">📞 Get emergency help</button>
    </footer>
  );
}

function App() {
  const [screen, setScreen] = useState('home');

  return (
    <main className="app-shell">
      {screen === 'home' && <Home onSelectHeart={() => setScreen('heart')} onOpenAI={() => setScreen('ai')} />}
      {screen === 'heart' && <HeartPathway onBack={() => setScreen('home')} />}
      {screen === 'ai' && <AINavigator onBack={() => setScreen('home')} />}
      <EmergencyBar />
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);
