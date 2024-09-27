import React, { useState } from "react";
import "./UserProfile.css"; // CSS file for styling

const UserProfile = () => {
  // Sample user data
  const [user] = useState({
    name: "Sushant Verma",
    contestsWon: 10,
    contestsLost: 4,
    walletBalance: 25000, // In Rupees
  });

  return (
    <div className="profile-container">
      {/* User Profile Section */}
      <div className="profile-card">
        <h2>User Profile</h2>
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Contests Won:</strong> {user.contestsWon}</p>
          <p><strong>Contests Lost:</strong> {user.contestsLost}</p>
        </div>
      </div>

      {/* Wallet Section */}
      <div className="wallet-card">
        <h3>Wallet Balance</h3>
        <p className="wallet-amount">₹{user.walletBalance.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default UserProfile;
