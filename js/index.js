window.onload = e => {

navbarActiveItem();

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

}