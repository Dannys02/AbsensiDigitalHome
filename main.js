const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
}

const fadeElements = document.querySelectorAll('.img-man, .img-phone, .img-pot, .from-left');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-man');
      entry.target.classList.add('fade-phone');
      entry.target.classList.add('fade-pot');
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('fade-man');
      entry.target.classList.remove('fade-phone');
      entry.target.classList.remove('fade-pot');
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2
});

fadeElements.forEach((element) => {
  observer.observe(element);
});