'use client'
import React from 'react';
import Link from 'next/link';
import { Button, Col, Row } from 'antd';
import { HeatMapOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
    
      return (
            <Row className='flex justify-between items-center bg-transparent z-10 relative px-20 py-6 border-b border-slate-300'>
                <Col><HeatMapOutlined className='!text-amber-500 text-3xl'/> Real Estate</Col>
                <Col className="ml-auto flex items-center space-x-4">
                  <div className='mr-4'><Link className='text-black hover:text-slate-500' href="/">Home</Link></div>
                  <Button type="primary">Add Property</Button>
                </Col>
            </Row>
          
      );
}

export default Navbar;