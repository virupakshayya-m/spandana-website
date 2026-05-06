// schedule.js
function showDay(day){
  const d1 = document.getElementById('day1');
  const d2 = document.getElementById('day2');
  if(!d1 || !d2) return;
  d1.style.display = (day === 'day1') ? '' : 'none';
  d2.style.display = (day === 'day2') ? '' : 'none';
  document.querySelectorAll('.tab').forEach(btn=>{
    btn.classList.toggle('active', btn.textContent.trim().toLowerCase().includes(day.replace('day','')));
  });
}
document.addEventListener('DOMContentLoaded', ()=> showDay('day1'));

// MOBILE MENU TOGGLE (for schedule page)
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }
});