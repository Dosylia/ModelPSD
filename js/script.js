const btnBurger = document.getElementById('burger');
const nav = document.getElementById('nav');
let isNavVisible = false;

btnBurger.addEventListener('click', function() {
    if (isNavVisible) {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex"; 
    }
    isNavVisible = !isNavVisible;
});