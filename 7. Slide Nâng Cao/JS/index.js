document.addEventListener(
  "DOMContentLoaded",
  function () {
    // - BIẾN -------------------------------------------------------
    // Lấy 2 nút Previous Slide và Next Slide
    var btnPrevious = document.querySelector(".nuts b.previous"),
      btnNext = document.querySelector(".nuts b.next");
    // Mảng chứa các slides
    var slides = document.querySelectorAll(".slide-wrapper .slides > ul > li");
    // Số slide
    var numberOfSlides = slides.length;
    // Vị trí slide showing
    var slidePosition = 0;
    // Trạng thái chuyển động slide
    var trangThaiCD = "dangDungYen";

    // =================================================================================
    // =================================================================================
    // =================================================================================

    // -  FUNCTION --------------------------------------------------
    // Hàm chuyển slide
    function moveSlide(nuts) {
      // Kiểm tra xem trạng thái có chuyển động hay không
      if (trangThaiCD == "dangChuyenDong") {
        // Đang chuyển động hiệu ứng => Dừng chương trình
        return false;
      }
      trangThaiCD = "dangChuyenDong";

      //   Xóa class của slide hiện tại
      slides[slidePosition].classList.remove("showing-next");
      slides[slidePosition].classList.remove("showing-previous");

      // Tìm vị trí hiện tại khi nhấn nút
      slidePosition =
        nuts == "previous"
          ? // 1 - True
            slidePosition > 0
            ? // 2 - True
              slidePosition - 1
            : // 2 - False
              numberOfSlides - 1
          : // 1 - False
          slidePosition < numberOfSlides - 1
          ? // 2 - True
            slidePosition + 1
          : // 2 - False
            0;

      //   Thêm cho slide trước nó
      var showingSlide = slides[slidePosition];
      showingSlide.classList.add(`showing-${nuts}`);

      // Kết thúc chuyển slide mới cho bấm nuts
      var ketThucCD = function () {
        trangThaiCD = "dangDungYen";
      };
      showingSlide.addEventListener("webkitAnimationEnd", ketThucCD);
    }

    // =================================================================================
    // =================================================================================
    // =================================================================================

    // - EVENT LISTENER 'CLICK' -----------------------------------
    // Sự kiện click btnPrevious
    btnPrevious.addEventListener("click", function () {
      moveSlide("previous");
    });
    // Sự kiện click btnNext
    btnNext.addEventListener("click", function () {
      moveSlide("next");
    });
  },
  false
);
