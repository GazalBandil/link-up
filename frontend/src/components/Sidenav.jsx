import React from 'react';
import './Sidenav.css'; // CSS file for styling

const SideNav = () => {
  return (
    <div className="sidenav">
      {/* User Avatar Icon */}
      <div className="user-avatar">
        <img src="user-avatar.jpg" alt="User Avatar" />
      </div>

      {/* Groups Joined Section */}
      <div className="groups-joined">
        <h2>Groups Joined</h2>
        {/* Render list of groups joined */}
        <ul>
          <li>Group 1</li>
          <li>Group 2</li>
          <li>Group 3</li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
