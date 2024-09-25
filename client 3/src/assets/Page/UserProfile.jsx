 import React from 'react'
 import Navbar from '../Component/Navbar.jsx'
 import { useState,useEffect } from 'react'
 import axios from 'axios'
 import Footer from '../Component/Footer.jsx';
 axios.defaults.timeout = 1000;




const  UserProfile= () => {
  const username = 'John Doe';
  const email = 'johndoe@example.com';
  const jobs = ['Software Engineer', 'Data Scientist', 'Product Manager'];

  const styles = {
    userPortfolio: {
      backgroundColor: '#f7f7f7',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    h2: {
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    p: {
      marginBottom: '20px',
    },
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    li: {
      padding: '10px',
      borderBottom: '1px solid #ccc',
    },
    lastLi: {
      borderBottom: 'none',
    },
  };

  return (
    <>
    <Navbar/>
    <div style={styles.userPortfolio}>
    <h2 style={styles.h2}>{username}</h2>
    <p style={styles.p}>Email: {email}</p>
    <h3>Jobs Applied For:</h3>
    <ul style={styles.ul}>
      {jobs.map((job, index) => (
        <li key={index} style={styles.li}>{job}</li>
      ))}
    </ul>
   </div>
   <Footer/>
    </>
  );
};


export default UserProfile





//   // const [user,setuser]=useState({})
//   // const navigator = useNavigate()

//   // useEffect(() => {
//   //   axios.get('user/getuser')
//   //   .then(function (response) {
//   //     if (response.status > 299) {
//   //       navigator("/signupandlogin")
//   //     }
//   //     else {
//   //       setuser(response.data);
//   //     }
//   //   })
//   //   .catch(function (error) {
//   //     alert("somthing went wrong while feaching data")
//   //     navigator("/loginAndSignup")
//   //   })
//   // })



