import React, { useState } from 'react';

const FollowUpDetails = () => {
  const [followUps, setFollowUps] = useState([]);
  const [newFollowUp, setNewFollowUp] = useState({
    date: '',
    name: '',
    type: '',
    shareWith: '',
    assignTo: '',
  });

  const handleAddFollowUp = () => {
    if (
      newFollowUp.date &&
      newFollowUp.name &&
      newFollowUp.type &&
      newFollowUp.shareWith &&
      newFollowUp.assignTo
    ) {
      setFollowUps([...followUps, newFollowUp]);
      setNewFollowUp({
        date: '',
        name: '',
        type: '',
        shareWith: '',
        assignTo: '',
      });
    }
  };

  return (
    <div>
      <h2>Follow-Up Details</h2>
      <div>
        <input
          type="datetime-local"
          placeholder="Follow-Up Date/Time"
          value={newFollowUp.date}
          onChange={(e) =>
            setNewFollowUp({ ...newFollowUp, date: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Name"
          value={newFollowUp.name}
          onChange={(e) =>
            setNewFollowUp({ ...newFollowUp, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Follow-Up Type"
          value={newFollowUp.type}
          onChange={(e) =>
            setNewFollowUp({ ...newFollowUp, type: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Share With"
          value={newFollowUp.shareWith}
          onChange={(e) =>
            setNewFollowUp({ ...newFollowUp, shareWith: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Assign To"
          value={newFollowUp.assignTo}
          onChange={(e) =>
            setNewFollowUp({ ...newFollowUp, assignTo: e.target.value })
          }
        />
        <button onClick={handleAddFollowUp}>Add Follow-Up</button>
      </div>
      <ul>
        {followUps.map((followUp, index) => (
          <li key={index}>
            <strong>Follow-Up Date/Time:</strong> {followUp.date}
            <br />
            <strong>Name:</strong> {followUp.name}
            <br />
            <strong>Follow-Up Type:</strong> {followUp.type}
            <br />
            <strong>Share With:</strong> {followUp.shareWith}
            <br />
            <strong>Assign To:</strong> {followUp.assignTo}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowUpDetails;
