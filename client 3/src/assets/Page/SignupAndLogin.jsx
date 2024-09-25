import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import './css/signupLogin.css'
import Footer from '../Component/Footer.jsx'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios';

function SignupAndLogin() {
  const navigator=useNavigate()
  const [switcher, setSwitcher] = useState("in-active");
  const [switcher2, setSwitcher2] = useState("");


  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    category:""
  });


  const [login, setLogin] = useState({
    email: "",
    password: "",
    category:""
  });


  const handleSwitcher = () => {
    if (switcher === "in-active") {
      setSwitcher("");
      setSwitcher2("in-active");
    } else {
      setSwitcher2("");
      setSwitcher("in-active");
    }
  }

  const onSignupChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.name });
  }

  const onLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.name });
  }



  const signupUser = async () => {
    if (!signup || !(signup.email && signup.password && signup.name && signup.category)) {
      alert("plese provide deatails for login")
    }
    else {
     if(signup.category==="user"){



      axios.post('/user/creatuser', signup)
      .then(function (response) {
        if (response.status > 299) {
          navigator("/signupandlogin")
        }

      })
      .catch(function (error) {
        alert("somthing went wrong whil feaching data")
        navigator("/signupandlogin")
      })



     }
     else if(signup.category==="company"){
      axios.post('/company/creatcompany', signup)
      .then(function (response) {
        if (response.status > 299) {
          navigator("/signupandlogin")
        }

      })
      .catch(function (error) {
        alert("somthing went wrong whil feaching data")
        navigator("/signupandlogin")
      })
     }
     else if(signup.category==="goverment"){
      axios.post('/goverment/creatgoverment', signup)
      .then(function (response) {
        if (response.status > 299) {
          navigator("/signupandlogin")
        }

      })
      .catch(function (error) {
        alert("somthing went wrong whil feaching data")
        navigator("/signupandlogin")
      })

     }
     
    }
  }








  const loginUser = async () => {
    if (!login || !(login.email && login.password && login.category)) {
      alert("plese provide deatails for login")
    }
    else {
     if(login.category==="user"){



      axios.post('/user/login', login)
      .then(function (response) {
        if (response.status > 299) {
          navigator("/signupandlogin")
        }

      })
      .catch(function (error) {
        alert("somthing went wrong whil feaching data")
        navigator("/signupandlogin")
      })



     }
     else if(login.category==="company"){
      axios.post('/company/logincompany', login)
      .then(function (response) {
        if (response.status > 299) {
          navigator("/signupandlogin")
        }

      })
      .catch(function (error) {
        alert("somthing went wrong whil feaching data")
        navigator("/signupandlogin")
      })
     }
     else if(login.category==="goverment"){
      axios.post('/goverment/logingoverment', login)
      .then(function (response) {
        if (response.status > 299) {
          navigator("/signupandlogin")
        }

      })
      .catch(function (error) {
        alert("somthing went wrong whil feaching data")
        navigator("/signupandlogin")
      })

     }
     
    }
  }




  return (
    <> <Navbar />

      <div className="fullpage">
        <div className={switcher}>
          <div className="signup">
            <form>
              <div>
                <select name="category" onChange={onLoginChange}>
                  <option value="user">User</option>
                  <option value="company">Company</option>
                  <option value="goverment">Goverment</option>
                </select>
              </div>
              <div>
                <label for="email">E-mail</label>
              </div>
              <div>
                <input type="email" required onChange={onLoginChange} name="email" />
              </div>
              <div>
                <label for="password">Password</label>
              </div>
              <div>
                <input type="password" required onChange={onLoginChange} name="password" />
              </div>
              <div>
                <button type="submit" className="submit-btn" onClick={loginUser}>Login</button>
              </div>
              <div>
                <button className="submit-btn" onClick={handleSwitcher}>Sign up</button>
              </div>
            </form>
          </div>
        </div>

        <div className={switcher2}>
          <div className="signup">
            <form>
            <div>
                <select name="category" onChange={onSignupChange}>
                  <option value="user">User</option>
                  <option value="company">Company</option>
                  <option value="goverment">Goverment</option>
                </select>
              </div>
              <div>
                <label for="name">Name</label>
              </div>
              <div>
                <input type="text" required onChange={onSignupChange} name="name" />
              </div>
              <div>
                <label for="email">E-mail</label>
              </div>
              <div>
                <input type="email" required onChange={onSignupChange} name="email" />
              </div>
              <div>
                <label for="password">Password</label>
              </div>
              <div>
                <input type="password" required onChange={onSignupChange} name="password" />
              </div>
              <div>
                <button type="submit" className="submit-btn" onClick={signupUser}>Sign up</button>
              </div>
              <div>
                <button className="submit-btn" onClick={handleSwitcher}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default SignupAndLogin