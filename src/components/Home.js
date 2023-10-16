import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <h1 className="app-title">Follow-Up Application</h1>
        <p className="current-date">Today's Date: {new Date().toLocaleDateString()}</p>
      </header>
      <div className="content">
        <h2>Welcome to the Follow-Up Application</h2>
        <p>
          Manage your tasks, appointments, and important events with ease. Never miss a deadline again with our intuitive Follow-Up Application.
        </p>
        <p>
          Key Features:
        </p>
        <ul>
          <li>Task and appointment tracking</li>
          <li>Reminders and notifications</li>
          <li>User-friendly interface</li>
          <li>Customizable settings</li>
        </ul>
        <p>
          Get started now and stay organized! Explore the application by using the navigation links above.
        </p>
      </div>
    </div>
  );
};

export default Home;
