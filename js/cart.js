/* ============================
   ShopEase - Shared Cart & UI Logic
   ============================ */

const CART_KEY = "shopease_cart";

/* ---------- Helpers ---------- */
function formatPrice(amount) {
  return "₦" + amount.toLocaleString("en-NG");
}

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart(cart);
}

function updateCartItemQty(productId, qty) {
  let cart = getCart();
  if (qty <= 0) {
    cart = cart.filter(item => item.id !== productId);
  } else {
    const item = cart.find(item => item.id === productId);
    if (item) item.qty = qty;
  }
  saveCart(cart);
  renderCartSidebar();
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCartSidebar();
}

/* ---------- Toast ---------- */
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

/* ---------- Cart Count Badge ---------- */
function updateCartCount() {
  const badge = document.getElementById("cartCount");
  if (badge) {
    badge.textContent = getCartCount();
  }
}

/* ---------- Cart Sidebar Rendering ---------- */
function renderCartSidebar() {
  const cartItemsEl = document.getElementById("cartItems");
  const cartFooterEl = document.getElementById("cartFooter");
  if (!cartItemsEl) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<div class="cart-empty">Your cart is empty. Start shopping to add items!</div>`;
    if (cartFooterEl) cartFooterEl.style.display = "none";
    return;
  }

  if (cartFooterEl) cartFooterEl.style.display = "block";

  cartItemsEl.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return "";
    return `
      <div class="cart-item" data-id="${product.id}">
        <img src="${product.img}" alt="${product.name}">
        <div class="cart-item-info">
          <h4>${product.name}</h4>
          <div class="cart-item-price">${formatPrice(product.price)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" data-action="decrease" aria-label="Decrease quantity">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-action="increase" aria-label="Increase quantity">+</button>
            <button class="remove-item" data-action="remove">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const totalEl = document.getElementById("cartTotal");
  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());

  // Attach event listeners
  cartItemsEl.querySelectorAll(".cart-item").forEach(itemEl => {
    const id = parseInt(itemEl.dataset.id);
    const cartItem = cart.find(c => c.id === id);

    itemEl.querySelector('[data-action="increase"]').addEventListener("click", () => {
      updateCartItemQty(id, cartItem.qty + 1);
    });
    itemEl.querySelector('[data-action="decrease"]').addEventListener("click", () => {
      updateCartItemQty(id, cartItem.qty - 1);
    });
    itemEl.querySelector('[data-action="remove"]').addEventListener("click", () => {
      removeFromCart(id);
    });
  });
}

/* ---------- Cart Sidebar Open/Close ---------- */
function openCart() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");
  if (!sidebar || !overlay) return;

  sidebar.classList.add("open");
  overlay.classList.add("open");
  document.body.classList.add("cart-open");
  renderCartSidebar();
}

function closeCart() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");

  if (sidebar) sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("open");
  document.body.classList.remove("cart-open");
}

/* ---------- Mobile Nav Toggle ---------- */
function setupMobileNav() {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
}

/* ---------- Init shared UI on every page ---------- */
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  setupMobileNav();

  const cartBtn = document.getElementById("cartBtn");
  const closeCartBtn = document.getElementById("closeCart");
  const cartOverlay = document.getElementById("cartOverlay");

  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (getCart().length === 0) {
        showToast("Your cart is empty!");
        return;
      }
      showToast("Checkout successful! (demo only)");
      saveCart([]);
      renderCartSidebar();
      setTimeout(closeCart, 1200);
    });
  }
});
