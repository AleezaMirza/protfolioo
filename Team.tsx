import React from 'react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { teamMembers } from '../data/content';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionTitle 
          title="Meet the Team" 
          subtitle="Creative minds behind NEXTGEN STUDIO"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold text-dark-900">{member.name}</h3>
              <p className="text-primary-600">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;