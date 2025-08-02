// Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/login") return null;

  return (
    <nav className="navbar">
      <div className="navbar-brand">Intern-portal</div>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <button onClick={() => window.location.href = "/login"}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
