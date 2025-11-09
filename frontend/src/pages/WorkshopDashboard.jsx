import React from "react";

export default function WorkshopDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Workshop Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold">Total Bookings</h3>
          <p className="text-2xl font-bold mt-2">52</p>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold">Active Mechanics</h3>
          <p className="text-2xl font-bold mt-2">8</p>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold">Pending Services</h3>
          <p className="text-2xl font-bold mt-2">13</p>
        </div>
      </div>
    </div>
  );
}
