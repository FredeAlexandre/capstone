import { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import DashboardContent from './components/layout/dashboard-content';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;