import { LogoVispx, Slider1Icon } from 'src/assets/icons';
import './styles.scss';
import { Col, Row } from 'antd';
import About from './components/About';

const Slider: React.FC = () => {
  return (
    <div className="slider-custom">
      <div className="header layout flex justify-between pointer">
        <img src={LogoVispx} alt="vispx-logo" style={{ width: 110, height: 'auto' }} />
      </div>
      <Row className="layout">
        <Col xl={12} xxl={12} lg={12} xs={24} md={24}>
          <About />
        </Col>
        <Col xl={12} xxl={12} lg={12} xs={24} md={24} className='wrapper-icon-slider'>
          <img src={Slider1Icon} alt="slider1-icon" className="icon-slider" />
        </Col>
      </Row>
    </div>
  );
};

export default Slider;
