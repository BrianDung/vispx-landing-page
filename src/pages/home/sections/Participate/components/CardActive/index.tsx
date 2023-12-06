import { Col, Row } from 'antd';
import NFT1 from './nft-1.png';
import './styles.scss';

const ParticipateCardActive = () => {
  const ImageNFT = () => {
    return (
      <div className="image-nft">
        <img src={NFT1} alt="nft-card" />
        <div className="name-nft-image">XBorg NFT</div>
      </div>
    );
  };
  return (
    <div className="participate-active-card box-shadow-active">
      <div className="title">ACTIVE</div>
      <div className="content">
        <Row gutter={[10, 12]}>
          <Col span={12}>{ImageNFT()}</Col>
          <Col span={12}>{ImageNFT()}</Col>
          <Col span={12}>{ImageNFT()}</Col>
          <Col span={12}>{ImageNFT()}</Col>
        </Row>
      </div>
    </div>
  );
};

export default ParticipateCardActive;
