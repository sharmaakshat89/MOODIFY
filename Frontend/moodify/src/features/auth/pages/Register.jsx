// Register.jsx

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import FormData from "../components/FormData";
import "./auth.css";

const Register = () => {

  const { register, loading, error } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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

    await register(form);

    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <FormData
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter name"
        />

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
          {loading ? "Loading..." : "Register"}
        </button>

      </form>

      {error && <p className="error-text">{error}</p>}

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Register;
