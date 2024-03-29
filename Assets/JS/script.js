//Script for the preloader animation
const text = document.querySelector('.first-text')
const mainText = document.querySelector('.mainText')
const gradientBg = document.querySelector('.gradientBg')

const textLoad = () =>{
    setTimeout(() => {
        text.textContent = 'Japan';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Tokyo';
    }, 1500);
    setTimeout(() => {
        text.textContent = 'Ramen';
    }, 3000);
    setTimeout(() => {
        text.textContent = 'Katana';
    }, 4500);
    setTimeout(() => {
        text.textContent = 'Torii';
    }, 6000);
}

textLoad();
setInterval(textLoad, 7000);


//Script for the preloader events
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');

    setTimeout(() => {
        loader.classList.add('loader-hidden');
        loader.addEventListener('transitionend', () => {
            document.body.removeChild(loader);
            
        });
        
    }, 7000);
    
    
});



//script for navbar
const hamburger = document.getElementById('_hamburger');
const close = document.getElementById('_close');
const sideBar = document.querySelector('.sidebar');

function showSideBar(){    
    sideBar.style.display = 'flex';
}

function hideSideBar(){
    sideBar.style.display = 'none';
}

hamburger.addEventListener('click', () => {
    showSideBar();
});

close.addEventListener('click', () => {
    hideSideBar();
});