import React from "react";
import VehicleCard from "../components/ui/VehicleCard"; // ✅ Corrected path

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
      </div>
    </div>
  );
};

export default Dashboard;
