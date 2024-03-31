//Script for the preloader animation
const text = document.querySelector('.first-text')
const mainText = document.querySelector('.mainText')
const gradientBg = document.querySelector('.gradientBg')

const textLoad = () =>{
    setTimeout(() => {
        text.textContent = 'Japan';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Places';
    }, 1500);
    setTimeout(() => {
        text.textContent = 'Foods';
    }, 3000);
    setTimeout(() => {
        text.textContent = 'Culture';
    }, 4500);
    setTimeout(() => {
        text.textContent = 'History';
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


//Script for random background images
const firstBg = "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const secondBg = "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const thirdBg = "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const fourthBg = "https://images.unsplash.com/photo-1494515426402-f1980ace7a9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const fifthBg = "https://images.unsplash.com/photo-1505440484611-23c171ad6e96?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const sixthBg = "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const seventhBg = "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const eightBg = "https://images.unsplash.com/photo-1628850627071-42b3fb16533d?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

var bgImages = [firstBg, secondBg, thirdBg, fourthBg, fifthBg, sixthBg, seventhBg, eightBg];

const topPart = document.getElementById('_topPart');

function randomBg(){
    var random = Math.floor(Math.random() * bgImages.length);
    topPart.style.backgroundImage = `linear-gradient(0deg, rgba(13, 13, 13, 1), rgba(13, 13, 13, 0),  rgba(13, 13, 13, 0.9)), url(${bgImages[random]})`;
}

randomBg();


//Script for the navbar color change

const navBar = document.getElementById('_navBar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        navBar.style.backdropFilter = 'blur(10px)';
    } else {
        navBar.style.backdropFilter = 'blur(0px)';
    }
});

//Script for the scroll down button
const scrollMouse = document.getElementById('_scrollMouse');

scrollMouse.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});