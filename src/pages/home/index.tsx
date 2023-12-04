import React from 'react';
import AboutSection from './sections/About';
import Banner from './sections/Banner';
import Bottom from './sections/Bottom';
import OurService from './sections/OurService';
import ProjectMatrix from './sections/ProjectMatrix';
import ProjectsSection from './sections/Projects';
import './styles.scss';
import ExploreApp from './sections/ExploreApp';
const HomePage: React.FC = () => {
  return (
    <div className="home-vispx">
      <Banner />
      <ExploreApp />
      <ProjectsSection />
      <ProjectMatrix />
      <AboutSection />
      <OurService />
      <Bottom />
      <div className="copy-right">©2023 VispX. All Rights Reserved.</div>
    </div>
  );
};

export default HomePage;
