let menu = document.querySelector('#menu-icon')
let navMenu = document.querySelector('.nav-links')

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-xmark');
    navMenu.classList.toggle('active')
})