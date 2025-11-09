import React from "react";

const MyBookings = () => {
  const dummyBookings = [
    { id: 1, center: "CarCare Hub", city: "Mysuru", type: "Full Service", status: "Completed" },
    { id: 2, center: "SpeedFix Garage", city: "Bengaluru", type: "Oil Change", status: "Pending" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">My Bookings</h2>
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="py-2">Service Center</th>
            <th>City</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyBookings.map((b) => (
            <tr key={b.id} className="text-center border-b">
              <td className="py-2">{b.center}</td>
              <td>{b.city}</td>
              <td>{b.type}</td>
              <td className={b.status === "Completed" ? "text-green-600" : "text-orange-600"}>
                {b.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
