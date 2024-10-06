'use client'
import React from 'react';
import TicketTable from '../components/admin/ticketsTable';
import PropertyTable from '../components/admin/propertyTable';
import DashboardCards from '../components/admin/dashboardCards';


const PropertyAdminPage: React.FC = () => {

  return (
    <div className="p-6 space-y-6">
      <DashboardCards/>
      <div className="bg-white shadow-md rounded-lg p-6">
        <PropertyTable />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <TicketTable />
      </div>
    </div>
  );
};

export default PropertyAdminPage;