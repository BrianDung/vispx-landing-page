import { Table, Tag } from 'antd';
import { ColumnProps } from 'antd/es/table';
import BigNumber from 'bignumber.js';
import {
  BSCIcon,
  ETHIcon,
  PolygonIconWhite,
  SolanaIconWhite,
  XborgProjectIcon,
} from 'src/assets/icons';
import { formatATHPrice, formatATHROI } from 'src/helpers/formatValue';
import '../styles/table-tx.scss';

interface TableTxProps {
  dataSources: any[];
}

const TableYieldboxInjection: React.FC<TableTxProps> = (props: TableTxProps) => {
  const { dataSources } = props;
  console.log('data', dataSources);
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
      title: 'TOKEN',
      dataIndex: 'pre_token',
      align: 'center',
      width: '100px',
      render: (value: string) => value,
    },
    {
      title: 'AMOUNT INJECTED',
      dataIndex: 'amount_inject',
      align: 'center',
      key: 'amount_inject',
      render: (value: string) => value,
    },
    {
      title: 'ATH PRICE',
      align: 'center',
      dataIndex: 'ath_price',
      key: 'ath_price',
      render: (value: string) => formatATHPrice(value),
    },
    {
      title: 'CHAIN',
      align: 'center',
      dataIndex: 'project_network',
      key: 'project_network',
      render: (value: string) => getNetwork(value),
    },
    {
      title: 'ATH VALUE',
      align: 'center',
      dataIndex: 'ath_value',
      key: 'ath_value',
      render: (value: string) => formatATHPrice(value),
    },
  ];

  const defaultNoRecord = () => {
    return <div className="table-empty">No record found</div>;
  };

  return (
    <Table
      style={{ marginTop: '60px' }}
      scroll={{ x: 400 }}
      columns={columns}
      dataSource={dataSources}
      pagination={false}
      rowKey={'project_name'}
      locale={{ emptyText: !dataSources.length && defaultNoRecord }}
    />
  );
};

export default TableYieldboxInjection;
