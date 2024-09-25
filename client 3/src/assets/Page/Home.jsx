import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import Footer from '../Component/Footer.jsx'
import './css/home.css'
function Home() {
  return (
    <div><Navbar/>
    
    <div class="vertical-divider"></div>
    <section class="rectangle-1">
        <div>HOME</div>
    </section>
    <section class="rectangle-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="300" width="300"
            viewBox="0 0 640 512">
            <path
                d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z" />
        </svg>
        <div class=".rectangle-insidetxt">
            <div class="rectangle-heading">Idea/Approach Details</div>
            <div class="rectangle-txt">A comprehensive web platform designed to integrate companies, job seekers, and
                government agencies into a unified system. It facilitates company registration, verification, and
                licensing, while enabling government oversight and empowering job seekers with reliable information and
                job application tools. This platform aims to enhance transparency, efficiency, and trust in the job
                market ecosystem</div>
        </div>
    </section>
    <section class="rectangle-2">
        <div class=".rectangle-insidetxt">
            <div class="rectangle-heading">Technical approach</div>
            <div class="rectangle-txt">Technologies used :- • HTML, CSS, JavaScript, Figma, React, MongoDB, Express.js,
                Node.js, JWT Authentication, Mongoose, Bcryptjs, cookie-parser.</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="270" height="270" viewBox="0 0 24 24">
            <path
                d="M24 14.187v-4.374c-2.148-.766-2.726-.802-3.027-1.529-.303-.729.083-1.169 1.059-3.223l-3.093-3.093c-2.026.963-2.488 1.364-3.224 1.059-.727-.302-.768-.889-1.527-3.027h-4.375c-.764 2.144-.8 2.725-1.529 3.027-.752.313-1.203-.1-3.223-1.059l-3.093 3.093c.977 2.055 1.362 2.493 1.059 3.224-.302.727-.881.764-3.027 1.528v4.375c2.139.76 2.725.8 3.027 1.528.304.734-.081 1.167-1.059 3.223l3.093 3.093c1.999-.95 2.47-1.373 3.223-1.059.728.302.764.88 1.529 3.027h4.374c.758-2.131.799-2.723 1.537-3.031.745-.308 1.186.099 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.059-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.161-1.076-3.573-.49-1.396.581-1.79 1.693-2.188 2.877h-1.534c-.398-1.185-.791-2.297-2.183-2.875-1.419-.588-2.507-.045-3.579.488l-1.083-1.084c.557-1.118 1.066-2.18.487-3.58-.579-1.391-1.691-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.791 2.875-2.184.578-1.394.068-2.459-.488-3.579l1.084-1.084c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.69 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.419.588 2.506.045 3.579-.488l1.084 1.084c-.556 1.121-1.065 2.187-.488 3.58.577 1.391 1.689 1.784 2.875 2.183v1.534c-1.188.398-2.302.791-2.877 2.183zm-7.125-5.951c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z" />
        </svg>
    </section>
    <Footer/>
    </div>
  )
}

export default Home