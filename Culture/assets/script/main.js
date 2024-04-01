//Script for the preloader animation
const text = document.querySelector('.first-text')
const mainText = document.querySelector('.mainText')
const gradientBg = document.querySelector('.gradientBg')

const textLoad = () =>{
    setTimeout(() => {
        text.textContent = 'Culture';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Geisha';
    }, 1500);
    setTimeout(() => {
        text.textContent = 'Samurai';
    }, 3000);
    setTimeout(() => {
        text.textContent = 'Theatre';
    }, 4500);
    setTimeout(() => {
        text.textContent = 'Manga';
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

//Script for the navbar color change

const navBar = document.getElementById('_navBar');
const topBar = document.getElementById('_topBar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 760){
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

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__container h1", scrollRevealOption);
  
  ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  // about container
  ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
  ScrollReveal().reveal(".about__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".about__container .about__flex", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  // discover container
  ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".discover__card__content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
  });
  
  // blogs container
  ScrollReveal().reveal(".blogs__card", {
    duration: 1000,
    interval: 400,
  });
  
  // journals container
  ScrollReveal().reveal(".journals__card", {
    ...scrollRevealOption,
    interval: 400,
  });
  
  