// const btnOpenMenu = document.getElementById('btn_open');
// const btnCloseMenu = document.getElementById('btn_close');
// const menu = document.getElementById('menu');

// btnOpenMenu.addEventListener('click', function() {
//     menu.classList.add('active');

// });
// btnCloseMenu.addEventListener('click', function() {
//     menu.classList.remove('active');

// });


// Menu-hamburger animation
const menuBtn = document.getElementById('menu-burger');
const bars = document.querySelectorAll('.bar');

menuBtn.addEventListener('click', function () {    
    bars.forEach( function(item, index) {
        item.classList.toggle(`change-${index+1}`);
    });
});

// Open vertical menu lang
const verticalMenu = document.querySelector('.header__lang_menu');
const btnOpen = document.querySelector('.header__lang');
const arrowSmall = document.querySelector('.header__lang-btn');

btnOpen.addEventListener('click', function() {
    verticalMenu.classList.toggle('active');
    arrowSmall.classList.toggle('active-arr');
});    

