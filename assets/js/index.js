const navWithDropdown = document.querySelector('.nav__dropdown');
const dropdownMenu = document.querySelector('.nav__dropdown--menu');

navWithDropdown.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'none' || !dropdownMenu.style.display) {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
})

const navBar = document.querySelector('nav');
const navBarLogo = document.querySelector('.nav__logo');
const navBarHeight = navBar.offsetHeight;
window.onscroll = () => scrollFunction();
let scrollingUp = false;
const scrollFunction = (event) => {
    const elemScrollTop = document.documentElement.scrollTop;
    const docScrollTop = document.body.scrollTop;

    if (docScrollTop > (navBarHeight * 1.5) || elemScrollTop > (navBarHeight * 1.5) ) {
        navBar.style.maxHeight = '80px';
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        navBar.style.transition = 'top 0.5s ease';
        navBarLogo.style.maxHeight = '80px';
        navBar.style.top= "0";
        scrollingUp = true;
    } else {

        if (scrollingUp) {
            navBar.style.transition = 'top 0.2s ease';
            scrollingUp = false;
        } else {
            navBar.style.transition == 'none';
        }
        
        navBar.style.top = `-${Math.max(elemScrollTop, docScrollTop)}px`
        navBar.style.maxHeight = '100px';
        navBarLogo.style.maxHeight = '100px';
        navBar.style.backgroundColor = `rgba(0, 0, 0, ${0.8 * (1 - (elemScrollTop / navBarHeight))})`
        
    } 
}


const navBtn = document.querySelector('.nav__button');

let navHidden = true;

const toggleNav = () => {
    const navList = document.querySelector('.nav__list')
    const navItems = document.querySelectorAll('.nav__list-item')
    if (navHidden) {
        navList.style.display = 'flex';
        for (let i=0; i < navItems.length; i++) {
            navItems[i].style.display = 'inherit';  
        }

        navHidden = false;
    } else {
        navList.style.display = 'none';
        for (let i=0; i < navItems.length; i++) {
            navItems[i].style.display = 'none';  
        }

        navHidden = true;
    }
}
navBtn.addEventListener('click', toggleNav)


