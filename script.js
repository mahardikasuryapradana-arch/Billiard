// Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeToggle');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Lightbox Gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImgs = document.querySelectorAll('.gallery-img');
const closeBtn = document.querySelector('.lightbox .close');

galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => { if(e.target===lightbox) lightbox.style.display='none'; });

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Booking Form Submission Demo
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Booking berhasil dikirim!');
    bookingForm.reset();
});
