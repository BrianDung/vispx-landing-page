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

const About: React.FC<any> = (props: any) => {
  const { staticItem } = props;
  const description = `Our XPAD 1.0 is a token-less and NFT powered omni-chain launchpad, focuses on bringing
  retail investors and projects closer together with zero barrier of entry`;
  const total_raise = staticItem?.total_raise || '';
  const ave_eth = staticItem?.ave_eth || '';
  const total_project = staticItem?.total_project || '';
  const user = staticItem?.user || '';
  return (
    <div className="about-slider">
      <div className="title flex">{staticItem.project_name}</div>
      <div className="description">{staticItem?.description || description}</div>
      {/* <div className="button-launch-pad">
        <LaunchBtnComponent isStatic={false} />
      </div> */}
      <div className="information">
        <Row className="full-width" gutter={[20, 20]}>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Information text1={`$${total_raise}`} text2="Total Raise" />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Information text1={ave_eth} text2="Ave ATH" />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Information text1={total_project ? `${total_project}+` : ''} text2="Total Projects" />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Information text1={user ? `${user}+` : ''} text2="Users" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
