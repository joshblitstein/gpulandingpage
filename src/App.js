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
            <a href="https://hard-ware-market.vercel.app/login" className="nav-button-secondary">Sign In</a>
            <a href="https://hard-ware-market.vercel.app/signup" className="nav-button-primary">Get Started</a>
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
            <a href="https://hard-ware-market.vercel.app/signup" className="mobile-nav-button primary">Get Started</a>
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
            <h1 className="main-heading">The <span className="gradient-text">Clear</span> Market for AI Servers</h1>
            <p className="description">
              Buy and sell GPU clusters with verified ownership, transparent pricing, and protected transactions without the broker maze.
            </p>
            <div className="cta-buttons">
              <a href="https://hard-ware-market.vercel.app/login" className="cta-button primary">Get Started</a>
              <a href="https://hard-ware-market.vercel.app/login" className="cta-button secondary">Browse Inventory</a>
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
            <img src="/clusterPurp.png" alt="Server Cluster" className="cluster-image" />
          </div>
          <div className="problem-content">
            <h2 className="problem-heading">The AI Hardware Market Is Noisy</h2>
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
            <div className="how-it-works-steps-column">
              <div className="how-step">
                <div className="step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="step-title">List Your Hardware</h3>
                <p className="step-description">Sellers upload verified server listings with proof of ownership, serial numbers, and warranty information.</p>
              </div>
              <div className="how-step">
                <div className="step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="step-title">Browse & Make Offers</h3>
                <p className="step-description">Buyers browse live inventory and submit direct, trackable offers on verified listings.</p>
              </div>
              <div className="how-step">
                <div className="step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="step-title">Secure Escrow</h3>
                <p className="step-description">Funds are locked in escrow until proof is confirmed and shipment begins, protecting both parties.</p>
              </div>
              <div className="how-step">
                <div className="step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="step-title">Automated Compliance</h3>
                <p className="step-description">Export controls and KYC verification run automatically, ensuring regulatory compliance.</p>
              </div>
            </div>
            <div className="how-it-works-image-column">
              <img src="/howitworks.png" alt="How It Works" className="server-sketch-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Deal Flow Section */}
      <section className="deal-flow-section">
        <div className="deal-flow-container">
          <h2 className="deal-flow-heading">Clean, Structured Deal Flow</h2>
          <div className="deal-flow-timeline">
            <div className="timeline-step">
              <div className="timeline-top">
                <div className="timeline-number">1</div>
     
              </div>
              <div className="timeline-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="timeline-text">List</div>
            </div>
            <div className="timeline-arrow-between">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="url(#arrowGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8547B7" />
                    <stop offset="50%" stopColor="#DF40A6" />
                    <stop offset="100%" stopColor="#5D40BD" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="timeline-step">
              <div className="timeline-top">
                <div className="timeline-number">2</div>
             
              </div>
              <div className="timeline-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="timeline-text">Verify</div>
            </div>
            <div className="timeline-arrow-between">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="url(#arrowGradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="arrowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8547B7" />
                    <stop offset="50%" stopColor="#DF40A6" />
                    <stop offset="100%" stopColor="#5D40BD" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="timeline-step">
              <div className="timeline-top">
                <div className="timeline-number">3</div>
 
              </div>
              <div className="timeline-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="timeline-text">Offer</div>
            </div>
            <div className="timeline-arrow-between">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="url(#arrowGradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="arrowGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8547B7" />
                    <stop offset="50%" stopColor="#DF40A6" />
                    <stop offset="100%" stopColor="#5D40BD" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="timeline-step">
              <div className="timeline-top">
                <div className="timeline-number">4</div>
        
              </div>
              <div className="timeline-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="timeline-text">Escrow</div>
            </div>
            <div className="timeline-arrow-between">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="url(#arrowGradient4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="arrowGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8547B7" />
                    <stop offset="50%" stopColor="#DF40A6" />
                    <stop offset="100%" stopColor="#5D40BD" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="timeline-step">
              <div className="timeline-top">
                <div className="timeline-number">5</div>
          
              </div>
              <div className="timeline-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="20" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="17" cy="20" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="timeline-text">Ship</div>
            </div>
            <div className="timeline-arrow-between">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="url(#arrowGradient5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="arrowGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8547B7" />
                    <stop offset="50%" stopColor="#DF40A6" />
                    <stop offset="100%" stopColor="#5D40BD" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="timeline-step">
              <div className="timeline-top">
                <div className="timeline-number">6</div>
       
              </div>
              <div className="timeline-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="timeline-text">Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commodity Section */}
      {/* <section className="commodity-section">
        <div className="commodity-content">
          <h2 className="commodity-heading">Compute Moves Like a Commodity — As It Should</h2>
          <ul className="commodity-list">
            <li>Transparent pricing</li>
            <li>Trust by default</li>
            <li>Faster deal cycles</li>
            <li>Supply meets demand — cleanly</li>
          </ul>
        </div>
      </section> */}

      {/* Who Is It For Section */}
      <section className="who-section">
        <div className="who-container">
          <h2 className="who-heading">Who <span className="gradient-text">Nimbus</span> Is For</h2>
          <div className="who-table-container">
            <table className="who-table">
              <thead>
                <tr>
                  <th className="who-table-header">For Buyers</th>
                  <th className="who-table-header">For Sellers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Access verified GPU clusters</td>
                  <td>List real hardware with proof once</td>
                </tr>
                <tr>
                  <td>Avoid broker noise</td>
                  <td>Meet qualified buyers instantly</td>
                </tr>
                <tr>
                  <td>Secure transactions through escrow</td>
                  <td>Faster closings, cleaner deals</td>
                </tr>
                <tr>
                  <td>Scale compute without chaos</td>
                  <td>No chasing. No nonsense.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
