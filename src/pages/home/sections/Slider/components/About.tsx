import { Col, Row } from 'antd';
import '../styles/about.scss';
import BigNumber from 'bignumber.js';
import { nFormatter } from 'src/helpers/formatNumber';
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
  console.log({staticItem})
  const description = `Our XPAD 1.0 is a token-less and NFT powered omni-chain launchpad, focuses on bringing
  retail investors and projects closer together with zero barrier of entry`;
  const total_raise = staticItem?.total_raise || '';
  const ave_eth = staticItem?.ave_eth || '';
  const total_project = staticItem?.total_project || '';
  const user = staticItem?.user || '';
  return (
    <div className="about-slider">
      <div className="title flex">
        {/* <div> About </div>
        <div className="relative">
          VispX
          <div className="underline-custom" />
        </div> */}
      </div>
      <div className="description">{staticItem?.description || description}</div>
      <div className="information">
        <Row className="full-width">
          <Col span={6}>
            <Information text1={`$${total_raise}`} text2="Total Raise" />
          </Col>
          <Col span={6}>
            <Information text1={ave_eth} text2="Ave ATH" />
          </Col>
          <Col span={6}>
            <Information text1={total_project ? `${total_project} +` : ''} text2="Total Projects" />
          </Col>
          <Col span={6}>
            <Information text1={user} text2="Users" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
