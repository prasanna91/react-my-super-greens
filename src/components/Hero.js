import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = heroRef.current;
      const background = backgroundRef.current;
      const content = contentRef.current;

      if (hero && background && content) {
        // Parallax effect for background
        const rate = scrolled * -0.5;
        background.style.transform = `translateY(${rate}px)`;

        // Fade in effect for content
        const opacity = 1 - (scrolled * 0.003);
        content.style.opacity = Math.max(0.3, opacity);

        // Scale effect for content
        const scale = 1 - (scrolled * 0.0005);
        content.style.transform = `scale(${Math.max(0.8, scale)})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background" ref={backgroundRef}>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&h=800&fit=crop" 
            alt="Fresh Microgreens"
            loading="eager"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="floating-elements">
          <div className="floating-element element-1">🌱</div>
          <div className="floating-element element-2">🥬</div>
          <div className="floating-element element-3">🌿</div>
          <div className="floating-element element-4">🍃</div>
          <div className="floating-element element-5">🌾</div>
        </div>
      </div>
      <div className="container">
        <div className="hero-content" ref={contentRef}>
          <div className="hero-logo">
            <h1 className="logo-text">MY SUPER GREENS</h1>
          </div>
          <h1 className="hero-title">
            Microgreens, <span className="highlight">MACRO</span> Health!
          </h1>
          <p className="hero-subtitle">
            Microleaves, also known as microgreens are considered super foods because of their high levels of vitamins and nutrients -- much more than in mature vegetables. They are full of flavor and add aesthetic appeal to your culinary dishes . . . . and they go crunch when you eat them.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">
              <span>Our Microgreens</span>
              <div className="btn-hover-effect"></div>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Where to Buy</span>
              <div className="btn-hover-effect"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 