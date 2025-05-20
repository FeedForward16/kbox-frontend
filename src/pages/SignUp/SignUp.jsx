import React from "react";
import "./signUp.css";

const SignUp = ({
  name,
  email,
  password,
  confimP,
  onName,
  onEmail,
  onPass,
  onConfirm,
  onSubmit,
}) => {
    
  return (
    <div className="main">
      <form className="signup_form" onSubmit={onSubmit}>
        <h2 className="signup_title">Welcome to KBox</h2>

        <input
          type="text"
          className="signup_input"
          value={name}
          onChange={onName}
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          className="signup_input"
          value={email}
          onChange={onEmail}
          placeholder="Enter your email"
          required
        />

        <input
          type="password"
          className="signup_input"
          value={password}
          onChange={onPass}
          placeholder="Enter password"
          required
        />

        <input
          type="password"
          className="signup_input"
          value={confimP}
          onChange={onConfirm}
          placeholder="Confirm password"
          required
        />

        <input type="submit" className="signup_submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
