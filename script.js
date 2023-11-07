// STICKY NAVIGATION
const haveHeader = document.querySelector(".header");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    !ent.isIntersecting && document.body.classList.add("sticky");
    ent.isIntersecting && document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
if (haveHeader) obs.observe(haveHeader);
else document.body.classList.add("sticky");

// LAZY LOADING FOR HIGH RESOLUTION IMAGES
const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// MODAL WINDOW
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.forEach((btn) => btn.addEventListener("click", closeModal));

if (overlay) overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// FORM TRANSFORMATION
const rightFormButton = document.getElementById("rightForm");
const leftFormButton = document.getElementById("leftForm");
const container = document.getElementById("containerModal");

if (rightFormButton)
  rightFormButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

if (leftFormButton)
  leftFormButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

/* ---------------------------------------------------- CART FEATURE ----------------------------------------------- */
// 1. PRICE CALCULATING
const decBtn = document.querySelector(".quantity .quantity-btn.inc");
const incBtn = document.querySelector(".quantity .quantity-btn.dec");
const quantity = document.querySelector(".quantity div");
let currQuantity;

if (quantity) currQuantity = +quantity.textContent;
const totalPrice = document.querySelector(".price span");
let startPrice;

if (totalPrice) startPrice = +totalPrice.textContent;
let sizePrice = startPrice;

let currPrice;
if (totalPrice) currPrice = +totalPrice.textContent;

// 1.1 Quantity
const decrease = function () {
  if (currQuantity <= 1) return;
  else {
    quantity.textContent = --currQuantity;
    currPrice = sizePrice * currQuantity;
    totalPrice.textContent = Math.floor(currPrice);
  }
};
const increase = function () {
  quantity.textContent = ++currQuantity;
  currPrice = sizePrice * currQuantity;
  totalPrice.textContent = Math.floor(currPrice);
};
if (decBtn) decBtn.addEventListener("click", decrease);
if (incBtn) incBtn.addEventListener("click", increase);

// 1.2 size
const sizes = document.querySelectorAll(".sizes .size");
const changeSize = function (e) {
  sizes.forEach((size) => size.classList.remove("active-size"));
  e.target.classList.add("active-size");
  if (e.target.textContent === "M") {
    sizePrice = startPrice - startPrice * 0.2;
    currPrice = sizePrice * currQuantity;
    totalPrice.textContent = Math.floor(currPrice);
  }

  if (e.target.textContent === "S") {
    sizePrice = startPrice - startPrice * 0.4;
    currPrice = sizePrice * currQuantity;
    totalPrice.textContent = Math.floor(currPrice);
  }

  if (e.target.textContent === "L") {
    sizePrice = startPrice - startPrice * 0;
    currPrice = sizePrice * currQuantity;
    totalPrice.textContent = Math.floor(currPrice);
  }
};
if (sizes) sizes.forEach((size) => size.addEventListener("click", changeSize));

// 2 ADD TO CART
function addToCart() {
  // Use querySelector to get the pizza details from the HTML elements
  const pizzaName = document.querySelector(".section-header-sub").innerText;
  const size = document.querySelector(".sizes .active-size")?.innerText;
  const quantity = document.querySelector(".quantity div").innerText;
  const price = document.querySelector(".price span").innerText;

  // Create a pizza object
  const pizza = {
    name: pizzaName,
    size: size,
    quantity: quantity,
    price: price,
  };

  // Get the existing cart items from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the new pizza to the cart
  cart.push(pizza);

  // Convert the cart into a JSON string
  const cartString = JSON.stringify(cart);

  // Store the updated cart string in localStorage
  localStorage.setItem("cart", cartString);
}

const addToCartBtn = document.querySelector(".detail-btn .btn-meal");
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", addToCart);
}

// 3 CART RENDERING
const displayCart = () => {
  // Get the cart items from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Get the ul element to display the cart items
  const ul = document.querySelector(".cart-list-items");

  // Clear the ul
  ul.innerHTML = "";

  // Calculate the total price
  let total = 0;

  // Loop through the cart items
  cart.forEach((item, index) => {
    // Create a new li element
    const li = `
          <li class="cart-list-item">
              <p>${item.name} x ${item.quantity} <span>${
      item.size || " "
    }</span></p>
              <div class="action">
                  <p>${item.price}.000 đ</p>
                  <button class="delete-btn" data-index="${index}">xoá</button>
              </div>
          </li>
      `;

    // Append the li element to the ul
    ul.innerHTML += li;

    // Add the price to the total
    total += +item.price;
  });

  // Create a new li element for the total
  const totalLi = `
      <li class="cart-list-item">
          <p>Tổng</p>
          <div class="action">
              <p>${total}.000 đ</p>
              <button>xoá</button>
          </div>
      </li>
  `;

  // Append the total li element to the ul
  ul.innerHTML += totalLi;

  // Add click event listeners to the delete buttons
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Get the index of the item to delete
      const index = e.target.getAttribute("data-index");

      // Remove the item from the cart
      cart.splice(index, 1);

      // Update the cart in localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Redisplay the cart
      displayCart();
    });
  });
};

const haveCart = document.querySelector(".section-cart");
if (haveCart) displayCart();

// 4 Cart Icon UI
// Create a MutationObserver instance
function updateUI() {
  // Get the cart items from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Get the total number of items in the cart
  const totalItems = cart.length;

  // Update the --total-items CSS variable

  document.documentElement.style.setProperty(
    "--total-items",
    `"${totalItems}"`
  );
}

// Call the function immediately to update the UI
updateUI();

// Set an interval to check the localStorage every second
setInterval(updateUI, 1000);
