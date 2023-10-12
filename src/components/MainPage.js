import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FollowUp from './FollowUp';
import Profile from './Profile';
import Registration from './Registration';
import Login from './Login';
import '../css/main.css'; // Import the CSS file

const MainPage = () => {
  return (
    <Router>
      <div className="main-page">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/follow-up">Follow-Up</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/follow-up" element={<FollowUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainPage;
