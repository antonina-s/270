
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



// Кнопка вверх.
const btnUp = {
    el: document.querySelector(".btn-up"),
    show() {
        this.el.classList.remove("btn-up_hide");
    },
    hide() {
        this.el.classList.add("btn-up_hide");
    },
    addEventListener() {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector(".btn-up").onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    }
}

btnUp.addEventListener();



// Поле ввода электронной почты для подписки на рассылку.
let emailElement = document.querySelector('#input-email');
let emailError = document.querySelector('#email-error');
let submitBtn = document.querySelector('#input-submit');
let flag = false;
console.log(flag);

let regForm = document.querySelector('#reg-form');
regForm.addEventListener('submit', function (event) {
    // console.log('submit');
    if (flag === flase) {
        event.preventDefault();
    }
});

function checkEmail(email) {
    if (email.length === 0) {
        emailError.textContent = 'Please enter your email.';
    }
    else if (!email.includes('@')) {
        emailError.textContent = 'The email must contain @.';
    }
    else {
        emailError.textContent = '';
        flag.email = true;
        console.log(flag);
    }
}