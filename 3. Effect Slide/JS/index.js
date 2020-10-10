var nutPhai = document.querySelector(".right"),
  nutTrai = document.querySelector(".left"),
  noiDungSlides = document.querySelector(".content-slides");

nutPhai.addEventListener("click", function () {
  this.classList.remove("active");
  nutTrai.classList.add("active");

  //   Slides sang phải
  noiDungSlides.classList.add("sang-phai");
});

nutTrai.addEventListener("click", function () {
  this.classList.remove("active");
  nutPhai.classList.add("active");

  //   Slides sang phải
  noiDungSlides.classList.toggle("sang-phai");
});
