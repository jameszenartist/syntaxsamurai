window.addEventListener("load", () => {
  setTimeout(() => {
    let content = document.getElementById("home");
    let wrapper = document.querySelector(".wrapper");
    wrapper.classList.add("fadeaway");
    setTimeout(() => {
      document.body.removeChild(wrapper);
      content.classList.add(".fadein");
    }, 3000);
  }, 3000);
});
