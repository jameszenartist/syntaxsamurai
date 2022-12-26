window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    window.onload();
    let content = document.getElementById("load");
    let wrapper = document.querySelector(".wrapper");
    wrapper.classList.add("fadeaway");
    setTimeout(() => {
      document.body.removeChild(wrapper);
      content.classList.add(".fadein");
      setTimeout(triggerAnim, 1000);
    }, 3000);
  }, 3000);
});

window.onload = function () {
  window.scrollTo(0, 0);
};

function triggerAnim() {
  document.querySelector("h1").style.opacity = 1;
  return document.querySelector(".home").children[0].classList.add("type-me");
}
