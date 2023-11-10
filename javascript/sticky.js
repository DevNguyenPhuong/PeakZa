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

export function sticky() {
  if (haveHeader) obs.observe(haveHeader);
  else document.body.classList.add("sticky");
}
