github--"https://github.com/JEEEVANPADMASHALI/youtube-clone.git"

# 📺 Full-Stack YouTube Clone

This is a **full-stack YouTube clone project** built with:

- ⚛️ **Frontend**: React (Vite) + Tailwind CSS + Axios + React Router DOM  
- 🚀 **Backend**: Node.js + Express + MongoDB + JWT + Mongoose

---

## 📁 Features

✅ User Authentication (Signup, Login, Logout)  
🎬 Video Uploads (with Title, Description, Thumbnail, Tags)  
📺 Video Feed and Channel Pages  
💬 Comment System  
🔍 Search by Title / Tags  
🧠 JWT Cookie Authentication  
📦 Responsive UI with Tailwind CSS  
🔥 MongoDB for data persistence

---

## 🧱 Tech Stack

| Frontend              | Backend                     |
|-----------------------|-----------------------------|
| React (Vite)          | Node.js + Express           |
| Tailwind CSS          | MongoDB + Mongoose          |
| React Router DOM      | JWT for Auth                |
| Axios for API Calls   | dotenv + cookie-parser      |

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v18+ recommended)
- MongoDB installed locally or use MongoDB Atlas

---

## 📁 Project Structure

root/ 
├── client/ # Frontend (Vite React) 
│ ├── src/ │
 │ ├── components/ 
 │ │ ├── pages/ 
 │ │ ├── services/ # Axios instance & API functions 
 │ │ ├── App.jsx
  │ │ └── main.jsx 
 │ └── index.html ├── server/
  # Backend (Express + MongoDB) 
  │ ├── controllers/
   │ ├── models/ 
   │ ├── routes/
    │ ├── middlewares/ 
    │ ├── .env 
    │ └── server.js 
    └── README.md


---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone

2. Setup Backend (server folder)
cd server
npm install

Create a .env file inside server/:

PORT=4000
MONGODB_URI=mongodb://localhost:27017/youtubeBackend
JWT_SECRET_KEY=yourSecretKey

Start Backend Server
 npm start


 3. Setup Frontend (client folder)


cd ../client
npm install

Update Axios baseURL in 
axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true, 
);

Start Frontend

npm run dev

Frontend runs at:
👉 http://localhost:5174



📫 API Endpoints (Backend)
🔑 Auth Routes
Method	Endpoint	Description
POST	/auth/signUp	Register new user
POST	/auth/login	Login user
POST	/auth/logout	Logout user

🎥 Video Routes
Method	Endpoint	Description
POST	/api/video	Upload a video (auth)
GET	/api/allVideos	Get all videos
GET	/api/getVideoById/:id	Get video by ID
GET	/api/:userId/channel	Get videos by user

💬 Comment Routes
Method	Endpoint	Description
POST	/api/comments	Post a comment (auth)
GET	/api/comment/:videoId	Get comments for a video

🧪 Testing with Thunder Client / Postman
➕ Sign Up

POST http://localhost:4000/auth/signUp
{
  "channelName": "",
  "userName": "",
  "password": "",
  "about": "",
  "profilePic": ""
}

🔑 Login
POST http://localhost:4000/auth/login