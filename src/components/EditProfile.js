import React, { useState } from 'react';
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, update} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const ChangeEmail = () => {
  const [oldEmail, setOldEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  const db = getDatabase();
  
  const storedEmail = localStorage.getItem('person_email');
  
  const handleSubmit = async(e) => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      if (oldEmail !== storedEmail) {
        setMessage('Old Email is incorrect.');
        return;
      }
      if (newEmail !== confirmEmail) {
        setMessage('New Email and confirm Email do not match.');
        return;
      } 
      update(ref(db, 'users/'+ user.uid), {
        person_email: newEmail
      })
      alert("Update Successful");
      navigate("/UserHomepage");
    }
  });
  };
  return (
    <div className="card-container">
      <div className="card">
        <h2>Update User</h2>
        <div className="input-group">
          <label>Old Email:</label>
          <input type="Email" value={oldEmail} onChange={(e) => setOldEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>New Email:</label>
          <input type="Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Confirm Email:</label>
          <input type="Email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>Update</button>
        <p className="message">{message}</p>
      </div>
    </div>
  );
};

export default ChangeEmail;