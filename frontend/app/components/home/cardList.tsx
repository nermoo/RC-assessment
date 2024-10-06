import React from 'react';
import { List } from 'antd';
import PropertyCard from './propertyCard/propertyCard';
import { useGetAllPropertiesQuery } from '@/lib/features/properties/propertyApi';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const CardList: React.FC = () => {

  const { data, isLoading } = useGetAllPropertiesQuery();

  const selectedLocation = useSelector((state: RootState) => state.propertyFilter.location);

  const filteredData = selectedLocation
    ? data?.filter(property => property.location === selectedLocation)
    : data;

  return (<>
  <List
    loading={isLoading}
    pagination={{ position:'bottom', align:'center', pageSize: 6,  hideOnSinglePage:true, showTotal: (total) => `Total ${total} items`,}}
    grid={{ gutter: 16, column: 3 }}
    dataSource={filteredData}
    renderItem={(item) => (
      <List.Item className='!justify-center !flex'>
        <PropertyCard property={item}/>
      </List.Item>
    )}
  />
  </>)
};

export default CardList;