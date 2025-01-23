import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // Check if the user is logged in by verifying the presence of a JWT token
  const token = localStorage.getItem("token"); // Replace 'token' with the actual key you're using to store JWT

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from storage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#" style={{ color: "white" }}>
        Fitness Tracker
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          {!token ? (
            // Links for non-authenticated users
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link" style={{ color: "white" }}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/registration"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Registration
                </Link>
              </li>
            </>
          ) : (
            // Links for authenticated users
            <>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-link nav-link"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
