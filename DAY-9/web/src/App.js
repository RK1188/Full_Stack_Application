import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/Login";
import Home from "./Components/home";
import Products from "./Components/Products";
import Support from "./Components/Support";
import About from "./Components/About";
 import Billing from "./Components/Billing";
 import SalesReport from "./Components/Salesreport";
 import AddProducts from "./Components/AddProducts";

function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/support" element={<Support />} />
      <Route path="/about" element={<About />} />
      <Route path='/billing' element={<Billing />} />
      <Route path='/salesreport' element={<SalesReport />} />
      <Route path='/addproducts' element={<AddProducts />} />
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}
export default App;