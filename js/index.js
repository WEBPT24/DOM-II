const navChange = document.querySelector('.main-navigation');
navChange.addEventListener('mouseover', () => {
    navChange.style.background = ('#ADD8E6');
});

const logoColorChange = document.querySelector(".logo-heading");
logoColorChange.addEventListener("click", () => {
  logoColorChange.style.color = "red";
  window.setTimeout(() => {
    logoColorChange.style.color = "black";
  }, 1500);
});

const slidingNav = document.querySelectorAll(".nav-link").forEach((e) => {
    e.addEventListener("mouseenter", () => {
      e.style.transform = "scale(1.2)";
    });
    e.addEventListener("mouseout", () => {
      e.style.transform = "scale(1)";
    });
  });

  const imageZoom = document.querySelectorAll(".img-content").forEach((e) => {
    e.addEventListener("mousedown", () => {
      e.style.transform = "scale(1.5)";
      e.style.transition = ".5s ease";
    });
    e.addEventListener("mouseup", () => {
      e.style.transform = "scale(1)";
      e.style.transition = ".5s ease";
    });
  });

  window.addEventListener('load', () => {
    alert ('Welcome to the Fun Bus. Have a seat!')
});



