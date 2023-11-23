import { Tag } from 'antd';
import '../styles/card.scss';
import { ButtonLinear } from './ButtonLinear';
import { RightIcon } from 'src/assets/icons';
const CardProject: React.FC<{
  title: string;
  description: string;
  icon: string;
  networkIcon: string;
  project_network: string;
  trailer_link: string;
  pool_id: string;
}> = ({
  title,
  description,
  icon,
  networkIcon,
  project_network,
  trailer_link,
  pool_id
}: {
  title: string;
  description: string;
  icon: string;
  networkIcon: string;
  project_network: string;
  trailer_link: string;
  pool_id: string
}) => {
  const handleClickTrailer = () => {
    if (trailer_link) {
      window.open(trailer_link, '_blank');
    }
  };

  const handleClickDetail = () => {
    if(pool_id) {
      window.open(pool_id, '_blank')
    }
  }
  return (
    <div className="card-project">
      <img
        src={icon}
        alt="icon"
        className="icon"
        width={'100%'}
        style={{ borderRadius: '24px 24px 0px 0px' , maxHeight: 164 }}
      />
      <div className="layout-project">
        <div className="content">
          <div className="flex">
            <div className="title">{title}</div>
            <Tag color="rgba(31, 191, 209, 0.60)">Completed</Tag>
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
