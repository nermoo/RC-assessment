import React from 'react';
import { Card, Typography } from 'antd';
import { EnvironmentOutlined, HomeOutlined } from '@ant-design/icons';
import { Property } from '@/lib/features/properties/propertyApi';
import numeral from 'numeral';

import './propertyCard.css'

interface Cardprops{
  property: Property;
}

const { Title, Text } = Typography;

const PropertyCard: React.FC<Cardprops> = ({property}) => {

  return (
    <Card
     hoverable
      className="max-w-md rounded-xl overflow-hidden cardWrapper"
      // eslint-disable-next-line @next/next/no-img-element
      cover={<img alt="Property" src={`http://localhost:8080/${property.image}`} className="converImg object-cover" />}
    >

      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm">
        <span className="font-semibold">{property.status}</span>
      </div>
 
      <div className="mt-4">
        <Title level={4}>{property.title}</Title>
        <Text type="secondary">
          <EnvironmentOutlined className="mr-1 !text-blue-500"/> {property.location}
        </Text>
      </div>

      <div className="mt-2">
        <Text className="!text-blue-500 font-semibold">{property.propertyType}</Text>
      </div>

      <div className="flex justify-between items-center mt-4">
        <Text className="!text-xl font-semibold">{numeral(property.price).format('0,0')} LKR</Text>
        <div className="flex items-center text-gray-500">
          <HomeOutlined className="mr-1 !text-blue-500" />
          <span><span className='font-bold'>{numeral(property.area).format('0,0')}</span> sq ft</span>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
