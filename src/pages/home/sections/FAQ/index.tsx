import { Col, Row } from 'antd';
import FAQCollapse from './components/FaQCollapse';
import MatrixFaQ from './components/MatixFaQ';
import './styles.scss';
import { BackgroundFAQ } from 'src/assets/icons';

const FAQ = () => {
  return (
    <div className="wrapper-faq">
      <img src={BackgroundFAQ} className='bg-faq' alt="bg-faq" />
      <div className="FAQ-main">
        <div className="title-section">Frequently Asked Questions</div>
        <div className="content-section">
          <Row gutter={100}>
            <Col lg={9} sm={24} xs={24}>
              <MatrixFaQ />
            </Col>
            <Col lg={15} sm={24} xs={24}>
              <FAQCollapse />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
