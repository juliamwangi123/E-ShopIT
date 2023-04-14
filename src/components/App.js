import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Login from './pages/auth/Login';
import ProtecedRoute from '../utils/ProtectedRoutes';
import Profile from './profile/Profile';



function App() {
   return (
    
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path='/profile' element={ 

        <ProtecedRoute>
          <Profile/>
        </ProtecedRoute>} />
      </Routes>
    
      </Router>
      
    </div>
  );
}

export default App;
