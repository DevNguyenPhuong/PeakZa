/* -------------------------------------------- INIT FEATURE---------------------------------------------- */
function init() {
  let tableLines = Array.from(document.querySelectorAll(".table-line"));
  tableLines.pop();
  tableLines.shift();
  tableLines.forEach((tableLine) => {
    let quantityInput = tableLine.querySelector(".input-quantity");
    let basePriceDiv = tableLine.querySelector(".product-base-price");
    let totalPriceDiv = tableLine.querySelector(".product-total-price");
    let basePrice = +basePriceDiv.textContent;
    let quantity = +quantityInput.value;
    let totalPrice = basePrice * quantity;
    totalPriceDiv.textContent = totalPrice;
  });
  updateCartTotal();
}
init();

/* -------------------------------------------- CART PRICE CALCULATING FEATURE ---------------------------------------------- */
function updateCartTotalOnQuantityChange(input) {
  const choiseBtn = input.closest(".table-line").querySelector(".choiseBtn");
  if (choiseBtn.classList.contains("button-checked")) updateCartTotal();
}

function updateTotalPrice(input) {
  const tableLine = input.closest(".table-line");
  const basePriceDiv = tableLine.querySelector(".product-base-price");
  const totalPriceDiv = tableLine.querySelector(".product-total-price");
  let basePrice = +basePriceDiv.textContent;
  let quantity = +input.value;
  let totalPrice = basePrice * quantity;
  totalPriceDiv.textContent = totalPrice;
  updateCartTotalOnQuantityChange(input);
}

function dec(btn) {
  const input = btn.nextElementSibling;
  if (!input.disabled && input.value > input.min) {
    input.value--;
    updateTotalPrice(input);
  }
}

function inc(btn) {
  const input = btn.previousElementSibling;
  if (!input.disabled && input.value < input.max) {
    input.value++;
    updateTotalPrice(input);
  }
}
const decBtns = document.querySelectorAll(".table-line  .item  .dec-quantity");
decBtns.forEach((btn) =>
  btn.addEventListener("click", (event) => dec(event.target))
);

const incBtns = document.querySelectorAll(".table-line  .item  .inc-quantity");
incBtns.forEach((btn) =>
  btn.addEventListener("click", (event) => inc(event.target))
);

const quantityInputs = document.querySelectorAll(
  ".table-line  .item  .input-quantity"
);
quantityInputs.forEach((input) =>
  input.addEventListener("change", (event) => updateTotalPrice(event.target))
);

function updateCartTotal() {
  let tableLines = Array.from(
    document.querySelectorAll(".table-line:not(.hidden-table-line)")
  );
  tableLines.pop();
  tableLines.shift();
  let cartTotalDiv = document.querySelector(".cart-total");
  let cartTotal = 0;

  tableLines.forEach((tableLine) => {
    let choiseBtn = tableLine.querySelector(".choiseBtn");
    let quantityField = tableLine.querySelector(".quantity-field input");
    let input = tableLine.querySelector(".input-quantity");
    let totalPriceDiv = tableLine.querySelector(".product-total-price");
    if (choiseBtn.classList.contains("button-checked")) {
      // RE UPATE THE PRODUCT_TOTAL_PRICE
      const tableLine = input.closest(".table-line");
      const basePriceDiv = tableLine.querySelector(".product-base-price");
      const totalPriceDiv = tableLine.querySelector(".product-total-price");
      let basePrice = +basePriceDiv.textContent;
      let quantity = +input.value;
      let totalPricePro = basePrice * quantity;
      totalPriceDiv.textContent = totalPricePro;
      let totalPrice = parseInt(totalPriceDiv.textContent, 10) || 0;
      cartTotal += totalPrice;
      quantityField.disabled = false;
    } else {
      totalPriceDiv.textContent = "";
      quantityField.disabled = true;
    }
  });
  cartTotalDiv.textContent = +cartTotal || 0;
}

let choiseBtns = document.querySelectorAll(".table-line > .item >  .choiseBtn");
choiseBtns.forEach((choiseBtn) => {
  choiseBtn.addEventListener("click", function () {
    choiseBtn.classList.toggle("button-checked");
    updateCartTotal();
  });
});

/* -------------------------------------------- CHECK ALL BUTTON FEATURE---------------------------------------------- */
const selectAllBtn = document.querySelector(".select-all");
function selectAll(e) {
  let choiseBtns = document.querySelectorAll(
    ".table-line > .item >  .choiseBtn"
  );
  const selectAllBtn = document.querySelector(".select-all");
  let selectAllChecked = selectAllBtn.classList.contains("button-checked");
  if (!selectAllChecked)
    choiseBtns.forEach((choiseBtn) => {
      choiseBtn.classList.remove("button-checked");
    });
  else
    choiseBtns.forEach((choiseBtn) => {
      choiseBtn.classList.add("button-checked");
    });
  updateCartTotal();
}
selectAllBtn.addEventListener("click", selectAll);

/* -------------------------------------------- FILTER FEATURE---------------------------------------------- */
function filterPrice() {
  let tableLines = Array.from(document.querySelectorAll(".table-line"));
  tableLines.pop();
  tableLines.shift();
  tableLines.forEach(function (line) {
    const price = +line.querySelector(".product-base-price").textContent;
    switch (priceFilter.value) {
      case "lt50":
        if (price < 50) line.classList.remove("hidden-table-line");
        else line.classList.add("hidden-table-line");
        break;
      case "100-200":
        if (price >= 100 && price <= 200)
          line.classList.remove("hidden-table-line");
        else line.classList.add("hidden-table-line");
        break;
      case "200-300":
        if (price > 200 && price <= 300)
          line.classList.remove("hidden-table-line");
        else line.classList.add("hidden-table-line");
        break;
      case "gt300":
        if (price > 300) line.classList.remove("hidden-table-line");
        else line.classList.add("hidden-table-line");
        break;
      default:
        line.classList.remove("hidden-table-line");
    }
    updateCartTotal();
  });
}
const priceFilter = document.querySelector("#product-price");
priceFilter.addEventListener("change", filterPrice);
