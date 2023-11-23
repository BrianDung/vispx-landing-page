import { Col, Row } from 'antd';
import './styles.scss';
import Card from './components/Card';
import { Icon1, Icon2, Icon3 } from 'src/assets/icons';

const colProps = {
  xs: 24,
  md: 8
}

const AboutSection: React.FC = () => {
  return (
    <div className="about-section">
      <div className="layout">
        <div className="title-1">About Investment Pool</div>
        <div className="description">
          VispX is a “NO TOKEN” Protocol launchpad allowing investors to directly participate in the
          pool of their choice with ZERO barrier of entry
        </div>
        <div className="list-card">
          <Row gutter={[16, 16]}>
            <Col {...colProps}>
              <Card
                icon={Icon1}
                title="VispX Genesis NFT Pool"
                description="VispX has a Genesis Collection of 2,500 NFT holders, ready to invest in your project. XPAD is specifically designed to give exclusive access to our NFT holders amongst some of the biggest utilities in launchpad arena."
              />
            </Col>
            <Col {...colProps}>
              <Card
                icon={Icon2}
                title="Partner Pool"
                description="VispX exclusively partners with NFT projects and allowing partnered project NFT holders to participate in all IDO token offerings in a dedicated executive lounge pool customized at VispX launchpad."
              />
            </Col>
            <Col {...colProps}>
              <Card
                icon={Icon3}
                title="Open Pool"
                description="VispX is the first-ever launchpad to allow direct participation in IDOs with ZERO barrier of entry. Within 4 simple clicks, retail investors can invest into your projects IDO"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
