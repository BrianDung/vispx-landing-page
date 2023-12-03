import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { BSCIcon, ETHIcon, PolygonIconWhite, Project1, SolanaIconWhite } from 'src/assets/icons';
import { NextArrowSlider, PrevArrowSlider } from 'src/assets/icons/IconComponent';
import useDebounce from 'src/hooks/useDebounce';
import axios from 'src/services/axios';
import CardProject from './components/CardProject';
import FilterProject from './components/FilterProject';
import NewProject from './components/NewProject';
import './styles.scss';

function NextArrow(props: any) {
  const { className, onClick, lastPage } = props;
  return (
    <div className={className} onClick={onClick}>
      <NextArrowSlider color={lastPage ? '#59595c' : '#ffffff'} />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, onClick, currentSlide } = props;
  return (
    <div className={className} onClick={onClick}>
      <PrevArrowSlider color={currentSlide === 0 ? '#59595c' : '#ffffff'} />
    </div>
  );
}

const ProjectsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [projects, setProjects] = useState<any>([]);
  const [activeFilter, setActiveFilter] = useState<any>('');
  const [search, setSearch] = useState<any>('');
  const debounceSearch = useDebounce(search, 1000);

  const getProjects = async () => {
    try {
      const resp = (await axios.get(
        `/vispx-project-list?status=${activeFilter}&search=${search}`,
      )) as any;
      const data = _.get(resp, 'data.data.data', []) as any[];
      setProjects(data);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, debounceSearch]);

  const getNetwork = (projectNetwork: string) => {
    switch (projectNetwork) {
      case 'bsc':
        return BSCIcon;
      case 'sol':
        return SolanaIconWhite;
      case 'polygon':
        return PolygonIconWhite;
      default:
        return ETHIcon;
    }
  };

  const settings: Settings = useMemo(
    () => ({
      dots: true,
      infinite: false,
      speed: 500,
      nextArrow: <NextArrow lastPage={currentSlide === Math.floor(projects.length / 8) * 4} />,
      prevArrow: <PrevArrow currentSlide={currentSlide} />,

      afterChange: (index) => {
        console.log(index);
        setCurrentSlide(index);
      },

      responsive: [
        {
          breakpoint: 2048,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            rows: 2,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            rows: 2,
          },
        },
        {
          breakpoint: 1439,
          settings: {
            slidesToShow: 4,
            slidesPerRow: 4,
            slidesToScroll: 1,
            rows: 2,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            rows: 1,
            nextArrow: <></>,
            prevArrow: <></>,
          },
        },
      ],
    }),
    [currentSlide, projects.length],
  );

  return (
    <div className="projects-section">
      <div className="layout">
        <div className="title-1">Projects in VispX Factory</div>
        <FilterProject
          activeFilter={activeFilter}
          search={search}
          setActiveFilter={setActiveFilter}
          setSearch={setSearch}
        />
        <NewProject />
        <div className="list-card">
          <Slider {...settings}>
            {projects.map((card: any) => {
              return (
                <CardProject
                  project_status={card?.project_status}
                  pool_id={card?.pool_id}
                  key={card?.id}
                  networkIcon={getNetwork(card?.project_network)}
                  icon={card?.banner || Project1}
                  title={card?.project_name}
                  description={card?.description}
                  project_network={card?.project_network}
                  trailer_link={card?.trailer_link}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
