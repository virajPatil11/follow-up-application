import React, { useState } from 'react';
import '../css/NotificationOverlay.css';
const NotificationOverlay = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications([...notifications, message]);

    // Automatically remove the notification after a few seconds (adjust timing as needed)
    setTimeout(() => {
      removeNotification(message);
    }, 5000);
  };

  const removeNotification = (message) => {
    setNotifications(notifications.filter((notification) => notification !== message));
  };
  function MyComponent() {
    const handleShowNotification = () => {
      NotificationOverlay.addNotification('This is a sample notification.');
    }
  return (
    <div className="notification-overlay">
      {notifications.map((message, index) => (
        <div key={index} className="notification">
          <div className="notification-content">{message}</div>
          <button onClick={() => removeNotification(message)}>&times;</button>
          <button onClick={handleShowNotification}>Show Notification</button>
      <NotificationOverlay />
        </div>
      ))}
    </div>
  );
};

export default NotificationOverlay;
