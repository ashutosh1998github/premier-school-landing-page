/* =========================================================
   SLIDER UTILITIES
   - Reusable vanilla JS slider logic
   ========================================================= */

function createSlider({
  track,
  slides,
  prevBtn,
  nextBtn,
  autoplay = false,
  interval = 5000
}) {
  let currentIndex = 0;
  let timer = null;

  const totalSlides = slides.length;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  function startAutoplay() {
    if (!autoplay) return;
    stopAutoplay();
    timer = setInterval(nextSlide, interval);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  /* Button controls */
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  /* Pause on hover / focus */
  track.addEventListener("mouseenter", stopAutoplay);
  track.addEventListener("mouseleave", startAutoplay);
  track.addEventListener("focusin", stopAutoplay);
  track.addEventListener("focusout", startAutoplay);

  /* Touch swipe */
  let startX = 0;

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  });

  startAutoplay();

  return {
    nextSlide,
    prevSlide,
    stopAutoplay,
    startAutoplay
  };
}
