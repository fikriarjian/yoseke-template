
$(function () {
  $("#daftar").on("click", function () {
    $(".masuk-item").removeClass("active-item");
    $(".masuk-item").addClass("off-item");
    $(".daftar-item").removeClass("off-item");
    $(".daftar-item").addClass("active-item");
    $(".daftar-section").removeClass("hide-item");
    $(".daftar-section").addClass("show-item");
    $(".login-section").addClass("hide-item");
    $(".login-section").removeClass("show-item");
  });
  $("#masuk").on("click", function () {
    $(".masuk-item").removeClass("off-item");
    $(".masuk-item").addClass("active-item");
    $(".daftar-item").removeClass("active-item");
    $(".daftar-item").addClass("off-item");
    $(".login-section").addClass("show-item");
    $(".login-section").removeClass("hide-item");
    $(".daftar-section").removeClass("show-item");
    $(".daftar-section").addClass("hide-item");
  });
});