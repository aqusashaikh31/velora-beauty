import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext.jsx";

export default function Profile() {
  const { getProfile, updateProfile, logout, user } = useStore();
  const profile = getProfile() || { name: user?.name, email: user?.email };
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: profile.name || "",
    phone: profile.phone || "",
    address: profile.address || "",
    city: profile.city || "",
    pincode: profile.pincode || "",
  });

  return (
    <main className="container page-hero">
      <h1 className="page-title">Your profile</h1>
      <div className="profile-layout">
        <form
          className="panel form-grid"
          onSubmit={(e) => {
            e.preventDefault();
            updateProfile(form);
          }}
        >
          <label>Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
          <label>Email<input value={profile.email || user?.email || ""} disabled /></label>
          <label>Phone<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>
          <label>PIN<input value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value })} /></label>
          <label className="full">Address<textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /></label>
          <label>City<input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} /></label>
          <div className="full">
            <button className="btn btn-primary">Save profile</button>
          </div>
        </form>
        <aside className="panel">
          <h3>Account</h3>
          <p className="muted">Signed in as {user?.email}</p>
          <button
            className="btn btn-ghost"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        </aside>
      </div>
    </main>
  );
}
