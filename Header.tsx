import React, { useState, useEffect } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center text-xl md:text-2xl font-bold text-dark-900">
            <Zap className="h-6 w-6 md:h-7 md:w-7 text-primary-600 mr-2" />
            <span>NEXTGEN STUDIO</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`font-medium hover:text-primary-600 transition-colors ${
                      isScrolled ? 'text-dark-900' : 'text-dark-900'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="#contact" variant="primary">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-dark-900"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <Container>
            <ul className="py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block font-medium text-dark-900 hover:text-primary-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="py-4">
              <Button href="#contact" variant="primary" className="w-full">
                Get Started
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;