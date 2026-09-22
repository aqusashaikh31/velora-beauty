export const CATEGORIES = [
  { id: "all", name: "All" },
  { id: "skincare", name: "Skincare" },
  { id: "makeup", name: "Makeup" },
  { id: "hair", name: "Hair" },
  { id: "fragrance", name: "Fragrance" },
  { id: "body", name: "Body" },
  { id: "tools", name: "Tools" },
];

export const PRODUCTS = [
  {
    id: "p1",
    name: "Rose Glow Serum",
    brand: "Velora Lab",
    category: "skincare",
    price: 2499,
    compareAt: 3199,
    rating: 4.8,
    reviews: 312,
    stock: 24,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571781926291-989d4f6331e0?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "A lightweight rosehip and niacinamide serum that brightens dull skin and locks in a dewy glow. Suitable for daily AM/PM use.",
    shades: [],
    tags: ["glow", "serum", "niacinamide"],
  },
  {
    id: "p2",
    name: "Velvet Matte Lipstick",
    brand: "Velora Color",
    category: "makeup",
    price: 1299,
    compareAt: 1599,
    rating: 4.7,
    reviews: 540,
    stock: 40,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "A weightless matte lipstick with 12-hour wear and a cushion-soft finish. Infused with jojoba oil so lips stay comfortable.",
    shades: ["Rosewood", "Nude Blush", "Cherry Noir"],
    tags: ["lipstick", "matte"],
  },
  {
    id: "p3",
    name: "Hydra Cloud Moisturizer",
    brand: "Velora Lab",
    category: "skincare",
    price: 1899,
    compareAt: 2299,
    rating: 4.9,
    reviews: 801,
    stock: 18,
    badge: "Hero",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "A whipped cloud cream with hyaluronic acid and ceramides. Melts in, never greasy, and leaves skin plump for 48 hours.",
    shades: [],
    tags: ["moisturizer", "hydrating"],
  },
  {
    id: "p4",
    name: "Lash Volume Mascara",
    brand: "Velora Color",
    category: "makeup",
    price: 999,
    compareAt: 1299,
    rating: 4.6,
    reviews: 220,
    stock: 50,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1631214499551-10c1c0b0a0f5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631214499551-10c1c0b0a0f5?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Buildable, clump-free volume with a curved wand that lifts and fans every lash. Smudge-proof through humidity.",
    shades: ["Noir", "Brown Soft"],
    tags: ["mascara", "volume"],
  },
  {
    id: "p5",
    name: "Silk Repair Hair Oil",
    brand: "Velora Hair",
    category: "hair",
    price: 1599,
    compareAt: 1999,
    rating: 4.8,
    reviews: 190,
    stock: 22,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc37cd9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc37cd9?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "A weightless blend of argan and camellia oils that tames frizz, adds shine, and protects from heat up to 230°C.",
    shades: [],
    tags: ["hair oil", "shine"],
  },
  {
    id: "p6",
    name: "Bloom Eau de Parfum",
    brand: "Velora Scent",
    category: "fragrance",
    price: 4299,
    compareAt: 4999,
    rating: 4.9,
    reviews: 144,
    stock: 12,
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Peony, white musk and vanilla orchid. A luminous floral that lingers softly from morning to night.",
    shades: [],
    tags: ["perfume", "floral"],
  },
  {
    id: "p7",
    name: "Vitamin C Bright Cream",
    brand: "Velora Lab",
    category: "skincare",
    price: 2199,
    compareAt: 2699,
    rating: 4.7,
    reviews: 276,
    stock: 30,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Stabilized 15% vitamin C cream that fades dark spots and evens tone without irritation. Use in the morning under SPF.",
    shades: [],
    tags: ["vitamin c", "brightening"],
  },
  {
    id: "p8",
    name: "Nude Eye Palette",
    brand: "Velora Color",
    category: "makeup",
    price: 2799,
    compareAt: 3499,
    rating: 4.8,
    reviews: 410,
    stock: 16,
    badge: "Editor pick",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Twelve blendable nudes from champagne to espresso. Buttery mattes and multidimensional shimmers for everyday glam.",
    shades: [],
    tags: ["palette", "eyes"],
  },
  {
    id: "p9",
    name: "Vanilla Body Butter",
    brand: "Velora Body",
    category: "body",
    price: 1199,
    compareAt: 1499,
    rating: 4.6,
    reviews: 98,
    stock: 35,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Rich shea and cocoa butter whipped with Madagascar vanilla. Melts on contact and leaves skin silky, never sticky.",
    shades: [],
    tags: ["body", "butter"],
  },
  {
    id: "p10",
    name: "Jade Facial Roller",
    brand: "Velora Tools",
    category: "tools",
    price: 899,
    compareAt: 1299,
    rating: 4.5,
    reviews: 67,
    stock: 28,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Cooling genuine jade roller to depuff, boost product absorption, and sculpt the jawline. Store in the fridge for extra lift.",
    shades: [],
    tags: ["tools", "roller"],
  },
  {
    id: "p11",
    name: "Mineral SPF 50",
    brand: "Velora Lab",
    category: "skincare",
    price: 1699,
    compareAt: 1999,
    rating: 4.8,
    reviews: 333,
    stock: 42,
    badge: "Essential",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Invisible mineral sunscreen with zinc oxide. No white cast, reef-safe, and makeup-friendly. Daily non-negotiable.",
    shades: [],
    tags: ["spf", "sunscreen"],
  },
  {
    id: "p12",
    name: "Brow Sculpt Pencil",
    brand: "Velora Color",
    category: "makeup",
    price: 799,
    compareAt: 999,
    rating: 4.4,
    reviews: 155,
    stock: 60,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Ultra-fine 1.5mm pencil plus spoolie. Fills sparse areas with hair-like strokes that last through sweat and rain.",
    shades: ["Taupe", "Soft Brown", "Espresso"],
    tags: ["brow", "pencil"],
  },
  {
    id: "p13",
    name: "Overnight Repair Mask",
    brand: "Velora Lab",
    category: "skincare",
    price: 2399,
    compareAt: 2899,
    rating: 4.9,
    reviews: 201,
    stock: 14,
    badge: "Night ritual",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Sleep in this peptide and bakuchiol mask. Wake up to smoother texture, reduced redness, and a glass-skin finish.",
    shades: [],
    tags: ["mask", "night"],
  },
  {
    id: "p14",
    name: "Liquid Light Highlighter",
    brand: "Velora Color",
    category: "makeup",
    price: 1399,
    compareAt: 1699,
    rating: 4.7,
    reviews: 188,
    stock: 26,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "A dew-drop highlighter that blends into skin, not on top of it. Mix with foundation or tap on cheekbones.",
    shades: ["Champagne", "Rose Gold"],
    tags: ["highlighter", "glow"],
  },
  {
    id: "p15",
    name: "Keratin Smooth Shampoo",
    brand: "Velora Hair",
    category: "hair",
    price: 1099,
    compareAt: 1399,
    rating: 4.5,
    reviews: 121,
    stock: 38,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Sulfate-free keratin shampoo that smooths the cuticle, reduces breakage, and keeps color vibrant for longer.",
    shades: [],
    tags: ["shampoo", "keratin"],
  },
  {
    id: "p16",
    name: "Peony Hair & Body Mist",
    brand: "Velora Scent",
    category: "fragrance",
    price: 1499,
    compareAt: 1799,
    rating: 4.6,
    reviews: 87,
    stock: 20,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "A sheer mist of peony water and sandalwood. Refresh hair, linen, and pulse points throughout the day.",
    shades: [],
    tags: ["mist", "peony"],
  },
  {
    id: "p17",
    name: "Soft Blush Stick",
    brand: "Velora Color",
    category: "makeup",
    price: 1199,
    compareAt: 1499,
    rating: 4.8,
    reviews: 264,
    stock: 33,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Cream-to-powder blush stick for cheeks and lips. Build from a hint of flush to a sculpted pop of color.",
    shades: ["Petal", "Berry", "Apricot"],
    tags: ["blush", "cream"],
  },
  {
    id: "p18",
    name: "Exfoliating Body Polish",
    brand: "Velora Body",
    category: "body",
    price: 1299,
    compareAt: 1599,
    rating: 4.5,
    reviews: 73,
    stock: 19,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Sugar and jojoba beads buff away dullness. Finish with a warm coconut-amber scent that lingers after the shower.",
    shades: [],
    tags: ["scrub", "body"],
  },
  {
    id: "p19",
    name: "Gua Sha Sculpt Stone",
    brand: "Velora Tools",
    category: "tools",
    price: 999,
    compareAt: 1299,
    rating: 4.6,
    reviews: 54,
    stock: 21,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1614806687007-2215a2294216?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614806687007-2215a2294216?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Heart-shaped rose quartz gua sha for lymphatic drainage and facial sculpting. Pair with oil for a spa-level glide.",
    shades: [],
    tags: ["gua sha", "tools"],
  },
  {
    id: "p20",
    name: "Clean Tint Foundation",
    brand: "Velora Color",
    category: "makeup",
    price: 2099,
    compareAt: 2499,
    rating: 4.7,
    reviews: 390,
    stock: 27,
    badge: "Inclusive",
    image:
      "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "A skin-like serum foundation with buildable coverage and SPF 20. Breathable, hydrating, and never cakey.",
    shades: ["Ivory", "Warm Sand", "Golden", "Deep Cocoa"],
    tags: ["foundation", "skin tint"],
  },
  {
    id: "p21",
    name: "Curl Define Cream",
    brand: "Velora Hair",
    category: "hair",
    price: 1399,
    compareAt: 1699,
    rating: 4.6,
    reviews: 102,
    stock: 17,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Defines curls without crunch. Flaxseed and aloe lock in bounce and fight humidity through a long day.",
    shades: [],
    tags: ["curls", "cream"],
  },
  {
    id: "p22",
    name: "Amber Night Perfume",
    brand: "Velora Scent",
    category: "fragrance",
    price: 4599,
    compareAt: 5299,
    rating: 4.9,
    reviews: 76,
    stock: 9,
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Warm amber, cedar and a hint of cocoa. An evening fragrance that feels like silk against the skin.",
    shades: [],
    tags: ["perfume", "amber"],
  },
  {
    id: "p23",
    name: "Lip Sleeping Mask",
    brand: "Velora Lab",
    category: "skincare",
    price: 699,
    compareAt: 899,
    rating: 4.8,
    reviews: 512,
    stock: 55,
    badge: "Mini luxury",
    image:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "A berry-scented overnight lip treatment with shea and peptides. Softens flakes and plumps by morning.",
    shades: [],
    tags: ["lips", "mask"],
  },
  {
    id: "p24",
    name: "Satin Hand Cream",
    brand: "Velora Body",
    category: "body",
    price: 599,
    compareAt: 799,
    rating: 4.5,
    reviews: 140,
    stock: 70,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Fast-absorbing hand cream with squalane. Purse-friendly tube that rescues dry cuticles without residue.",
    shades: [],
    tags: ["hands", "cream"],
  },
];

export function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
