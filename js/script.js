const footerWrapper = document.querySelector(".foods-wrapper-section");
const sliderItems = document.querySelector(".slider");
const copy = sliderItems.cloneNode(true);
footerWrapper.appendChild(copy);
const frame = document.querySelectorAll(".category-card-frame");
frame.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    card.classList.add("show");
  });

  card.addEventListener("mouseleave", function () {
    card.classList.remove("show");
  });
});

const sliderMain = document.querySelector(".text-slider");
const sliderInner = document.querySelector(".wrapper-text");
const copySecond = sliderInner.cloneNode(true);
sliderMain.appendChild(copySecond);

const sliderMainSecond = document.querySelector(".text-slider-edit");
const sliderInnerSecond = document.querySelector(".wrapper-text-edit");
const copyThird = sliderInnerSecond.cloneNode(true);
sliderMainSecond.appendChild(copyThird);

document.addEventListener("DOMContentLoaded", function () {
  const frame = document.querySelectorAll(".card-hover");
  frame.forEach((box) => {
    box.addEventListener("mouseenter", function () {
      box.classList.add("hide");
    });

    box.addEventListener("mouseleave", function () {
      box.classList.remove("hide");
    });
  });
});
const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("fx-reveal-visible");
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll(".fx-reveal").forEach(function (r) {
  observer.observe(r);
});

// Show the button when you scroll down 100px
window.onscroll = function () {
  const btn = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top when clicked
document.getElementById("scrollToTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

const btnMenu = document.querySelector(".main-nav-btn");
const mainHeader = document.querySelector(".header");
const mainBody = document.querySelector("html");
btnMenu.addEventListener("click", function () {
  mainHeader.classList.toggle("nav-open");
  mainBody.classList.toggle("overflow");
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".main-nav");
  const trigger = document.querySelector(".trigger");

  const observer = new IntersectionObserver(
    function (entries) {
      const entry = entries[0];
      if (entry.boundingClientRect.y < 0) {
        // The trigger has gone above the viewport → make sticky
        navbar.classList.add("sticky");
      } else {
        // The trigger is still in view → remove sticky
        navbar.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );

  observer.observe(trigger);
});
