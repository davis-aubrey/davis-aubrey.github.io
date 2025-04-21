// Function that opens a full-size image when you click on one of the collection photos
// It was having trouble closing the full-size image 
// Now it should close with an escape key, clicking the x, or clicking off of the image

document.addEventListener('DOMContentLoaded', function() {
    const photoItems = document.querySelectorAll('.photo-item');
    const overlay = document.getElementById('fullsizeOverlay');
    const fullsizeImage = document.getElementById('fullsizeImage');
    
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = item.querySelector('img');
            
            fullsizeImage.src = img.src;
            fullsizeImage.alt = img.alt;
            
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    document.querySelector('.close-button').addEventListener('click', function(e) {
        hideFullSize();
        e.stopPropagation(); 
    });
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            hideFullSize();
        }
    });
    
    fullsizeImage.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    window.hideFullSize = function() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    };
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            hideFullSize();
        }
    });
});

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