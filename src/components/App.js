import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Login from './pages/auth/Login';
import Profile from './profile/Profile';
import Signin from './pages/auth/Signin';



function App() {
   return (
    
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signup' element ={<Signin/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
