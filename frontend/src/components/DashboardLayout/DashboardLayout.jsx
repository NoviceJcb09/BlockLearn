import UserNavbar from "../UserNavbar/UserNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./DashboardLayout.css";

// DashboardLayout wraps all authenticated pages.
// `children` is whatever page content gets passed between the tags:
//   <DashboardLayout> <DashboardPage /> </DashboardLayout>
const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      {/* Spans both columns at the top */}
      <UserNavbar />

      {/* Spans the middle and bottom rows on the left */}
      <Sidebar />

      {/* Page-specific content goes here */}
      <main className="dashboard-main">{children}</main>

      {/* Sits below main, to the right of the sidebar */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
