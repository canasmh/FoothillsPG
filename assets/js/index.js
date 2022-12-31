const navWithDropdown = document.querySelector('.nav__dropdown');
const dropdownMenu = document.querySelector('.nav__dropdown--menu');

navWithDropdown.addEventListener('click', () => {
    console.log(dropdownMenu.style.display);
    if (dropdownMenu.style.display === 'none' || !dropdownMenu.style.display) {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
})

const navBar = document.querySelector('nav');
const navBarLogo = document.querySelector('.nav__logo');
const navBarHeight = navBar.offsetHeight;
console.log(navBarHeight);
window.onscroll = () => scrollFunction();
let scrollingUp = false;
const scrollFunction = (event) => {
    const elemScrollTop = document.documentElement.scrollTop;
    const docScrollTop = document.body.scrollTop;

    if (docScrollTop > (navBarHeight * 1.5) || elemScrollTop > (navBarHeight * 1.5) ) {
        console.log('gt')
        navBar.style.maxHeight = '8rem';
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        navBar.style.transition = 'top 0.5s ease';
        navBarLogo.style.maxHeight = '8rem';
        navBar.style.top= "0";
        scrollingUp = true;
    } else {
        console.log('lt');

        if (scrollingUp) {
            navBar.style.transition = 'top 0.2s ease';
            scrollingUp = false;
        } else {
            navBar.style.transition == 'none';
        }
        
        console.log(Math.max(elemScrollTop, docScrollTop))
        navBar.style.top = `-${Math.max(elemScrollTop, docScrollTop)}px`
        navBar.style.maxHeight = '10rem';
        navBarLogo.style.maxHeight = '10rem';
        navBar.style.backgroundColor = `rgba(0, 0, 0, ${0.8 * (1 - (elemScrollTop / navBarHeight))})`
        
    } 
    console.log('scrollingUp', scrollingUp);
}


