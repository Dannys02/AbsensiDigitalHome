const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
}

const fadeElements = document.querySelectorAll('.img-man, .img-phone, .img-pot, .from-left, .from-bottom, .from-bottom-rotate');

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

document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.cta-button');
  
  ctaButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Tampilkan SweetAlert
    Swal.fire({
      title: 'Halaman Selanjutnya Akan Dimuat',
      text: 'Menggunakan library SweetAlert untuk notifikasi yang menarik',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Lanjutkan ke Register',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        // Arahkan ke halaman register
        // Ganti URL berikut dengan halaman register yang sebenarnya
        window.location.href = 'register.html';
      }
    });
  });
});