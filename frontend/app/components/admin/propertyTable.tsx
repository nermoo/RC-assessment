import React from 'react';
import { Button, message, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Property, useGetAllPropertiesQuery } from '@/lib/features/properties/propertyApi';
import { useDeletePropertyMutation } from '@/lib/features/properties/propertyApi';
import CommonTable from '../common/table';
import numeral from 'numeral';

const PropertyTable: React.FC = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const { data: propertiesList, isLoading } = useGetAllPropertiesQuery();
  const [deleteProperty] = useDeletePropertyMutation();

  const deleteSuccess = () => {
    messageApi.open({
      type: 'success',
      content: 'Property deleted successfully',
    });
  };

  const deleteError = () => {
    messageApi.open({
      type: 'error',
      content: 'Failed to delete property. Please try again',
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProperty(id).unwrap();
      deleteSuccess();
    } catch (error) {
      deleteError();
      console.error('Error deleting property:', error);
    }
  };

  const propertyTableColumns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Type',
      dataIndex: 'propertyType',
      key: 'type',
    },
    {
      title: 'Price (LKR)',
      dataIndex: 'price',
      key: 'price',
      render:(_: unknown, record: Property) =>(
        <>
        <span>Rs.{numeral(record.price).format('0,0')}</span>
        </>
      )
    },
    {
      title: 'Area (sq ft)',
      dataIndex: 'area',
      key: 'area',
      render:(_: unknown, record: Property) =>(
        <>
        <span>{numeral(record.area).format('0,0')}</span>
        </>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: unknown, record: Property) => (
        <>
          <Button icon={<EditOutlined />} className="mr-2"></Button>
          <Popconfirm
            title="Are you sure you want to delete this property?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger></Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <>
    {contextHolder}
    <div className='text-slate-700 font-semibold mb-3'>Available Properties</div>
    <CommonTable 
      dataSource={propertiesList || []} 
      columns={propertyTableColumns} 
      paginationConfig={{ hideOnSinglePage: true, pageSize: 6 }} 
      loading={isLoading} 
    />
    </>
  );
};

export default PropertyTable;
