import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import Footer from '../Component/Footer.jsx';
import { useState, useEffect } from 'react'
import axios from 'axios';
axios.defaults.timeout = 1000;
import './css/company.css'


function CompanyProfile() {

  // const [com,setcom]=useState({})
  // const navigator = useNavigate()

  // useEffect(() => {
  //   axios.get('company/getcompany')
  //   .then(function (response) {
  //     if (response.status > 299) {
  //       navigator("/signupandlogin")
  //     }
  //     else {
  //       setcom(response.data);
  //     }
  //   })
  //   .catch(function (error) {
  //     alert("somthing went wrong while feaching data")
  //     navigator("/loginAndSignup")
  //   })
  // })



  return (
    <div>
      <Navbar/>
      <div className="company-portfolio">
      <header>
        <h1>Company Name: XYZ Corporation</h1>
      </header>
      <main>
        <section id="company-info">
          <h2>Company Information</h2>
          <ul>
            <li>Email: <a href="mailto:info@xyzcorp.com">info@xyzcorp.com</a></li>
            <li>Licence: ABC123</li>
            <li>Licence Approved By: <a href="https://www.licencingauthority.com">Licensing Authority</a></li>
          </ul>
        </section>
        <section id="job-postings">
          <h2>Job Postings</h2>
          <ul>
            <li>
              <h3>Job Title: Software Engineer</h3>
              <p>Job Description: We are seeking a skilled software engineer to join our team.</p>
              <p>Requirements:</p>
              <ul>
                <li>Bachelor's degree in Computer Science or related field</li>
                <li>3+ years of experience in software development</li>
                <li>Proficiency in languages such as Java, Python, or C++</li>
              </ul>
              <p>Apply: <a href="mailto:careers@xyzcorp.com">careers@xyzcorp.com</a></p>
            </li>
            <li>
              <h3>Job Title: Marketing Manager</h3>
              <p>Job Description: We are seeking a marketing manager to lead our marketing team.</p>
              <p>Requirements:</p>
              <ul>
                <li>Bachelor's degree in Marketing or related field</li>
                <li>5+ years of experience in marketing</li>
                <li>Proven track record of successful marketing campaigns</li>
              </ul>
              <p>Apply: <a href="mailto:careers@xyzcorp.com">careers@xyzcorp.com</a></p>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 XYZ Corporation</p>
      </footer>
    </div>
      <Footer/>
      </div>
  )
}

export default CompanyProfile