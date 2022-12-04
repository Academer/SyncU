window.addEventListener("load", function () {
  const form = document.getElementById("form-1");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      document.querySelector(".alert").classList.remove("op");
      document.querySelector(".alert").classList.add("zi");
      setTimeout(function () {
        document.querySelector(".alert").classList.remove("zi");
        document.querySelector(".alert").classList.add("op");
      }, 2000);
      document.querySelector(".close").addEventListener("click", (el) => {
        document.querySelector(".alert").classList.remove("zi");
        document.querySelector(".alert").classList.add("op");
      });
    });
  });
});
document.querySelector(".dropdown").addEventListener("mouseover", callback);

function callback() {
  let dropdownHeight = this.children[1].scrollHeight;
  this.children[1].style = `height: ${dropdownHeight}px`;
}
