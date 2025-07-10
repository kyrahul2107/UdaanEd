import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to UdaanEd Dashboard</h1>
        <p>This is dummy data. You can start building modules here!</p>
      </div>
    </div>
  );
}
