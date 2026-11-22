const contactForm = document.getElementById("contactForm");
if (contactForm) {  contactForm.addEventListener("submit", function (event) {    event.preventDefault();
    const name = contactForm.elements["name"].value.trim();    const phone = contactForm.elements["phone"].value.trim();    const message = contactForm.elements["message"].value.trim();
    const text =      `Здравствуйте! Новая заявка с сайта.\n\n` +      `Имя: ${name}\n` +      `Телефон: ${phone}\n` +      `Что требуется: ${message || "Не указано"}`;
    const whatsappUrl =      "https://wa.me/79150749252?text=" + encodeURIComponent(text);
    window.open(whatsappUrl, "_blank");  });}

// Галереи фотографий
document.querySelectorAll("[data-slider]").forEach((slider) => {  const images = slider.querySelectorAll(".slider-image");  const prev = slider.querySelector(".prev");  const next = slider.querySelector(".next");  const counter = slider.querySelector(".slider-counter");
  if (images.length <= 1) {    if (prev) prev.hidden = true;    if (next) next.hidden = true;    if (counter) counter.hidden = true;    return;  }
  let current = 0;  let touchStartX = 0;
  function showImage(index) {    images[current].classList.remove("active");
    current = (index + images.length) % images.length;
    images[current].classList.add("active");
    if (counter) {      counter.textContent = `${current + 1} / ${images.length}`;    }  }
  if (prev) {    prev.addEventListener("click", () => {      showImage(current - 1);    });  }
  if (next) {    next.addEventListener("click", () => {      showImage(current + 1);    });  }
  // Переключение фотографий свайпом на телефоне
  slider.addEventListener("touchstart", (event) => {    touchStartX = event.changedTouches[0].screenX;  }, { passive: true });
  slider.addEventListener("touchend", (event) => {    const touchEndX = event.changedTouches[0].screenX;    const difference = touchEndX - touchStartX;
    if (Math.abs(difference) < 50) return;
    if (difference < 0) {      showImage(current + 1);    } else {      showImage(current - 1);    }  }, { passive: true });});
