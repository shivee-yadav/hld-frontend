import React, { useState } from "react";
import "./LoginForm.css";
import useAxios from "../Axios/useAxios"; // Custom Axios hook
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, data, sendRequest } = useAxios();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest({
        method: "post",
        url: "YOUR_LOGIN_API_ENDPOINT",
        data: {
          username,
          password,
        },
      });
      // Handle successful login, maybe store token in local storage or state
      console.log(response.data);
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <button type="submit" disabled={loading}>
          Login
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
