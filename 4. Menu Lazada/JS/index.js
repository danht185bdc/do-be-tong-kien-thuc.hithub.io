var logo = document.querySelector(".menu-mid .logo>a>img"),
  menu = document.querySelector(".menu"),
  danhMuc = document.querySelector(".tat-ca-danh-muc .nut"),
  menuBottom = document.querySelector(".menu-bottom");

var trangThai = "Bình Thường";

window.addEventListener("scroll", function () {
  var viTri = window.pageYOffset;
  if (viTri >= 300) {
    logo.classList.add("truot-len");
    menu.classList.add("bien-hinh-1");
  } else if (viTri <= 50) {
    logo.classList.remove("truot-len");
    menu.classList.remove("bien-hinh-1");
  }
});

danhMuc.addEventListener("click", function () {
  if (trangThai == "Bình Thường") {
    menuBottom.classList.add("bot-di-ra");
    danhMuc.innerHTML = "Ẩn danh mục ngành hàng";

    trangThai = "Đã Thay Text";
  } else {
    menuBottom.classList.remove("bot-di-ra");
    danhMuc.innerHTML = "Tất cả danh mục";

    trangThai = "Bình Thường";
  }
});
