import { Col, Row } from 'antd';
import '../styles/about.scss';
const Information = ({ text1, text2 }: { text1: string; text2: string }) => {
  return (
    <div className="block">
      <div className="text1">{text1}</div>
      <div className="text2">{text2}</div>
    </div>
  );
};
const About: React.FC = () => {
  return (
    <div className="about-slider">
      <div className="title flex">
        <div> About </div>
        <div className="relative">
          VispX
          <div className="underline-custom" />
        </div>
      </div>
      <div className="description">
        Our XPAD 1.0 is a token-less and NFT powered omni-chain launchpad, focuses on bringing
        retail investors and projects closer together with zero barrier of entry
      </div>
      <div className="information">
        <Row className="full-width">
          <Col span={6}>
            <Information text1="$100M" text2="Total Raise" />
          </Col>
          <Col span={6}>
            <Information text1="1.23B" text2="Ave ATH" />
          </Col>
          <Col span={6}>
            <Information text1="80+" text2="Total Projects" />
          </Col>
          <Col span={6}>
            <Information text1="250M" text2="User" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
