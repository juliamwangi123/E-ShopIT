import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './pages/auth/Login';
import Signin from './pages/auth/Signin';
import ProductDetails from './products/ProductDetails';
import Cart from './products/cart/Cart';
import Home2 from './pages/home/Home2';
import Profile from './pages/userProfile/Profile';


import {CategoryProvider} from '../context/categoryContext'
import OrderSummary from './pages/oderSummary/OrderSummary';


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
        <Route path='/profile/:id' element={<Profile/> }/>
        <Route path='/orderSummary' element={<OrderSummary/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
