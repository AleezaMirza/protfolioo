import React from 'react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { services } from '../data/content';
import { Video, Code2, Palette, Share, Image, Clapperboard } from 'lucide-react';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'VideoIcon':
      return <Video className="w-12 h-12 text-primary-600" />;
    case 'Code2Icon':
      return <Code2 className="w-12 h-12 text-primary-600" />;
    case 'PaletteIcon':
      return <Palette className="w-12 h-12 text-primary-600" />;
    case 'ShareIcon':
      return <Share className="w-12 h-12 text-primary-600" />;
    case 'ImageIcon':
      return <Image className="w-12 h-12 text-primary-600" />;
    case 'ClapperboardIcon':
      return <Clapperboard className="w-12 h-12 text-primary-600" />;
    default:
      return <Palette className="w-12 h-12 text-primary-600" />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-dark-950 text-white">
      <Container>
        <SectionTitle 
          title="Our Services" 
          subtitle="We specialize in a wide range of creative services to help your brand stand out in the digital landscape."
          centered
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-primary-500 transition-colors group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {getIconComponent(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-dark-300">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;