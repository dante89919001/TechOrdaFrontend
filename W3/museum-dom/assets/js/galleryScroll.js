
let sliderImages = document.querySelectorAll('.slide-in');
window.addEventListener("scroll", (e) => {
  let constant;
  window.innerWidth > 1100 ? ( constant = 4500) : ( constant = 4000);
  let b = window.scrollY + window.innerHeight;
  if (b >  constant) {
      sliderImages.forEach((elements, i) => {
      setTimeout(() => {
        elements.classList.remove("align-bottom");
      }, 300 * (i++));
    });
  } else {
    sliderImages.forEach((el) => {
      setTimeout(() => {
        el.classList.add("align-bottom");
      });
    }, 1000);
  }
});  