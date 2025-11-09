import VehicleCard from "../components/ui/VehicleCard";

import React from "react";

const VehicleCard = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Vehicle Service</h2>
      <p className="text-gray-600 mt-2">
        Schedule your next vehicle service easily with our online booking
        system.
      </p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Book Now
      </button>
    </div>
  );
};

export default VehicleCard;
