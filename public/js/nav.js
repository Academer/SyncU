$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

console.log("hlo");
const logo = document.querySelectorAll(".logo");
console.log("ok", logo);
logo.forEach((i) => {
  i.addEventListener("click", () => {
    window.location.href = "/";
  });
});
