/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Table } from 'antd';

interface CommonTableProps {
  dataSource: any[];
  columns: any[];
  paginationConfig?: {
    pageSize?: number;
    hideOnSinglePage?: boolean;
  };
  loading?: boolean;
}

const CommonTable: React.FC<CommonTableProps> = ({ dataSource, columns, paginationConfig, loading }) => {
  return (
    <Table 
      dataSource={dataSource} 
      columns={columns} 
      pagination={paginationConfig} 
      loading={loading} 
    />
  );
};

export default CommonTable;
