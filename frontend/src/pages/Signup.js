import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isLoading, error } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sing up</h3>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="text"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
