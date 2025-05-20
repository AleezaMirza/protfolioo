import React from 'react';
import Container from './ui/Container';
import { Zap, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-dark-900 text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center text-xl font-bold">
              <Zap className="h-6 w-6 text-primary-500 mr-2" />
              <span>NEXTGEN STUDIO</span>
            </a>
            <p className="mt-2 text-dark-400 max-w-md">
              Empowering brands and individuals through high-impact visual storytelling and cutting-edge digital creativity.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-dark-400 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-dark-400 hover:text-white transition-colors">Services</a>
            <a href="#team" className="text-dark-400 hover:text-white transition-colors">Team</a>
            <a href="#contact" className="text-dark-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-dark-800 hover:bg-dark-700 text-white p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-dark-800 mt-8 pt-8 text-center text-dark-400">
          <p>&copy; {new Date().getFullYear()} NEXTGEN STUDIO. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;