import React from 'react';
import {  Tag } from 'antd';
import { LabelColors } from '@/constants/consts';
import CommonTable from '../common/table';
import { SupportTickets } from '@/constants/dummyData';


const TicketTable: React.FC = () => {
  const supportTableColumns = [
    {
      title: 'Ticket Number',
      dataIndex: 'ticketNumber',
      key: 'ticketNumber',
    },
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
      render: (label: string) => (
        <Tag color={`${LabelColors[label]}`}>{label}</Tag>
      ),
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <>
    <div className='text-slate-700 font-semibold mb-3'>Customer Tickets Overview</div>
    <CommonTable 
      dataSource={SupportTickets} 
      columns={supportTableColumns} 
      paginationConfig={{ hideOnSinglePage: true, pageSize: 4 }} 
    />
    </>
  );
};

export default TicketTable;
