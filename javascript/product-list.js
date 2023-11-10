const checkBtns = document.querySelectorAll(
  ".table-line > .item >  .choiseBtn"
);

function check(btn) {
  btn.classList.toggle("button-checked");
}

checkBtns.forEach((btn) =>
  btn.addEventListener("click", (event) => check(event.target))
);
