import _ from 'lodash';
import { useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import {
  BSCIcon,
  ComingSoonFilter,
  CompletedFilter,
  DiscordIconLanding,
  ETHIcon,
  IconEarth,
  InProgressFilter,
  PolygonIconWhite,
  SolanaIconWhite,
  TwitterIconLanding,
} from 'src/assets/icons';
import axios from 'src/services/axios';
import ExploreButton from '../../Slider/components/ExploreButton';
import '../styles/new-project-feature.scss';
import { SLIDER_PROJECT_STATUS } from './FilterProject';

const NewProject = () => {
  const [projects, setProjects] = useState<any>([]);

  const getProjects = async () => {
    try {
      const resp = (await axios.get(`/vispx-feature-project-list`)) as any;
      const data = _.get(resp, 'data.data.data', []) as any[];
      setProjects(data);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
  const genStatus = (projectStatus: string) => {
    switch (projectStatus) {
      case SLIDER_PROJECT_STATUS.UPCOMING:
        return ComingSoonFilter;
      case SLIDER_PROJECT_STATUS.INPROGRESS:
        return InProgressFilter;
      default:
        return CompletedFilter;
    }
  };

  return (
    <Slider {...settings}>
      {projects.map((item: any, index: number) => {
        return (
          <div key={index} className="new-project-feature">
            <div className="content">
              <div className="title" style={{ alignItems: 'center' }}>
                <span>{item.project_name || 'MEME MEME'}</span>
                <img
                  src={getNetwork(item.project_network)}
                  alt="icon"
                  width={24}
                  style={{ marginTop: 5 }}
                />
              </div>
              <div className="social-new-project">
                {item.twitter && (
                  <a href={item.twitter} target="_blank" rel="noreferrer">
                    <img src={TwitterIconLanding} alt="icon" width={20} height={20} />
                  </a>
                )}
                {item.telegram && (
                  <a href={item.telegram} target="_blank" rel="noreferrer">
                    <img
                      src={DiscordIconLanding}
                      alt="icon"
                      width={24}
                      height={24}
                      style={{ marginTop: '-2px' }}
                    />
                  </a>
                )}
                {item.website && (
                  <a href={item.website} target="_blank" rel="noreferrer">
                    <img src={IconEarth} alt="icon" width={20} height={20} />
                  </a>
                )}
              </div>
              <div className="value-new-project">
                <div className="block-value-new-project">
                  <span className="block-value">
                    {item.pre_total_raise}
                    {item.total_raise}
                  </span>
                  <span className="block-label">Total Raise</span>
                </div>
                <div className="block-value-new-project">
                  <span className="block-value">
                    {item.pre_max_allocation}
                    {item.max_allocation}
                  </span>
                  <span className="block-label">Max Allocation</span>
                </div>
              </div>
              <div className="status-project-feature">
                <span className="title-status">Status</span>
                <span className="label-status">
                  <img src={genStatus(item.project_status)} alt="icon" />
                  <span>{item.project_status}</span>
                </span>
              </div>
              <div className="button-launch-pad">
                <ExploreButton className="w-full h-50px" title="Explore" route={item.pool_id} />
              </div>
            </div>
            <div className="banner">
              <img src={item.banner} alt="banner" />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default NewProject;
