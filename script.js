
        // Sample product data
        const products = [
            {
                id: 1,
                name: "Wireless Bluetooth Headphones",
                price: 79.99,
                oldPrice: 99.99,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                category: "Electronics",
                rating: 4.5,
                badge: "Sale",
                ecoFriendly: false
            },
            {
                id: 2,
                name: "Smart Fitness Watch",
                price: 129.99,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                category: "Electronics",
                rating: 4.7,
                badge: "Popular",
                ecoFriendly: true
            },
            {
                id: 3,
                name: "Laptop Backpack",
                price: 49.99,
                oldPrice: 59.99,
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2twYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                category: "Fashion",
                rating: 4.3,
                ecoFriendly: true
            },
            {
                id: 4,
                name: "Smartphone Gimbal",
                price: 89.99,
                image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Imaging/Camera%20Accessories/Images/252288_0_g2k58o.png?tr=w-600",
                category: "Electronics",
                rating: 4.6,
                ecoFriendly: false
            },
            {
                id: 5,
                name: "Wireless Charging Pad",
                price: 29.99,
                image: "https://www.belkin.com/dw/image/v2/BGBH_PRD/on/demandware.static/-/Sites-master-product-catalog-blk/default/dw784b55c7/images/hi-res/6/152404694_WIZ021ttBK_FPK_WEB.jpg?sfrm=png",
                category: "Electronics",
                rating: 4.2,
                badge: "New",
                ecoFriendly: false
            },
            {
                id: 6,
                name: "Portable Bluetooth Speaker",
                price: 59.99,
                oldPrice: 79.99,
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                category: "Electronics",
                rating: 4.4,
                badge: "Sale",
                ecoFriendly: true
            }
        ];

                const sampleOrders = [
            {
                id: "ORD-001",
                date: "2023-10-15",
                total: 189.97,
                status: "delivered",
                items: [
                    { name: "Wireless Bluetooth Headphones", quantity: 1, price: 79.99 },
                    { name: "Laptop Backpack", quantity: 1, price: 49.99 },
                    { name: "Portable Bluetooth Speaker", quantity: 1, price: 59.99 }
                ]
            },
            {
                id: "ORD-002",
                date: "2023-09-22",
                total: 129.99,
                status: "delivered",
                items: [
                    { name: "Smart Fitness Watch", quantity: 1, price: 129.99 }
                ]
            },
            {
                id: "ORD-003",
                date: "2023-11-05",
                total: 89.99,
                status: "pending",
                items: [
                    { name: "Smartphone Gimbal", quantity: 1, price: 89.99 }
                ]
            }
        ];

        // Cart functionality
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        let userOrders = JSON.parse(localStorage.getItem('userOrders')) || sampleOrders;

        // DOM elements
        const productsGrid = document.getElementById('productsGrid');
        const cartIcon = document.getElementById('cartIcon');
        const cartCount = document.getElementById('cartCount');
        const cartModal = document.getElementById('cartModal');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const closeCart = document.getElementById('closeCart');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const loginModal = document.getElementById('loginModal');
        const closeLogin = document.getElementById('closeLogin');
        const modalOverlay = document.getElementById('modalOverlay');
        const loginTabs = document.querySelectorAll('.login-tab');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const voiceSearchBtn = document.getElementById('voiceSearchBtn');
        const voiceStatus = document.getElementById('voiceStatus');
        const headerSearchInputs = document.querySelectorAll('.search-box input, #searchBar, #searchBoxHeader');
        const authButtons = document.getElementById('authButtons');
        const userProfile = document.getElementById('userProfile');
        const userAvatar = document.getElementById('userAvatar');
        const userName = document.getElementById('userName');
        const userDropdown = document.getElementById('userDropdown');
        const myProfileBtn = document.getElementById('myProfileBtn');
        const pastOrdersBtn = document.getElementById('pastOrdersBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const profileModal = document.getElementById('profileModal');
        const closeProfile = document.getElementById('closeProfile');
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profileMemberSince = document.getElementById('profileMemberSince');
        const profileTotalOrders = document.getElementById('profileTotalOrders');
        const editProfileBtn = document.getElementById('editProfileBtn');
        const saveProfileBtn = document.getElementById('saveProfileBtn');
        const ordersModal = document.getElementById('ordersModal');
        const closeOrders = document.getElementById('closeOrders');
        const ordersList = document.getElementById('ordersList');
        const mainContent = document.getElementById('mainContent');
        const paymentPage = document.getElementById('paymentPage');
        const orderItems = document.getElementById('orderItems');
        const orderTotal = document.getElementById('orderTotal');
        const placeOrderBtn = document.getElementById('placeOrderBtn');
        const paymentMethods = document.querySelectorAll('.payment-method');

        // Display products
        function displayProducts() {
            productsGrid.innerHTML = '';
            const userWishlist = JSON.parse(localStorage.getItem('userWishlist')) || [];

            products.forEach(product => {
                const isInWishlist = userWishlist.some(item => item.id === product.id);

                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                let badgeHTML = '';
                if (product.badge) {
                    badgeHTML = `<div class="product-badge">${product.badge}</div>`;
                }

                // Add eco-friendly badge
                if (product.ecoFriendly) {
                    badgeHTML += `<div class="product-badge eco-badge">Eco-Friendly</div>`;
                }

                let oldPriceHTML = '';
                if (product.oldPrice) {
                    oldPriceHTML = `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>`;
                }

                // Generate star rating HTML
                let ratingHTML = '';
                for (let i = 1; i <= 5; i++) {
                    if (i <= Math.floor(product.rating)) {
                        ratingHTML += '<i class="fas fa-star"></i>';
                    } else if (i === Math.ceil(product.rating) && !Number.isInteger(product.rating)) {
                        ratingHTML += '<i class="fas fa-star-half-alt"></i>';
                    } else {
                        ratingHTML += '<i class="far fa-star"></i>';
                    }
                }

                        productCard.innerHTML = `
                    ${badgeHTML}
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-rating">
                            ${ratingHTML} <span>(${product.rating})</span>
                        </div>
                        <div class="product-price">
                            <div class="price">$${product.price.toFixed(2)} ${oldPriceHTML}</div>
                            <button class="add-to-cart" data-id="${product.id}">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                `;
                        // Add searchable text attributes for filtering
                        productCard.setAttribute('data-name', product.name.toLowerCase());
                        productCard.setAttribute('data-category', (product.category || '').toLowerCase());

                // wishlist button
                const wishlistButton = document.createElement('button');
                wishlistButton.className = `wishlist-btn ${isInWishlist ? 'active' : ''}`;
                wishlistButton.innerHTML = `<i class="fas fa-heart"></i>`;
                wishlistButton.setAttribute('data-id', product.id);

                // Add wishlist button to product info
                const productActions = productCard.querySelector('.product-price');
                productActions.appendChild(wishlistButton);

                productsGrid.appendChild(productCard);
            });

            // Add wishlist event listeners
            document.querySelectorAll('.wishlist-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                    toggleWishlist(productId);
                });
            });

            // Add event listeners to Add to Cart buttons (bind after rendering)
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        }

        // Filter products by query (name or category). Highlights matches
        function filterProducts(query) {
            const q = String(query || '').trim().toLowerCase();
            const cards = document.querySelectorAll('.product-card');
            if (!q) {
                cards.forEach(c => { c.classList.remove('hidden'); c.classList.remove('highlight'); });
                return;
            }

            cards.forEach(c => {
                const name = c.getAttribute('data-name') || '';
                const category = c.getAttribute('data-category') || '';
                const matches = name.includes(q) || category.includes(q);
                if (matches) {
                    c.classList.remove('hidden');
                    c.classList.add('highlight');
                } else {
                    c.classList.add('hidden');
                    c.classList.remove('highlight');
                }
            });
    
            // Scroll the first match into view and pulse it so it's obvious to the user
            const firstMatch = Array.from(cards).find(c => c.classList.contains('highlight'));
            if (firstMatch) {
                try {
                    firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } catch (err) {
                    firstMatch.scrollIntoView();
                }
                firstMatch.classList.add('pulse');
                setTimeout(() => firstMatch.classList.remove('pulse'), 1200);
            }
        }

        // Wire header search inputs
        headerSearchInputs.forEach(inp => {
            if (!inp) return;
            inp.addEventListener('input', (e) => {
                const v = e.target.value || '';
                // sync other inputs
                headerSearchInputs.forEach(i => { if (i !== e.target) i.value = v; });
                filterProducts(v);
            });
        });

        // Voice search support (Web Speech API)
        function createSpeechRecognition() {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
            if (!SpeechRecognition) return null;
            const recog = new SpeechRecognition();
            recog.lang = 'en-US';
            recog.interimResults = false;
            recog.maxAlternatives = 1;
            return recog;
        }

        const recognition = createSpeechRecognition();
        let recognizing = false;

        if (recognition) {
            recognition.addEventListener('start', () => { recognizing = true; voiceStatus.textContent = 'Listening...'; voiceSearchBtn.classList.add('listening'); });
            recognition.addEventListener('end', () => { recognizing = false; voiceStatus.textContent = 'Click the microphone and start speaking'; voiceSearchBtn.classList.remove('listening'); });
            recognition.addEventListener('result', (ev) => {
                const text = ev.results[0][0].transcript || '';
                headerSearchInputs.forEach(i => i.value = text);
                filterProducts(text);
                showNotification(`Voice search: "${text}"`);
            });
        }

        voiceSearchBtn.addEventListener('click', function() {
            if (!recognition) {
                showNotification('Voice search not supported in this browser');
                return;
            }

            try {
                if (recognizing) {
                    recognition.stop();
                } else {
                    recognition.start();
                }
            } catch (err) {
                console.error('Speech API error', err);
            }
        });


