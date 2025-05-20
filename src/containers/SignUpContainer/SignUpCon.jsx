import React, { useState } from "react";
import SignUp from "../../pages/SignUp/SignUp";
import { db } from "../../utils/db";

const SignUpCon = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmP, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmP) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { data: userData, error: signUpError } = await db.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      const user = userData?.user;
      
      if (user) {
        const { id: authId, email: authEmail } = user;

        const { error: insertError } = await db.from("users").insert([
          {
            full_name: name,
            id: authId,
            email: authEmail,
          },
        ]);

        if (insertError) throw insertError;

        alert("User signed up successfully!");
      }
    } catch (error) {
      console.error("Signup failed:", error.message);
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div>
      <SignUp
        name={name}
        email={email}
        password={password}
        confirmP={confirmP}
        onName={(e) => setName(e.target.value)}
        onEmail={(e) => setEmail(e.target.value)}
        onPass={(e) => setPassword(e.target.value)}
        onConfirm={(e) => setConfirmPassword(e.target.value)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignUpCon;
