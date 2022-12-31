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