// Wishlist toggle function
function toggleWishlist(productId) {
    const userWishlist = JSON.parse(localStorage.getItem('userWishlist')) || [];
    const product = products.find(p => p.id === productId);
    const existingIndex = userWishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        // Remove from wishlist
        userWishlist.splice(existingIndex, 1);
        showNotification('Removed from wishlist');
    } else {
        // Add to wishlist
        userWishlist.push(product);
        showNotification('Added to wishlist');
    }
    
    localStorage.setItem('userWishlist', JSON.stringify(userWishlist));
    
    // Update button appearance
    const wishlistBtn = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);
    if (wishlistBtn) {
        wishlistBtn.classList.toggle('active');
    }
}

            // Add event listeners to Add to Cart buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        

        // Add product to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }

            updateCart();
            showNotification(`${product.name} added to cart!`);
        }

        // Update cart display and localStorage
        function updateCart() {
            // Update cart count
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;

            // Update cart modal
            updateCartModal();

            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // Update cart modal
        function updateCartModal() {
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
                cartTotal.textContent = '$0.00';
                return;
            }
            
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-item" data-id="${item.id}">Remove</button>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            
            cartTotal.textContent = `$${total.toFixed(2)}`;
            
            // Add event listeners to quantity buttons
            document.querySelectorAll('.decrease').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                    updateQuantity(productId, -1);
                });
            });
            
            document.querySelectorAll('.increase').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                    updateQuantity(productId, 1);
                });
            });
            
            document.querySelectorAll('.quantity-input').forEach(input => {
                input.addEventListener('change', (e) => {
                    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                    const newQuantity = parseInt(e.target.value);
                    setQuantity(productId, newQuantity);
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });
        }

        // Update item quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity < 1) {
                    removeFromCart(productId);
                } else {
                    updateCart();
                }
            }
        }

        // Set item quantity
        function setQuantity(productId, quantity) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                if (quantity < 1) {
                    removeFromCart(productId);
                } else {
                    item.quantity = quantity;
                    updateCart();
                }
            }
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            showNotification('Item removed from cart');
        }

        // Show notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.backgroundColor = '#4a6cf7';
            notification.style.color = 'white';
            notification.style.padding = '12px 24px';
            notification.style.borderRadius = '5px';
            notification.style.zIndex = '1002';
            notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            notification.style.fontWeight = '500';
            
            document.body.appendChild(notification);
            
            // Remove after 3 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 3000);
        }
        function updateUI() {
            if (currentUser) {
                authButtons.style.display = 'none';
                userProfile.style.display = 'flex';
                userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
                userName.textContent = currentUser.name;
                
                // Update profile modal with user data
                profileName.textContent = currentUser.name;
                profileEmail.textContent = currentUser.email;
                profileMemberSince.textContent = currentUser.memberSince || 'January 2023';
                profileTotalOrders.textContent = userOrders.length;
            } else {
                authButtons.style.display = 'flex';
                userProfile.style.display = 'none';
            }
        }

        // Show payment page
        function showPaymentPage() {
            mainContent.style.display = 'none';
            paymentPage.style.display = 'block';
            
            // Update order summary
            updateOrderSummary();
        }

        // Update order summary on payment page
        function updateOrderSummary() {
            orderItems.innerHTML = '';
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const orderItem = document.createElement('div');
                orderItem.className = 'order-item';
                orderItem.innerHTML = `
                    <span>${item.name} x${item.quantity}</span>
                    <span>$${itemTotal.toFixed(2)}</span>
                `;
                orderItems.appendChild(orderItem);
            });
            
            orderTotal.textContent = `$${total.toFixed(2)}`;
        }
          // Display past orders
        function displayOrders() {
            ordersList.innerHTML = '';
            
            if (userOrders.length === 0) {
                ordersList.innerHTML = `
                    <div class="no-orders">
                        <i class="fas fa-shopping-bag"></i>
                        <p>You haven't placed any orders yet</p>
                    </div>
                `;
                return;
            }
            
            userOrders.forEach(order => {
                const orderItem = document.createElement('div');
                orderItem.className = 'order-item';
                
                let statusClass = '';
                switch(order.status) {
                    case 'delivered':
                        statusClass = 'status-delivered';
                        break;
                    case 'pending':
                        statusClass = 'status-pending';
                        break;
                    case 'cancelled':
                        statusClass = 'status-cancelled';
                        break;
                }
                
                const itemsText = order.items.map(item => 
                    `${item.name} (x${item.quantity})`
                ).join(', ');
                
                orderItem.innerHTML = `
                    <div class="order-header">
                        <div class="order-id">${order.id}</div>
                        <div class="order-date">${new Date(order.date).toLocaleDateString()}</div>
                    </div>
                    <div class="order-header">
                        <div class="order-total">$${order.total.toFixed(2)}</div>
                        <div class="order-status ${statusClass}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</div>
                    </div>
                    <div class="order-products">${itemsText}</div>
                `;
                ordersList.appendChild(orderItem);
            });
        }

        // Logout functionality
        function logout() {
            currentUser = null;
            localStorage.removeItem('currentUser');
            updateUI();
            showNotification('You have been logged out');
            userDropdown.classList.remove('active');
        }

        // Cart modal functionality
        cartIcon.addEventListener('click', () => {
            cartModal.classList.add('active');
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Your cart is empty!');
                return;
            }
            
            if (!currentUser) {
                showNotification('Please login to proceed to checkout');
                loginModal.classList.add('active');
                cartModal.classList.remove('active');
                return;
            }
            
            // User is logged in and cart has items, proceed to payment
            cartModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            showPaymentPage();
        });

        modalOverlay.addEventListener('click', () => {
            cartModal.classList.remove('active');
            loginModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Login modal functionality
        loginBtn.addEventListener('click', () => {
            loginModal.classList.add('active');
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            // Show login form by default
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            // Set active tab
            document.querySelectorAll('.login-tab').forEach(tab => {
                if (tab.getAttribute('data-tab') === 'login') {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
        });

        signupBtn.addEventListener('click', () => {
            loginModal.classList.add('active');
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            // Show signup form
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            // Set active tab
            document.querySelectorAll('.login-tab').forEach(tab => {
                if (tab.getAttribute('data-tab') === 'signup') {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
        });

        closeLogin.addEventListener('click', () => {
            loginModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Login tab switching
        loginTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.getAttribute('data-tab');
                
                // Update active tab
                loginTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show correct form
                if (tabName === 'login') {
                    loginForm.style.display = 'block';
                    signupForm.style.display = 'none';
                } else {
                    loginForm.style.display = 'none';
                    signupForm.style.display = 'block';
                }
            });
        });

// Form submissions
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simple validation
            if (!email || !password) {
                showNotification('Please fill in all fields');
                return;
            }
            
            // In a real app, you would send this to a server
            currentUser = {
                name: email.split('@')[0],
                email: email,
                memberSince: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
            };
            
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateUI();
            
            showNotification(`Logged in as ${email}`);
            loginModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            
            if (!name || !email || !password || !confirmPassword) {
                showNotification('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match');
                return;
            }
            
            // In a real app, you would send this to a server
            currentUser = {
                name: name,
                email: email,
                memberSince: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
            };
            
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateUI();
            
            showNotification(`Account created for ${name}`);
            loginModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // User dropdown functionality
        userProfile.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            userDropdown.classList.remove('active');
        });

        // My Profile button
        myProfileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            userDropdown.classList.remove('active');
            profileModal.classList.add('active');
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Past Orders button
        pastOrdersBtn.addEventListener('click', (e) => {
            e.preventDefault();
            userDropdown.classList.remove('active');
            displayOrders();
            ordersModal.classList.add('active');
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Logout button
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            userDropdown.classList.remove('active');
            logout();
        });

        // Close profile modal
        closeProfile.addEventListener('click', () => {
            profileModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close orders modal
        closeOrders.addEventListener('click', () => {
            ordersModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Edit profile functionality
        editProfileBtn.addEventListener('click', () => {
            // Make profile fields editable
            profileName.contentEditable = true;
            profileEmail.contentEditable = true;
            profileName.style.border = "1px solid #ddd";
            profileEmail.style.border = "1px solid #ddd";
            profileName.style.padding = "5px";
            profileEmail.style.padding = "5px";
            profileName.style.borderRadius = "3px";
            profileEmail.style.borderRadius = "3px";
            
            editProfileBtn.style.display = 'none';
            saveProfileBtn.style.display = 'inline-block';
        });

        saveProfileBtn.addEventListener('click', () => {
            // Save profile changes
            currentUser.name = profileName.textContent;
            currentUser.email = profileEmail.textContent;
            
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateUI();
            
            // Make fields non-editable again
            profileName.contentEditable = false;
            profileEmail.contentEditable = false;
            profileName.style.border = "none";
            profileEmail.style.border = "none";
            profileName.style.padding = "0";
            profileEmail.style.padding = "0";
            
            editProfileBtn.style.display = 'inline-block';
            saveProfileBtn.style.display = 'none';
            
            showNotification('Profile updated successfully');
        });

        // Payment method selection
        paymentMethods.forEach(method => {
            method.addEventListener('click', () => {
                // ... existing payment method handler ...
            });
        });

         // Place order button
       placeOrderBtn.addEventListener('click', () => {
    // Create a new order
    if (cart.length > 0) {
        const newOrder = {
            id: "ORD-" + (userOrders.length + 1).toString().padStart(3, '0'),
            date: new Date().toISOString().split('T')[0],
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            status: "pending",
            items: cart.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price
            }))
        };
        
        // Add to user orders
        userOrders.unshift(newOrder);
        localStorage.setItem('userOrders', JSON.stringify(userOrders));
        
        // Calculate and update reward points (1 point per $10 spent)
        const pointsEarned = Math.floor(newOrder.total / 10);
        const currentPoints = parseInt(localStorage.getItem('userRewardPoints')) || 850;
        const newPoints = currentPoints + pointsEarned;
        localStorage.setItem('userRewardPoints', newPoints.toString());
        
        // Update total spent
        const currentSpent = parseFloat(localStorage.getItem('userTotalSpent')) || 0;
        const newSpent = currentSpent + newOrder.total;
        localStorage.setItem('userTotalSpent', newSpent.toString());
        
        showNotification(`Order placed successfully! Earned ${pointsEarned} reward points!`);
        
        // Clear cart after successful order
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        
        // Redirect back to home page after a delay
        setTimeout(() => {
            mainContent.style.display = 'block';
            paymentPage.style.display = 'none';
        }, 2000);
    }
     });

        // Voice search functionality
        voiceSearchBtn.addEventListener('click', function() {
            // ... existing voice search handler ...
        });

        // Initialize the page
        displayProducts();
        updateCart();
        updateUI();
          // Add Admin Access Elements
        const adminAccessBtn = document.getElementById('adminAccessBtn');
        const adminModal = document.getElementById('adminModal');
        const closeAdminModal = document.getElementById('closeAdminModal');
        const adminPasswordInput = document.getElementById('adminPasswordInput');
        const adminSubmitBtn = document.getElementById('adminSubmitBtn');
        const adminError = document.getElementById('adminError');

        // Admin credentials (should be more secure in production)
        const ADMIN_PASSWORD = "admin123"; // Change this in production

        // Admin access functionality
        adminAccessBtn.addEventListener('click', () => {
            adminModal.classList.add('active');
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            adminPasswordInput.focus();
        });

        closeAdminModal.addEventListener('click', () => {
            adminModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            adminError.style.display = 'none';
            adminPasswordInput.value = '';
        });

        adminSubmitBtn.addEventListener('click', () => {
            const enteredPassword = adminPasswordInput.value;
            
            if (enteredPassword === ADMIN_PASSWORD) {
                // Successful login - redirect to admin page
                window.location.href = 'admin.html';
            } else {
                // Show error
                adminError.style.display = 'block';
                adminPasswordInput.value = '';
                adminPasswordInput.focus();
            }
        });

        // Allow Enter key to submit admin password
        adminPasswordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                adminSubmitBtn.click();
            }
        });

        // Close admin modal when clicking overlay
        modalOverlay.addEventListener('click', () => {
            adminModal.classList.remove('active');
            adminError.style.display = 'none';
            adminPasswordInput.value = '';
        });

// When user logs in
function userLogin(userEmail, userName) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists
    let user = users.find(u => u.email === userEmail);

    if (!user) {
        // Add new user
        user = {
            id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
            name: userName,
            email: userEmail,
            joined: new Date().toISOString().split('T')[0],
            orders: 0,
            status: 'active',
            cart: []  // Add cart property to track current cart items
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    localStorage.setItem('currentUser', JSON.stringify(user)); // Save logged-in user
}
// Place order button
placeOrderBtn.addEventListener('click', () => {
    // Get shipping information
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zipCode').value;
    
    // Validate form
    if (!firstName || !lastName || !address || !city || !zipCode) {
        showNotification('Please fill in all shipping information');
        return;
    }

    // Create a new order
    if (cart.length > 0) {
        const newOrder = {
            id: "ORD-" + Date.now(), // Unique ID using timestamp
            date: new Date().toISOString(),
            customer: {
                name: firstName + ' ' + lastName,
                email: currentUser ? currentUser.email : 'guest@example.com'
            },
            shippingAddress: address + ', ' + city + ', ' + zipCode,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            status: "pending",
            items: cart.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price
            }))
        };
        
        // Save to user orders
        userOrders.unshift(newOrder);
        localStorage.setItem('userOrders', JSON.stringify(userOrders));
        
        // Save to admin orders (shared storage)
        saveOrderToAdmin(newOrder);
        
        // Calculate and update reward points (1 point per $10 spent)
        const pointsEarned = Math.floor(newOrder.total / 10);
        const currentPoints = parseInt(localStorage.getItem('userRewardPoints')) || 850;
        const newPoints = currentPoints + pointsEarned;
        localStorage.setItem('userRewardPoints', newPoints.toString());
        
        // Update total spent
        const currentSpent = parseFloat(localStorage.getItem('userTotalSpent')) || 0;
        const newSpent = currentSpent + newOrder.total;
        localStorage.setItem('userTotalSpent', newSpent.toString());
        
        showNotification(`Order placed successfully! Earned ${pointsEarned} reward points!`);
        
        // Clear cart after successful order
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        
        // Redirect back to home page after a delay
        setTimeout(() => {
            mainContent.style.display = 'block';
            paymentPage.style.display = 'none';
        }, 2000);
    }
});

// Function to save order to admin storage
function saveOrderToAdmin(order) {
    // Get existing admin orders or initialize empty array
    let adminOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
    
    // Add new order
    adminOrders.unshift(order);
    
    // Save back to localStorage
    localStorage.setItem('allOrders', JSON.stringify(adminOrders));
    
    // Also update the sample orders for admin (if they exist)
    if (adminOrders.length > 0) {
        localStorage.setItem('allOrders', JSON.stringify(adminOrders));
    }
}

// ... (rest of existing JavaScript) ...