Smart Industry Collaboration Platform (SIH Hackathon)

A role-based industry collaboration portal built during the Smart India Hackathon (SIH) using the MERN stack (MongoDB, Express.js, React, Node.js).
The platform bridges governments, companies, and job seekers, enabling secure interactions, workflow automation, and scalable data management.

🚀 Features

Role-Based Access Control

Separate dashboards for Government, Company, and Job Seeker roles.

Protected routes with authentication and authorization.

License & Job Workflows

Companies can apply for licenses and track approvals.

Government officials can verify applications and validate job postings.

Job seekers can apply for verified jobs ensuring credibility.

Dynamic Dashboards

Custom views for each role with real-time updates.

Statistics and insights for government and company users.

Scalable Data Models

Built on MongoDB for flexible and high-volume data handling.

Optimized schemas for job postings, applications, and workflows.

Hackathon-Ready Design

Developed under time constraints with a focus on real-world problem solving.

Prioritized clean UI/UX, modular codebase, and rapid iteration.

🛠️ Tech Stack

Frontend: React.js, React Router, Axios, TailwindCSS/Bootstrap (if used)

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT-based secure login

Deployment: (Add if deployed on Heroku, Vercel, Netlify, or similar)

📂 Project Structure
SIH/
│── client/           # React frontend
│── server/           # Node.js + Express backend
│── models/           # MongoDB schemas
│── routes/           # API routes
│── controllers/      # Business logic
│── config/           # Database and environment config
│── README.md         # Project documentation

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/SrijeetGupta/SIH.git
cd SIH


Install dependencies for both client and server:

cd client
npm install
cd ../server
npm install


Run the development servers:

# Run backend
cd server
npm run dev

# Run frontend (in another terminal)
cd client
npm start

🔑 Environment Variables

Create a .env file in the server/ folder with the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

📸 Screenshots (Optional)

Add screenshots of dashboards, workflows, or forms here.

🤝 Contributors

This project was developed during Smart India Hackathon (SIH) by a team focused on solving real-world industry problems using scalable and modern web technologies.

@SrijeetGupta


📜 License

This project is licensed under the MIT License.
Feel free to use and modify as needed.
