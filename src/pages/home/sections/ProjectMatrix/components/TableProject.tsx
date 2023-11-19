import { Col, Row, Tag } from 'antd';
import '../styles/table-tx.scss';
import { BSCIcon, XborgProjectIcon } from 'src/assets/icons';

interface TableTxProps {
  dataSources: any[];
}
const RowRecord = ({ record }: { record: History }) => {
  return (
    <>
      <Row className="record">
        <Col span={3} style={{ padding: 16, textAlign: 'center' }}>
          <div className="flex">
            <img src={XborgProjectIcon} />
            <span style={{ marginLeft: 10 }}>Xborg</span>
          </div>
        </Col>
        <Col span={3} style={{ padding: 16, textAlign: 'center' }}>
          x753.5
        </Col>
        <Col span={4} style={{ padding: 16, textAlign: 'center' }}>
          $200,000
        </Col>
        <Col span={5} style={{ padding: 16, textAlign: 'center' }}>
          <Tag color="#2E90FA">Token</Tag>
          <Tag color="#3F2AA5">NFT</Tag>
        </Col>
        <Col span={3} style={{ padding: 16, textAlign: 'center' }}>
          <img src={BSCIcon} alt="bsc-icon" />
        </Col>
        <Col span={3} style={{ padding: 16, textAlign: 'center' }}>
          1,000,000
        </Col>
        <Col span={3} style={{ padding: 16, textAlign: 'center' }}>
          $14.03
        </Col>
      </Row>
    </>
  );
};

const TableProjectComponent: React.FC<TableTxProps> = (props: TableTxProps) => {
  const { dataSources = [1, 2, 3, 4] } = props;
  return (
    <div className="table-tx">
      <Row className="head flex">
        <Col span={3} style={{ textAlign: 'center' }}>
          Project
        </Col>
        <Col span={3} style={{ textAlign: 'center' }}>
          ATH ROI
        </Col>
        <Col span={4} style={{ textAlign: 'center' }}>
          Total Raise
        </Col>
        <Col span={5} style={{ textAlign: 'center' }}>
          Category
        </Col>
        <Col span={3} style={{ textAlign: 'center' }}>
          Chain
        </Col>
        <Col span={3} style={{ textAlign: 'center' }}>
          Total Supply
        </Col>
        <Col span={3} style={{ textAlign: 'center' }}>
          ATH Price
        </Col>
      </Row>
      {dataSources.map((record, index) => (
        <RowRecord record={record} key={index} />
      ))}
    </div>
  );
};

export default TableProjectComponent;
