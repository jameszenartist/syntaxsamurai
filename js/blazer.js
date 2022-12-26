const slider = document.querySelector(".blaze-slider");

new BlazeSlider(slider, {
  all: {
    enableAutoplay: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    // transitionDuration: 300,
  },
  // "(max-width: 900px)": {
  //   slidesToShow: 1,
  //   slidesToShow: 1,
  //   slidesGap: "40px",
  // },
  // "(max-width: 500px)": {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // },
});
