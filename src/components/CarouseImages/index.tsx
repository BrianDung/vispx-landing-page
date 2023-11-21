import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const activeArrowBig = 'images/landing/next-arrow-big.svg';
const activeArrowPrevBig = 'images/landing/prev-arrow-enable.svg';

const DELAY_TIME = 15000;
const SLIDE_PER_PAGE = 3;

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={`${className}`}
      src={activeArrowBig}
      alt="prev"
      onClick={onClick}
      style={{ ...style, display: 'block', width: '28px', height: '28px', right: '-28px' }}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={`${className}`}
      src={activeArrowPrevBig}
      alt="prev"
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
        width: '28px',
        height: '28px',
        left: '-28px',
        transform: 'rotate(35deg) !important',
      }}
    />
  );
}

export default function CarouselImages({ onClickImage, mediaList }: any) {
  const [imageIdSelected, setImageIdSelected] = useState<number>(0);

  const refSlider = useRef(null);

  let idTimer: any;

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: mediaList.length > 6,
      speed: 200,
      slidesToShow: SLIDE_PER_PAGE,
      slidesToScroll: SLIDE_PER_PAGE,
      autoplay: false,
      fade: false,
      prevArrow: <SamplePrevArrow isPrev={true} />,
      nextArrow: <SampleNextArrow isNext={true} />,
    }),
    // eslint-disable-next-line
    [],
  );

  const handleSelectImage = useCallback((image: any, isUserClicking: boolean) => {
    clearTimeout(idTimer);

    const indexSlide = image?.id;

    let nextImageIndex = indexSlide === mediaList.length - 1 ? 0 : indexSlide + 1;
    if (!mediaList[nextImageIndex]?.url) {
      nextImageIndex = nextImageIndex === mediaList.length - 1 ? 0 : nextImageIndex + 1;
    }

    onClickImage(image);
    setImageIdSelected(indexSlide);

    // eslint-disable-next-line
    idTimer = setTimeout(() => {
      handleSelectImage(mediaList[nextImageIndex], false);
    }, DELAY_TIME);

    const slider = refSlider.current as never as any;
    if (!isUserClicking) {
      if (indexSlide !== 0 && mediaList.length > 6 && indexSlide % 6 === 0) {
        slider.slickNext();
      }

      if (nextImageIndex === 0) {
        setTimeout(() => {
          slider?.slickNext();
        }, DELAY_TIME);
      }
    }
  }, []);

  useEffect(() => {
    handleSelectImage(mediaList[0], false);
    return () => clearTimeout(idTimer);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={'container'} id="carousel-thumbnail">
      <Slider {...settings} ref={refSlider}>
      </Slider>
    </div>
  );
}
