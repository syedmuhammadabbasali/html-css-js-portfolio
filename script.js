let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('.section'); // Get all sections
let navlinks = document.querySelectorAll('.header nav a'); // Get all nav links

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Get section offset
        let height = sec.offsetHeight; // Get section height
        let id = sec.getAttribute('id'); // Get section id

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('.header nav a[href*="' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); // Ensure this toggles the navbar
}
