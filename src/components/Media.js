import React, { useEffect, useRef } from 'react';
import './Media.css';

const Media = () => {
  const mediaRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const media = mediaRef.current;
      const gallery = galleryRef.current;
      
      if (media && gallery) {
        const rect = media.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          media.classList.add('animate-in');
          gallery.classList.add('animate-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mediaItems = [
    {
      type: 'image',
      title: 'Fresh Microgreens Harvest',
      description: 'Our daily harvest of fresh, nutritious microgreens ready for delivery.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
      category: 'Growing Process'
    },
    {
      type: 'video',
      title: 'Growing Process Video',
      description: 'See how we grow our microgreens from seed to harvest.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      category: 'Behind the Scenes'
    },
    {
      type: 'image',
      title: 'Quality Control',
      description: 'Every batch is carefully inspected for quality and safety.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      category: 'Quality Assurance'
    },
    {
      type: 'video',
      title: 'Customer Testimonials',
      description: 'Hear from our satisfied customers about their experience.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
      category: 'Customer Stories'
    },
    {
      type: 'image',
      title: 'Sustainable Farming',
      description: 'Our commitment to sustainable and eco-friendly farming practices.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      category: 'Sustainability'
    },
    {
      type: 'video',
      title: 'Cooking with Microgreens',
      description: 'Learn creative ways to incorporate microgreens into your meals.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      category: 'Culinary'
    }
  ];

  const pressReleases = [
    {
      title: 'My Super Greens Expands Operations',
      date: '2024-01-15',
      excerpt: 'We are excited to announce the expansion of our microgreens operations to serve more customers across India.',
      category: 'Company News'
    },
    {
      title: 'New Partnership with Local Restaurants',
      date: '2024-01-10',
      excerpt: 'My Super Greens partners with leading restaurants to provide fresh microgreens for their culinary creations.',
      category: 'Partnerships'
    },
    {
      title: 'Sustainability Award Recognition',
      date: '2024-01-05',
      excerpt: 'Our sustainable farming practices have been recognized with the Green Innovation Award.',
      category: 'Awards'
    }
  ];

  return (
    <section id="media" className="media-page" ref={mediaRef}>
      <div className="container">
        <div className="media-header">
          <h1 className="page-title">Media & Press</h1>
          <p className="page-subtitle">
            Discover our story through images, videos, and press coverage. See how we're revolutionizing healthy eating with microgreens.
          </p>
        </div>

        <div className="media-gallery" ref={galleryRef}>
          <h2>Gallery & Videos</h2>
          <div className="gallery-grid">
            {mediaItems.map((item, index) => (
              <div key={index} className="media-item">
                <div className="media-preview">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="media-overlay">
                    <span className="media-type">{item.type}</span>
                  </div>
                </div>
                <div className="media-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="media-category">{item.category}</span>
                </div>
                <div className="media-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="press-section">
          <h2>Press Releases</h2>
          <div className="press-grid">
            {pressReleases.map((release, index) => (
              <div key={index} className="press-item">
                <div className="press-header">
                  <span className="press-category">{release.category}</span>
                  <span className="press-date">{release.date}</span>
                </div>
                <h3>{release.title}</h3>
                <p>{release.excerpt}</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            ))}
          </div>
        </div>

        <div className="social-media">
          <h2>Follow Us</h2>
          <p>Stay updated with our latest news, recipes, and microgreens tips on social media.</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <span className="social-icon">📘</span>
              <span>Facebook</span>
            </a>
            <a href="#" className="social-link">
              <span className="social-icon">📷</span>
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link">
              <span className="social-icon">🐦</span>
              <span>Twitter</span>
            </a>
            <a href="#" className="social-link">
              <span className="social-icon">💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="media-cta">
          <div className="cta-content">
            <h2>Get in Touch</h2>
            <p>Interested in featuring My Super Greens in your publication or media outlet? We'd love to hear from you.</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                <span>Contact Press</span>
                <div className="btn-hover-effect"></div>
              </a>
              <a href="#about" className="btn btn-secondary">
                <span>Learn More</span>
                <div className="btn-hover-effect"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media; 