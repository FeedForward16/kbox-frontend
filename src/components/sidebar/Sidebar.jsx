import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div className="sidebar-container">
        <div className="logo">
          <h2 className="logo-text">K Box</h2>
        </div>
        <div className="categories">categories</div>
        <div className="profile"> profile</div>
      </div>
    </div>
  );
};

export default Sidebar;
