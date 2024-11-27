import "./assets/main.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Animation from "./components/animation/Animation";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Courses from "./pages/Courses";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>   
      <Router>
        <Routes> 
          <Route path='/' element={<Animation />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider> 
  );
}

export default App;
