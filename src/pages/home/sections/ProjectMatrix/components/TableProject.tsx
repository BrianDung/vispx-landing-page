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
import { ColumnProps } from 'antd/es/table';

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
  const columns: ColumnProps<any>[] = [
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
      align: 'center',
      width: '100px',
      render: (value: string) => `x${new BigNumber(value || 0).toFormat()}`,
    },
    {
      title: 'TOTAL RAISE',
      dataIndex: 'total_raise',
      align: 'center',
      key: 'total_raise',
      render: (value: string) => `$ ${new BigNumber(value || 0).toFormat()}`,
    },
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      align: 'center',
      key: 'category',
      render: (value: string, row: any) => {
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center' }}>
            {row?.category1 && <Tag color="#2E90FA">{row?.category1}</Tag>}
            {row?.category2 && <Tag color="#3F2AA5">{row?.category2}</Tag>}
          </div>
        );
      },
    },
    {
      title: 'CHAIN',
      align: 'center',
      dataIndex: 'project_network',
      key: 'project_network',
      render: (value: string) => getNetwork(value),
    },
    {
      title: 'TOTAL SUPPLY',
      align: 'center',
      dataIndex: 'total_supply',
      key: 'total_supply',
      render: (value: string) => new BigNumber(value || 0).toFormat(),
    },
    {
      title: 'ATH PRICE',
      align: 'center',
      dataIndex: 'ath_price',
      key: 'ath_price',
      render: (value: string) => {
        const allPart = value?.split('_');
        let price = '';
        let post_fix = '';
        let final = `${new BigNumber(price || 0).toFormat()} ${post_fix}`;
        if (allPart?.length > 1) {
          price = allPart[0];
          post_fix = allPart[1];
          final = `${new BigNumber(price || 0).toFormat()} ${post_fix}`;
        } else {
          final = new BigNumber(value || 0).toFormat();
        }
        return final;
      },
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
