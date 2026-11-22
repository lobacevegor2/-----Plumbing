const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.elements["name"].value.trim();
    const phone = contactForm.elements["phone"].value.trim();
    const message = contactForm.elements["message"].value.trim();

    const text = 
      `Здравствуйте! Новая заявка с сайта.\n\n` +
      `Имя: ${name}\n` +
      `Телефон: ${phone}\n` +
      `Что требуется: ${message || "Не указано"}`;

    const whatsappUrl =
      "https://wa.me/79150749252?text=" + encodeURIComponent(text);

    window.open(whatsappUrl, "_blank");
  });
}
document.querySelectorAll("[data-slider]").forEach((slider) => {
  const images = slider.querySelectorAll(".slider-image");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");
  const counter = slider.querySelector(".slider-counter");

  let current = 0;

  function showImage(index) {
    images[current].classList.remove("active");

    current = (index + images.length) % images.length;

    images[current].classList.add("active");
    counter.textContent = `${current + 1} / ${images.length}`;
  }

  prev.addEventListener("click", () => showImage(current - 1));
  next.addEventListener("click", () => showImage(current + 1));
});
