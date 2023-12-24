import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import axios from 'src/services/axios';
import AboutSection from './sections/About';
import Banner from './sections/Banner';
import Bottom from './sections/Bottom';
import ExploreApp from './sections/ExploreApp';
import FAQ from './sections/FAQ';
import OurService from './sections/OurService';
import Participate from './sections/Participate';
import ProjectMatrix from './sections/ProjectMatrix';
import ProjectsSection from './sections/Projects';
import './styles.scss';

const HomePage: React.FC = () => {
  const [allCustomSection, setAllCustomSection] = useState<any>();

  const fetchAllCustomSection = async () => {
    try {
      const resp = (await axios.get('/get-all-custom-section')) as any;
      const data = _.get(resp, 'data.data', []) as any[];
      setAllCustomSection(data);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllCustomSection();
  }, []);

  return (
    <div className="home-vispx">
      <Banner data={allCustomSection?.custom_launchapp} />
      {/* <ExploreApp data={allCustomSection?.custom_explore} /> */}
      <ProjectsSection
        data={allCustomSection?.custom_project_list}
        dataExplore={allCustomSection?.custom_explore_card}
      />
      <ProjectMatrix
        dataProjectMatrix={allCustomSection?.custom_project_matrix}
        dataYieldBox={allCustomSection?.custom_project_yieldbox}
      />
      <AboutSection data={allCustomSection?.custom_investPool} />
      <Participate data={allCustomSection?.custom_participate} />
      <OurService dataOurService={allCustomSection?.custom_ourservice} />
      <FAQ data={allCustomSection?.custom_faq} />
      <Bottom />
      <div className="copy-right">©2023 VispX. All Rights Reserved.</div>
    </div>
  );
};

export default HomePage;
