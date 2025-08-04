import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const about = aboutRef.current;
      const cards = cardsRef.current;
      
      if (about && cards) {
        const rect = about.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          about.classList.add('animate-in');
          cards.classList.add('animate-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">What can you do with microgreens?</h2>
          <p className="section-subtitle">
            Add microgreens to everything: salads, sandwiches, soups, pasta, protein dishes, health shakes -- even desserts.
          </p>
        </div>
        
        <div className="about-cards" ref={cardsRef}>
          <div className="about-card">
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop" 
                alt="Fresh & Clean Microgreens"
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="card-icon">🥗</div>
            <h3>Fresh & Clean</h3>
            <p>Our microgreens are grown in protected greenhouses on soil-less substrate that are free of insects and soil or sand. Cut and packaged micro-leaves are clean and ready to use.</p>
          </div>
          
          <div className="about-card">
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=250&fit=crop" 
                alt="Nutrient Rich Microgreens"
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="card-icon">💪</div>
            <h3>Nutrient Rich</h3>
            <p>Microgreens are considered super foods because of their high levels of vitamins and nutrients -- much more than in mature vegetables.</p>
          </div>
          
          <div className="about-card">
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop" 
                alt="Full of Flavor Microgreens"
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="card-icon">🌟</div>
            <h3>Full of Flavor</h3>
            <p>They are full of flavor and add aesthetic appeal to your culinary dishes . . . . and they go crunch when you eat them.</p>
          </div>
        </div>
        
        <div className="about-image-section">
          <div className="image-placeholder">
            <img 
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop" 
              alt="Fresh Microgreens"
              loading="lazy"
            />
            <div className="placeholder-overlay">
              <div className="placeholder-content">
                <span className="placeholder-icon">🌱</span>
                <p>Fresh Microgreens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 