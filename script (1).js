/**
 * ============================================================
 * EZMUSH BAKERS — Main JavaScript
 * Author: Ezmush Bakers Dev Team
 * Version: 1.0.0
 * ============================================================
 */

'use strict';

/* ============================================================
   PRODUCT DATA
   All products with name, category, price (PKR), image URL,
   description, and optional badge type.
   ============================================================ */
const products = [
  {
    id: 1,
    name: 'Belgian Chocolate Truffle Cake',
    category: 'cakes',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    desc: 'Rich, velvety layers of Belgian chocolate ganache and moist chocolate sponge — the ultimate indulgence.',
    badge: 'bestseller',
    badgeLabel: 'Best Seller'
  },
  {
    id: 2,
    name: 'Red Velvet Dream Cake',
    category: 'cakes',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80',
    desc: 'Classic American red velvet paired with our signature cream cheese frosting. A showstopper for every occasion.',
    badge: 'popular',
    badgeLabel: 'Popular'
  },
  {
    id: 3,
    name: 'Butter Croissants (6 pcs)',
    category: 'pastries',
    price: 850,
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&q=80',
    desc: 'Hand-rolled, French-style croissants made with imported European butter — flaky, golden, and irresistible.',
    badge: 'new',
    badgeLabel: 'New'
  },
  {
    id: 4,
    name: 'Fudge Brownies Box (12 pcs)',
    category: 'brownies',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=600&q=80',
    desc: 'Dense, gooey, and intensely chocolatey. Made with premium cocoa and zero compromise on quality.',
    badge: 'offer',
    badgeLabel: 'Special Offer'
  },
  {
    id: 5,
    name: 'Vanilla Bean Cupcakes (6 pcs)',
    category: 'cupcakes',
    price: 950,
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&q=80',
    desc: 'Fluffy vanilla sponge topped with luxurious Swiss meringue buttercream and fresh sprinkles.',
    badge: '',
    badgeLabel: ''
  },
  {
    id: 6,
    name: 'Sourdough Country Loaf',
    category: 'bread',
    price: 600,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    desc: 'Slow-fermented for 24 hours for a perfect open crumb and that unmistakeable tang. Baked fresh every morning.',
    badge: 'new',
    badgeLabel: 'New'
  },
  {
    id: 7,
    name: 'Assorted Cookies Box (20 pcs)',
    category: 'cookies',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80',
    desc: 'A curated mix of chocolate chip, snickerdoodle, oatmeal raisin, and double chocolate cookies.',
    badge: 'bestseller',
    badgeLabel: 'Best Seller'
  },
  {
    id: 8,
    name: 'Mango Chantilly Cake',
    category: 'cakes',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&q=80',
    desc: 'Fresh Alfonso mango pulp layered between light vanilla sponge and whipped Chantilly cream. Seasonal delight.',
    badge: 'offer',
    badgeLabel: 'Limited'
  },
  {
    id: 9,
    name: 'Almond Danish Pastry (4 pcs)',
    category: 'pastries',
    price: 780,
    image: 'https://images.unsplash.com/photo-1558303240-d1b3eb1b0a63?w=600&q=80',
    desc: 'Flaky laminated pastry filled with rich almond frangipane and topped with toasted sliced almonds.',
    badge: '',
    badgeLabel: ''
  },
  {
    id: 10,
    name: 'Birthday Celebration Cake',
    category: 'cakes',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80',
    desc: 'Customise your dream birthday cake with your choice of flavour, colour, and message. Minimum 2-day notice.',
    badge: 'popular',
    badgeLabel: 'Popular'
  },
  {
    id: 11,
    name: 'Walnut Brownies (6 pcs)',
    category: 'brownies',
    price: 750,
    image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=600&q=80',
    desc: 'Our classic fudge brownie recipe elevated with premium California walnuts for a satisfying crunch.',
    badge: '',
    badgeLabel: ''
  },
  {
    id: 12,
    name: 'Marble Bundt Cake',
    category: 'cakes',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
    desc: 'A stunning swirl of vanilla and chocolate batters, glazed with a drizzle of Belgian chocolate ganache.',
    badge: 'new',
    badgeLabel: 'New'
  }
];

/* ============================================================
   CART STATE
   ============================================================ */
let cart = [];

/* ============================================================
   DOM HELPERS
   ============================================================ */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* ============================================================
   PRELOADER
   ============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = $('#preloader');
    if (preloader) {
      preloader.classList.add('hidden');
    }
    // Trigger initial reveal animations after page load
    triggerReveal();
  }, 1800);
});

