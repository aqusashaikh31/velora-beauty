import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard.jsx";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const cat = params.get("cat") || "all";
  const q = (params.get("q") || "").toLowerCase();
  const sort = params.get("sort") || "featured";

  const list = useMemo(() => {
    let items = PRODUCTS.filter((p) => (cat === "all" ? true : p.category === cat));
    if (q) {
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }
    if (sort === "price-asc") items = [...items].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
    if (sort === "rating") items = [...items].sort((a, b) => b.rating - a.rating);
    return items;
  }, [cat, q, sort]);

  const set = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === "all") next.delete(key);
    else next.set(key, value);
    setParams(next);
  };

  return (
    <main className="container page-hero">
      <div className="eyebrow">Catalog</div>
      <h1 className="page-title">Shop beauty</h1>
      <p className="muted">Filter by category, search by name, and sort the way you like.</p>

      <div className="shop-toolbar">
        <div className="filters">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`chip ${cat === c.id ? "on" : ""}`}
              onClick={() => set("cat", c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <select className="chip" value={sort} onChange={(e) => set("sort", e.target.value)}>
          <option value="featured">Featured</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="rating">Top rated</option>
        </select>
      </div>

      {q && <p className="muted">Showing results for “{q}”</p>}

      {list.length === 0 ? (
        <div className="empty">
          <h3>No matches</h3>
          <p className="muted">Try another search or category.</p>
        </div>
      ) : (
        <div className="grid-products">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}
