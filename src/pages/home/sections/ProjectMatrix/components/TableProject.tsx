import { Col, Row, Table, Tag } from 'antd';
import '../styles/table-tx.scss';
import {
  BSCIcon,
  XborgProjectIcon,
  ETHIcon,
  SolanaIconWhite,
  PolygonIconWhite,
} from 'src/assets/icons';
import BigNumber from 'bignumber.js';

interface TableTxProps {
  dataSources: any[];
}
const RowRecord = ({ record }: { record: any }) => {
  const getNetwork = (projectNetwork: string) => {
    switch (projectNetwork) {
      case 'bsc':
        return <img src={BSCIcon} alt="logo" />;
      case 'sol':
        return <img src={SolanaIconWhite} alt="logo" />;
      case 'polygon':
        return <img src={PolygonIconWhite} alt="logo" />;
      default:
        return <img src={ETHIcon} alt="logo" />;
    }
  };

  return (
    <>
      <Row className="record">
        <Col span={3} style={{ padding: 16, textAlign: 'center' }}>
          <div className="flex">
            <img src={record?.project_icon} alt="" width={24} height={24} />
            <span style={{ marginLeft: 10 }}>{record.project_name}</span>
          </div>
        </Col>
        <Col span={3} style={{ padding: 16, textAlign: 'center' }}>
          x{new BigNumber(record?.ath_roi || 0).toFormat()}
        </Col>
        <Col span={4} style={{ padding: 16, textAlign: 'center' }}>
          ${new BigNumber(record?.total_raise || 0).toFormat()}
        </Col>
        <Col span={5} style={{ padding: 16, textAlign: 'center' }}>
          {record?.category1 === 'TOKEN' && <Tag color="#2E90FA">Token</Tag>}
          {record?.category1 === 'NFT' && <Tag color="#3F2AA5">NFT</Tag>}
          {record?.category2 === 'TOKEN' && <Tag color="#2E90FA">Token</Tag>}
          {record?.category2 === 'NFT' && <Tag color="#3F2AA5">NFT</Tag>}
        </Col>
        <Col span={3} style={{ padding: 16, textAlign: 'center' }}>
          {getNetwork(record?.project_network)}
        </Col>
        <Col span={3} style={{ padding: 16, textAlign: 'center' }}>
          {new BigNumber(record?.total_supply || 0).toFormat()}
        </Col>
        <Col span={3} style={{ padding: 16, textAlign: 'center' }}>
          ${new BigNumber(record?.ath_price || 0).toFormat()}
        </Col>
      </Row>
    </>
  );
};

const TableProjectComponent: React.FC<TableTxProps> = (props: TableTxProps) => {
  const { dataSources } = props;
  const getNetwork = (projectNetwork: string) => {
    switch (projectNetwork) {
      case 'bsc':
        return <img src={BSCIcon} alt="logo" />;
      case 'sol':
        return <img src={SolanaIconWhite} alt="logo" />;
      case 'polygon':
        return <img src={PolygonIconWhite} alt="logo" />;
      default:
        return <img src={ETHIcon} alt="logo" />;
    }
  };
  const columns: any[] = [
    {
      title: 'PROJECT',
      dataIndex: 'project_name',
      key: 'project_name',
      render: (value: string, row: any) => {
        return (
          <div className="flex">
            <img src={XborgProjectIcon} alt="" width={24} height={24} />
            <span style={{ marginLeft: 5 }}>{value}</span>
          </div>
        );
      },
    },
    {
      title: 'ATH ROI',
      dataIndex: 'ath_roi',
      width: '100px',
      render: (value: string) => `X${new BigNumber(value || 0).toFormat()}`,
    },
    {
      title: 'TOTAL RAISE',
      dataIndex: 'total_raise',
      key: 'total_raise',
      render: (value: string) => `${new BigNumber(value || 0).toFormat()}`,
    },
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      key: 'category',
      render: (value: string, row: any) => {
        return (
          <div>
            {row?.category1 === 'TOKEN' && <Tag color="#2E90FA">Token</Tag>}
            {row?.category1 === 'NFT' && <Tag color="#3F2AA5">NFT</Tag>}
            {row?.category2 === 'TOKEN' && <Tag color="#2E90FA">Token</Tag>}
            {row?.category2 === 'NFT' && <Tag color="#3F2AA5">NFT</Tag>}
          </div>
        );
      },
    },
    {
      title: 'CHAIN',
      dataIndex: 'project_network',
      key: 'project_network',
      render: (value: string) => getNetwork(value),
    },
    {
      title: 'TOTAL SUPPLY',
      dataIndex: 'total_supply',
      key: 'total_supply',
      render: (value: string) => new BigNumber(value || 0).toFormat(),
    },
    {
      title: 'ATH PRICE',
      dataIndex: 'ath_price',
      key: 'ath_price',
      render: (value: string) => new BigNumber(value || 0).toFormat(),
    },
  ];

  return (
    <Table scroll={{ x: 400 }} columns={columns} dataSource={dataSources} pagination={false} />
  );
};

export default TableProjectComponent;
