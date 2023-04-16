import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import{login } from '../../../redux/features/auth/loginSlice'
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, error ,isAuthenticated} = useSelector((state) => state.authLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password  )
    dispatch(login({email:email,password:password}))
    
    if(!loading && isAuthenticated ){
      navigate('/profile')
    }
    navigate('/login')
 };

  return (
    <div  className="bg-gray-100 min-h-screen flex flex-col justify-center py-6 sm:py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <div className='flex flex-col  items-center mb-3'>
          <h2 className="text-4xl font-font-semibold mb-2 text-orange-500  ">LOGIN</h2>
          <p className='text-sm text-gray-400'> Welcome to E-shopIt</p>
          </div>
      {error && <p>{error}</p>}
      <form className="space-y-6"  onSubmit={handleSubmit}>
        <label className="block text-gray-700 font-bold mb-1">Email:
        <input 
               type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="appearance-none block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
        </label>
         
        <label className="block text-gray-700 font-bold mb-2"> Password:
        <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="appearance-none block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
        </label>
         
        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {loading && <div>loading....</div>}
          LOGIN
        </button>
        <div className='flex items-center justify-center'>            
          <small >or</small>
        </div>
        <button
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black  bg-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <FaGoogle className="mr-2 my-[2px]"/>
          SIGN IN USING GOOGLE
        </button>
        <p className='text-center flex items-center justify-center text-[14px]'>Have no account?
        <Link to='/signup' className='font-semibold'>  create here</Link>
        </p>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Login