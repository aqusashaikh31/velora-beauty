import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { useStore } from "../context/StoreContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Wishlist() {
  const { wishlist } = useStore();
  const items = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <main className="container page-hero">
      <h1 className="page-title">Wishlist</h1>
      {items.length === 0 ? (
        <div className="empty">
          <h3>Nothing saved yet</h3>
          <p className="muted">Tap the heart on products you love.</p>
          <Link className="btn btn-primary" to="/shop">Browse shop</Link>
        </div>
      ) : (
        <div className="grid-products">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}
