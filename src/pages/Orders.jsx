import { Link, useSearchParams } from "react-router-dom";
import { formatINR } from "../data/products";
import { useStore } from "../context/StoreContext.jsx";

export default function Orders() {
  const { orders } = useStore();
  const [params] = useSearchParams();
  const placed = params.get("placed");

  return (
    <main className="container page-hero">
      <h1 className="page-title">Orders</h1>
      {placed && (
        <div className="success-box" style={{ margin: "0 0 24px" }}>
          <h2>Payment received</h2>
          <p className="muted">Order {placed} is confirmed. We’ll pack it with care.</p>
        </div>
      )}
      {orders.length === 0 ? (
        <div className="empty">
          <h3>No orders yet</h3>
          <Link className="btn btn-primary" to="/shop">Start shopping</Link>
        </div>
      ) : (
        <div className="panel">
          {orders.map((o) => (
            <article className="order-card" key={o.id}>
              <div className="summary-row">
                <strong>{o.id}</strong>
                <span className="chip on" style={{ height: 28 }}>{o.status}</span>
              </div>
              <div className="muted">
                {new Date(o.createdAt).toLocaleString("en-IN")} · {o.payment.method.toUpperCase()} · {formatINR(o.total)}
              </div>
              <div className="muted">
                {o.items.map((i) => `${i.name} × ${i.qty}`).join(", ")}
              </div>
              <div className="muted">
                Ship to {o.shipping.name}, {o.shipping.city} {o.shipping.pincode}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
