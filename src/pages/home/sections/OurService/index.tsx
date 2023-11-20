import { Service } from 'src/assets/icons';
import './styles.scss';
import { useState } from 'react';

const OurService: React.FC = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="ourservice-section">
      <div className="layout">
        <div className="title-1">Our Services</div>
        <div className="description">
          VispX offers extensive end to end solutions for blockchain gaming projects with its
          tailored services for project needs.
        </div>
        <div className="images">
          <img
            src={Service}
            alt="banner"
            className="pointer full-width"
            onMouseEnter={(e) => {
              console.log('move', { e });
              setIsShown(true);
            }}
            onMouseLeave={() => setIsShown(false)}
          />
          {isShown && (
            <div className="content-show">
              <div className="title-show">Capital Raise</div>
              <div className="description-show">
                Our partnership program raises capital on behalf of projects to give them a
                kickstart. Capital is raised through token and game asset sales.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurService;
