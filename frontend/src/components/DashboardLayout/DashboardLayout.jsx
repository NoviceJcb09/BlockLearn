import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserNavbar from "../UserNavbar/UserNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="dashboard-layout">
      <UserNavbar onHamburgerClick={() => setSidebarOpen((o) => !o)} />
      <div className="dashboard-body">
        {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} currentPath={pathname} />
        <div className="dashboard-content">
          <main className="dashboard-main">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
