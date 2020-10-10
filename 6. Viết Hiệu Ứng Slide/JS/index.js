document.addEventListener(
  "DOMContentLoaded",
  function () {
    var nutChuyenSlide = document.querySelectorAll(".chuyen-slide ul li");
    var slideChuyenDong = document.querySelectorAll(
      ".slides ul.full-screen li._1-slide"
    );
    var thoiGianChuyenSlide = setInterval(autoSlide, 6000);

    // Sự kiện click chuyển trang
    for (let i = 0; i < nutChuyenSlide.length; i++) {
      nutChuyenSlide[i].addEventListener("click", function () {
        clearInterval(thoiGianChuyenSlide);

        for (let k = 0; k < nutChuyenSlide.length; k++) {
          nutChuyenSlide[k].classList.remove("active");
          slideChuyenDong[k].classList.remove("active");
        }

        this.classList.add("active");
        slideChuyenDong[i].classList.add("active");
      });
    }

    // Hàm tự động chuyển slide
    function autoSlide() {
      var viTriSlide = 0;
      var slideHienTai = document.querySelector(
        ".slides ul.full-screen li._1-slide.active"
      );

      // Tính xem đang ở slide nào
      for (
        viTriSlide = 0;
        (slideHienTai = slideHienTai.previousElementSibling);
        viTriSlide++
      ) {}

      if (viTriSlide < slideChuyenDong.length - 1) {
        for (let i = 0; i < slideChuyenDong.length; i++) {
          slideChuyenDong[i].classList.remove("active");
          nutChuyenSlide[i].classList.remove("active");
        }

        slideChuyenDong[viTriSlide].nextElementSibling.classList.add("active");
        nutChuyenSlide[viTriSlide].nextElementSibling.classList.add("active");
      } else {
        for (let i = 0; i < slideChuyenDong.length; i++) {
          slideChuyenDong[i].classList.remove("active");
          nutChuyenSlide[i].classList.remove("active");
        }

        slideChuyenDong[0].classList.add("active");
        nutChuyenSlide[0].classList.add("active");
      }
    }
  },
  false
);
