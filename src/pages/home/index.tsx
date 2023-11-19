import ProjectMatrix from './sections/ProjectMatrix';
import Slider from './sections/Slider';
import './styles.scss';
const HomePage: React.FC = () => {
  return (
    <div className="home-vispx">
      <Slider />
      <ProjectMatrix/>
    </div>
  );
};

export default HomePage;
