import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage";
import Signup from "./components/signup";
import Home from "./components/home";
import Service from "./components/service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
