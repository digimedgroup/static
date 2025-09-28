document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    console.log("Contact submitted:", { name, email, message });
    alert(getTranslation("contact.send") + " ✔️");

    form.reset();
  });
});
