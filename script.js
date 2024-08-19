const offerButton = document.getElementById("try-offer-btn");
const closeButton = document.getElementById("close-dialog");
const dialog = document.getElementById("dialog");
const backdrop = document.getElementById("dialog-backdrop");
const body = document.querySelector("body");
const faqBlock1 = document.getElementById("FAQ-block-1");
const faqIcon1 = document.getElementById("FAQ-icon-1");
const faqBlock2 = document.getElementById("FAQ-block-2");
const faqIcon2 = document.getElementById("FAQ-icon-2");
const faqBlock3 = document.getElementById("FAQ-block-3");
const faqIcon3 = document.getElementById("FAQ-icon-3");
const mobileNav = document.querySelector(".btn-mobile-nav");
const snackbar = document.querySelector(".snack-bar");
const signupBtn = document.getElementById("sign-up-btn");
const username = document.getElementById("name");
const email = document.getElementById("email");
const hero = document.querySelector(".section-hero");
const nav = document.querySelector("nav");

offerButton.addEventListener("click", () => {
  console.log("clicked");
  snackbar.style.opacity = "unset";
  dialog.showModal();
  backdrop.classList.add("offer-dialog-container");
  body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
  dialog.close();
  backdrop.classList.remove("offer-dialog-container");
  body.style.overflowY = "scroll";
});

signupBtn.addEventListener("click", () => {
  if (username.checkValidity() && email.checkValidity()) {
    dialog.close();
    backdrop.classList.remove("offer-dialog-container");
    body.style.overflowY = "scroll";
    snackbar.classList.add("display");
    setTimeout(() => {
      snackbar.style.opacity = 0;
      snackbar.classList.remove("display");
    }, 3000);
  }
});

faqIcon1.addEventListener("click", () => {
  faqBlock1.classList.toggle("open");
});

faqIcon2.addEventListener("click", () => {
  faqBlock2.classList.toggle("open");
});

faqIcon3.addEventListener("click", () => {
  faqBlock3.classList.toggle("open");
});

// MOBILE NAVIGATION
console.log(mobileNav);
mobileNav.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    const href = a.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      if (!nav.classList.contains("sticky")) {
        sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 1000);
      }
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (a.classList.contains("page-nav-link")) {
      nav.classList.toggle("nav-open");
    }
  });
});

// ADDING STICKY HEADER UPON SCROLL

let observer = new IntersectionObserver(
  (entry) => {
    console.log(entry);
    if (!entry[0].isIntersecting) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-180px",
  }
);

observer.observe(hero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
