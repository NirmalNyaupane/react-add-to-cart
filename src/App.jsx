import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Cart from "./page/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ContextCart} from './context/ContextCart';

function App() {
  return (
    <ContextCart>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ContextCart>
  );
}

export default App;
