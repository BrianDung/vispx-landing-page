import { Col, Row } from 'antd';
import ParticipateCard from './components/Card';
import ParticipateCollapse from './components/Collapse';
import './styles.scss';
import { ECardType } from './type';
import ParticipateCardActive from './components/CardActive';

const Participate = () => {
  return (
    <div className="participate-main">
      <div className="title-section">How to Participate?</div>
      <div className="content-section">
        <Row gutter={100}>
          <Col lg={17} sm={24} xs={24}>
            <ParticipateCollapse />
          </Col>
          <Col lg={7} sm={24} xs={24} className="right-participate">
            <ParticipateCard type={ECardType.XBORG} />
          </Col>
        </Row>
        {/* <ParticipateCard type={ECardType.OPEN} />
        <ParticipateCard type={ECardType.PARTNER} />
        <ParticipateCard type={ECardType.ACTIVE} /> */}
        <ParticipateCardActive />
      </div>
    </div>
  );
};

export default Participate;
