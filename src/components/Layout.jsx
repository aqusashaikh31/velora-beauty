import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext.jsx";

export default function Layout() {
  const { user, cartCount, wishlist, logout, toast } = useStore();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(q.trim() ? `/shop?q=${encodeURIComponent(q.trim())}` : "/shop");
    setOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" to="/" onClick={() => setOpen(false)}>
            VELORA
          </Link>
          <nav className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </nav>
          <form className="header-search" onSubmit={search}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3-3" />
            </svg>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search serums, lips, perfume..."
            />
          </form>
          <div className="header-actions">
            <Link className="icon-btn" to="/wishlist" aria-label="Wishlist">
              ♡
              {wishlist.length > 0 && <span className="badge-count">{wishlist.length}</span>}
            </Link>
            <Link className="icon-btn" to="/cart" aria-label="Bag">
              👜
              {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
            </Link>
            {user ? (
              <Link className="user-chip" to="/profile">
                {user.name.split(" ")[0]}
              </Link>
            ) : (
              <Link className="user-chip" to="/login">
                Sign in
              </Link>
            )}
            <button className="menu-toggle" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
        <div className={`container mobile-nav ${open ? "open" : ""}`}>
          <form className="mobile-search" onSubmit={search}>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products"
            />
          </form>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink>
          <NavLink to="/wishlist" onClick={() => setOpen(false)}>Wishlist</NavLink>
          <NavLink to="/cart" onClick={() => setOpen(false)}>Bag</NavLink>
          <NavLink to="/orders" onClick={() => setOpen(false)}>Orders</NavLink>
          <NavLink to="/profile" onClick={() => setOpen(false)}>Profile</NavLink>
          {user ? (
            <button
              onClick={() => {
                logout();
                setOpen(false);
                navigate("/");
              }}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login" onClick={() => setOpen(false)}>Login / Signup</NavLink>
          )}
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="logo">VELORA</div>
            <p className="muted" style={{ color: "#e8d5d0" }}>
              Thoughtful luxury beauty — skincare, color, scent and ritual, made to feel as good as it looks.
            </p>
          </div>
          <div>
            <strong>Shop</strong>
            <Link to="/shop?cat=skincare">Skincare</Link>
            <Link to="/shop?cat=makeup">Makeup</Link>
            <Link to="/shop?cat=fragrance">Fragrance</Link>
            <Link to="/shop?cat=hair">Hair</Link>
          </div>
          <div>
            <strong>Help</strong>
            <Link to="/orders">Track order</Link>
            <Link to="/profile">Account</Link>
            <Link to="/cart">Shipping & bag</Link>
          </div>
          <div>
            <strong>Promise</strong>
            <p>Free shipping over ₹1,999</p>
            <p>Easy 7-day returns</p>
            <p>Secure checkout</p>
          </div>
        </div>
        <div className="container copy">© {new Date().getFullYear()} Velora Beauty. All rights reserved.</div>
      </footer>
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
