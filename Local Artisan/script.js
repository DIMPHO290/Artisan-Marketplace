// Sample product data
const products = [
  {
      id: 1,
      title: "Handmade Ceramic Mug",
      artisan: "Clay Creations",
      price: "$35.00",
      image: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
      id: 2,
      title: "Woven Cotton Scarf",
      artisan: "Threads & Textiles",
      price: "$45.00",
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
      id: 3,
      title: "Wooden Cutting Board",
      artisan: "Timber Crafts",
      price: "$60.00",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
      id: 4,
      title: "Hand-blown Glass Vase",
      artisan: "Glass Art Studio",
      price: "$85.00",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

// Sample artisan data
const artisans = [
  {
      id: 1,
      name: "Sarah Johnson",
      craft: "Pottery",
      bio: "Specializing in hand-thrown stoneware with unique glazes.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
      id: 2,
      name: "Michael Chen",
      craft: "Woodworking",
      bio: "Creating functional art from sustainably sourced hardwoods.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
      id: 3,
      name: "Elena Rodriguez",
      craft: "Textiles",
      bio: "Handwoven textiles using traditional techniques with modern designs.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

// DOM elements
const productsGrid = document.querySelector('.products-grid');
const artisansGrid = document.querySelector('.artisans-grid');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeBtns = document.querySelectorAll('.close-btn');
const switchToLogin = document.getElementById('switchToLogin');
const switchToSignup = document.getElementById('switchToSignup');
const roleOptions = document.querySelectorAll('.role-option');
const ctaBtn = document.querySelector('.cta-btn');

// Generate product cards
function renderProducts() {
  productsGrid.innerHTML = '';
  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.title}" class="product-image">
          <div class="product-info">
              <h3 class="product-title">${product.title}</h3>
              <p class="product-artisan">By ${product.artisan}</p>
              <p class="product-price">${product.price}</p>
              <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
          </div>
      `;
      productsGrid.appendChild(productCard);
  });
  
  // Add event listeners to "Add to Cart" buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
          const productId = this.getAttribute('data-id');
          const product = products.find(p => p.id == productId);
          alert(`Added ${product.title} to your cart!`);
      });
  });
}

// Generate artisan cards
function renderArtisans() {
  artisansGrid.innerHTML = '';
  artisans.forEach(artisan => {
      const artisanCard = document.createElement('div');
      artisanCard.className = 'artisan-card';
      artisanCard.innerHTML = `
          <img src="${artisan.image}" alt="${artisan.name}" class="artisan-image">
          <h3>${artisan.name}</h3>
          <p class="artisan-craft">${artisan.craft}</p>
          <p class="artisan-bio">${artisan.bio}</p>
      `;
      artisansGrid.appendChild(artisanCard);
  });
}

// Modal functionality
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'flex';
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', function() {
      this.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
  }
});

switchToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupModal.style.display = 'none';
  loginModal.style.display = 'flex';
});

switchToSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'none';
  signupModal.style.display = 'flex';
});

// Role selection
roleOptions.forEach(option => {
  option.addEventListener('click', function() {
      roleOptions.forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
  });
});

// Form submission handling
document.querySelector('#loginModal .form-submit').addEventListener('click', handleLogin);
document.querySelector('#signupModal .form-submit').addEventListener('click', handleSignup);

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Basic validation
  if (!email || !password) {
      alert('Please fill in all fields');
      return;
  }
  
  // In a real app, you would send this to your backend
  console.log('Login attempt with:', { email, password });
  alert('Login functionality would connect to backend in a real app');
  loginModal.style.display = 'none';
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;
  const selectedRole = document.querySelector('.role-option.selected').getAttribute('data-role');
  
  // Basic validation
  if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
  }
  
  if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
  }
  
  // In a real app, you would send this to your backend
  console.log('Signup attempt with:', { name, email, password, role: selectedRole });
  alert(`Account created! Role: ${selectedRole}. This would connect to backend in a real app.`);
  signupModal.style.display = 'none';
}

// Make CTA button go to shop section
if (ctaBtn) {
  ctaBtn.addEventListener('click', function() {
      document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  renderArtisans();
});