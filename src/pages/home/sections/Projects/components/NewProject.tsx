import { BSCIcon } from 'src/assets/icons';
import '../styles/new-project-feature.scss';

const NewProject = () => {
  return (
    <div className="new-project-feature">
      <div className="content">
        <div className="title">
          <span>MEME FIGHTER</span>
          <img src={BSCIcon} alt="icon" />
        </div>
      </div>
      <div className="banner"></div>
    </div>
  );
};

export default NewProject;
