let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

let btn = document.querySelector(".navbar-toggler");
let navbarCallbasli = document.querySelectorAll(
  ".navbar-collapse ul .nav-link"
);
let navbarCallbas = document.querySelector(".navbar-collapse");

btn.addEventListener("click", () => {
  if (navbarCallbas.classList.toggle("show")) {
    btn.onclick = function () { 
      navbarCallbas.classList.remove("show");
    };
    for (let i = 0; i < navbarCallbasli.length; i++) {
      navbarCallbasli[i].addEventListener("click", () => {
        navbarCallbas.classList.remove("show");
      });
    }
  }
});



let up = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY > 0) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
};

up.onclick = function () {
  window.scrollTo({
    top: 0, // تحديد النقطة العلوية
    behavior: "smooth", // إضافة تأثير سلاسة
  });
};
