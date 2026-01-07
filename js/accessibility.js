/* =========================================================
   ACCESSIBILITY HELPERS
   - Keyboard navigation for sliders
   ========================================================= */

function enableKeyboardNavigation(sliderElement, sliderApi) {
  sliderElement.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      sliderApi.nextSlide();
    }
    if (e.key === "ArrowLeft") {
      sliderApi.prevSlide();
    }
  });
}
