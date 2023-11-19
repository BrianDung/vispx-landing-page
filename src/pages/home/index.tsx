import AboutSection from './sections/About';
import OurService from './sections/OurService';
import ProjectMatrix from './sections/ProjectMatrix';
import ProjectsSection from './sections/Projects';
import Slider from './sections/Slider';
import './styles.scss';
const HomePage: React.FC = () => {
  return (
    <div className="home-vispx">
      <Slider />
      <ProjectMatrix/>
      <AboutSection/>
      <OurService/>
      <ProjectsSection/>
    </div>
  );
};

export default HomePage;
