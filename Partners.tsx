import React from 'react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { partners } from '../data/content';
import { Globe, Bolt } from 'lucide-react';

const getPartnerLogo = (logoName: string) => {
  switch (logoName) {
    case 'CanvaIcon':
      return (
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="M15 9h.01" />
            <path d="M15 15h.01" />
            <path d="M9 15h.01" />
          </svg>
        </div>
      );
    case 'GlobeIcon':
      return <Globe className="w-12 h-12 text-primary-600" />;
    case 'BoltIcon':
      return <Bolt className="w-12 h-12 text-primary-600" />;
    default:
      return <Globe className="w-12 h-12 text-primary-600" />;
  }
};

const Partners: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-dark-50">
      <Container>
        <SectionTitle 
          title="Collaboration Partners" 
          subtitle="We work with industry leaders to deliver exceptional results"
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <div className="mb-4">
                {getPartnerLogo(partner.logo)}
              </div>
              <h3 className="text-xl font-semibold text-dark-900">{partner.name}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;