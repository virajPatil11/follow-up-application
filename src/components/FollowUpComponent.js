import React from 'react';

const FollowUpComponent = () => {
  // Get the current date
  const currentDate = new Date();

  // Format the date as a string (e.g., "October 11, 2023")
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div style={topCenterStyle}>
      <h2>Follow-Up</h2>
      <p>Current Date: {formattedDate}</p>
      {/* Other follow-up details */}
    </div>
  );
};

const topCenterStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  height: '20vh', // Center in the top half of the viewport
};

export default FollowUpComponent;
