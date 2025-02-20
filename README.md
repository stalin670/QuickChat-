# QuickChat Application

A real-time chat application with live message updates using WebSockets, featuring user authentication, secure password hashing, and a responsive.

## 🛠 Tech Stack

- **Frontend**: [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) + [Tailwind CSS + DaisyUI](https://tailwindcss.com/)
- **Backend**: [Node.js](https://nodejs.org/en/) + [Express](https://expressjs.com/) + [MongoDB](https://www.mongodb.com/)
- **Authentication**: [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- **Deployment**:  Frontend(Static index.html file) + Backend on [Render](https://render.com/)

## 🔗 Live Demo

Check out the live demo of QuickChat App [here](https://quickchat-cxns.onrender.com/).

## ✨ Features

- **Authentication & Authorization**: Secure login and signup using JWT and bcrypt for password hashing.
- **Get, Send Messages**: Seamlessly manage your messages with easy-to-use UI components.
- **Profile Updation** : User can update the profile e.g. profile picture
- **Responsive Design**: Optimized for both desktop and mobile devices using Tailwind CSS.
- **Chat Theme Management**: Managing different theme according to users.
- **API Integration**: RESTful API endpoints to handle note-related actions.

## 📂 Project Structure

### Frontend (Vite + React)
## 📂 Project Structure

### Frontend (Vite + React)

```bash
frontend/
├── public/               # Public assets and files
├── src/
│   ├── constants/        # dummy data
│   ├── components/       # Reusable React components
│   ├── pages/            # Page components (e.g., login, signup, dashboard)
│   ├── lib/              # Utility functions (e.g., API requests)
│   ├── store/            # Global State Management using Zustand
│   ├── App.jsx           # Main App component
│   ├── index.css         # Tailwind and other global styles
│   └── main.jsx          # Entry point for the React app
├── .gitignore            # Ignored files and directories
├── README.md             # Project readme
├── package.json          # Frontend dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
```

### Backend (Node.js + Express)

```bash
backend/
├── src/
│   ├── controllers/      # api endpoint logic
│   ├── lib/              # Reusable utilities, third-party integrations, helpers.
│   ├── middlewares/      # Utilities, helpers, middleware, functions.
│   ├── models/           # MongoDB User and Chat Model
│   ├── routes/           # apis routes
│   ├── server.js         # Main file
├── .gitignore            # Ignored files and directories
├── package-lock.json     # Backend dependencies lock file
├── package.json          # Backend dependencies
```

## 💻 How to Run Locally

### Step 1: Clone the repository
```bash
git clone https://github.com/stalin670/QuickChat-.git
```

### Step 2: Navigate to the project directory

- **For Frontend:**

```bash
cd frontend
npm install
```

- **For Backend:**

```bash
cd backend
npm install
```

### Step 3: Set up environment variables

Create a `.env` file in the `backend` directory and add the following variables:

```bash
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

### Step 4: Navigate to the project directory

- **For Frontend:**

```bash
cd frontend
npm install
```

- **For Backend:**

```bash
cd backend
npm run server / dev
```

### Step 5: Visit the App

To view the frontend of your application, open the following URL in your browser:

[http://localhost:5173](http://localhost:5173)

### Step 6: API Endpoints

- `POST /api/auth/signup`: Register a new user
- `POST /api/auth/login`: Log in user
- `POST /api/auth/logout`: Logout user
- `PUT /api/auth/update-profile`: Update the user-info
- `GET /api/auth/check`: Check if the user is authenticate
- `GET /api/messages/users`: Get all user from database
- `GET /api/messages/:id` : Get all the messages
- `PUT /api/messages/send/:id`: Send the message

## 👥 Contributing

Contributions are welcome! If you'd like to improve InstaNotes or fix any bugs, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request


.......................................................................................................................................................................................................................................

