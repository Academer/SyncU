const tool = document.querySelectorAll(".tool-1");
console.log(tool);
tool.forEach((i) => {
  i.addEventListener("click", () => {
    window.location.href = "/tools/link-preview";
  });
});
