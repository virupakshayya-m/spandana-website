
// --- FROM common.js ---
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("navbar");

  // MOBILE MENU TOGGLE
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });

    // CLOSE MENU WHEN LINK CLICKED
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    });
  }

  // NAVBAR SCROLL EFFECT
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("nav-scrolled");
      } else {
        navbar.classList.remove("nav-scrolled");
      }
    });
  }

  // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Optional: animate only once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach(el => observer.observe(el));

  // ACTIVE LINK HIGHLIGHTING
  const currentPath = window.location.pathname;
  const pageName = currentPath.split("/").pop().split("?")[0].split("#")[0] || "index.html";
  const navLinks = document.querySelectorAll(".nav-link, .mobile-menu a");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === pageName || (pageName === "index.html" && href === "/")) {
      link.classList.add("active");
    }
  });
});


// --- FROM home.js ---
document.addEventListener("DOMContentLoaded", () => {
  const eventBtn = document.querySelector("#event-btn");
  const regBtn = document.querySelector("#register-btn");
  const ctaBtn = document.querySelector(".cta-btn");

  if (eventBtn) {
    eventBtn.addEventListener("click", () => {
      window.location.href = "events.html";
    });
  }

  if (regBtn) {
    regBtn.addEventListener("click", () => {
      window.open("registration.html", "_blank");
    });
  }

  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      window.open("registration.html", "_blank");
    });
  }

  const eventDate = new Date("2026-02-25T09:00:00").getTime();
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff <= 0) {
        daysEl.innerText = hoursEl.innerText = minutesEl.innerText = secondsEl.innerText = "00";
        return;
      }

      daysEl.innerText = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      hoursEl.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
      minutesEl.innerText = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
      secondsEl.innerText = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
    };
    setInterval(updateTimer, 1000);
    updateTimer();
  }
});


// --- FROM about/about.js ---
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-grid img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close");

  if (lightbox && lightboxImg && closeBtn) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });

    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
      }
    });
  }
});


// --- FROM contact/contact.js ---
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusText = document.getElementById("formStatus");

  if (form && statusText) {
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
  }
});


// --- FROM schedule/schedule.js ---
function showDay(day){
  const d1 = document.getElementById('day1');
  const d2 = document.getElementById('day2');
  const d3 = document.getElementById('day3');
  if(!d1 || !d2 || !d3) return;
  d1.style.display = (day === 'day1') ? '' : 'none';
  d2.style.display = (day === 'day2') ? '' : 'none';
  d3.style.display = (day === 'day3') ? '' : 'none';
  document.querySelectorAll('.tab').forEach(btn=>{
    const dayNumber = day.replace('day', '');
    btn.classList.toggle('active', btn.textContent.trim().toLowerCase().includes('day ' + dayNumber));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('day1')) {
    showDay('day1');
  }
});
