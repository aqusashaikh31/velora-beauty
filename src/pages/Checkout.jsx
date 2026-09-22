import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatINR } from "../data/products";
import { useStore } from "../context/StoreContext.jsx";

export default function Checkout() {
  const { cartDetailed, subtotal, placeOrder, getProfile } = useStore();
  const profile = getProfile() || {};
  const navigate = useNavigate();
  const [method, setMethod] = useState("card");
  const [error, setError] = useState("");
  const [paying, setPaying] = useState(false);
  const [form, setForm] = useState({
    name: profile.name || "",
    phone: profile.phone || "",
    address: profile.address || "",
    city: profile.city || "",
    pincode: profile.pincode || "",
    card: "",
    expiry: "",
    cvv: "",
    upi: "",
  });

  const shippingFee = subtotal >= 1999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shippingFee + tax;

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const pay = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.phone || !form.address || !form.city || !form.pincode) {
      setError("Please complete shipping details.");
      return;
    }
    if (method === "card") {
      const digits = form.card.replace(/\s/g, "");
      if (digits.length < 16 || form.cvv.length < 3 || !form.expiry.includes("/")) {
        setError("Enter a valid card number, expiry (MM/YY) and CVV.");
        return;
      }
    }
    if (method === "upi" && !form.upi.includes("@")) {
      setError("Enter a valid UPI ID (name@bank).");
      return;
    }
    setPaying(true);
    await new Promise((r) => setTimeout(r, 900));
    try {
      const order = placeOrder({
        shipping: {
          name: form.name,
          phone: form.phone,
          address: form.address,
          city: form.city,
          pincode: form.pincode,
        },
        payment: {
          method,
          last4: method === "card" ? form.card.replace(/\s/g, "").slice(-4) : "",
        },
      });
      navigate(`/orders?placed=${order.id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setPaying(false);
    }
  };

  if (!cartDetailed.length) {
    return (
      <main className="container page-hero">
        <div className="empty">
          <h3>Nothing to checkout</h3>
          <Link to="/shop">Go to shop</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container page-hero">
      <h1 className="page-title">Checkout</h1>
      <form className="checkout-layout" onSubmit={pay}>
        <div className="panel">
          <h3>Shipping</h3>
          <div className="form-grid">
            <label>Full name<input name="name" value={form.name} onChange={onChange} required /></label>
            <label>Phone<input name="phone" value={form.phone} onChange={onChange} required /></label>
            <label className="full">Address<textarea name="address" value={form.address} onChange={onChange} required /></label>
            <label>City<input name="city" value={form.city} onChange={onChange} required /></label>
            <label>PIN code<input name="pincode" value={form.pincode} onChange={onChange} required /></label>
          </div>
          <h3 style={{ marginTop: 22 }}>Payment</h3>
          <div className="pay-options">
            {[
              { id: "card", label: "Credit / Debit card" },
              { id: "upi", label: "UPI" },
              { id: "cod", label: "Cash on delivery" },
            ].map((m) => (
              <label key={m.id} className={`pay-option ${method === m.id ? "on" : ""}`}>
                <input type="radio" name="method" checked={method === m.id} onChange={() => setMethod(m.id)} />
                {m.label}
              </label>
            ))}
          </div>
          {method === "card" && (
            <div className="form-grid">
              <label className="full">Card number<input name="card" placeholder="4242 4242 4242 4242" value={form.card} onChange={onChange} /></label>
              <label>Expiry<input name="expiry" placeholder="MM/YY" value={form.expiry} onChange={onChange} /></label>
              <label>CVV<input name="cvv" placeholder="123" value={form.cvv} onChange={onChange} /></label>
            </div>
          )}
          {method === "upi" && (
            <label>UPI ID<input name="upi" placeholder="yourname@upi" value={form.upi} onChange={onChange} /></label>
          )}
          {method === "cod" && <p className="muted">Pay in cash when your order arrives.</p>}
          {error && <p style={{ color: "#a45c4d" }}>{error}</p>}
        </div>
        <aside className="panel">
          <h3>Pay {formatINR(total)}</h3>
          {cartDetailed.map((l) => (
            <div className="summary-row" key={`${l.id}${l.shade}`}>
              <span>{l.product.name} × {l.qty}</span>
              <span>{formatINR(l.product.price * l.qty)}</span>
            </div>
          ))}
          <div className="summary-row"><span>Shipping</span><span>{shippingFee ? formatINR(shippingFee) : "Free"}</span></div>
          <div className="summary-row"><span>GST</span><span>{formatINR(tax)}</span></div>
          <button className="btn btn-primary btn-block" disabled={paying}>
            {paying ? "Processing…" : "Pay now"}
          </button>
          <p className="muted">Demo checkout — no real charge. Deploy-ready storefront flow.</p>
        </aside>
      </form>
    </main>
  );
}
