import { Outlet } from "react-router-dom";
import UserNavbar from "../UserNavbar/UserNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <UserNavbar />
      <div className="dashboard-body">
        <Sidebar />
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
