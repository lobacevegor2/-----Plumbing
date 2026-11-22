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