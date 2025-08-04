import React, { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
  const featuresRef = useRef(null);
  const cardsRef = useRef(null);
  const greenSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const features = featuresRef.current;
      const cards = cardsRef.current;
      const greenSection = greenSectionRef.current;
      
      if (features && cards && greenSection) {
        const rect = features.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          features.classList.add('animate-in');
          cards.classList.add('animate-in');
          greenSection.classList.add('animate-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const commitments = [
    {
      title: 'Pesticide-Free Growing',
      description: 'We use only pesticide-free growing methods.',
      icon: '🌱'
    },
    {
      title: 'No Groundwater Pollution',
      description: 'There is no groundwater pollution during our growing cycles.',
      icon: '💧'
    },
    {
      title: 'Lower Carbon Footprint',
      description: 'We have a significantly lower carbon footprint compared to living microgreens.',
      icon: '🌍'
    },
    {
      title: 'Less Packaging Waste',
      description: 'We use substantially less packaging waste and achieve more product per volume.',
      icon: '♻️'
    },
    {
      title: 'UN Goals Support',
      description: 'We proudly support the United Nations Sustainable Development Goals.',
      icon: '🏛️'
    },
    {
      title: 'Ready to Use',
      description: 'MicroLeaves microgreens are delivered as fresh as the minute they were harvested: clean, cut and ready to use, no preparations required.',
      icon: '✨'
    }
  ];

  return (
    <section id="features" className="features" ref={featuresRef}>
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">We are COMMITTED</h2>
          <p className="section-subtitle">
            Our commitment to sustainable, healthy, and environmentally friendly microgreen production.
          </p>
        </div>
        
        <div className="features-grid" ref={cardsRef}>
          {commitments.map((commitment, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{commitment.icon}</div>
              <h3 className="feature-title">{commitment.title}</h3>
              <p className="feature-description">{commitment.description}</p>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>
        
        <div className="green-section" ref={greenSectionRef}>
          <div className="green-content">
            <h2 className="green-title">We are GREEN</h2>
            <p className="green-description">
              Our microgreens are grown in protected greenhouses on soil-less substrate that are free of insects and soil or sand. Cut and packaged micro-leaves are clean and ready to use.
            </p>
            <div className="green-badge">
              <span className="badge-icon">🌿</span>
              <span className="badge-text">Sustainable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 