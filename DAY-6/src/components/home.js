import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
import Nav from "./nav";
import './home.css';
// import img from '../components/bg.jpg';

export default function Home() {
  return (
    <div className="homeContainer">
      <Nav/>
      <div className="content">
      <h1 style={{fontSize:"50px"}}>Fastest way to Billing Services </h1>
      The supermarket typically has places for fresh meat, fresh produce, dairy, deli items, baked goods, and similar foodstuffs. Shelf space is also reserved for canned and packaged goods and for various non-food items such as kitchenware, household cleaners, pharmacy products and pet supplies.
      </div>
      <button className="button-known">
      <Link to="/product" className="content">
      Get Started
      </Link>
      </button>
      
    </div>
  );
}