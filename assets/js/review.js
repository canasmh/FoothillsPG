const reviewStars = document.querySelectorAll('.write-review__container .fa-star-sharp');
const reviewStarsHeader = document.querySelector('.write-review__container h3');

const selectReview = (i) => {
    const nStars = i + 1;
    const currentColor = reviewStars[i].style.color;
    if (currentColor === "rgb(102, 102, 102)" || !currentColor) {
        const newColor = "#e6c200";
        for (let current = 0; current <= i; current++) {
            reviewStars[current].style.color = newColor;
        }
    } else {
        const newColor = "#666";
        for (let current = reviewStars.length - 1; current > i; current--) {
            reviewStars[current].style.color = newColor;
        }
    }

    reviewStarsHeader.textContent = `${nStars} / 5`
    
}

function handleReview(event) {
    const id = event.target.id;

    switch (id) {
        case ('one-stars'): {
            console.log('hmmm');
            return selectReview(0)
        }
        case ('two-stars'): {
            return selectReview(1)
        }
        case ('three-stars'): {
            return selectReview(2)
        }
        case ('four-stars'): {
            return selectReview(3)
        }
        case ('five-stars'): {
            return selectReview(4)
        }

        default: {
            return null;
        }
    }
    selectReview(i)
}
window.onload = () => {
    for (let i=0; i < reviewStars.length; i++) {
        reviewStars[i].addEventListener('mouseenter', handleReview);
    }

}


const submitReviewBtn = document.querySelector('#writeReview a')


const submitReview = () => {
    console.log("I got clicked!")
    const nStars = parseInt(reviewStarsHeader.textContent[0]);
    const errMsg = document.querySelector('#writeReview p.hide')
    console.log(nStars);

    if (!nStars) {
        console.log('mhmmm')
        errMsg.style.opacity = 1;
        errMsg.style.transform = 'translateY(-0.3rem)';
        errMsg.style.display = 'block';
    } else {
        errMsg.style.opacity = 0;
        errMsg.style.transform = 'translateY(0.2rem)';
        submitReviewBtn.classList.add('hide')
        submitReviewBtn.style.display = 'none';
        errMsg.style.display = 'none';
        for (let i=0; i < reviewStars.length; i++) {
            reviewStars[i].removeEventListener('mouseenter', handleReview);
        }


        if (nStars < 4) {
            const form = document.querySelector('.form');
            form.classList.remove('hide')
            form.style.transform = 'translateY(5rem)';
        } else {
            document.querySelector('.google').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.google').style.opacity = 1;
                document.querySelector('.google').style.transition = "all 0.5s 0.2s";
                document.querySelector('.google').style.transform = 'translateY(10rem)';
                
                

            }, 200)
            
            
        }
    }
}
submitReviewBtn.addEventListener('click', submitReview);

