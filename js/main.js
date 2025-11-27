const Menu = document.querySelector ('.Menu')
const HamburgerMenu = document.querySelector ('.HamburgerMenu')
const iconbars = document.querySelector ('.icon-bars')
const iconclose = document.querySelector ('.icon-close')

HamburgerMenu.addEventListener('click' ,displayMenu);
Menu.addEventListener('click' ,displayMenu);

function displayMenu() {
   if (Menu.classList.contains('Tampil')) {
        Menu.classList.remove('Tampil');
        iconbars.style.display = 'inline';
        iconclose.style.display = 'none';
   }else {
    Menu.classList.add('Tampil');
        iconbars.style.display = 'none';
        iconclose.style.display = 'inline';
   }
   }