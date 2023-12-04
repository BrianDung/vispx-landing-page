import { Row } from 'antd';
import LaunchBtnComponent from '../Slider/components/LaunchBtnComponent';
import './styles.scss';
import { useEffect, useState } from 'react';

const ExploreApp = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 500) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  return (
    <Row className="button-join-revolution">
      <div className={`fixed-explore button-launch-pad ${isScroll ? 'show' : ''}`}>
        <LaunchBtnComponent isStatic={false} title="Explore Apps" />
      </div>
    </Row>
  );
};

export default ExploreApp;
