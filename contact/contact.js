const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    statusText.style.color = "#FF6F61";
    statusText.textContent = "Please fill in all fields.";
    return;
  }

  statusText.style.color = "#F4C430";
  statusText.textContent = "Thank you! Your message has been sent.";

  form.reset();
});
