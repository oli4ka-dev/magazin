let menuParents = document.querySelectorAll('.menu-page__parent');
// let submenuItems = document.querySelectorAll('.submenu-page__item');

for (let index = 0; index < menuParents.length; index++) {
    const menuParent = menuParents[index];
    menuParent.addEventListener("mouseenter", function (e) {
        menuParent.classList.add('_active');
    });
    menuParent.addEventListener("mouseleave", function (e) {
        menuParent.classList.remove('_active');
    });
}

let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener("click", function (e) {
    menuPageBurger.classList.toggle('_active');
    _slideToggle(menuPageBody);
    // menuPageBody.classList.toggle('_active');
});

let searchSelect = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');

searchSelect.addEventListener("click", function(e){
    searchSelect.classList.toggle('_active');
    _slideToggle(categoriesSearch);
});