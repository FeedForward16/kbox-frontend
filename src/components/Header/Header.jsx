import React from "react";
import './header.css'
const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">K Box</div>
        <div className="nav-btns">
          <button className="login-btn">Login</button>
          <button className="signUp">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
