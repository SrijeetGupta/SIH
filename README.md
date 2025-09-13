# Smart Industry Collaboration Platform (SIH)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A robust, role-based web portal developed for the Smart India Hackathon (SIH). This MERN stack application is designed to create a seamless ecosystem for **Governments**, **Companies**, and **Job Seekers**, streamlining critical industrial and employment processes.

## 🚀 About The Project

The Smart Industry Collaboration Platform was built to solve the real-world challenge of coordinating between regulatory bodies, industries seeking to establish themselves, and the skilled workforce. The platform provides distinct functionalities for each role, ensuring a secure and efficient workflow for license applications, job postings, and skill verification.

Developed under the time constraints of a hackathon, this project emphasizes rapid prototyping, industry-ready design, and scalable architecture.

## ✨ Key Features

* 👥 **Multi-Role Access Control**: A secure, three-tiered system with unique portals and functionalities for:
    * **Government Officials**: To review, approve, or reject license applications and oversee industrial activities.
    * **Company Representatives**: To apply for new industry licenses, manage existing ones, and post job openings.
    * **Job Seekers**: To search for jobs, apply for positions, and have their credentials verified.
* 📄 **License Application Workflow**: Companies can fill out and submit detailed applications for new licenses. Government users can view these applications on their dashboard and update their status in real-time.
* ✅ **Job & Skill Verification**: A streamlined process for companies to post verified job opportunities and for job seekers to apply, enhancing the credibility of the hiring process.
* 📊 **Dynamic User Dashboards**: Each role is greeted with a tailored dashboard that provides relevant at-a-glance information, such as pending applications, job statuses, and system notifications.
* 🔐 **Secure & Protected Routes**: Utilizes JSON Web Tokens (JWT) for authentication, ensuring that users can only access routes and data appropriate for their role.
* 💾 **Scalable Data Models**: Built with MongoDB and Mongoose, the database schema is designed for scalability and flexibility, allowing for future expansion of features.

## 🛠️ Tech Stack

This project is built using the MERN stack and other modern web technologies.

* **Frontend**: React.js, React Router, Axios
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (with Mongoose)
* **Authentication**: JSON Web Tokens (JWT), bcrypt.js

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
* Node.js (`>=14.0.0`)
* npm (Node Package Manager) or yarn
* MongoDB (local installation or a cloud instance like MongoDB Atlas)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/SrijeetGupta/SIH.git](https://github.com/SrijeetGupta/SIH.git)
    cd SIH
    ```

2.  **Set up the Backend Server:**
    ```sh
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory and add the following environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    JWT_SECRET=your_super_secret_jwt_key
    ```
    Start the server:
    ```sh
    npm start
    ```

3.  **Set up the Frontend Client:**
    Open a new terminal window.
    ```sh
    cd client
    npm install
    ```
    Start the React development server:
    ```sh
    npm start
    ```

Your application should now be running!
* The React frontend will be available at `http://localhost:3000`.
* The Node.js backend API will be running at `http://localhost:5000`.

## 📂 Project Structure

The repository is organized into two main folders: `client` and `server`.

/SIH
├── client/         // React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
│
└── server/         // Node.js & Express Backend
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
└── server.js


## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Srijeet Gupta - [[Your LinkedIn Profile URL]](https://www.linkedin.com/in/srijeetgupta/) 

Project Link: [https://github.com/SrijeetGupta/SIH](https://github.com/SrijeetGupta/SIH)
