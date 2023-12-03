import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import useStyles from './style';

import activeArrowBig from 'src/assets/icons/landing/next-arrow-big.svg';
import activeArrowPrevBig from 'src/assets/icons/landing/prev-arrow-enable.svg';

const DELAY_TIME = 150000;
const SLIDE_PER_PAGE = 1;

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    // <PrevArrowSidlerBanner/>
    <img
      className={`${className}`}
      src={activeArrowBig}
      alt="prev"
      onClick={onClick}
      style={{ ...style, display: 'block', width: '28px', height: '28px', right: '-35px' }}
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
        left: '-35px',
        transform: 'rotate(35deg) !important',
      }}
    />
  );
}

export default function CarouselImages({ onClickImage, mediaList: mediaListAPI, staticItem }: any) {
  const mediaList = [staticItem, ...mediaListAPI];
  const [imageIdSelected, setImageIdSelected] = useState<number>(0);

  const refSlider = useRef(null);

  let idTimer: any;

  const settings: Settings = useMemo(
    () => ({
      dots: false,
      infinite: mediaList.length > 6,
      speed: 200,
      slidesToShow: SLIDE_PER_PAGE,
      slidesToScroll: SLIDE_PER_PAGE,
      autoplay: false,
      fade: false,
      arrows: mediaList.filter((image: any) => image?.id % 2 !== 1).length > 1,
      prevArrow: <SamplePrevArrow isPrev={true} />,
      nextArrow: <SampleNextArrow isNext={true} />,
      afterChange: (index: number) => {
        const banner = mediaList.filter((image: any) => image?.id % 2 !== 1)[index];
        handleSelectImage(banner, true);
      },
    }),
    // eslint-disable-next-line
    [],
  );
  const classes = useStyles({});

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
    <div className={classes.container} id="carousel-thumbnail">
      <Slider {...settings} ref={refSlider}>
        {mediaList
          .filter((image: any) => image?.id % 2 !== 1)
          .map((image: any) => {
            let cx = classes.thumbnail;

            if (image?.id === imageIdSelected || image?.id + 1 === imageIdSelected) {
              cx += ` ${classes.highlight}`;
            }
            return (
              <div
                className="none-outline"
                key={image?.id}
                onClick={() => handleSelectImage(image, true)}
                style={{ outline: 'none', width: 50 }}
              >
                <img src={image?.thumbnail_url} alt="banner" className={cx} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}
