import "./App.css";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  // Wrap any page inside DashboardLayout to get the navbar, sidebar, and footer
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
}

export default App;
