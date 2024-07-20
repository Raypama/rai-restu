/* bikin Toggle class active */
const navbarNav = document.querySelector('.navbar-nav');

//onclick hamburger menu add class active in navbar-nav
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik di luar navbar-nav(sidebar) off add .active 
//in navbar-nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})