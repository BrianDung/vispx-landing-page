import { Service } from 'src/assets/icons';
import './styles.scss';

const OurService: React.FC = () => {
  return (
    <div className="ourservice-section">
      <div className="layout">
        <div className="title-1">Our Services</div>
        <div className="description">
          VispX offers extensive end to end solutions for blockchain gaming projects with its
          tailored services for project needs.
        </div>
        <img src={Service}  alt='banner'/>
      </div>
    </div>
  );
};

export default OurService;
