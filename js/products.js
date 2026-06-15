/* ============================
   ShopEase - Product Data
   ============================ */

const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 15000,
    oldPrice: 20000,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    desc: "Over-ear headphones with noise cancellation and 30-hour battery life."
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    category: "Electronics",
    price: 28000,
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    desc: "Fitness tracking, heart rate monitor, and notifications on your wrist."
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 9500,
    oldPrice: 12000,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    desc: "Compact speaker with deep bass and 12-hour playtime, water resistant."
  },
  {
    id: 4,
    name: "Men's Classic Sneakers",
    category: "Fashion",
    price: 12000,
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    desc: "Comfortable everyday sneakers made with breathable canvas material."
  },
  {
    id: 5,
    name: "Women's Leather Handbag",
    category: "Fashion",
    price: 18500,
    oldPrice: 22000,
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
    desc: "Elegant faux-leather handbag with adjustable strap and spacious interior."
  },
  {
    id: 6,
    name: "Unisex Hooded Jacket",
    category: "Fashion",
    price: 14000,
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
    desc: "Warm fleece-lined hoodie, perfect for cool evenings and outdoor wear."
  },
  {
    id: 7,
    name: "Stainless Steel Cookware Set",
    category: "Home & Kitchen",
    price: 32000,
    oldPrice: 38000,
    img: "https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?w=500&q=80",
    desc: "5-piece non-stick cookware set, durable and easy to clean."
  },
  {
    id: 8,
    name: "LED Desk Lamp",
    category: "Home & Kitchen",
    price: 6500,
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
    desc: "Adjustable brightness desk lamp with USB charging port."
  },
  {
    id: 9,
    name: "Ceramic Dinner Set (16-Piece)",
    category: "Home & Kitchen",
    price: 21000,
    oldPrice: 25000,
    img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&q=80",
    desc: "Modern ceramic dinnerware set including plates, bowls, and mugs."
  },
  {
    id: 10,
    name: "Yoga Mat with Carry Strap",
    category: "Sports & Outdoors",
    price: 7000,
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80",
    desc: "Non-slip, extra-thick yoga mat suitable for all fitness levels."
  },
  {
    id: 11,
    name: "Adjustable Dumbbell Set",
    category: "Sports & Outdoors",
    price: 45000,
    oldPrice: 52000,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
    desc: "Pair of adjustable dumbbells, ideal for home strength training."
  },
  {
    id: 12,
    name: "Camping Tent (4-Person)",
    category: "Sports & Outdoors",
    price: 39000,
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&q=80",
    desc: "Waterproof tent with easy setup, great for camping trips and hikes."
  },
  {
    id: 13,
    name: "Children's Storybook Set",
    category: "Books",
    price: 5000,
    oldPrice: 6500,
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
    desc: "Set of 5 colourful illustrated storybooks for early readers."
  },
  {
    id: 14,
    name: "Novel Collection Box Set",
    category: "Books",
    price: 13500,
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&q=80",
    desc: "Collection of 3 bestselling novels in a beautifully designed box set."
  },
  {
    id: 15,
    name: "Organic Skincare Gift Set",
    category: "Beauty",
    price: 16000,
    oldPrice: 19000,
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80",
    desc: "Natural skincare bundle including cleanser, toner, and moisturizer."
  },
  {
    id: 16,
    name: "Electric Hair Trimmer",
    category: "Beauty",
    price: 8500,
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80",
    desc: "Rechargeable hair trimmer with multiple attachment guides."
  }
];

// Convenience: list of unique categories
const CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))];
