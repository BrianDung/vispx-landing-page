import { LaunchIcon, LogoVispx, Slider1Icon } from 'src/assets/icons';
import './styles.scss';
import { Col, Popover, Row } from 'antd';
import About from './components/About';
import { useFetch } from 'src/hooks/useFetch';
const Slider: React.FC = () => {
  const { error } = useFetch(`${process.env.REACT_APP_API_ENDPOINT}/vispx-slider-list`);

  if (error) return null;

  const content = <span className='text-launch-app'>Launch app</span>;

  return (
    <div className="slider">
      <div className="header layout flex justify-between pointer">
        <img src={LogoVispx} alt="vispx-logo" />
        <Popover
          placement="leftTop"
          title={null}
          content={content}
          overlayClassName="pop-hover-icon"
        >
          <img src={LaunchIcon} alt="launch-icon" />
        </Popover>
      </div>
      <Row className="layout">
        <Col xl={12} xxl={12} lg={12} xs={24} md={24}>
          <About />
        </Col>
        <Col xl={12} xxl={12} lg={12} xs={24} md={24}>
          <img src={Slider1Icon} alt="slider1-icon" className="icon-slider" />
        </Col>
      </Row>
    </div>
  );
};

export default Slider;
