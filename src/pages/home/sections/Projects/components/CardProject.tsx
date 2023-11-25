import { Tag } from 'antd';
import '../styles/card.scss';
import { ButtonLinear } from './ButtonLinear';
import { RightIcon } from 'src/assets/icons';
export const STATUS_LANDING_PROJECT_AVAILABLE = {
  COMPLETED: 'Completed',
  COMING_SOON: 'Coming Soon',
  IN_PROGRESS: 'In progress',
};

const CardProject: React.FC<{
  title: string;
  description: string;
  icon: string;
  networkIcon: string;
  project_network: string;
  trailer_link: string;
  pool_id: string;
  project_status: string;
}> = ({
  title,
  description,
  icon,
  networkIcon,
  project_network,
  trailer_link,
  pool_id,
  project_status,
}: {
  title: string;
  description: string;
  icon: string;
  networkIcon: string;
  project_network: string;
  trailer_link: string;
  pool_id: string;
  project_status: string;
}) => {
  const handleClickTrailer = () => {
    if (trailer_link) {
      window.open(trailer_link, '_blank');
    }
  };

  const handleClickDetail = () => {
    if (pool_id) {
      window.open(pool_id, '_blank');
    }
  };

  

  const color = () => {
    if(project_status === STATUS_LANDING_PROJECT_AVAILABLE.IN_PROGRESS) {
      return `rgba(31, 209, 180, 0.60)`
    }
    if(project_status === STATUS_LANDING_PROJECT_AVAILABLE.COMING_SOON) {
      return `rgba(249, 25, 61, 0.60)`
    }
    return `rgba(31, 191, 209, 0.60)`
  }
  return (
    <div className="card-project">
      <img
        src={icon}
        alt="icon"
        className="icon"
        width={'100%'}
        style={{ borderRadius: '24px 24px 0px 0px', maxHeight: 164 }}
      />
      <div className="layout-project">
        <div className="content">
          <div className="flex">
            <div className="title">{title}</div>
            <Tag style={{ borderRadius: 24 , maxHeight:26 }} color={color()}>
              {project_status || 'Completed'}
            </Tag>
          </div>
          <div className="description-project">{description}</div>
          <div className="flex blc-info">
            <div style={{ marginRight: 20 }} className="text">
              Blockchain
            </div>
            <div className="flex network-info">
              <img src={networkIcon} alt="icon" style={{ marginRight: 6, objectFit: 'cover' }} />{' '}
              <span className="network-name">{project_network}</span>
            </div>
          </div>
          <div
            className="flex justify-between pointer"
            style={{ alignItems: 'center', marginTop: 42 }}
          >
            <ButtonLinear onClick={handleClickTrailer}>Trailer</ButtonLinear>
            <div onClick={handleClickDetail} className="flex" style={{ alignItems: 'center' }}>
              <div className="view-detail">View detail</div>
              <img src={RightIcon} alt="icon" style={{ width: 16, height: 16 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
