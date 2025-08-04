import React, { useEffect, useRef } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const aboutRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const about = aboutRef.current;
      const story = storyRef.current;
      const values = valuesRef.current;
      
      if (about && story && values) {
        const rect = about.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          about.classList.add('animate-in');
          story.classList.add('animate-in');
          values.classList.add('animate-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companyValues = [
    {
      title: 'Sustainability',
      description: 'We are committed to sustainable farming practices that protect our environment for future generations.',
      icon: '🌱',
      color: 'var(--primary-green)'
    },
    {
      title: 'Quality',
      description: 'Every microgreen is grown with care and attention to ensure the highest nutritional value and taste.',
      icon: '⭐',
      color: 'var(--primary-pink)'
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate our growing methods to produce the best microgreens possible.',
      icon: '💡',
      color: 'var(--primary-purple)'
    },
    {
      title: 'Community',
      description: 'We support local communities and contribute to food security through our sustainable practices.',
      icon: '🤝',
      color: 'var(--primary-green)'
    }
  ];

  const teamMembers = [
    {
      name: 'Our Growing Team',
      role: 'Expert Farmers',
      description: 'Our experienced team of farmers and agricultural experts ensure that every microgreen is grown to perfection.',
      image: '👨‍🌾'
    },
    {
      name: 'Quality Control',
      role: 'Food Safety Experts',
      description: 'Our quality control team ensures that all microgreens meet the highest safety and quality standards.',
      image: '🔬'
    },
    {
      name: 'Customer Support',
      role: 'Dedicated Team',
      description: 'Our customer support team is here to help you with any questions about our microgreens.',
      image: '📞'
    }
  ];

  return (
    <section id="about-page" className="about-page" ref={aboutRef}>
      <div className="container">
        <div className="about-header">
          <h1 className="page-title">About My Super Greens</h1>
          <p className="page-subtitle">
            We are passionate about bringing you the freshest, most nutritious microgreens while protecting our environment and supporting our community.
          </p>
        </div>

        <div className="company-story" ref={storyRef}>
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              My Super Greens was founded with a simple mission: to provide the highest quality microgreens while promoting sustainable agriculture and healthy living. We started as a small family operation and have grown into a trusted supplier of premium microgreens across India.
            </p>
            <p>
              Our journey began when we discovered the incredible nutritional benefits of microgreens and their potential to revolutionize healthy eating. We realized that these tiny plants pack a powerful nutritional punch, containing up to 40 times more nutrients than their mature counterparts.
            </p>
            <p>
              Today, we grow over 30 varieties of microgreens in our state-of-the-art facilities, using innovative hydroponic and soil-less growing methods that ensure maximum nutrition and minimal environmental impact.
            </p>
          </div>
          <div className="story-image">
            <div className="image-placeholder">
              <span className="placeholder-icon">🏭</span>
              <p>Our Growing Facility</p>
            </div>
          </div>
        </div>

        <div className="company-values" ref={valuesRef}>
          <h2>Our Values</h2>
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div key={index} className="value-card" style={{ '--accent-color': value.color }}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className="value-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="growing-process">
          <h2>Our Growing Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Seed Selection</h3>
              <p>We carefully select the highest quality, non-GMO seeds from trusted suppliers.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Controlled Environment</h3>
              <p>Our microgreens are grown in climate-controlled facilities with optimal lighting and humidity.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Nutrient-Rich Growing</h3>
              <p>We use specially formulated nutrient solutions to ensure maximum growth and nutrition.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Quality Control</h3>
              <p>Every batch is tested for quality, safety, and nutritional content before harvest.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Fresh Harvest</h3>
              <p>Microgreens are harvested at peak nutrition and delivered fresh to our customers.</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">{member.image}</div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications">
          <h2>Certifications & Standards</h2>
          <div className="cert-grid">
            <div className="cert-item">
              <div className="cert-icon">🌿</div>
              <h3>Organic Practices</h3>
              <p>We follow organic growing practices and use only natural pest control methods.</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">♻️</div>
              <h3>Sustainable</h3>
              <p>Our growing methods use 90% less water than traditional farming.</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🏆</div>
              <h3>Quality Assured</h3>
              <p>All our products meet the highest food safety and quality standards.</p>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <div className="cta-content">
            <h2>Join the Microgreens Revolution</h2>
            <p>Experience the incredible taste and nutritional benefits of our fresh microgreens.</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                <span>Contact Us</span>
                <div className="btn-hover-effect"></div>
              </a>
              <a href="#microgreens" className="btn btn-secondary">
                <span>Our Products</span>
                <div className="btn-hover-effect"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage; 