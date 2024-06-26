const navBar = document.getElementById('_navBar');
const topBar = document.getElementById('_topBar');
const navLinks = document.querySelectorAll('a');

window.addEventListener('scroll', () => {
    if(window.scrollY > 500){
        navBar.style.backdropFilter = 'blur(10px)';
        topBar.querySelectorAll('a').forEach(link => {
            link.style.color = '#FFF';
        });
    } else {
        navBar.style.backdropFilter = 'blur(0px)';
        topBar.querySelectorAll('a').forEach(link => {
            link.style.color = '#1B190B';
        });
    }
});

//Turn off Parallax upon scrolling down
const backgroundElements = document.querySelectorAll('.parallax-background, .parallax-background-dojo');

function hasScrolledDown() {
    return window.scrollY > 1000; 
}

function removeBackground() {
    if (hasScrolledDown()) {
        backgroundElements.forEach(element => {
            element.style.display = 'none';
        });
    } else {
        backgroundElements.forEach(element => {
            element.style.display = 'block';
        });
    }
}

window.addEventListener('scroll', removeBackground);


// Auto Scroll to Timeline Periods
scroll1 = () => {
    document.getElementById('_period1').scrollIntoView({behavior: "smooth"});
}
scroll2 = () => {
    document.getElementById('_period2').scrollIntoView({behavior: "smooth"});
}
scroll3 = () => {
    document.getElementById('_period3').scrollIntoView({behavior: "smooth"});
}
scroll4 = () => {
    document.getElementById('_period4').scrollIntoView({behavior: "smooth"});
}
scroll5 = () => {
    document.getElementById('_period5').scrollIntoView({behavior: "smooth"});
}
scroll6 = () => {
    document.getElementById('_period6').scrollIntoView({behavior: "smooth"});
}
scroll7 = () => {
    document.getElementById('_period7').scrollIntoView({behavior: "smooth"});
}
scroll8 = () => {
    document.getElementById('_period8').scrollIntoView({behavior: "smooth"});
}
scroll9 = () => {
    document.getElementById('_period9').scrollIntoView({behavior: "smooth"});
}

//Script for the preloader animation
const text = document.querySelector('.first-text')
const mainText = document.querySelector('.mainText')
const gradientBg = document.querySelector('.gradientBg')

const textLoad = () =>{
    setTimeout(() => 
        text.textContent = 'Traveling to History...'
    , 0);
    setTimeout(() => {
        text.textContent = '2024';
    }, 2500);
    setTimeout(() => {
        text.textContent = '1989';
    }, 5000);
    setTimeout(() => {
        text.textContent = '1912';
    }, 7500);
    setTimeout(() => {
        text.textContent = '14 000 BC';
    }, 10000);
}

textLoad();
setInterval(textLoad, 12500);


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