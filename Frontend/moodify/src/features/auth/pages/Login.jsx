// Login.jsx

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import FormData from "../components/FormData";
import "./auth.css";

const Login = () => {

  const { login, loading, error } = useAuth(); 
  // UI → HOOK → STATE

  const navigate = useNavigate(); 

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(form); 
    // UI → HOOK → STATE → API → STATE → UI

    navigate("/dashboard"); 
    // Redirect after login
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <FormData
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <FormData
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        <button className="auth-button" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>

      </form>

      {error && <p className="error-text">{error}</p>}

      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
