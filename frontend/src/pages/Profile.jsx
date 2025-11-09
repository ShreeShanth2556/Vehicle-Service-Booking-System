import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">My Profile</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>City:</strong> Bengaluru</p>
        <p><strong>Vehicle:</strong> Maruti Suzuki Swift</p>
      </div>
    </div>
  );
};

export default Profile;
