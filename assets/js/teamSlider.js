const left = document.querySelector('.team .slider__arrow--left');
const right = document.querySelector('.team .slider__arrow--right');

const sliderProfile = document.querySelector('.slider__profile-card');
const allProfiles = document.querySelectorAll('.slider__profile-card');
const nProfiles = allProfiles.length;
const profileWidth = sliderProfile.offsetWidth;
const profileStyle = getComputedStyle(sliderProfile)
const profileMargin = parseInt(profileStyle.marginRight);

//const slider = document.querySelector('team .slider__container')


let profileCounter = 0;
const profileSlideRight = () => {
    
    if (profileCounter > 0) {
        profileCounter--;
        
        for (let i=0; i < nProfiles; i++) {
            allProfiles[i].style.transition = "transform 0.4s ease-in-out";
            allProfiles[i].style.transform = `translateX(-${(profileWidth + profileMargin) * profileCounter}px)`
        }
    }

    if (profileCounter < nProfiles - 1) {
        right.style.fill = '#59B079';
    }

    if (profileCounter === 0) {
        left.style.fill = '#999';
    }
    
    console.log(`Final counter: ${profileCounter}`)
}

const profileSlideLeft = () => {
    console.log(`Start counter: ${profileCounter}`)
    if (profileCounter < nProfiles - 1) {
        profileCounter++;

        if (profileCounter === nProfiles - 1) {
            right.style.fill = '#999'
        }
        sliderActived = true;
        right.style.animation = 'none';
        for (let i=0; i < nProfiles; i++) {
            allProfiles[i].style.transition = "transform 0.4s ease-in-out";
            allProfiles[i].style.transform = `translateX(-${(profileWidth + profileMargin) * profileCounter}px)`
        }
    } 

    if (profileCounter > 0) {
        left.style.fill = '#59B079';
    }
    

    console.log(`Final profileCounter: ${profileCounter}`)
}

left.addEventListener('click', profileSlideRight)
right.addEventListener('click', profileSlideLeft)