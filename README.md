# Velora Beauty

Luxury beauty e-commerce storefront with login, shop, cart, wishlist, checkout and orders.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Deploy

1. Push this folder to GitHub.
2. Import the repo in [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com).
3. Build command: `npm run build`
4. Publish directory: `dist`

SPA routing is already configured in `vercel.json` and `netlify.toml`.

## Demo notes

- Auth, cart, wishlist and orders persist in the browser (`localStorage`).
- Checkout is a realistic payment UI (card / UPI / COD) without charging a real card — add Stripe or Razorpay keys later if you need live payments.
