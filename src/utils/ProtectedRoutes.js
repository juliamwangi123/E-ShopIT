import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"



const ProtecedRoute =({children})=>{
    const token = localStorage.getItem('token');
    let location = useLocation()

    if(token === null){
        debugger
        < Navigate to ='/login' state={{from : location}} replace/>

    }
    console.log(token)

    return children
}

export default ProtecedRoute