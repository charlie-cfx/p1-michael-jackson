const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
dot1.addEventListener("click", function () {
  dot1.style.opacity = "1";
  dot2.style.opacity = "0.5";
  dot3.style.opacity = "0.5";
  slide1.classList.add("visible");
  slide2.classList.remove("visible");
  slide3.classList.remove("visible");
});
dot2.addEventListener("click", function () {
  dot1.style.opacity = "0.5";
  dot2.style.opacity = "1";
  dot3.style.opacity = "0.5";
  slide2.classList.add("visible");
  slide1.classList.remove("visible");
  slide3.classList.remove("visible");
});
dot3.addEventListener("click", function () {
  dot1.style.opacity = "0.5";
  dot2.style.opacity = "0.5";
  dot3.style.opacity = "1";
  slide3.classList.add("visible");
  slide2.classList.remove("visible");
  slide1.classList.remove("visible");
});
