import { useRef } from 'react';
import { Carousel, CarouselProps } from 'antd';
import { NextIcon, PrevIcon } from 'src/assets/icons';
import './styles.scss';

interface Props extends CarouselProps {
  className?: string;
  children: React.ReactNode;
  onSlideChange: (currentSlide: number) => void;
}

const VoteeSlider = ({ children, className = '', onSlideChange, ...props }: Props) => {
  const slider = useRef(null);

  return (
    <div className={`default-slider ${className}`}>
      <div className="slick-btn prev-slick" onClick={() => (slider.current as any).prev()}>
        <PrevIcon />
      </div>
      <Carousel {...props} ref={slider} afterChange={onSlideChange} dots={false}>
        {children}
      </Carousel>
      <div className="slick-btn next-slick" onClick={() => (slider.current as any).next()}>
        <NextIcon />
      </div>
    </div>
  );
};

export default VoteeSlider;
