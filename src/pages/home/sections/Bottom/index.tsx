import { Col, Input, Row } from 'antd';
import './styles.scss';
import { LogoVispx, SendIcon } from 'src/assets/icons';
const Info = ({
  text1,
  text2,
  text3,
  text4,
}: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="info-bottom">
      <div className="text1">{text1}</div>
      <div className="text">{text2}</div>
      <div className="text">{text3}</div>
      <div className="text">{text4}</div>
    </div>
  );
};
const Bottom: React.FC = () => {
  return (
    <div className="bottom">
      <div className="layout-bottom">
        <Row>
          <Col span={10}>
            <img src={LogoVispx} />
          </Col>
          <Col span={14}>
            <div className="flex" style={{ alignItems: 'center' }}>
              <div className="text-custom">Subscribe for our newsletter</div>
              <Input
                addonAfter={<img src={SendIcon} alt="icon" style={{ width: 40, height: 48 }} />}
                placeholder="Search for project"
                className="input-search"
              />
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: 60 }}>
          <Col span={6}>
            <Info text1="About VispX" text2="IDO Project" text3="Yeild box" text4="XBORG" />
          </Col>
          <Col span={6}>
            <Info text1="Help" text2="Terms & Conditions" text3="Privacy Policy" text4="FAQ" />
          </Col>
          <Col span={6}>
            <Info text1="Information" text2="Apply for IDO" text3="How to use" text4="About Us" />
          </Col>
          <Col span={6}>
            <Info text1="Social media" text2="Service" text3="How to use" text4="About Us" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Bottom;
