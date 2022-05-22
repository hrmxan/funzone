let colapsBar = document.getElementById('colapsBar');
let mute_buttons = document.querySelectorAll('.mute_buttons');
mute_buttons.forEach(function(item){
    item.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
let burgerButton = document.getElementById('burgerButton');
burgerButton.addEventListener('click', () => {
    colapsBar.classList.toggle('colapsed');
});
let closeNav = document.getElementById('closeNav');
closeNav.addEventListener('click', () => {
    colapsBar.classList.remove('colapsed');
});

let tips__nav_item = document.querySelectorAll('.tips__nav_item');
tips__nav_item.forEach(item => {
    item.addEventListener('click', () => {
        tips__nav_item.forEach(e => {
            e.classList.remove('active');
        }
        );
        item.classList.add('active');
    });
});