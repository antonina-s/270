
// Шапка сайта через гамбургер.
// Открывание меню:
const menu = document.querySelector(".menu-text");
const menuItems = document.querySelectorAll(".header-red-line");
const hamburger = document.querySelector(".menu-hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("show-menu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);



// Меню левое через вкладку.
// const menuLeft = document.querySelectorAll('.s-20-tab');
// const menuName = document.querySelectorAll('.tab-title');
// const menuBlock = document.querySelectorAll('.tab-content');

// let navWrapper = document.querySelector('#ub-name'), navToogler = document.querySelector('#ub-block');
// navToogler.addEventListener('click', function(event) {
// navWrapper.classList.toggle('active')
// });




// Для браузера Safari.
// let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
// if (isSafari) { 
//     $('head').append('<link rel="stylesheet" type="text/css" href="style_safari.css">') 
// };





// Окно с кукуами.





// Поле ввода электронной почты для подписки на рассылку.

// Perl-совместимое регулярное выражение:
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/