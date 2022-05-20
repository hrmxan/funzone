let colapsBar = document.getElementById('colapsBar');
let mute_buttons = document.querySelectorAll('.mute_buttons');
mute_buttons.forEach(function(item){
    item.addEventListener('click', () => {
        item.preventDefault();
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