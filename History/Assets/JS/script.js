const navBar = document.getElementById('_navBar');
const topBar = document.getElementById('_topBar');
const navLinks = document.querySelectorAll('a');

window.addEventListener('scroll', () => {
    if(window.scrollY > 760){
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


const modal = document.getElementById('_timeline');
const openModal = document.getElementById('_openTimeline');
const closeModal = document.getElementById('_closeTimeline');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});


//Turn off Parallax upon scrolling down
const backgroundElements = document.querySelectorAll('.parallax-background, .parallax-background-dojo');

function hasScrolledDown() {
    return window.scrollY > 2000; 
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