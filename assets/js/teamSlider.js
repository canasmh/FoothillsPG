const left = document.querySelector('.team .slider__arrow--left');
const right = document.querySelector('.team .slider__arrow--right');

const sliderProfile = document.querySelector('.slider__profile-card');
const allProfiles = document.querySelectorAll('.slider__profile-card');
const nProfiles = allProfiles.length;
const profileWidth = sliderProfile.offsetWidth;
const profileStyle = getComputedStyle(sliderProfile)
const profileMargin = parseInt(profileStyle.marginRight);
const profileSliderContainer = document.querySelector('.team .slider__container');
const profileContainerWidth = profileSliderContainer.offsetWidth;
if ((profileWidth + profileMargin) * nProfiles < profileContainerWidth) {
    left.style.display = "none";
    right.style.display = "none";
}


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
        right.style.color = '#59B079';
        right.style.cursor = 'pointer'
    }

    if (profileCounter === 0) {
        left.style.color = '#999';
        left.style.cursor = 'default'
    }
    
    console.log(`Final counter: ${profileCounter}`)
}

const profileSlideLeft = () => {    
    let profilesRemaining = nProfiles - profileCounter;
    let allProfilesShowing = (profileWidth + profileMargin) * profilesRemaining < profileContainerWidth;
    
    if (allProfilesShowing) {
        right.style.color = '#999'
        right.style.cursor = 'default';

    } else {
        if (profileCounter < nProfiles - 1) {
            profileCounter++;

            profilesRemaining = nProfiles - profileCounter;
            allProfilesShowing = (profileWidth + profileMargin) * profilesRemaining < profileContainerWidth;
            
            if (profileCounter === nProfiles - 1 || allProfilesShowing) {
                right.style.color = '#999'
                right.style.cursor = 'default';
            }

            sliderActived = true;
            right.style.animation = 'none';
            for (let i=0; i < nProfiles; i++) {
                allProfiles[i].style.transition = "transform 0.4s ease-in-out";
                allProfiles[i].style.transform = `translateX(-${(profileWidth + profileMargin) * profileCounter}px)`
            }
        } 
    }
    if (profileCounter > 0) {
        left.style.color = '#59B079';
        left.style.cursor = 'pointer';
    }
    

    console.log(`Final profileCounter: ${profileCounter}`)
}

left.addEventListener('click', profileSlideRight)
right.addEventListener('click', profileSlideLeft)