// NAVIGATION //


// To assist with Mobile Menu (Hamburger Toggle)

function toggleMenu() {
    menu = document.querySelector('.navigation ul');
    menuToggle = document.querySelector('.menu-toggle');

    // Toggle the rotate class (made up) to apply the rotation effect
    menuToggle.classList.toggle('rotate');

    // To show or hide menu
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
    
}
