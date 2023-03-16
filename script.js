const navIcon = document.getElementById("menuu");
const navMob = document.getElementById("nav-mob");
const navClose = document.getElementById("close-btn");
const hero = document.querySelector(".hero");
const upp = document.querySelector(".upp");
const header = document.querySelector(".header");

function showNavMobile() {
  navMob.style.transform = `translateX(0)`;
}

function hideNavMobile() {
  navMob.style.transform = `translateX(100%)`;
}

navIcon.addEventListener("click", showNavMobile);
navClose.addEventListener("click", hideNavMobile);

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      upp.classList.add("show");
      header.classList.add("sticky");
    }

    if (entry.isIntersecting) {
      upp.classList.remove("show");
      header.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(hero);
