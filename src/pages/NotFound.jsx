import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container page-hero">
      <div className="empty">
        <h1 className="page-title">Page not found</h1>
        <p className="muted">That page doesn’t exist in the Velora boutique.</p>
        <Link className="btn btn-primary" to="/">Back home</Link>
      </div>
    </main>
  );
}
