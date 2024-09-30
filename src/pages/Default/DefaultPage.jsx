import React from 'react';
import { useAccess } from '../../hooks/useAccess';

const DefaultPage = () => {
  useAccess();

  return (
    <div className="profile-container">
      <h1>Default Page</h1>
    </div>
  );
};

export default DefaultPage;