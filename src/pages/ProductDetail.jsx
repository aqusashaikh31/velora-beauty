import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS, formatINR } from "../data/products";
import { useStore } from "../context/StoreContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [qty, setQty] = useState(1);
  const [shade, setShade] = useState(product?.shades?.[0] || "");

  if (!product) {
    return (
      <main className="container page-hero">
        <div className="empty">
          <h2>Product not found</h2>
          <Link to="/shop">Back to shop</Link>
        </div>
      </main>
    );
  }

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="container page-hero">
      <p className="muted">
        <Link to="/shop">Shop</Link> / {product.category}
      </p>
      <div className="detail">
        <div className="detail-media">
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <div className="brand">{product.brand}</div>
          <h1 className="page-title">{product.name}</h1>
          <p className="muted">★ {product.rating} · {product.reviews} reviews · {product.stock} in stock</p>
          <div className="price-row" style={{ margin: "12px 0 18px", fontSize: "1.3rem" }}>
            <strong>{formatINR(product.price)}</strong>
            <span className="compare">{formatINR(product.compareAt)}</span>
          </div>
          <p>{product.description}</p>
          {product.shades.length > 0 && (
            <>
              <strong>Shade</strong>
              <div className="shades">
                {product.shades.map((s) => (
                  <button key={s} className={`chip ${shade === s ? "on" : ""}`} onClick={() => setShade(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </>
          )}
          <div className="qty" aria-label="Quantity">
            <button onClick={() => setQty((n) => Math.max(1, n - 1))}>−</button>
            <span>{qty}</span>
            <button onClick={() => setQty((n) => n + 1)}>+</button>
          </div>
          <div className="actions-row">
            <button className="btn btn-primary" onClick={() => addToCart(product.id, { qty, shade })}>
              Add to bag
            </button>
            <button className="btn btn-ghost" onClick={() => toggleWishlist(product.id)}>
              {wishlist.includes(product.id) ? "Saved" : "Save to wishlist"}
            </button>
          </div>
        </div>
      </div>

      <section className="section">
        <h2 className="section-title">You may also like</h2>
        <div className="grid-products">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
