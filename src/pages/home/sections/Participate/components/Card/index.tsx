import { BSCIcon, ETHIcon, IconClock, PolygonIconWhite, SolanaIconWhite } from 'src/assets/icons';
import './styles.scss';
import BackgroundCard from './bg-vispx-card.png';
import { ECardType } from '../../type';

const ParticipateCard = ({ type }: { type: ECardType }) => {
  const getNetwork = (projectNetwork?: string) => {
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
    <div className={`participate-card box-shadow-${type}`}>
      <img src={BackgroundCard} alt="icon" className="banner-image-card" width={'100%'} />
      <div className="participate-card-type">{type?.toUpperCase()}</div>
      <div className="layout-project">
        <div className="content">
          <div className="flex">
            <div className="title">VispX</div>
            <img src={getNetwork()} alt="icon-chain" width={24} />
          </div>
          <div className="content-card">
            <div className="description-project">
              <span className="description-project_label">Total Raise</span>
              <span className="description-project_value">TBA</span>
            </div>
            <div className="description-project">
              <span className="description-project_label">Exchange Rate</span>
              <span className="description-project_value">TBA</span>
            </div>
            <div className="description-project">
              <span className="description-project_label">Supported</span>
              <span className="description-project_value">TBA</span>
            </div>
          </div>
          <div className="break-line" />
          <div className="footer-card">
            <div>
              <img src={IconClock} alt="icon-clock" />
              <span className="value">TBA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipateCard;
