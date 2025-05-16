// Toggle responsive nav
const menuButton = document.getElementById('menu');
const navMenu = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Image modal viewer
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
