import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Microgreens from './components/Microgreens';
import AboutPage from './components/AboutPage';
import Media from './components/Media';
import ImageGallery from './components/ImageGallery';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'microgreens':
        return <Microgreens />;
      case 'about':
        return <AboutPage />;
      case 'media':
        return <Media />;
      default:
        return (
          <>
            <Hero />
            <About />
            <ImageGallery />
            <Products />
            <Features />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App; 