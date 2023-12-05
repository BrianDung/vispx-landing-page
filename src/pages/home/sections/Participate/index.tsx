import { Col, Row } from 'antd';
import ParticipateCard from './components/Card';
import ParticipateCollapse from './components/Collapse';
import './styles.scss';
import { ECardType } from './type';

const Participate = () => {
  return (
    <div className="participate-main">
      <div className="title-section">How to Participate?</div>
      <div className="content-section">
        <Row gutter={100}>
          <Col span={16}>
            <ParticipateCollapse />
          </Col>
          <Col span={8}>
            <ParticipateCard type={ECardType.XBORG} />
          </Col>
        </Row>

        {/* <ParticipateCard type={ECardType.OPEN} />
        <ParticipateCard type={ECardType.PARTNER} />
        <ParticipateCard type={ECardType.ACTIVE} /> */}
      </div>
    </div>
  );
};

export default Participate;
