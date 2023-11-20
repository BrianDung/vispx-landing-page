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
import { useFetch } from 'src/hooks/useFetch';

const ProjectsSection: React.FC = () => {
  const { data, error } = useFetch(`${process.env.REACT_APP_API_ENDPOINT}/vispx-project-list`);
  
  return (
    <div className="projects-section">
      <div className="layout">
        <div className="title-1">Projects in VispX Factory</div>
        <div className="list-card">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12} lg={6}>
              <CardProject
                networkIcon={BscIconWhite}
                icon={Project1}
                title="Chirpley"
                description="Chirpley is the world’s first automated, peer-to-peer, all in one influencer marketplace specifically focused on nano and micro influencers. Chirpley will provide marketers with the…."
              />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <CardProject
                networkIcon={BscIconWhite}
                icon={Project1}
                title="Chirpley"
                description="Chirpley is the world’s first automated, peer-to-peer, all in one influencer marketplace specifically focused on nano and micro influencers. Chirpley will provide marketers with the…."
              />
            </Col>
            <Col xs={24} md={12} lg={6}>
              <CardProject
                networkIcon={BscIconWhite}
                icon={Project1}
                title="Chirpley"
                description="Chirpley is the world’s first automated, peer-to-peer, all in one influencer marketplace specifically focused on nano and micro influencers. Chirpley will provide marketers with the…."
              />
            </Col>
            <Col xs={24} md={12} lg={6}>
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
