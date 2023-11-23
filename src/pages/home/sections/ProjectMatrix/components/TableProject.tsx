import { Table, Tag } from 'antd';
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
            <img
              src={row.project_icon ? row?.project_icon : XborgProjectIcon}
              alt=""
              width={24}
              height={24}
              style={{
                borderRadius: 24,
              }}
            />
            <span style={{ marginLeft: 5 }}>{value}</span>
          </div>
        );
      },
    },
    {
      title: 'ATH ROI',
      dataIndex: 'ath_roi',
      width: '100px',
      render: (value: string) => `x${new BigNumber(value || 0).toFormat()}`,
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {(row?.category1 === 'TOKEN' || row?.category2 === 'TOKEN') && (
              <Tag color="#2E90FA">Token</Tag>
            )}
            {(row?.category1 === 'NFT' || row?.category2 === 'NFT') && (
              <Tag color="#3F2AA5">NFT</Tag>
            )}
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
    <Table
      scroll={{ x: 400 }}
      columns={columns}
      dataSource={dataSources}
      pagination={false}
      rowKey={'project_name'}
    />
  );
};

export default TableProjectComponent;
