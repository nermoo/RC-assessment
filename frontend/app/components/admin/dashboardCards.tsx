import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import CreatePropertyModal from './createPropertyModal';

const DashboardCards: React.FC = () => {
    
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = (): void => setIsModalOpen(true);

  const handleCancel = (): void => setIsModalOpen(false);

    return (
        <>
        <div className="flex  items-center">
        <div className="flex justify-between gap-2 w-full">

            <div
            className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg shadow-md w-96 cursor-pointer hover:bg-blue-600" 
            onClick={showModal}
            >
            <h3 className="font-bold text-lg"><PlusOutlined /> New Property</h3>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-96">
            <h3 className="font-bold text-lg mb-2">Property Summary</h3>
            <div className="grid grid-cols-2 gap-x-4">
                <span>Total Properties:</span>
                <span>29</span>
                <span>For Sale:</span>
                <span>23</span>
                <span>For Rent:</span>
                <span>6</span>
            </div>
            <span className="text-gray-500 text-sm mt-2">Last updated: 5 mins ago</span>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-96">
                <h3 className="font-bold text-lg mb-2">Financial Overview</h3>
                <div className="grid grid-cols-2 gap-x-4">
                    <span>Total Revenue:</span>
                    <span>XX,XXX LKR</span>
                    <span>Pending Payments:</span>
                    <span>X,XXX LKR</span>
                    <span>Total Expenses:</span>
                    <span>X,XXX LKR</span>
                </div>
                <span className="text-gray-500 text-sm mt-2">Last updated: 15 mins ago</span>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-96">
            <h3 className="font-bold text-lg mb-2">Recent Activity</h3>
            <ul className="list-disc pl-4">
                <li className="flex justify-between">
                <span>Added Property 1</span>
                <span className="text-gray-500 text-sm">5 mins ago</span>
                </li>
                <li className="flex justify-between">
                <span>Edited Property 2</span>
                <span className="text-gray-500 text-sm">10 mins ago</span>
                </li>
            </ul>
            </div>
        </div>
        </div>

        <CreatePropertyModal
        isModalOpen={isModalOpen}
        handleOk={handleCancel}
        handleCancel={handleCancel}
      />
        </>
    )
}

export default DashboardCards;