import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard.jsx";

const CATS = [
  { id: "skincare", name: "Skincare", icon: "✨" },
  { id: "makeup", name: "Makeup", icon: "💄" },
  { id: "hair", name: "Hair", icon: "🫧" },
  { id: "fragrance", name: "Fragrance", icon: "🌸" },
  { id: "body", name: "Body", icon: "🧴" },
  { id: "tools", name: "Tools", icon: "🪞" },
];

export default function Home() {
  const featured = PRODUCTS.slice(0, 8);

  return (
    <>
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1800&q=80"
          alt="Beauty editorial"
        />
        <div className="hero-content">
          <div className="eyebrow">Autumn glow edit</div>
          <h1>Beauty that feels like a ritual.</h1>
          <p>Shop curated skincare, color and scent — crafted for everyday luxury and a deploy-ready shopping experience.</p>
          <Link className="btn btn-primary" to="/shop" style={{ background: "#fff", color: "#2b1a1c" }}>
            Shop the collection
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Shop by category</h2>
            <Link to="/shop">View all</Link>
          </div>
          <div className="cats">
            {CATS.map((c) => (
              <Link key={c.id} className="cat-card" to={`/shop?cat=${c.id}`}>
                <span>{c.icon}</span>
                <strong>{c.name}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Bestsellers</h2>
            <p className="muted">Loved by thousands of glow-seekers</p>
          </div>
          <div className="grid-products">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container trust">
          <article>
            <h3>Secure checkout</h3>
            <p className="muted">Card, UPI or cash on delivery. Encrypted demo payment flow for a real store feel.</p>
          </article>
          <article>
            <h3>Free shipping</h3>
            <p className="muted">Complimentary delivery on orders above ₹1,999, across India.</p>
          </article>
          <article>
            <h3>Easy returns</h3>
            <p className="muted">Changed your mind? Return unused products within 7 days.</p>
          </article>
          <article>
            <h3>Clean formulas</h3>
            <p className="muted">Thoughtful ingredients, cruelty-free, and built for sensitive skin.</p>
          </article>
        </div>
      </section>
    </>
  );
}
