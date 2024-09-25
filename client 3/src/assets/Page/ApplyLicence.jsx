import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios';
axios.defaults.timeout = 1000;

function ApplyLicence() {

  const [alljob,setalljob]=useState({})
  const navigator = useNavigate()

  useEffect(() => {
    axios.get('job/getalljob')
    .then(function (response) {
      if (response.status > 299) {
        navigator("/signupandlogin")
      }
      else {
        setalljob(response.data);
      }
    })
    .catch(function (error) {
      alert("somthing went wrong while feaching data")
      navigator("/loginAndSignup")
    })
  })


  return (
    <div>
      
      <Navbar/>
      <Footer/>
      </div>
  )
}

export default ApplyLicence