
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');
if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('menu-open');
        menuBody.classList.toggle('menu-open');
    });
}

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(e) {
        document.body.classList.remove('_lock');
        menuIcon.classList.remove('menu-open');
        menuBody.classList.remove('menu-open');
    });
  });
}
