import React, { useState } from 'react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionTitle 
              title="Let's Create Something Stunning Together" 
              subtitle="Whether you're a startup, influencer, brand, or business, NEXTGEN STUDIO is here to help you shine online. Get in touch to discuss your next project!"
              light
            />
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary-400 mr-3" />
                <a href="mailto:nextgenstudiosocial@gmail.com" className="text-white hover:text-primary-300 transition-colors">
                  nextgenstudiosocial@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 text-primary-400 mr-3" />
                <a href="https://linkedin.com/in/aleeza-mirza" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-300 transition-colors">
                  Aleeza Mirza
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-dark-900 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-dark-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-dark-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-dark-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full flex justify-center items-center">
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;