import { Col, Row } from 'antd';
import './styles.scss';
import CardProject from './components/CardProject';
import {
  BscIconWhite,
  Icon1,
  Icon2,
  Icon3,
  PolygonIconWhite,
  Project1,
  SolanaIconWhite,
} from 'src/assets/icons';

const ProjectsSection: React.FC = () => {
  return (
    <div className="projects-section">
      <div className="layout">
        <div className="title-1">Projects in VispX Factory</div>
        <div className="list-card">
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <CardProject
                networkIcon={BscIconWhite}
                icon={Project1}
                title="Chirpley"
                description="Chirpley is the world’s first automated, peer-to-peer, all in one influencer marketplace specifically focused on nano and micro influencers. Chirpley will provide marketers with the…."
              />
            </Col>
            <Col span={6}>
              <CardProject
                networkIcon={BscIconWhite}
                icon={Project1}
                title="Chirpley"
                description="Chirpley is the world’s first automated, peer-to-peer, all in one influencer marketplace specifically focused on nano and micro influencers. Chirpley will provide marketers with the…."
              />
            </Col>
            <Col span={6}>
              <CardProject
                networkIcon={BscIconWhite}
                icon={Project1}
                title="Chirpley"
                description="Chirpley is the world’s first automated, peer-to-peer, all in one influencer marketplace specifically focused on nano and micro influencers. Chirpley will provide marketers with the…."
              />
            </Col>
            <Col span={6}>
              <CardProject
                networkIcon={BscIconWhite}
                icon={Project1}
                title="Chirpley"
                description="Chirpley is the world’s first automated, peer-to-peer, all in one influencer marketplace specifically focused on nano and micro influencers. Chirpley will provide marketers with the…."
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
