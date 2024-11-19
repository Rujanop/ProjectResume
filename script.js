const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
});