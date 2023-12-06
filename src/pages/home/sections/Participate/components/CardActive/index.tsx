import './styles.scss';

const ParticipateCardActive = ({ data }: any) => {
  // const ImageNFT = () => {
  //   return (
  //     <div className="image-nft">
  //       <img src={NFT1} alt="nft-card" />
  //       <div className="name-nft-image">XBorg NFT</div>
  //     </div>
  //   );
  // };
  return (
    <div className="participate-active-card box-shadow-active">
      {/* <div className="title">ACTIVE</div>
      <div className="content">
        <Row gutter={[10, 12]}>
          <Col span={12}>{ImageNFT()}</Col>
          <Col span={12}>{ImageNFT()}</Col>
          <Col span={12}>{ImageNFT()}</Col>
          <Col span={12}>{ImageNFT()}</Col>
        </Row>
      </div> */}
      <img src={data?.link_image} alt="card" className="card-image" />
    </div>
  );
};

export default ParticipateCardActive;
