import React from 'react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { features } from '../data/content';
import { Award, Layout, Settings, HeartHandshake, Clock } from 'lucide-react';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'AwardIcon':
      return <Award className="w-10 h-10 text-primary-600" />;
    case 'LayoutIcon':
      return <Layout className="w-10 h-10 text-primary-600" />;
    case 'SettingsIcon':
      return <Settings className="w-10 h-10 text-primary-600" />;
    case 'HeartHandshakeIcon':
      return <HeartHandshake className="w-10 h-10 text-primary-600" />;
    case 'ClockIcon':
      return <Clock className="w-10 h-10 text-primary-600" />;
    default:
      return <Award className="w-10 h-10 text-primary-600" />;
  }
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-400 rounded-full opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Creative workspace" 
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
              />
            </div>
          </div>
          <div>
            <SectionTitle 
              title="Our Mission" 
              subtitle="Our mission is to amplify your brand's digital presence by delivering elegant, innovative, and results-driven design and media solutions."
            />
            <p className="text-dark-600 mb-8">
              Whether you're building your brand from scratch or looking to level up your content game, we provide the creative edge to help you stand out in a crowded digital space.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <SectionTitle 
            title="Why Choose Us" 
            subtitle="We combine strategic thinking with minimalist aesthetics to deliver stunning visuals and digital assets that captivate, engage, and convert."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="bg-white p-6 rounded-lg shadow-md border border-dark-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  {getIconComponent(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark-900">{feature.title}</h3>
                <p className="text-dark-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;