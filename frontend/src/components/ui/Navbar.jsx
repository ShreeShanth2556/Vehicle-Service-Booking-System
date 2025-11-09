import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>🚗 Vehicle Service</h2>
      <div>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/book">Book Service</Link>
            <Link to="/bookings">My Bookings</Link>
            <Link to="/profile">Profile</Link>
            {user.role === "admin" && <Link to="/admin">Admin</Link>}
            {user.role === "workshop" && <Link to="/workshop">Workshop</Link>}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
