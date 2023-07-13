import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage";
import Signup from "./components/signup";
import Home from "./components/home";
import Service from "./components/service";
import Contact from "./components/contact";
import Product from "./components/product";
import About from "./components/about";
import Billing from "./components/billing";
import Report from "./components/report";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/product" element={<Product />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/billing" element={<Billing />} /> 
          <Route path="/report" element={<Report />} /> 
                  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
