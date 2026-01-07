document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     HERO SLIDER
  ============================== */
  const heroTrack = document.querySelector(".hero-slider__track");
  const heroSlides = document.querySelectorAll(".hero-slider__slide");
  const heroPrev = document.querySelector(".hero-slider__btn--prev");
  const heroNext = document.querySelector(".hero-slider__btn--next");

  if (heroTrack && heroSlides.length > 0) {
    const heroSlider = createSlider({
      track: heroTrack,
      slides: heroSlides,
      prevBtn: heroPrev,
      nextBtn: heroNext,
      autoplay: true,
      interval: 6000
    });

    enableKeyboardNavigation(
      document.querySelector(".hero-slider"),
      heroSlider
    );
  }

  /* =============================
     CHOOSE SCHOOL (MOBILE)
  ============================== */
  const chooseTrack = document.querySelector(".choose-school__track");
  const chooseSlides = document.querySelectorAll(".choose-school__slide");

  if (chooseTrack && window.innerWidth <= 768) {
    createSlider({
      track: chooseTrack,
      slides: chooseSlides,
      autoplay: false
    });
  }

  /* =============================
     EXHIBITION SLIDER
  ============================== */
  const exhibitionTrack = document.querySelector(".exhibition__track");
  const exhibitionSlides = document.querySelectorAll(".exhibition__slide");

  if (exhibitionTrack && exhibitionSlides.length > 0) {
    const exhibitionSlider = createSlider({
      track: exhibitionTrack,
      slides: exhibitionSlides,
      autoplay: true,
      interval: 5000
    });

    enableKeyboardNavigation(
      document.querySelector(".exhibition"),
      exhibitionSlider
    );
  }

});
