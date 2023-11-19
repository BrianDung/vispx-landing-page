import React, { useEffect, useRef, useState } from 'react';
import { Table, TableProps } from 'antd';
import './styles.scss';
import VoteeEmpty from '../Empty';

type IVoteeTable = TableProps<any> & {
  noDataText?: string;
};

const VoteeTable: React.FC<IVoteeTable> = ({ className, noDataText, pagination, ...props }) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    const tableInfo = tableRef.current;
    if (isFirstTime) {
      //reject scroll on first display
      setIsFirstTime(false);
      return;
    }
    if (tableInfo) {
      tableInfo.scrollIntoView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination ? pagination?.current : undefined]);

  return (
    <Table
      ref={tableRef}
      bordered
      locale={{
        emptyText: <VoteeEmpty text={noDataText} />,
      }}
      scroll={{ x: true }}
      className={`votee-table ${className ? className : ''}`}
      pagination={
        !!pagination
          ? {
              hideOnSinglePage: true,
              showSizeChanger: false,
              ...pagination,
            }
          : false
      }
      {...props}
    />
  );
};

export default VoteeTable;
