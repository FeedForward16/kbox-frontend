import React, { useState } from "react";
import Login from "../../pages/Login/Login";
import { db } from "../../utils/db";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await db.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      navigate("/dashboard");
    } catch (error) {
      console.error("Signup failed:", error.message);
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div>
      <Login
        email={email}
        password={password}
        onEmail={(e) => setEmail(e.target.value)}
        onPass={(e) => setPassword(e.target.value)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginContainer;
