import React, { useEffect, useRef } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const galleryRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const gallery = galleryRef.current;
      const images = imagesRef.current;
      
      if (gallery && images) {
        const rect = gallery.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          gallery.classList.add('animate-in');
          images.classList.add('animate-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
      alt: 'Fresh Microgreens Harvest',
      title: 'Fresh Harvest',
      category: 'Growing Process',
      delay: 0
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      alt: 'Microgreens Growing',
      title: 'Growing Process',
      category: 'Behind the Scenes',
      delay: 0.2
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      alt: 'Quality Control',
      title: 'Quality Control',
      category: 'Quality Assurance',
      delay: 0.4
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
      alt: 'Sustainable Farming',
      title: 'Sustainable',
      category: 'Sustainability',
      delay: 0.6
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      alt: 'Healthy Microgreens',
      title: 'Healthy Greens',
      category: 'Nutrition',
      delay: 0.8
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      alt: 'Fresh Microgreens',
      title: 'Fresh & Clean',
      category: 'Quality',
      delay: 1.0
    }
  ];

  return (
    <section className="image-gallery" ref={galleryRef}>
      <div className="container">
        <div className="gallery-header">
          <h2>Our Growing Process</h2>
          <p>See how we grow the freshest microgreens with care and precision</p>
        </div>
        
        <div className="gallery-grid" ref={imagesRef}>
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              style={{ animationDelay: `${image.delay}s` }}
            >
              <div className="image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>{image.title}</h3>
                    <span className="category">{image.category}</span>
                  </div>
                </div>
                <div className="image-hover-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery; 