
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

// Range 

const range = document.getElementById('range');
const stake = document.getElementById('stake');
const apr = document.getElementById('apr');
const span = document.getElementById('range-track');
const error = document.querySelector('.error-message');

// Amount persents

const daily = document.getElementById('daily'),
      monthly = document.getElementById('monthly'),
      yearly = document.getElementById('yearly');
const total = document.querySelectorAll('.total-amount');

const rangeCanculate = () => {
    range.addEventListener('input', function() {
        stake.value = this.value;
        if(this.value > 50000) {           
            apr.value = 36
        } else if (this.value > 3000) {
            apr.value = 3
        } else {
            apr.value = 0.1 
        }
    });
    
    range.addEventListener('input', function() {
        getWidth();        
    });  
    
    stake.addEventListener('input', function() {
        range.value = this.value;
        let x = this.value;
        getWidth();
        // Validation
        // if(x = /s/) {
        //     stake.style.border = "2px solid red";
        //     error.classList.add('active');
        // } else if(x = /b/) {
        //     stake.style.border = "none";
        //     error.classList.remove('active');
        // }
    });
    
    
}

const getWidth = () => {
    let valOfRang = range.value;      
    let maxVal = 200000;
    let minVal = 0;
    let currentVal = 0;
    if (valOfRang > minVal || valOfRang < maxVal) {        
        currentVal = (valOfRang * 100) / maxVal;
        span.style.width = `${currentVal}%`; 
    }     
    daily.value = (stake.value * 0.001).toFixed(2);
    monthly.value = (stake.value * 0.03).toFixed(2);
    yearly.value = (stake.value * 0.36).toFixed(2);
 }
 
rangeCanculate();

// Check for null input
const numInputs = document.querySelectorAll('input[type=number]')
console.log(numInputs)
numInputs.forEach(function(input) {
  input.addEventListener('change', function(e) {
    if (e.target.value == '') {
      e.target.value = 0
    }
  })
})