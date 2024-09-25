import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import Footer from '../Component/Footer.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios';
axios.defaults.timeout = 1000;
import './css/gov.css'


function GovermentProfile() {

  const [licenceToApprove, setLicenceToApprove] = useState([
    {
      companyName: 'XYZ Corporation',
      documentLink: 'https://www.example.com/xyz-corp-docs',
      licenceType: 'Business Licence',
    },
    {
      companyName: 'ABC Inc.',
      documentLink: 'https://www.example.com/abc-inc-docs',
      licenceType: 'Trade Licence',
    },
  ]);

  const [approvedLicences, setApprovedLicences] = useState([
    {
      companyName: ' DEF Ltd.',
      documentLink: 'https://www.example.com/def-ltd-docs',
      licenceType: 'Business Licence',
    },
  ]);

  const [rejectedLicences, setRejectedLicences] = useState([
    {
      companyName: 'GHI Corp.',
      documentLink: 'https://www.example.com/ghi-corp-docs',
      licenceType: 'Trade Licence',
    },
  ]);

  const handleApproveLicence = (licence) => {
    setApprovedLicences([...approvedLicences, licence]);
    setLicenceToApprove(licenceToApprove.filter((item) => item.companyName !== licence.companyName));
  };

  const handleRejectLicence = (licence) => {
    setRejectedLicences([...rejectedLicences, licence]);
    setLicenceToApprove(licenceToApprove.filter((item) => item.companyName !== licence.companyName));
  };

  


  return (
    <div>
      <Navbar/>
      <div className="government-page">
      <header>
        <h1>Government Name: Ministry of Commerce</h1>
        <p>Email: <a href="mailto:ministryofcommerce@example.com">ministryofcommerce@example.com</a></p>
      </header>
      <main>
        <section id="licence-to-approve">
          <h2>Licence to Approve</h2>
          <ul>
            {licenceToApprove.map((licence, index) => (
              <li key={index}>
                <h3>Company Name: {licence.companyName}</h3>
                <p>Document Link: <a href={licence.documentLink}>{licence.documentLink}</a></p>
                <p>Licence Type: {licence.licenceType}</p>
                <button onClick={() => handleApproveLicence(licence)}>Approve Licence</button>
                <button onClick={() => handleRejectLicence(licence)}>Reject Licence</button>
              </li>
            ))}
          </ul>
        </section>
        <section id="approved-licences">
          <h2>Approved Licences</h2>
          <ul>
            {approvedLicences.map((licence, index) => (
              <li key={index}>
                <h3>Company Name: {licence.companyName}</h3>
                <p>Document Link: <a href={licence.documentLink}>{licence.documentLink}</a></p>
                <p>Licence Type: {licence.licenceType}</p>
              </li>
            ))}
          </ul>
        </section>
        <section id="rejected-licences">
          <h2>Rejected Licences</h2>
          <ul>
            {rejectedLicences.map((licence, index) => (
              <li key={index}>
                <h3>Company Name: {licence.companyName}</h3>
                <p>Document Link: <a href={licence.documentLink}>{licence.documentLink}</a></p>
                <p>Licence Type: {licence.licenceType}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>



      <Footer/></div>
  )
}

export default GovermentProfile





  // const [gov,setgov]=useState({})
  // const navigator = useNavigate()

  // useEffect(() => {
  //   axios.get('goverment/getgov')
  //   .then(function (response) {
  //     if (response.status > 299) {
  //       navigator("/signupandlogin")
  //     }
  //     else {
  //       setgov(response.data);
  //     }
  //   })
  //   .catch(function (error) {
  //     alert("somthing went wrong while feaching data")
  //     navigator("/loginAndSignup")
  //   })
  // })