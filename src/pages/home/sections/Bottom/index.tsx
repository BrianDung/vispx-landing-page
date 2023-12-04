import { Col, Divider, Row } from 'antd';
import './styles.scss';
import { DiscordSocial, LogoVispx, TeleIcon, XCodeIcon } from 'src/assets/icons';

const teleLink = process.env.REACT_APP_TELEGRAM_LINK || '';
const twitterLink = process.env.REACT_APP_TWITTER_LINK || '';
const discordLink = process.env.REACT_APP_DISCORD_LINK || '';

const Info = ({
  text1,
  text2,
  text3,
  text4,
  text5,
}: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5?: string;
}) => {
  return (
    <div className="info-bottom">
      <div className="text1">{text1}</div>
      <div className="text">{text2}</div>
      <div className="text">{text3}</div>
      <div className="text">{text4}</div>
      <div className="text">{text5}</div>
    </div>
  );
};
const Bottom: React.FC = () => {
  return (
    <div className="bottom">
      <div className="layout-bottom">
        <Row className="logo-bottom">
          <Col span={10}>
            <img src={LogoVispx} alt="icon" />
          </Col>
          <Col span={14}>
            {/* <div className="flex" style={{ alignItems: 'center' }}>
              <div className="text-custom">Subscribe for our newsletter</div>
              <Input
                addonAfter={<img src={SendIcon} alt="icon" style={{ width: 40, height: 48 }} />}
                placeholder="Search for project"
                className="input-search"
              />
            </div> */}
          </Col>
        </Row>
        <Row style={{ marginTop: 60 }}>
          <Col xs={12} lg={7}>
            <Info text1="About VispX" text2="IDO Project" text3="Yeild box" text4="XBORG" />
          </Col>
          <Col xs={12} lg={7}>
            <Info text1="Help" text2="Terms & Conditions" text3="Privacy Policy" text4="FAQ" />
          </Col>
          <Col xs={12} lg={7}>
            <Info
              text1="Information"
              text2="Apply for IDO"
              text3="How to use"
              text4="About Us"
              text5="Service"
            />
          </Col>
          <Col xs={12} lg={3}>
            <div className="info-bottom">
              <div className="text1">Social media</div>
            </div>
            <div style={{ width: 120 }} className="flex justify-between">
              <a href={teleLink} target="_blank" rel="noreferrer">
                <img src={TeleIcon} alt="icon-tele" />
              </a>
              <a href={discordLink} target="_blank" rel="noreferrer">
                <img src={DiscordSocial} alt="icon-discord" />
              </a>
              <a href={twitterLink} target="_blank" rel="noreferrer">
                <img src={XCodeIcon} alt="icon-xcode" />
              </a>
            </div>
          </Col>
        </Row>
        <Divider />
      </div>
    </div>
  );
};

export default Bottom;
