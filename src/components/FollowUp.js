// FollowUp.js

import React from 'react';
import FollowUpComponent from './FollowUpComponent'; // Import the FollowUpComponent
import FollowUpDetails from './FollowUpDetails';

const FollowUp = () => {
  return (
    <div>
      <FollowUpComponent /> {/* Render the FollowUpComponent here */}
      {/* Other follow-up details or components */}

      <FollowUpDetails />
    </div>
  );
};

export default FollowUp;
