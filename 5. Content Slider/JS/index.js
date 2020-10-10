document.addEventListener(
  "DOMContentLoaded",
  function () {
    var buttons = document.querySelectorAll("._5-slides ._5-nuts > li");
    var ulSlide = document.querySelector("._5-slides ul.slide");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        for (let k = 0; k < buttons.length; k++) {
          buttons[k].classList.remove("active");
          ulSlide.classList.remove("so-" + (k + 1));
        }

        this.classList.add("active");
        ulSlide.classList.add("so-" + (i + 1));
      });
    }
  },
  false
);
