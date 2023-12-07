import { Col, Row } from 'antd';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { BackgroundFAQ } from 'src/assets/icons';
import axios from 'src/services/axios';
import FAQCollapse from './components/FaQCollapse';
import MatrixFaQ from './components/MatixFaQ';
import './styles.scss';

const FAQ = ({ data }: any) => {
  const [activeFAQ, setActiveFAQ] = useState<any>();
  const [faqData, setFAQData] = useState<any>([]);
  const [listQuestionCategory, setListQuestionCategory] = useState<any>([]);

  const fetchListQuestion = async (id: any) => {
    try {
      const resp = (await axios.get(`/get-list-faq-of-category/${id}`)) as any;
      const data = _.get(resp, 'data.data.data', []) as any[];
      setListQuestionCategory(data);
    } catch (err: any) {
      console.error(err);
    }
  };

  const getListFAQ = async () => {
    try {
      const resp = (await axios.get('/get-category-faq-list')) as any;
      const data = _.get(resp, 'data.data.data', []) as any[];
      setFAQData(data);
      if (data.length && !activeFAQ) {
        fetchListQuestion(data[0]?.id);
      }
      setActiveFAQ(data[0]);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    getListFAQ();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeActiveFaQ = (item: any) => {
    setActiveFAQ(item);
    fetchListQuestion(item.id);
  };

  return (
    <div className="wrapper-faq">
      <img src={BackgroundFAQ} className="bg-faq" alt="bg-faq" />
      <div className="FAQ-main">
        <div className="title-section">{data?.title}</div>
        <div className="content-section">
          <Row gutter={50}>
            <Col lg={9} sm={24} xs={24}>
              <MatrixFaQ
                data={faqData}
                active={activeFAQ}
                setActiveFAQ={(item: any) => handleChangeActiveFaQ(item)}
              />
            </Col>
            <Col lg={15} sm={24} xs={24}>
              <FAQCollapse data={listQuestionCategory} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
