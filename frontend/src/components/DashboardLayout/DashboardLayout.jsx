import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../UserNavbar/UserNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./DashboardLayout.css";
import LoadingScreen from "../Loading/LoadingScreen";

const DashboardLayout = () => {
  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <UserNavbar
        onHamburgerClick={() => {
          if (window.innerWidth <= 768) setMobileOpen((o) => !o);
          else setExpanded((o) => !o);
        }}
      />
      <div className="dashboard-body">
        {mobileOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setMobileOpen(false)}
          />
        )}
        <Sidebar
          expanded={expanded}
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
        <div
          className={`dashboard-content${expanded ? " sidebar-expanded" : ""}`}
        >
          <main className="dashboard-main">
            <Suspense fallback={<LoadingScreen />}>
              <Outlet />
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
