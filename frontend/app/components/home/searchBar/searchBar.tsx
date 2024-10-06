import React, { useState } from 'react';
import { Select, Button, Form, Divider, Flex } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Location } from '@/constants/Enums';
import { useDispatch } from 'react-redux';
import { setLocation } from '@/lib/features/properties/propertySlice';


import './searchBar.css';

const { Option } = Select;

const PropertySearchBar = () => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleLocationChange = (value: string | null) => {
    setSelectedLocation(value);
  };

  const handleClear = () =>{
    setSelectedLocation(null);
  }

  const handleSubmit = () => {
      dispatch(setLocation(selectedLocation));
  };

  return (
    <div className="flex flex-col items-center justify-center py-24 bg-cover bg-center"
         style={{ backgroundImage: 'url("https://officebanao.com/wp-content/uploads/2023/10/Luxury_office_interior-1024x576.jpg")' }}>
      <h1 className="text-3xl text-white mb-4">Looking To Buy or Rent a Property?</h1>
      <h2 className="text-3xl text-white mb-6">Find Your Dream Home</h2>

    <Divider className='bg-white' style={{ width: '10%', minWidth: '10%', margin: '10px auto' }} />

        <div  className="bg-white p-4 rounded-lg shadow-lg m-4 w-full max-w-fit flex flex-nowrap">
        <Flex justify='space-between'>
        <Form className='w-full ' layout="inline" onFinish={handleSubmit}>

            <Form.Item>
            <Select
                placeholder="All Main Locations"
                onChange={handleLocationChange}
                className="selectDropdwn"
                onClear={handleClear}
                allowClear
            >
               {Object.values(Location).map((loc) => (
                  <Option key={loc} value={loc}>
                    {loc}
                  </Option>
                ))}
            </Select>
            </Form.Item>

            <Form.Item >
            <div className='w-1/ h-12'>
            <Select
                placeholder="All Status"
                className="selectDropdwn"
                disabled
            >
                <Option value="rent">Rent</Option>
                <Option value="buy">Buy</Option>
            </Select>
            </div>
            </Form.Item>

            <Form.Item>
            <Select
                placeholder="All Types"
                className="selectDropdwn"
                disabled
            >
                <Option value="apartment">Apartment</Option>
                <Option value="house">House</Option>
            </Select>
            </Form.Item>

            <Form.Item>
            <Button
                // eslint-disable-next-line @next/next/no-img-element
                icon={<img src="/icons/search.png" alt="Search" className="w-5 h-5" />}
                type="primary"
                size={'large'}
                className='custom-button plusBtn bg-sky-500/50'
                />
              </Form.Item>
              <Form.Item className='searchBtn'>
            <Button
                className='custom-button'
                type="primary"
                htmlType="submit"
                icon={<SearchOutlined />}
            >
                Search
            </Button>
            </Form.Item>

        </Form>
          </Flex>
        </div>
    </div>
  );
};

export default PropertySearchBar;
