import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

//page

import Home from './assets/Page/Home.jsx';
import About from './assets/Page/About.jsx';
import CompanyProfile from './assets/Page/CompanyProfile.jsx';
import UserProfile from './assets/Page/UserProfile.jsx';
import GovementProfile from './assets/Page/GovermentProfile.jsx';
import SignupAndLogin from './assets/Page/SignupAndLogin.jsx';
import Job from './assets/Page/Job.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/company" element={<CompanyProfile/>} />
        <Route exact path="/user" element={<UserProfile/>} />
        <Route exact path="/goverment" element={<GovementProfile/>} />
        <Route exact path="/signupandlogin" element={<SignupAndLogin/>} />
        <Route exact path="/job" element={<Job/>} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
