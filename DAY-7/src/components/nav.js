import { useState } from 'react';
import {  FaBars} from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = {
    name: 'Ranjith' 
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <button className="sidebar-toggle" onClick={toggleSidebar} style={{color:'black'}}>
        <FaBars />
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          <BsArrowLeft  />
        </button>
        <div className="sidebar-content">
        <h1 style={{paddingLeft : "20px"}}> Grocery</h1>
          <p style={{paddingTop : "20px"}}>Hello {user.name}</p>
          <Link to="/account-settings">Account Settings</Link>
          <Link to="/report">Report</Link>
          <Link to="/contact">Support</Link>
          <Link to="/">Sign out</Link>
        </div>
      </div>
      <Link to="/home" className="navbar-logo">
        Grocery
      </Link>
      <ul className="nav-items">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/billing">Billing</Link>
        </li>
        <li>
        
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/about">AboutUs</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;

