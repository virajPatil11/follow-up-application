// Home.js

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
        <h2>Welcome to the Home Page</h2>
        <p>
          This is the home page of your application. You can add some introductory content and features specific to your app here.
        </p>
        {/* Add your application's main content and features */}
      </div>
    </div>
  );
};

export default Home;
