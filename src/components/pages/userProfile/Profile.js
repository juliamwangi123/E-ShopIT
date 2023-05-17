import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { capitalize } from "lodash";


function Profile() {
  const[userProfile, setuserProfile] = useState([])
  const [error , setError] = useState('')
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`https://backend-production-ad2e.up.railway.app/profile/${id}`)
    .then((res)=>{
      setuserProfile(res.data)
    }).catch((error) => setError(error.message))
  },[])

  return (
    <div>
      {userProfile && <div className="mx-auto max-w-screen-lg">
      <div className="flex flex-col md:flex-row justify-center items-center my-8">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
          <img
            src=''
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold mb-2">{userProfile.email ? capitalize(userProfile.email.split('@')[0] ): ""}</h1>
          <p className="text-gray-600 text-lg">
           {userProfile.email}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Personal Information</h2>
          <ul className="text-gray-600">
            <li className="mb-2">
              <span className="font-bold">Name:</span> {userProfile.email ? capitalize(userProfile.email.split('@')[0] ): ""}
            </li>
            <li className="mb-2">
              <span className="font-bold">Email:</span>{userProfile.email}

            </li>
            <li className="mb-2">
              <span className="font-bold">Address:</span> 123 Main St, Kimathi
            </li>
            <li className="mb-2">
              <span className="font-bold">Phone:</span> (254) 23456789
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Account Information</h2>
          <ul className="text-gray-600">
            <li className="mb-2">
              <span className="font-bold">Username:</span>  {userProfile.email ? capitalize(userProfile.email.split('@')[0] ): ""}
            </li>
            <li className="mb-2">
              <span className="font-bold">Password:</span> *********
            </li>
            <li className="mb-2">
              <span className="font-bold">Payment Method:</span> Visa **** **** **** 1234
            </li>
          </ul>
        </div>
      </div>
    </div>}
    </div>
  )
}

export default Profile