import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import ParticipateCard from './components/Card';
import ParticipateCardActive from './components/CardActive';
import ParticipateCollapse from './components/Collapse';
import './styles.scss';
import { ECardType } from './type';
import _ from 'lodash';
import axios from 'src/services/axios';

const Participate = ({ data }: any) => {
  const [participateData, setParticipateData] = useState<any>([]);
  const [activeCard, setActiveCard] = useState<any>();

  const getListAboutPool = async () => {
    try {
      const resp = (await axios.get('/get-list-participate')) as any;
      const data = _.get(resp, 'data.data', []) as any[];
      setParticipateData(data);
      setActiveCard(data[0]);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    getListAboutPool();
  }, []);

  const getCardType = (item: any) => {
    if (item && item?.link_image) {
      if (item?.card_type === ECardType.ACTIVE) {
        return <ParticipateCardActive data={item} />;
      } else {
        return <ParticipateCard type={item?.card_type} data={item} />;
      }
    }
    return null;
  };

  return (
    <div className="participate-main">
      <div className="title-section">{data?.title}</div>
      <div className="content-section">
        <Row gutter={100}>
          <Col lg={15} sm={24} xs={24}>
            <ParticipateCollapse
              data={participateData}
              setActiveCard={(card: any) => {
                setActiveCard(card);
              }}
            />
          </Col>
          <Col lg={9} sm={24} xs={24} className="right-participate">
            {getCardType(activeCard)}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Participate;
