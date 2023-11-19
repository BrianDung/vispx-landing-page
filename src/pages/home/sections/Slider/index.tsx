import { LaunchIcon, LogoVispx, Slider1Icon } from 'src/assets/icons';
import './styles.scss';
import { Col, Row } from 'antd';
import About from './components/About';
const Slider: React.FC = () => {
  return (
    <div className="slider">
      <div className="header layout flex justify-between pointer">
        <img src={LogoVispx} alt='vispx-logo'/>
        <img src={LaunchIcon} alt='launch-icon'/>
      </div>
      <Row className='layout'>
        <Col span={12}>
            <About/>
        </Col>
        <Col span={12}>
            <img src={Slider1Icon} alt='slider1-icon' className='icon-slider'/>
        </Col>
      </Row>
    </div>
  );
};

export default Slider;
