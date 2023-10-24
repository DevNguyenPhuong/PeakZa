// Sticky Nav
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
