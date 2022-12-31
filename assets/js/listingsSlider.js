const leftBtn = document.querySelector('.listings .slider__arrow--left');
const rightBtn = document.querySelector('.listings .slider__arrow--right');

const sliderCard = document.querySelector('.slider__card');
const allCards = document.querySelectorAll('.slider__card');
const nCards = allCards.length;
const cardWidth = sliderCard.offsetWidth;
const cardStyle = getComputedStyle(sliderCard)
const cardMargin = parseInt(cardStyle.marginRight);


let counter = 0;
let sliderActived = false;
const slideRight = () => {
    console.log(`Start counter: ${counter}`)
    
    if (counter > 0) {
        counter--;
        
        for (let i=0; i < nCards; i++) {
            allCards[i].style.transition = "transform 0.4s ease-in-out";
            allCards[i].style.transform = `translateX(-${(cardWidth + cardMargin) * counter}px)`
        }
    }

    if (counter < nCards - 1) {
        rightBtn.style.fill = '#59B079';
    }

    if (counter === 0) {
        leftBtn.style.fill = '#999';
    }
    
    console.log(`Final counter: ${counter}`)
}

const slideLeft = () => {
    console.log(`Start counter: ${counter}`)
    if (counter < nCards - 1) {
        counter++;

        if (counter === nCards - 1) {
            rightBtn.style.fill = '#999'
        }
        sliderActived = true;
        rightBtn.style.animation = 'none';
        for (let i=0; i < nCards; i++) {
            allCards[i].style.transition = "transform 0.4s ease-in-out";
            allCards[i].style.transform = `translateX(-${(cardWidth + cardMargin) * counter}px)`
        }
    } 

    if (counter > 0) {
        leftBtn.style.fill = '#59B079';
    }
    

    console.log(`Final counter: ${counter}`)
}

if (sliderActived) {
    console.log(rightBtn.animation)
    rightBtn.style.animation = 'none';
    console.log(rightBtn.animation)
}

leftBtn.addEventListener('click', slideRight)
rightBtn.addEventListener('click', slideLeft)