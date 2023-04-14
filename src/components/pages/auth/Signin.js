import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import{signup} from '../../../redux/features/auth/signupSlice'

export default function Signin() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email ,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {error, loading, isAuthenticated} = useSelector((state) => state.authSignUp);

  const handleSignin = (e) =>{
    e.preventDefault()
    dispatch(signup({email:email,password:password}))
    isAuthenticated ? navigate('/profile'): navigate('/login')   
  };
  

  return (
    <div>
        <h1>signin</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignin}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">
          {loading && <div>loading....</div>}
          signin
        </button>
      </form>
    </div>
  )
}
