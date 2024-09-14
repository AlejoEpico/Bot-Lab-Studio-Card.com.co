document.querySelectorAll(".collapsible").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    let content = button.nextElementSibling;
    if (button.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = 0;
    }
  });
});
