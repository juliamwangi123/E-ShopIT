import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Login from './pages/auth/Login';
import Profile from './profile/Profile';
import Signin from './pages/auth/Signin';
import ProductDetails from './products/ProductDetails';
import Navtop from './Navtop';
import Search from './Search';
import Cart from './products/cart/Cart';
import Home2 from './pages/auth/home/Home2';



function App() {
   return (
    
    <div className="App">
      <Router>
      {/* <Navtop/> 
      <Search/> */}
        <Routes>
        <Route path="/" element={<Home2/>} />
        <Route path="/login" element={<Login />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signup' element ={<Signin/>} />
        <Route path='product/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
