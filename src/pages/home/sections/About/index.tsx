import _ from 'lodash';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import './styles.scss';
import axios from 'src/services/axios';

const AboutSection: React.FC = () => {
  const [aboutPool, setAboutPool] = useState<any>([]);
  const getListAboutPool = async () => {
    try {
      const resp = (await axios.get('/vispx-about-invest-pool')) as any;
      const data = _.get(resp, 'data.data.data', []) as any[];
      setAboutPool(data);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    getListAboutPool();
  }, []);

  return (
    <div className="about-section">
      <div className="layout">
        <div className="title-1">About Investment Pool</div>
        <div className="description">
          VispX is a “NO TOKEN” Protocol launchpad allowing investors to directly participate in the
          pool of their choice with ZERO barrier of entry
        </div>
        <div className="list-card">
          {aboutPool?.map((item: any) => (
            <Card icon="" title={item?.title} description={item?.description} />
          ))}
          {/* <Card
            icon={Icon1}
            title="VispX Genesis NFT Pool"
            description="VispX has a Genesis Collection of 2,500 NFT holders, ready to invest in your project. XPAD is specifically designed to give exclusive access to our NFT holders amongst some of the biggest utilities in launchpad arena."
          />
          <Card
            icon={Icon2}
            title="Partner Pool"
            description="VispX exclusively partners with NFT projects and allowing partnered project NFT holders to participate in all IDO token offerings in a dedicated executive lounge pool customized at VispX launchpad."
          />
          <Card
            icon={Icon3}
            title="Open Pool"
            description="VispX is the first-ever launchpad to allow direct participation in IDOs with ZERO barrier of entry. Within 4 simple clicks, retail investors can invest into your projects IDO"
          />
          <Card
            icon={Icon3}
            title="Open Pool"
            description="VispX is the first-ever launchpad to allow direct participation in IDOs with ZERO barrier of entry. Within 4 simple clicks, retail investors can invest into your projects IDO"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
