import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import Footer from '../Component/Footer.jsx'
import Card from '../Component/Card.jsx'
import { useState,useEffect } from 'react'
import axios from 'axios'



function Job() {

  // const [alljob,setalljob]=useState({})
  // const navigator = useNavigate()

  // useEffect(() => {
  //   axios.get('job/getalljob')
  //   .then(function (response) {
  //     if (response.status > 299) {
  //       navigator("/signupandlogin")
  //     }
  //     else {
  //       setalljob(response.data);
  //     }
  //   })
  //   .catch(function (error) {
  //     alert("somthing went wrong while feaching data")
  //     navigator("/loginAndSignup")
  //   })
  // })




  return (


    <div><Navbar />
      <Card />
      <Footer />
    </div>
  )
}

export default Job