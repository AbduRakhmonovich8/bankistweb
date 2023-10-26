"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const cookie = document.querySelector(".cookie button");

// cookie
cookie.addEventListener("click", () => {
  document.querySelector(".cookie").remove();
});

// for Modal
const ModalOpen = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const ModalCloe = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", ModalOpen));
btnCloseModal.addEventListener("click", ModalCloe);
overlay.addEventListener("click", ModalCloe);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    ModalCloe();
  }
});

// for tab
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", (e) => {
  let active = e.target.closest(".operations__tab");
  if(active){
    var date = active.dataset.tab
    tabs.forEach((element) => {
      element.classList.remove("operations__tab--active");
      active.classList.add("operations__tab--active")
    });
    tabsContent.forEach(e=>{e.classList.remove("operations__content--active")})
    tabsContent[date-1].classList.add("operations__content--active")
  }
});



// for navbar sitiky
let header = document.querySelector("header")
let stiky = (entries , observe/*, observer*/) => {
  console.log();
  let arrayObs = entries[0]
  if(!arrayObs.isIntersecting) nav.classList.add("sticky")
  else nav.classList.remove("sticky")
};
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.14,
};
let fixed = new IntersectionObserver(stiky, options);
fixed.observe(header);











// for animate sections

const allSections = document.querySelectorAll('.section, footer');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  console.log(entry.target);
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
  });
