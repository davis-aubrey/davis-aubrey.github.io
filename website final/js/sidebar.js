// Opening navigation sidebar from the right side of the screen
// Uses a "hamburger" icon with three lines to open the sidebar
// Icons created in canva and made into SVGs

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.mobile-nav').classList.add('active');
    document.querySelector('.mobile-nav-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.querySelector('.close-nav').addEventListener('click', closeNav);
document.querySelector('.mobile-nav-overlay').addEventListener('click', closeNav);

function closeNav() {
    document.querySelector('.mobile-nav').classList.remove('active');
    document.querySelector('.mobile-nav-overlay').classList.remove('active');
    document.body.style.overflow = '';
}