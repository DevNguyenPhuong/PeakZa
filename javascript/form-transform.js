// FORM TRANSFORMATION
export function transform() {
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
}
