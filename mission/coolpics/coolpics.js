const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});
