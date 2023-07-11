import React, { useState } from "react";
import "./nav.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = {
    name: 'Ranjith' 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="#" className="navbar-logo" onClick={toggleDropdown}>
          Grocery
          <FaShoppingCart style={{ color: 'green', marginLeft: '25px' }} />
        </Link>
        <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
          <p>Hello {user.name}</p>
          <Link to="/Report">Report</Link>
          <Link to="/Today">Today</Link>
          <Link to="/Counter">Counter</Link>
          <Link to="/">Logout</Link>
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
            <Link to="/contacts">ContactUs</Link>
          </li>
          <li>
            <button className="btn-btn">
              <Link to="/">Logout</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
