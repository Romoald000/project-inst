import React from 'react';
import { useAccess } from '../../hooks/useAccess';

const AllPage = () => {
  useAccess()

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-info">
      </div>
    </div>
  );
};

export default AllPage;