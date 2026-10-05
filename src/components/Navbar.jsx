import { useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">

        <div className="logo-icon">
          S
        </div>

        <div>
          <h2>StudentHub</h2>

          <span>
            Learn • Build • Grow
          </span>
        </div>

      </div>


      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>


      {/* Navigation Links */}
      <div
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
          onClick={closeMenu}
        >
          <span>⌂</span>
          Home
        </NavLink>


        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
          onClick={closeMenu}
        >
          <span>ℹ</span>
          About
        </NavLink>


        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
          onClick={closeMenu}
        >
          <span>▣</span>
          Courses
        </NavLink>


        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
          onClick={closeMenu}
        >
          <span>✉</span>
          Contact
        </NavLink>


        <button className="login-button">
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;