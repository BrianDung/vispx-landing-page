import AboutSection from './sections/About';
import Banner from './sections/Banner';
import Bottom from './sections/Bottom';
import OurService from './sections/OurService';
import ProjectMatrix from './sections/ProjectMatrix';
import ProjectsSection from './sections/Projects';
import './styles.scss';
const HomePage: React.FC = () => {
  return (
    <div className="home-vispx">
      <Banner />
      <ProjectMatrix />
      <AboutSection />
      <OurService />
      <ProjectsSection />
      <Bottom />
      <div className="copy-right">©2023 VispX. All Rights Reserved.</div>
    </div>
  );
};

export default HomePage;
