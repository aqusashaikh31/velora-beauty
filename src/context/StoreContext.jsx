import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "../data/products";

const KEYS = {
  users: "velora_users",
  session: "velora_session",
  cart: "velora_cart",
  wishlist: "velora_wishlist",
  orders: "velora_orders",
};

const StoreContext = createContext(null);

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function hash(password) {
  return btoa(unescape(encodeURIComponent(password))).split("").reverse().join("");
}

export function StoreProvider({ children }) {
  const [user, setUser] = useState(() => read(KEYS.session, null));
  const [cart, setCart] = useState(() => read(KEYS.cart, []));
  const [wishlist, setWishlist] = useState(() => read(KEYS.wishlist, []));
  const [orders, setOrders] = useState(() => read(KEYS.orders, []));
  const [toast, setToast] = useState(null);

  useEffect(() => write(KEYS.session, user), [user]);
  useEffect(() => write(KEYS.cart, cart), [cart]);
  useEffect(() => write(KEYS.wishlist, wishlist), [wishlist]);
  useEffect(() => write(KEYS.orders, orders), [orders]);

  useEffect(() => {
    const users = read(KEYS.users, []);
    if (!users.some((u) => u.email === "demo@velora.com")) {
      write(KEYS.users, [
        ...users,
        {
          id: "demo-user",
          name: "Aqusa",
          email: "demo@velora.com",
          password: hash("demo123"),
          phone: "9876543210",
          address: "12 Bloom Street",
          city: "Mumbai",
          pincode: "400001",
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const notify = (message) => setToast(message);

  const signup = ({ name, email, password }) => {
    const users = read(KEYS.users, []);
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error("An account with this email already exists.");
    }
    const next = {
      id: crypto.randomUUID(),
      name,
      email,
      password: hash(password),
      phone: "",
      address: "",
      city: "",
      pincode: "",
      createdAt: new Date().toISOString(),
    };
    write(KEYS.users, [...users, next]);
    const session = { id: next.id, name: next.name, email: next.email };
    setUser(session);
    notify("Welcome to Velora.");
    return session;
  };

  const login = ({ email, password }) => {
    const users = read(KEYS.users, []);
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === hash(password)
    );
    if (!found) throw new Error("Invalid email or password.");
    const session = { id: found.id, name: found.name, email: found.email };
    setUser(session);
    notify(`Hi ${found.name.split(" ")[0]}, you're in.`);
    return session;
  };

  const logout = () => {
    setUser(null);
    notify("You’ve been logged out.");
  };

  const updateProfile = (patch) => {
    if (!user) return;
    const users = read(KEYS.users, []);
    const nextUsers = users.map((u) => (u.id === user.id ? { ...u, ...patch } : u));
    write(KEYS.users, nextUsers);
    const updated = nextUsers.find((u) => u.id === user.id);
    setUser({ id: updated.id, name: updated.name, email: updated.email });
    notify("Profile saved.");
  };

  const getProfile = () => {
    if (!user) return null;
    const users = read(KEYS.users, []);
    return users.find((u) => u.id === user.id) || null;
  };

  const addToCart = (productId, { qty = 1, shade = "" } = {}) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;
    setCart((prev) => {
      const key = `${productId}::${shade}`;
      const existing = prev.find((i) => `${i.id}::${i.shade}` === key);
      if (existing) {
        return prev.map((i) =>
          `${i.id}::${i.shade}` === key ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { id: productId, qty, shade }];
    });
    notify(`${product.name} added to bag.`);
  };

  const updateQty = (productId, shade, qty) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === productId && i.shade === shade ? { ...i, qty } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const removeFromCart = (productId, shade) => {
    setCart((prev) => prev.filter((i) => !(i.id === productId && i.shade === shade)));
    notify("Removed from bag.");
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        notify("Removed from wishlist.");
        return prev.filter((id) => id !== productId);
      }
      notify("Saved to wishlist.");
      return [...prev, productId];
    });
  };

  const placeOrder = ({ shipping, payment }) => {
    if (!user) throw new Error("Please log in to checkout.");
    if (!cart.length) throw new Error("Your bag is empty.");
    const items = cart.map((line) => {
      const product = PRODUCTS.find((p) => p.id === line.id);
      return {
        ...line,
        name: product.name,
        image: product.image,
        price: product.price,
        brand: product.brand,
      };
    });
    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
    const shippingFee = subtotal >= 1999 ? 0 : 99;
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + shippingFee + tax;
    const order = {
      id: `VL-${Date.now().toString().slice(-8)}`,
      userId: user.id,
      items,
      shipping,
      payment: { method: payment.method, last4: payment.last4 || "", status: "paid" },
      subtotal,
      shippingFee,
      tax,
      total,
      status: "Processing",
      createdAt: new Date().toISOString(),
    };
    setOrders((prev) => [order, ...prev]);
    setCart([]);
    notify("Payment successful. Order placed.");
    return order;
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartDetailed = cart.map((line) => ({
    ...line,
    product: PRODUCTS.find((p) => p.id === line.id),
  }));
  const subtotal = cartDetailed.reduce(
    (s, i) => s + (i.product?.price || 0) * i.qty,
    0
  );

  const value = useMemo(
    () => ({
      user,
      cart,
      cartDetailed,
      cartCount,
      subtotal,
      wishlist,
      orders: orders.filter((o) => (user ? o.userId === user.id : false)),
      toast,
      notify,
      signup,
      login,
      logout,
      updateProfile,
      getProfile,
      addToCart,
      updateQty,
      removeFromCart,
      toggleWishlist,
      placeOrder,
    }),
    [user, cart, wishlist, orders, toast, cartCount, subtotal, cartDetailed]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
