import React, { useEffect, useRef } from 'react';
import './Microgreens.css';

const Microgreens = () => {
  const microgreensRef = useRef(null);
  const catalogRef = useRef(null);
  const greenRef = useRef(null);
  const committedRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const microgreens = microgreensRef.current;
      const catalog = catalogRef.current;
      const green = greenRef.current;
      const committed = committedRef.current;
      
      if (microgreens && catalog && green && committed) {
        const rect = microgreens.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          microgreens.classList.add('animate-in');
          catalog.classList.add('animate-in');
          green.classList.add('animate-in');
          committed.classList.add('animate-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const microgreensCatalog = [
    {
      id: 1,
      name: 'Amaranth',
      color: 'Magenta',
      flavor: 'Mild beet flavor',
      nutrients: ['Vitamin C', 'Vitamin E', 'Vitamin K'],
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
      description: 'Rich in vitamins and minerals with a distinctive magenta color.'
    },
    {
      id: 2,
      name: 'Basil Green',
      color: 'Bright Green',
      flavor: 'Sweet basil aroma',
      nutrients: ['Beta-caryophyllene', 'Vitamin A', 'Vitamin C', 'Vitamin K'],
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      description: 'Aromatic and flavorful, perfect for Mediterranean dishes.'
    },
    {
      id: 3,
      name: 'Basil Red',
      color: 'Deep Red',
      flavor: 'Intense basil flavor',
      nutrients: ['Beta-caryophyllene', 'Vitamin A', 'Vitamin C', 'Vitamin K'],
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      description: 'Stunning red color with enhanced basil aroma and taste.'
    },
    {
      id: 4,
      name: 'Beet Bulls Blood',
      color: 'Deep Red',
      flavor: 'Crunchy with earthy notes',
      nutrients: ['High Fiber', 'Folate', 'Vitamins'],
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
      description: 'Crunchy texture with high fiber content and rich color.'
    },
    {
      id: 5,
      name: 'Broccoli',
      color: 'Bright Green',
      flavor: 'Mild and fresh',
      nutrients: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin E', 'Vitamin K'],
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      description: 'Nutrient-dense with a mild, fresh flavor perfect for any dish.'
    },
    {
      id: 6,
      name: 'Coriander',
      color: 'Light Green',
      flavor: 'Fresh and citrusy',
      nutrients: ['Vitamin C', 'Antioxidants', 'Essential Oils'],
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      description: 'Fresh citrus flavor with aromatic essential oils.'
    },
    {
      id: 7,
      name: 'Fenugreek',
      color: 'Yellow-Green',
      flavor: 'Slightly bitter, nutty',
      nutrients: ['Iron', 'Protein', 'Fiber'],
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
      description: 'Traditional herb with unique flavor and high nutritional value.'
    },
    {
      id: 8,
      name: 'Japanese Mustard',
      color: 'Bright Green',
      flavor: 'Spicy and pungent',
      nutrients: ['Vitamin C', 'Glucosinolates', 'Antioxidants'],
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      description: 'Spicy kick with powerful antioxidant properties.'
    },
    {
      id: 9,
      name: 'Kale',
      color: 'Deep Green',
      flavor: 'Earthy and robust',
      nutrients: ['Vitamin K', 'Vitamin C', 'Calcium', 'Iron'],
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      description: 'Robust flavor with exceptional nutritional density.'
    },
    {
      id: 10,
      name: 'Mizuna',
      color: 'Light Green',
      flavor: 'Mild and peppery',
      nutrients: ['Vitamin C', 'Vitamin A', 'Folate'],
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
      description: 'Japanese mustard green with delicate peppery notes.'
    },
    {
      id: 11,
      name: 'Micro Mix',
      color: 'Mixed Colors',
      flavor: 'Complex and balanced',
      nutrients: ['Multiple Vitamins', 'Minerals', 'Antioxidants'],
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      description: 'Perfect blend of flavors and nutrients for versatile use.'
    },
    {
      id: 12,
      name: 'Mediterranean Mix',
      color: 'Mixed Greens',
      flavor: 'Herbaceous and fresh',
      nutrients: ['Multiple Vitamins', 'Essential Oils', 'Antioxidants'],
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      description: 'Mediterranean herbs blend for authentic regional flavors.'
    }
  ];

  return (
    <section id="microgreens-page" className="microgreens-page" ref={microgreensRef}>
      <div className="container">
        <div className="microgreens-header">
          <h1 className="page-title">Microgreens, MACRO Health!</h1>
          <p className="page-subtitle">
            Microleaves, also known as microgreens are considered super foods because of their high levels of vitamins and nutrients -- much more than in mature vegetables. They are full of flavor and add aesthetic appeal to your culinary dishes . . . . and they go crunch when you eat them.
          </p>
        </div>

        <div className="microgreens-intro">
          <div className="intro-content">
            <h2>Superfood Power in Every Bite</h2>
            <p>
              Our microgreens are grown in protected greenhouses on soil-less substrate that are free of insects and soil or sand. Cut and packaged micro-leaves are clean and ready to use, delivering up to 40 times more nutrients than mature vegetables.
            </p>
            <div className="intro-stats">
              <div className="stat">
                <span className="stat-number">40x</span>
                <span className="stat-label">More Nutrients</span>
              </div>
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Varieties</span>
              </div>
              <div className="stat">
                <span className="stat-number">10 Days</span>
                <span className="stat-label">Freshness</span>
              </div>
            </div>
          </div>
        </div>

        <div className="microgreens-catalog" ref={catalogRef}>
          <h2>Our Microgreens Catalog</h2>
          <div className="catalog-grid">
            {microgreensCatalog.map((item) => (
              <div key={item.id} className="catalog-item">
                <div className="item-image">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="item-content">
                  <h3>{item.name}</h3>
                  <div className="item-details">
                    <span className="color-tag">{item.color}</span>
                    <span className="flavor-tag">{item.flavor}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                  <div className="nutrients-section">
                    <h4>Key Nutrients:</h4>
                    <div className="nutrients-list">
                      {item.nutrients.map((nutrient, index) => (
                        <span key={index} className="nutrient-tag">{nutrient}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="item-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="sustainability-section">
          <div className="green-section" ref={greenRef}>
            <h2>We are GREEN</h2>
            <div className="green-content">
              <div className="green-item">
                <div className="green-icon">🌱</div>
                <h3>Soil-less Cultivation</h3>
                <p>Protected greenhouses with soil-less substrate, free of insects and soil contamination.</p>
              </div>
              <div className="green-item">
                <div className="green-icon">♻️</div>
                <h3>Clean Packaging</h3>
                <p>Cut and cleaned microgreens ready to use with zero preparation required.</p>
              </div>
              <div className="green-item">
                <div className="green-icon">🌍</div>
                <h3>Food Safety</h3>
                <p>Advanced growing methods ensure maximum safety and quality standards.</p>
              </div>
            </div>
          </div>

          <div className="committed-section" ref={committedRef}>
            <h2>We are COMMITTED</h2>
            <div className="committed-content">
              <div className="committed-item">
                <div className="committed-icon">🚫</div>
                <h3>Pesticide-Free</h3>
                <p>No pesticides or harmful chemicals used in our growing process.</p>
              </div>
              <div className="committed-item">
                <div className="committed-icon">💧</div>
                <h3>No Groundwater Pollution</h3>
                <p>Our hydroponic systems prevent any groundwater contamination.</p>
              </div>
              <div className="committed-item">
                <div className="committed-icon">🌱</div>
                <h3>Low Carbon Footprint</h3>
                <p>Sustainable practices that minimize environmental impact.</p>
              </div>
              <div className="committed-item">
                <div className="committed-icon">📦</div>
                <h3>Reduced Packaging Waste</h3>
                <p>Eco-friendly packaging with minimal waste generation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="packaging-section">
          <h2>Freshness & Packaging</h2>
          <div className="packaging-content">
            <div className="packaging-info">
              <h3>Ready to Use</h3>
              <p>Each microgreen comes cut and cleaned, requiring zero preparation. Simply open and enjoy!</p>
            </div>
            <div className="packaging-info">
              <h3>Extended Freshness</h3>
              <p>Resealable clamshell containers keep your microgreens fresh for up to 10 days when unopened.</p>
            </div>
            <div className="packaging-info">
              <h3>Quality Assured</h3>
              <p>Every batch is tested for quality, safety, and nutritional content before packaging.</p>
            </div>
          </div>
        </div>

        <div className="microgreens-cta">
          <div className="cta-content">
            <h2>Experience the Microgreens Difference</h2>
            <p>Join thousands of customers who have discovered the incredible taste and nutritional benefits of our fresh microgreens.</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                <span>Order Now</span>
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

export default Microgreens; 