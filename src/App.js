import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/logo.png" alt="Nimbus Market Logo" className="logo-icon" />
          </div>
          <div className="nav-links">
            <a href="#browse" className="nav-link">Browse</a>
            <a href="#sell" className="nav-link">Sell</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="nav-actions">
            <button className="nav-button-secondary">Sign In</button>
            <button className="nav-button-primary">Get Started</button>
          </div>
          <button 
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#browse" className="mobile-nav-link">Browse</a>
            <a href="#sell" className="mobile-nav-link">Sell</a>
            <a href="#about" className="mobile-nav-link">About</a>
            <a href="#contact" className="mobile-nav-link">Contact</a>
            <button className="mobile-nav-button">Sign In</button>
            <button className="mobile-nav-button primary">Get Started</button>
          </div>
        )}
      </nav>

      {/* What's New Banner */}
      {/* <div className="whats-new-banner">
        <span className="new-dot"></span>
        <span>What's new</span>
        <a href="#" className="new-link">New GPU listings available now &gt;</a>
      </div> */}

      {/* Main Hero Section */}
      <main className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="main-heading">The Clear Market for AI Servers</h1>
            <p className="description">
              Buy and sell GPU clusters with verified ownership, transparent pricing, and protected transactions — without the broker maze.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">Get Started</button>
              <button className="cta-button secondary">Browse Inventory</button>
            </div>
          </div>
          <div className="hero-image-column">
            <img src="/GpuParts.png" alt="GPU Parts" className="gpu-parts-image" />
          </div>
        </div>
      </main>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="problem-container">
          <div className="problem-image-column">
            <img src="/cluster.png" alt="Server Cluster" className="cluster-image" />
          </div>
          <div className="problem-content">
            <h2 className="problem-heading">The AI Hardware Market Is Noisey</h2>
            <p className="problem-text">
              Buying a GPU cluster shouldn’t be this messy. Today the market is clogged with endless middlemen, unverifiable inventory, hidden markups, and deals that collapse under confusion. Buyers can't trust what's real. Sellers can't find qualified counterparties. A multi-billion-dollar market runs on screenshots, rumors, and hope.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <h2 className="how-it-works-heading">How It Works</h2>
          <div className="how-it-works-content">
            <div className="how-step">
              <div className="step-number">1</div>
              <h3 className="step-title">List Your Hardware</h3>
              <p className="step-description">Sellers upload verified server listings with proof of ownership, serial numbers, and warranty information.</p>
            </div>
            <div className="how-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Browse & Make Offers</h3>
              <p className="step-description">Buyers browse live inventory and submit direct, trackable offers on verified listings.</p>
            </div>
            <div className="how-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Secure Escrow</h3>
              <p className="step-description">Funds are locked in escrow until proof is confirmed and shipment begins, protecting both parties.</p>
            </div>
            <div className="how-step">
              <div className="step-number">4</div>
              <h3 className="step-title">Automated Compliance</h3>
              <p className="step-description">Export controls and KYC verification run automatically, ensuring regulatory compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Flow Section */}
      <section className="deal-flow-section">
        <div className="deal-flow-container">
          <h2 className="deal-flow-heading">Clean, Structured Deal Flow</h2>
          <div className="deal-flow-steps">
            <span className="flow-step">List</span>
            <span className="flow-arrow">→</span>
            <span className="flow-step">Verify</span>
            <span className="flow-arrow">→</span>
            <span className="flow-step">Offer</span>
            <span className="flow-arrow">→</span>
            <span className="flow-step">Escrow</span>
            <span className="flow-arrow">→</span>
            <span className="flow-step">Ship</span>
            <span className="flow-arrow">→</span>
            <span className="flow-step">Delivered</span>
          </div>
        </div>
      </section>

      {/* Commodity Section */}
      <section className="commodity-section">
        <div className="commodity-content">
          <h2 className="commodity-heading">Compute Moves Like a Commodity — As It Should</h2>
          <ul className="commodity-list">
            <li>Transparent pricing</li>
            <li>Trust by default</li>
            <li>Faster deal cycles</li>
            <li>Supply meets demand — cleanly</li>
          </ul>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="who-section">
        <div className="who-container">
          <h2 className="who-heading">Who Nimbus Is For</h2>
          <div className="who-columns">
            <div className="who-column">
              <h3 className="who-column-title">For Buyers</h3>
              <ul className="who-list">
                <li>Access verified GPU clusters</li>
                <li>Avoid broker noise</li>
                <li>Secure transactions through escrow</li>
                <li>Scale compute without chaos</li>
              </ul>
            </div>
            <div className="who-column">
              <h3 className="who-column-title">For Sellers</h3>
              <ul className="who-list">
                <li>List real hardware with proof once</li>
                <li>Meet qualified buyers instantly</li>
                <li>Faster closings, cleaner deals</li>
                <li>No chasing. No nonsense.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="logos-section">
        <div className="logos-container">
          <div className="logo-item">TIDAL</div>
          <div className="logo-item">acreom</div>
          <div className="logo-item">Skyline</div>
          <div className="logo-item">upwork</div>
          <div className="logo-item">Volta</div>
        </div>
      </section>
    </div>
  );
}

export default App;
