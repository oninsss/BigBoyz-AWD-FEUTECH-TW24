//Script for the preloader animation
const text = document.querySelector('.first-text')

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
setInterval(textLoad, 7500);


//Script for the preloader events
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');

    setTimeout(() => {
        loader.classList.add('loader-hidden');
        loader.addEventListener('transitionend', () => {
            document.body.removeChild(loader);
        });
    }, 7500);
});

