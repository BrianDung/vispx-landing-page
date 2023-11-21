import './styles.scss';
import CardProject from './components/CardProject';
import {
  PolygonIconWhite,
  Project1,
  SolanaIconWhite,
  BSCIcon,
  ETHIcon,
} from 'src/assets/icons';
import { useFetch } from 'src/hooks/useFetch';

import Slider from 'react-slick';
import { get } from 'lodash';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 2048,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
      },
    },
  ],
};

const ProjectsSection: React.FC = () => {
  const { data } = useFetch(`${process.env.REACT_APP_API_ENDPOINT}/vispx-project-list`);

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

  return (
    <div className="projects-section">
      <div className="layout">
        <div className="title-1">Projects in VispX Factory</div>
        <div className="list-card">
          <Slider {...settings}>
            {get(data, 'data.data', []).map((card: any) => {
              return (
                <CardProject
                  key={card?.id}
                  networkIcon={getNetwork(card?.project_network)}
                  icon={card?.banner || Project1}
                  title={card?.project_name}
                  description={card?.description}
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
