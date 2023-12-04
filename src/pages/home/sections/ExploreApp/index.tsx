import { Row } from 'antd';
import LaunchBtnComponent from '../Slider/components/LaunchBtnComponent';
import './styles.scss';

const ExploreApp = () => {
  return (
    <Row className="button-join-revolution">
      <div className="button-launch-pad">
        <LaunchBtnComponent isStatic={false} title="Explore Apps" />
      </div>
    </Row>
  );
};

export default ExploreApp;
