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
      //   alert("Success!");
      document.querySelector(".alert").classList.remove("op");
      document.querySelector(".alert").classList.add("zi");
      document.querySelector(".close").addEventListener("click", (el) => {
        document.querySelector(".alert").classList.remove("zi");
        document.querySelector(".alert").classList.add("op");
      });
    });
  });
});
document.querySelector(".dropdown").addEventListener("mouseover", callback);

function callback() {
  // Get the dropdown menu height when scroll. The default height set by css to 0.

  let dropdownHeight = this.children[1].scrollHeight;
  // Add the height to dropdown menu (change it from 0 to scroll height value )
  this.children[1].style = `height: ${dropdownHeight}px`;
}