/* ============================================================
   NAVBAR — Scroll behavior & sticky shadow
   ============================================================ */
const navbar = $('#navbar');

window.addEventListener('scroll', () => {
  // Navbar shadow on scroll
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top button
  const btt = $('#backToTop');
  if (btt) {
    if (window.scrollY > 400) {
      btt.classList.add('show');
    } else {
      btt.classList.remove('show');
    }
  }

  // Active nav link on scroll
  updateActiveNavLink();
});

function updateActiveNavLink() {
  const sections = $$('section[id], .hero[id]');
  const navLinks = $$('.nav-link');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === '#' + current) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
const bttBtn = $('#backToTop');
if (bttBtn) {
  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   HAMBURGER MENU (Mobile)
   ============================================================ */
const hamburger = $('#hamburger');
const navLinksEl = $('#navLinks');
let menuOpen = false;

if (hamburger && navLinksEl) {
  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    hamburger.classList.toggle('open', menuOpen);
    navLinksEl.classList.toggle('open', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinksEl.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      hamburger.classList.remove('open');
      navLinksEl.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================================
   SEARCH FUNCTIONALITY
   ============================================================ */
const searchToggle = $('#searchToggle');
const navSearch = $('#navSearch');
const searchInput = $('#searchInput');
const searchResults = $('#searchResults');

if (searchToggle && navSearch) {
  searchToggle.addEventListener('click', () => {
    navSearch.classList.toggle('open');
    if (navSearch.classList.contains('open')) {
      setTimeout(() => searchInput.focus(), 100);
    }
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      searchResults.classList.remove('show');
      searchResults.innerHTML = '';
      return;
    }

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item"><div class="sri-info"><strong>No results found</strong><span>Try a different keyword</span></div></div>';
    } else {
      searchResults.innerHTML = filtered.slice(0, 5).map(p => `
        <div class="search-result-item" data-id="${p.id}">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <div class="sri-info">
            <strong>${p.name}</strong>
            <span>Rs. ${p.price.toLocaleString()}</span>
          </div>
        </div>
      `).join('');

      // Click on search result → scroll to products + filter
      searchResults.querySelectorAll('.search-result-item[data-id]').forEach(item => {
        item.addEventListener('click', () => {
          const id = parseInt(item.dataset.id);
          const product = products.find(p => p.id === id);
          if (product) {
            filterProducts(product.category);
            const productsSection = $('#products');
            if (productsSection) {
              productsSection.scrollIntoView({ behavior: 'smooth' });
            }
            searchResults.classList.remove('show');
            searchInput.value = '';
            navSearch.classList.remove('open');
          }
        });
      });
    }

    searchResults.classList.add('show');
  });

  // Close search results on outside click
  document.addEventListener('click', (e) => {
    if (!navSearch.contains(e.target) && e.target !== searchToggle) {
      searchResults.classList.remove('show');
      if (!e.target.closest('#navSearch')) {
        navSearch.classList.remove('open');
      }
    }
  });
}

/* ============================================================
   PRODUCT RENDERING
   ============================================================ */
function renderProducts(filtered = products) {
  const grid = $('#productsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-light);padding:40px 0;">No products found in this category.</p>';
    return;
  }

  filtered.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.dataset.id = product.id;
    card.dataset.category = product.category;

    // Badge HTML
    let badgeHtml = '';
    if (product.badge === 'bestseller') {
      badgeHtml = `<div class="product-badge">${product.badgeLabel}</div>`;
    } else if (product.badge === 'new') {
      badgeHtml = `<div class="product-badge badge-new">${product.badgeLabel}</div>`;
    } else if (product.badge === 'offer' || product.badge === 'popular') {
      badgeHtml = `<div class="product-badge badge-offer">${product.badgeLabel}</div>`;
    }

    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${badgeHtml}
        <div class="product-overlay">
          <button class="btn btn-primary add-cart-overlay" data-id="${product.id}">
            <i class="fa-solid fa-basket-shopping"></i> Add to Basket
          </button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-category">${capitalise(product.category)}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-footer">
          <div class="product-price">Rs. ${product.price.toLocaleString()} <span>/item</span></div>
          <button class="add-to-cart" data-id="${product.id}" aria-label="Add to basket">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);

    // Stagger animation
    setTimeout(() => {
      card.classList.add('visible');
    }, index * 80 + 100);
  });

  // Attach add-to-cart events
  grid.querySelectorAll('.add-to-cart, .add-cart-overlay').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });
}

