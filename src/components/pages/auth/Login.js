import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import{login } from '../../../redux/features/auth/loginSlice'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password  )
    dispatch(login({email:email,password:password}))
 };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
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
          login
        </button>
      </form>
    </div>
  );
}

export default Login