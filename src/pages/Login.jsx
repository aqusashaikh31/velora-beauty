import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext.jsx";

export default function Login() {
  const { user, login, cartCount } = useStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  if (user) return <Navigate to="/profile" replace />;

  const submit = (e) => {
    e.preventDefault();
    try {
      login(form);
      navigate(cartCount ? "/checkout" : "/shop");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-wrap">
      <form className="auth-card" onSubmit={submit}>
        <div className="eyebrow">Welcome back</div>
        <h1>Sign in</h1>
        <p className="muted">Use your Velora account to checkout and track orders. Demo: demo@velora.com / demo123</p>
        <label>Email<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
        <label style={{ marginTop: 12 }}>Password<input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></label>
        {error && <p style={{ color: "#a45c4d" }}>{error}</p>}
        <button className="btn btn-primary btn-block" style={{ marginTop: 18 }}>Login</button>
        <p className="muted" style={{ marginTop: 14 }}>
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </form>
    </div>
  );
}
