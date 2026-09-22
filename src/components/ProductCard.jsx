import { Link } from "react-router-dom";
import { formatINR } from "../data/products";
import { useStore } from "../context/StoreContext.jsx";

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const loved = wishlist.includes(product.id);

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="media">
        {product.badge && <span className="pill">{product.badge}</span>}
        <img src={product.image} alt={product.name} />
        <button
          className={`wish ${loved ? "on" : ""}`}
          type="button"
          aria-label="Wishlist"
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
        >
          {loved ? "♥" : "♡"}
        </button>
      </Link>
      <div className="product-body">
        <div className="brand">{product.brand}</div>
        <h3>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="rating">★ {product.rating} · {product.reviews} reviews</div>
        <div className="price-row">
          <strong>{formatINR(product.price)}</strong>
          {product.compareAt && <span className="compare">{formatINR(product.compareAt)}</span>}
        </div>
        <button className="btn btn-soft" style={{ marginTop: 8 }} onClick={() => addToCart(product.id)}>
          Add to bag
        </button>
      </div>
    </article>
  );
}
