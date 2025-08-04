import React, { useEffect, useRef } from 'react';
import './Products.css';

const Products = () => {
  const productsRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const products = productsRef.current;
      const cards = cardsRef.current;
      
      if (products && cards) {
        const rect = products.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          products.classList.add('animate-in');
          cards.classList.add('animate-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      name: 'Broccoli',
      description: 'Rich in sulforaphane, known for its cancer-fighting properties',
      icon: '🥦',
      color: 'var(--primary-green)'
    },
    {
      name: 'Radish',
      description: 'Spicy and crisp, packed with vitamin C and antioxidants',
      icon: '🌶️',
      color: 'var(--primary-pink)'
    },
    {
      name: 'Sunflower',
      description: 'Nutty flavor with high protein and vitamin E content',
      icon: '🌻',
      color: 'var(--primary-purple)'
    },
    {
      name: 'Pea',
      description: 'Sweet and tender, excellent source of plant protein',
      icon: '🫛',
      color: 'var(--primary-green)'
    },
    {
      name: 'Amaranth',
      description: 'Ancient grain microgreen with complete protein profile',
      icon: '🌾',
      color: 'var(--primary-pink)'
    },
    {
      name: 'Kale',
      description: 'Nutrient-dense with high levels of vitamins K and C',
      icon: '🥬',
      color: 'var(--primary-purple)'
    }
  ];

  return (
    <section id="products" className="products" ref={productsRef}>
      <div className="container">
        <div className="products-header">
          <h2 className="section-title">Our Microgreens</h2>
          <p className="section-subtitle">
            We grow and market over 30 types of tasty, vitamin-packed microgreens. Check them out.
          </p>
        </div>
        
        <div className="products-grid" ref={cardsRef}>
          {products.map((product, index) => (
            <div 
              key={product.name} 
              className="product-card"
              style={{ '--accent-color': product.color }}
            >
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-hover-effect"></div>
            </div>
          ))}
        </div>
        
        <div className="products-cta">
          <a href="#contact" className="btn btn-primary">
            <span>Where to Buy</span>
            <div className="btn-hover-effect"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products; 