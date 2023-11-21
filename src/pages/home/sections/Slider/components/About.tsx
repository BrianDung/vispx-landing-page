import { Col, Row } from 'antd';
import '../styles/about.scss';
import { nFormatter } from 'src/helpers/formatNumber';
const Information = ({ text1, text2 }: { text1: string; text2: string }) => {
  return (
    <div className="block">
      <div className="text1">{text1}</div>
      <div className="text2">{text2}</div>
    </div>
  );
};
const About = ({ data }: { data: any }) => {
  return (
    <div className="about-slider">
      <div className="title flex">
        <div> About </div>
        <div className="relative" style={{whiteSpace: "nowrap"}}>
          VISPX
          <div className="underline-custom" />
        </div>
      </div>
      <div className="description">{data?.description}</div>
      <div className="information">
        <Row className="full-width">
          <Col span={6}>
            <Information text1={`$${nFormatter(data?.total_raise || 0, 2)}`} text2="Total Raise" />
          </Col>
          <Col span={6}>
            <Information text1={`${nFormatter(data?.ave_eth || 0, 2)}`} text2="Ave ATH" />
          </Col>
          <Col span={6}>
            <Information text1={`${data?.total_project || 0}`} text2="Total Projects" />
          </Col>
          <Col span={6}>
            <Information text1={`${nFormatter(data?.user || 0, 2)}`} text2="User" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
