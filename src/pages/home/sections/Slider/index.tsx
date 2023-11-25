import { LogoVispx, Slider1Icon } from 'src/assets/icons';
import './styles.scss';
import { Col, Row } from 'antd';
import About from './components/About';
import ReactPlayer from 'react-player';
import { CircularProgress, Grid } from '@material-ui/core';

const Slider: React.FC<any> = (props: any) => {
  const { staticItem } = props;
  const renderInfor = () => {
    if (staticItem?.media_link_type === 'video') {
      return (
        <ReactPlayer
          url={staticItem?.media_link_upload}
          muted={false}
          loop={true}
          playing={true}
          volume={1}
          width="100%"
          height="100%"
          className='video-new-slider'
        />
      );
    }

    if (staticItem?.media_link_type === 'image') {
      return (
        <img
          src={staticItem?.media_link_upload || Slider1Icon}
          alt="slider1-icon"
          className="icon-slider"
        />
      );
    }

    return (
      <Grid
        style={{
          height: 700,
        }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress size={45} />
      </Grid>
    );
  };
  return (
    <div className="slider-custom">
      <div className="header layout flex justify-between pointer">
        <img src={LogoVispx} alt="vispx-logo" style={{ width: 110, height: 'auto' }} />
      </div>
      <Row className="layout">
        <Col xl={12} xxl={12} lg={12} xs={24} md={24}>
          <About staticItem={staticItem} />
        </Col>
        <Col xl={12} xxl={12} lg={12} xs={24} md={24} className="wrapper-icon-slider">
          {renderInfor()}
        </Col>
      </Row>
    </div>
  );
};

export default Slider;
