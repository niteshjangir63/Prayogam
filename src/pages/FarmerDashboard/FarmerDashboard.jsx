
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import StatsCard from "../../Components/StatsCard/StatsCard";
import MilletsTable from "../../Components/MilletsTable/MilletsTable";
import MobileBottomNav from "../../Components/MobileBottomNav/MobileBottomNav";
import "./FarmerDashboard.css";

export default function FarmerDashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <Topbar />

        <div className="stats">
          <StatsCard title="Total Products" value="15" color="green" />
          <StatsCard title="Total Orders" value="58" color="orange" />
          <StatsCard title="Total Earnings" value="₹32,400" color="blue" />
        </div>

        <MilletsTable />
      </main>

      <MobileBottomNav />
    </div>
  );
}