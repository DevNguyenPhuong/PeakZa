// MODAL WINDOW
export function initModal() {
  const btnsOpenModal = document.querySelector(".btn--show-modal");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const btnCloseModals = document.querySelectorAll(".btn--close-modal");

  const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  btnsOpenModal.addEventListener("click", openModal);
  btnCloseModals.forEach((btn) => btn.addEventListener("click", closeModal));

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  if (overlay) overlay.addEventListener("click", closeModal);
}
