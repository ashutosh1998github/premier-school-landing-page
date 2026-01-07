  const slider = document.querySelector(".pse-exhibition__slider");
  const buttons = document.querySelectorAll(".pse-exhibition__arrow");

  const getCardWidth = () =>
    slider.querySelector(".pse-exhibition__card").offsetWidth +
    parseFloat(getComputedStyle(slider).gap);

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const dir = btn.dataset.dir === "next" ? 1 : -1;
      slider.scrollBy({
        left: dir * getCardWidth(),
        behavior: "smooth"
      });
    });

    btn.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  });


//   *********************************** header js *******************************8



  const header2 = document.getElementById("pseHeader2");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
      header2.classList.add("pse-header2--active");
      header2.setAttribute("aria-hidden", "false");
    } else {
      header2.classList.remove("pse-header2--active");
      header2.setAttribute("aria-hidden", "true");
    }
  });


