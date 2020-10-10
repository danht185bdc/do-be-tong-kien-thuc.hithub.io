var imgs = document.querySelectorAll(".cac-anh img"),
  nenDen = document.querySelector(".nen-den");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function () {
    nenDen.classList.add("selected");
  });
}