/* ============================================================
   CATEGORY FILTER
   ============================================================ */
function filterProducts(category) {
  // Update active state on category cards
  $$('.category-card').forEach(card => {
    card.classList.remove('active');
    if (card.dataset.filter === category || (category === 'all' && card.dataset.filter === 'all')) {
      card.classList.add('active');
    }
  });

  const filtered = category === 'all' ? products : products.filter(p => p.category === category);
  renderProducts(filtered);
}

$$('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const filter = card.dataset.filter;
    filterProducts(filter);
    // Scroll to products section
    const productsSection = $('#products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Set "All Items" as default active
const allCard = document.querySelector('.category-card[data-filter="all"]');
if (allCard) allCard.classList.add('active');

/* ============================================================
   CART FUNCTIONALITY
   ============================================================ */
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
    showToast(`${product.name} quantity updated.`);
  } else {
    cart.push({ ...product, qty: 1 });
    showToast(`${product.name} added to basket!`);
  }

  updateCartUI();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const countEl = $('#cartCount');
  if (countEl) countEl.textContent = count;

  const cartBody = $('#cartBody');
  const cartFooter = $('#cartFooter');
  const cartTotalEl = $('#cartTotal');

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = '<p class="cart-empty">Your basket is empty.</p>';
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>Rs. ${item.price.toLocaleString()} x ${item.qty}</span>
      </div>
      <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove item">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join('');

  // Attach remove events
  cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(parseInt(btn.dataset.id));
    });
  });

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (cartTotalEl) cartTotalEl.textContent = `Rs. ${total.toLocaleString()}`;
  if (cartFooter) cartFooter.style.display = 'block';
}

function openCart() {
  const sidebar = $('#cartSidebar');
  const overlay = $('#cartOverlay');
  if (sidebar) sidebar.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const sidebar = $('#cartSidebar');
  const overlay = $('#cartOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Cart toggle
const cartBtn = $('#cartBtn');
const cartClose = $('#cartClose');
const cartOverlay = $('#cartOverlay');

if (cartBtn) cartBtn.addEventListener('click', openCart);
if (cartClose) cartClose.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
function showToast(message, duration = 3000) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ============================================================
   SCROLL REVEAL ANIMATION
   ============================================================ */
function triggerReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on index within parent
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 80}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  $$('.reveal').forEach(el => observer.observe(el));
}

// Re-trigger reveal after products render
function observeProducts() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.product-card').forEach(card => observer.observe(card));
}

/* ============================================================
   SMOOTH SCROLL FOR NAV LINKS
   ============================================================ */
$$('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const targetPos = target.offsetTop - navbarHeight;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   CONTACT FORM HANDLING
   ============================================================ */
const contactForm = $('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#cName').value.trim();
    const phone = $('#cPhone').value.trim();
    const city = $('#cCity').value;
    const msg = $('#cMsg').value.trim();

    if (!name || !phone || !city || !msg) {
      showToast('Please fill in all required fields.');
      return;
    }

    // Format WhatsApp message
    const waText = encodeURIComponent(
      `Hello Ezmush Bakers!\n\nName: ${name}\nPhone: ${phone}\nCity: ${city}\n\nMessage:\n${msg}`
    );
    const waUrl = `https://wa.me/923001234567?text=${waText}`;
    window.open(waUrl, '_blank', 'noopener');

    showToast('Redirecting you to WhatsApp...');
    contactForm.reset();
  });
}

/* ============================================================
   NEWSLETTER FORM HANDLING
   ============================================================ */
const newsletterForm = $('#newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('#newsletterEmail').value.trim();
    if (!email || !isValidEmail(email)) {
      showToast('Please enter a valid email address.');
      return;
    }
    showToast('Thank you! You have been subscribed successfully.');
    newsletterForm.reset();
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ============================================================
   UTILITY
   ============================================================ */
function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ============================================================
   INITIALISATION
   Run on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Render all products initially
  renderProducts();

  // Trigger scroll reveal for static elements
  triggerReveal();

  // Re-observe any dynamically rendered product cards
  setTimeout(observeProducts, 200);

  // Keyboard navigation: close cart on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      if (navSearch) navSearch.classList.remove('open');
      if (searchResults) searchResults.classList.remove('show');
    }
  });

  // Also re-trigger reveal on window resize (for layout changes)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      triggerReveal();
    }, 300);
  });
});
