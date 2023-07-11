import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import './home.css';
// import img from '../components/bg.jpg';

export default function Home() {
  return (
    <div className="homeContainer">
      <nav className="navbar">
        <Link to="#" className="navbar-logo">
          Grocery<FaShoppingCart  style={{color:'green',marginLeft:'25px'}}/>
        </Link>
        <ul className="nav-items">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">Product</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
          <button className="btn-btn">
            <Link to="/">Logout</Link>
          </button>
        </ul>
      </nav>
    </div>
  );
}