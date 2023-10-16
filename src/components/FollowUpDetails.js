import React, { useState, useEffect } from 'react';
import '../css/FollowUpDetails.css'; // Make sure to import your CSS file

const FollowUpDetails = () => {
  const [followUps, setFollowUps] = useState([]);
  const [newFollowUp, setNewFollowUp] = useState({
    date: '',
    name: '',
    type: '',
    shareWith: '',
    assignTo: '',
  });
  const [selectedFollowUp, setSelectedFollowUp] = useState(null);

  // Load saved data from localStorage when the component mounts
  useEffect(() => {
    const savedFollowUps = JSON.parse(localStorage.getItem('followUps'));
    if (savedFollowUps) {
      setFollowUps(savedFollowUps);
    }
  }, []);

  // Save data to localStorage whenever 'followUps' change
  useEffect(() => {
    localStorage.setItem('followUps', JSON.stringify(followUps));
  }, [followUps]);

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

  const handleEditFollowUp = (index) => {
    const editedFollowUp = followUps[index];
    setNewFollowUp({ ...editedFollowUp });
    setSelectedFollowUp(index);
  };

  const handleUpdateFollowUp = () => {
    if (selectedFollowUp !== null) {
      const updatedFollowUps = [...followUps];
      updatedFollowUps[selectedFollowUp] = newFollowUp;
      setFollowUps(updatedFollowUps);
      setNewFollowUp({
        date: '',
        name: '',
        type: '',
        shareWith: '',
        assignTo: '',
      });
      setSelectedFollowUp(null);
    }
  };

  const handleDeleteFollowUp = (index) => {
    const updatedFollowUps = [...followUps];
    updatedFollowUps.splice(index, 1);
    setFollowUps(updatedFollowUps);
  };

  return (
    <div className="form-container">
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
        {selectedFollowUp !== null ? (
          <div>
            <button className="update-button" onClick={handleUpdateFollowUp}>
              Update Follow-Up
            </button>
            <button className="cancel-button" onClick={() => setSelectedFollowUp(null)}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="add-button" onClick={handleAddFollowUp}>
            Add Follow-Up
          </button>
        )}
      </div>
      <div className="follow-ups-container">
        {followUps.map((followUp, index) => (
          <div key={index} className="follow-up-item">
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
            <button className="edit-button" onClick={() => handleEditFollowUp(index)}>Edit</button>
            <button className="delete-button" onClick={() => handleDeleteFollowUp(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowUpDetails
