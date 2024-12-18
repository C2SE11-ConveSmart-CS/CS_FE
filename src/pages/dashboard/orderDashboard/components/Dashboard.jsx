import React from 'react';
import { FaShoppingCart, FaShoppingBag, FaDollarSign } from 'react-icons/fa';
import MetricCard from './MetricCard';
import OrdersTable from './OrdersTable';
import './Dashboard.css';
import Layout from '../../../../components/Layout/Layout';

const Dashboard = () => {
  return (
    <Layout>
    <div className="dashboard">
      <h1>Hello Evana 👋</h1>
      
      <div className="metrics-grid">
        <MetricCard 
          title="Total Orders"
          value="5,423"
          icon={<FaShoppingCart />}
          bgColor="blue"
        />
        <MetricCard 
          title="Sales Orders"
          value="1,893"
          icon={<FaShoppingBag />}
          bgColor="green"
        />
        <MetricCard 
          title="Total Earnings"
          value="$ 189"
          icon={<FaDollarSign />}
          bgColor="cyan"
        />
      </div>
      
      <OrdersTable />
    </div>
    </Layout>
  );
};

export default Dashboard;

