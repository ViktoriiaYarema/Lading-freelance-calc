const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');

const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');
console.log(slides)
let index = 0;

function activeDots(n){
    for(let dot of dots) {
        dot.classList.remove('active_dot');
    }
    dots[n].classList.add('active_dot');
}

function activeSlide(n, indexNext){
    for(slide of slides) {
        slide.classList.remove('active_slide');
        slide.classList.remove('slide_next');
    }
   
    slides[n].classList.add('active_slide');
    
    slides[indexNext].classList.add('slide_next');
}

function nextSlide() {
    if(index == slides.length - 1){
        index = 0;
        indexNext = index + 1;
        console.log(indexNext)
        activeSlide(index, indexNext);
        activeDots(index);
    } else {
        index++;
        indexNext = index + 1;
        activeSlide(index,indexNext); 
        activeDots(index); 
    }
}

function prevSlide() {
    if(index == 0){
        index = slides.length - 1;
        indexNext = index - 1;
        activeSlide(index, indexNext);
        activeDots(index);
    } else {
        index--;
        indexNext = index - 1;
        activeSlide(index, indexNext);  
        activeDots(index);
    }
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

for (let i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', function (){
        index = i;        
        if(i == dots.length-1){
            indexNext = 0;
            activeSlide(i,indexNext); 
            activeDots(i);
        } else {
            indexNext = index + 1;
            activeSlide(i,indexNext);   
            activeDots(i);
        }       
    });
}


