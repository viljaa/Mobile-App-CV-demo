import React from 'react';
import './ExploreContainer.css';

// Import components
import Profile from './content/Profile';
import TechSkills from './content/TechSkills';
import SoftSkills from './content/SoftSkills';
import Projects from './content/Projects';
import Contact from './content/Contact';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  return (
    <div>
      {name === 'Profile' && <Profile />}
      {name === 'Technical Skills' && <TechSkills />}
      {name === 'Soft Skills' && <SoftSkills />}
      {name === 'Projects' && <Projects />}
      {name === 'Contact Info' && <Contact />}
    </div>
  );
};

export default ExploreContainer;
