const leftBtn = document.querySelector('.listings .slider__arrow--left');
const rightBtn = document.querySelector('.listings .slider__arrow--right');

const sliderCard = document.querySelector('.slider__card');
const allCards = document.querySelectorAll('.slider__card');
const nCards = allCards.length;
const cardWidth = sliderCard.offsetWidth;
const cardStyle = getComputedStyle(sliderCard)
const cardMargin = parseInt(cardStyle.marginRight);
const sliderContainer = document.querySelector('.listings .slider__container');
const containerWidth = sliderContainer.offsetWidth;


if ((cardWidth + cardMargin) * nCards < containerWidth) {
    left.style.display = "none";
    right.style.display = "none";
}

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
        rightBtn.style.color = '#59B079';
        rightBtn.style.cursor = 'pointer';
    }

    if (counter === 0) {
        leftBtn.style.color = '#999';
        leftBtn.style.cursor = 'default';
    }
    
    console.log(`Final counter: ${counter}`)
}

const slideLeft = () => {
    console.log(`Start counter: ${counter}`)
    let cardsRemaining = nCards - counter;
    let allCardsShowing = (cardWidth + cardMargin) * cardsRemaining < containerWidth;

    if (allCardsShowing) {
        rightBtn.style.color = '#999';
        rightBtn.style.cursor = 'default';
    } else {
        if (counter < nCards - 1) {
            counter++;

            cardsRemaining = nCards - counter;
            allCardsShowing = (cardWidth + cardMargin) * cardsRemaining < containerWidth;

            if (counter === nCards - 1 || allCardsShowing) {
                rightBtn.style.color = '#999';
                rightBtn.style.cursor = 'default';
            }
            sliderActived = true;
            rightBtn.style.animation = 'none';
            for (let i=0; i < nCards; i++) {
                allCards[i].style.transition = "transform 0.4s ease-in-out";
                allCards[i].style.transform = `translateX(-${(cardWidth + cardMargin) * counter}px)`
            }
        } 
    }

    if (counter > 0) {
        leftBtn.style.color = '#59B079';
        leftBtn.style.cursor = 'pointer';
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