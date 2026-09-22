import { Link, useNavigate } from "react-router-dom";
import { formatINR } from "../data/products";
import { useStore } from "../context/StoreContext.jsx";

export default function Cart() {
  const { cartDetailed, subtotal, updateQty, removeFromCart, user } = useStore();
  const navigate = useNavigate();
  const shipping = subtotal >= 1999 || subtotal === 0 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  return (
    <main className="container page-hero">
      <h1 className="page-title">Your bag</h1>
      {cartDetailed.length === 0 ? (
        <div className="empty">
          <h3>Bag is empty</h3>
          <p className="muted">Discover something beautiful.</p>
          <Link className="btn btn-primary" to="/shop">Shop now</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="panel">
            {cartDetailed.map((line) => (
              <div className="cart-item" key={`${line.id}-${line.shade}`}>
                <img src={line.product.image} alt={line.product.name} />
                <div>
                  <strong>{line.product.name}</strong>
                  <div className="muted">{line.product.brand}{line.shade ? ` · ${line.shade}` : ""}</div>
                  <div>{formatINR(line.product.price)}</div>
                </div>
                <div className="line-actions">
                  <div className="qty">
                    <button onClick={() => updateQty(line.id, line.shade, line.qty - 1)}>−</button>
                    <span>{line.qty}</span>
                    <button onClick={() => updateQty(line.id, line.shade, line.qty + 1)}>+</button>
                  </div>
                  <button className="btn btn-ghost" onClick={() => removeFromCart(line.id, line.shade)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <aside className="panel">
            <h3>Summary</h3>
            <div className="summary-row"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
            <div className="summary-row"><span>Shipping</span><span>{shipping ? formatINR(shipping) : "Free"}</span></div>
            <div className="summary-row"><span>GST (5%)</span><span>{formatINR(tax)}</span></div>
            <div className="summary-row"><strong>Total</strong><strong>{formatINR(total)}</strong></div>
            <button
              className="btn btn-primary btn-block"
              onClick={() => navigate(user ? "/checkout" : "/login")}
            >
              Checkout
            </button>
            <p className="muted" style={{ marginTop: 10 }}>Free shipping on ₹1,999+</p>
          </aside>
        </div>
      )}
    </main>
  );
}
