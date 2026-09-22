import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext.jsx";

export default function Signup() {
  const { user, signup } = useStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  if (user) return <Navigate to="/profile" replace />;

  const submit = (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    try {
      signup(form);
      navigate("/shop");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-wrap">
      <form className="auth-card" onSubmit={submit}>
        <div className="eyebrow">Join Velora</div>
        <h1>Create account</h1>
        <p className="muted">Save wishlists, checkout faster, and track every order.</p>
        <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
        <label style={{ marginTop: 12 }}>Email<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
        <label style={{ marginTop: 12 }}>Password<input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></label>
        {error && <p style={{ color: "#a45c4d" }}>{error}</p>}
        <button className="btn btn-primary btn-block" style={{ marginTop: 18 }}>Sign up</button>
        <p className="muted" style={{ marginTop: 14 }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
