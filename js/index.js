window.onload = e => {

navbarActiveItem();
hasProjects();
menuControl();
formControl();

function navbarActiveItem() {
    let navItems = document.querySelectorAll('#header .navbar .nav .nav-link');
    navItems.forEach(navItem => {
        navItem.addEventListener('click', (e) => {
            e.preventDefault;
            element = e.target;

            if(!element.classList.contains('active-nav-item')) {
                clearActiveNavbarItens();
                element.classList.add('active-nav-item');
            }
        });

    });
}

function clearActiveNavbarItens() {
    let navItems = document.querySelectorAll('#header .navbar .nav .nav-link');
    navItems.forEach(navItem => {
        navItem.classList.remove('active-nav-item');
    })
}

function hasProjects() {
    let projects = document.querySelectorAll('#portfolio .projects .box');
    if(projects.length == 0) {
        let noProjects = document.getElementById('no-projects');
        noProjects.style.display = 'flex';
    }
}

function menuControl() {
    let navbar = document.querySelector('#header .navbar')
    let open = document.getElementById('open-navbar');
    let close = document.getElementById('close-navbar');
    open.addEventListener('click', e => {
        e.preventDefault;
        e.stopPropagation

        navbar.style.left = 0;
    });

    close.addEventListener('click', e => {
        e.preventDefault;
        e.stopPropagation

        navbar.style.left = '-100%';
    });
}

function formControl() {
    let form = document.getElementById('contact-form');
    form.addEventListener('submit', e => {
        e.preventDefault;
        e.stopPropagation;
    });
}

}