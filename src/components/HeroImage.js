import React, { useEffect, useRef } from 'react';
import './HeroImage.css';

const HeroImage = () => {
  const heroImageRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImage = heroImageRef.current;
      const image = imageRef.current;
      const content = contentRef.current;

      if (heroImage && image && content) {
        // Parallax effect for background image
        const rate = scrolled * -0.5;
        image.style.transform = `translateY(${rate}px)`;

        // Fade and scale effect for content
        const opacity = 1 - (scrolled * 0.003);
        content.style.opacity = Math.max(0.3, opacity);

        const scale = 1 - (scrolled * 0.0005);
        content.style.transform = `scale(${Math.max(0.8, scale)})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-image" ref={heroImageRef}>
      <div className="image-background" ref={imageRef}>
        <img 
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&h=600&fit=crop" 
          alt="Fresh Microgreens"
          loading="eager"
        />
        <div className="image-overlay"></div>
      </div>
      
      <div className="hero-content" ref={contentRef}>
        <div className="container">
          <h1>Fresh From Our Farms</h1>
          <p>Experience the vibrant taste and nutritional power of our carefully cultivated microgreens</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Varieties</span>
            </div>
            <div className="stat">
              <span className="stat-number">40x</span>
              <span className="stat-label">More Nutrients</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Fresh</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default HeroImage; 