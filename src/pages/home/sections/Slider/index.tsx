import { Col, Row } from 'antd';
import ReactPlayer from 'react-player/lazy';
import { LogoVispx, Slider1Icon } from 'src/assets/icons';
import About from './components/About';
import './styles.scss';
import { CircularProgress, Grid } from '@material-ui/core';
import LaunchBtnComponent from './components/LaunchBtnComponent';

const Slider: React.FC<any> = (props: any) => {
  const { staticItem } = props;
  const renderInfor = () => {
    console.log({ src: staticItem?.media_link_upload });
    if (staticItem?.media_link_type === 'video') {
      return (
        <ReactPlayer
          url={staticItem?.media_link_upload}
          muted={true}
          loop={true}
          playing={true}
          volume={1}
          width="100%"
          height="100%"
          className="video-new-slider"
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
      <div className="header flex justify-between pointer">
        <img src={LogoVispx} alt="vispx-logo" style={{ width: 110, height: 'auto' }} />
      </div>
      <Row className="layout">
        <Col xl={12} xxl={12} lg={12} xs={24} md={24}>
          <About staticItem={staticItem} />
        </Col>
        <Col xl={12} xxl={12} lg={12} xs={24} md={24} className="wrapper-icon-slider">
          {renderInfor()}
        </Col>
        <Col className="button-join-revolution">
          <div className="button-launch-pad">
            <LaunchBtnComponent isStatic={false} title="Explore Apps" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Slider;
