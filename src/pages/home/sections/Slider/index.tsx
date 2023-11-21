import Slider from 'react-slick';

import { LaunchIcon, LogoVispx, Slider1Icon } from 'src/assets/icons';
import './styles.scss';
import { Col, Popover, Row } from 'antd';
import About from './components/About';
import { useFetch } from 'src/hooks/useFetch';
import { get } from 'lodash';
import SlideNext from 'src/assets/icons/landing/slide-next.svg';
import SlidePrevious from 'src/assets/icons/landing/slide-previous.svg';
import { useState } from 'react';

function CustomNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      alt="prev"
      src={SlideNext}
      onClick={onClick}
      style={{
        ...style,
        right: '-20px',
        top: '50%',
        width: '24px',
        height: '24px',
      }}
    />
  );
}

function CustomPrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      alt="prev"
      src={SlidePrevious}
      onClick={onClick}
      style={{
        ...style,
        left: '-35px',
        top: '50%',
        width: '24px',
        height: '24px',
      }}
    />
  );
}

const colProps = {
  xs: 24,
  md: 12
}

const Sliders: React.FC = () => {
  const { data, error } = useFetch(`${process.env.REACT_APP_API_ENDPOINT}/vispx-slider-list`);

  const [selected, setSelected] = useState<any>();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  if (error) return null;

  const handleSelected = (card: any) => {
    setSelected(card);
  };
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
        <Col {...colProps}>
          <About data={selected || get(data, 'data.data', [{}])[0]} />
        </Col>
        <Col {...colProps}>
          <img
            src={selected?.thumbnail_url || Slider1Icon}
            alt="slider1-icon"
            className="flex icon-slider"
          />
          </Col>
      </Row>
      <div className="carousal">
        <Slider {...settings}>
          {get(data, 'data.data', []).map((card: any) => {
            return (
              <div className="card" onClick={() => handleSelected(card)}>
                <img
                  className={selected?.id === card?.id ? 'active' : ''}
                  src={card?.thumbnail_url}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
