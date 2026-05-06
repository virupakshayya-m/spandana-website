document.addEventListener("DOMContentLoaded", () => {
  const eventBtn = document.querySelector("#event-btn");
  const regBtn = document.querySelector("#register-btn");
  const ctaBtn = document.querySelector(".cta-btn");

  eventBtn.addEventListener("click", () => {
    window.location.href = "events/events.html";
  });

  regBtn.addEventListener("click", () => {
    window.open("registration/registration.html", "_blank");
  });

  ctaBtn.addEventListener("click", () => {
    window.open("registration/registration.html", "_blank");
  });


  const eventDate = new Date("2026-02-25T09:00:00").getTime();

  // Check if countdown elements exist
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    daysEl.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    hoursEl.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutesEl.innerText = Math.floor((diff / (1000 * 60)) % 60);
    secondsEl.innerText = Math.floor((diff / 1000) % 60);
  }, 1000);
});
