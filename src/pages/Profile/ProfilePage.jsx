import React from 'react';
import './ProfilePage.css'; 

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-info">
        <p>Username: JohnDoe</p>
        <p>Email: johndoe@example.com</p>
      </div>
    </div>
  );
};

export default ProfilePage;