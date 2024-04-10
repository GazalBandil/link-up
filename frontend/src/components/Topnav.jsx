import React, { useState } from 'react';
import './Topnav.css'; // CSS file for styling

const TopNavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="top-nav-bar">
      {/* Left side - Logo */}
      <div className="left-side">
        <h1>Link-up</h1>
      </div>

      {/* Center - Navigation links */}
      <div className="center">
        <ul>
          <li>Notifications</li>
          <li>Pending Requests</li>
          <li>Create Group</li>
        </ul>
      </div>

      {/* Right side - User profile */}
      <div className="right-side">
        {/* User profile button */}
        <div className="user-profile">
          <img src="user-avatar.jpg" alt="User Avatar" />
          <button onClick={toggleDropdown}>Profile</button>
        </div>

        {/* Dropdown */}
        {showDropdown && (
          <div className="dropdown">
            <ul>
              <li>Settings</li>
              <li>Policies/Conditions</li>
              <li>Update Profile</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
