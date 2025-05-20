import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-dark-900 animate-slide-down">
              Welcome to <span className="text-primary-600">NEXTGEN STUDIO</span>
            </h1>
            
            <p className="text-lg md:text-xl text-dark-600 mb-8 max-w-lg animate-slide-down" style={{animationDelay: '0.1s'}}>
              We empower brands and individuals through high-impact visual storytelling and cutting-edge digital creativity.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-down" style={{animationDelay: '0.2s'}}>
              <Button href="#services" size="lg">
                Explore Services
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-400 rounded-full opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Creative team collaborating" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;