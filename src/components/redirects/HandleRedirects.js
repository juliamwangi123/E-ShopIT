import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

function HandleRedirects() {
    const navigate = useNavigate();
  
    useEffect(() => {
      const previousLocation = localStorage.getItem('previousLocation');
      if (previousLocation) {
        localStorage.removeItem('previousLocation');
        navigate(previousLocation);
      } else {
        // Redirect to a default page if no previous location found
        navigate('/');
      }
    }, [navigate]);
  
    return null;
}

export default HandleRedirects