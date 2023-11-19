import { Tag } from 'antd';
import '../styles/card.scss';
import { ButtonLinear } from './ButtonLinear';
import { RightIcon } from 'src/assets/icons';
const CardProject: React.FC<{
  title: string;
  description: string;
  icon: string;
  networkIcon: string;
}> = ({
  title,
  description,
  icon,
  networkIcon,
}: {
  title: string;
  description: string;
  icon: string;
  networkIcon: string;
}) => {
  return (
    <div className="card-project">
      <div className="layout-project">
        <img src={icon} alt="icon" className="icon" />
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
              <img src={networkIcon} alt="icon" style={{ marginRight: 6 }} />{' '}
              <span className="network-name">BSC</span>
            </div>
          </div>
          <div
            className="flex justify-between pointer"
            style={{ alignItems: 'center', marginTop: 42 }}
          >
            <ButtonLinear>Trailer</ButtonLinear>
            <div className="flex" style={{ alignItems: 'center' }}>
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
