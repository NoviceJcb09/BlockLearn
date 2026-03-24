import "./App.css";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";

function App() {
  // Wrap any page inside DashboardLayout to get the navbar, sidebar, and footer
  return (
    <DashboardLayout>
      <p>Page content goes here</p>
    </DashboardLayout>
  );
}

export default App;
