import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Vehicle Service Booking</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Register
          </Link>
          <Link to="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
