$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    console.log($nav.height());
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
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
