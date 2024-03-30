//Fade-in
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
    observer.observe(element);
});

//Left Slide-in
const slideLeftObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('left-slide-final');
        } else {
            entry.target.classList.remove('left-slide-final');
        }
    });
});

const slideLeftElements = document.querySelectorAll('.left-slide-initial');
slideLeftElements.forEach(element => {
    slideLeftObserver.observe(element);
});

//Right Slide-in
const slideRightObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('right-slide-final');
        } else {
            entry.target.classList.remove('right-slide-final');
        }
    });
});

const slideRightElements = document.querySelectorAll('.right-slide-initial');
slideRightElements.forEach(element => {
    slideRightObserver.observe(element);
});

//Slide Up
const slideUpObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting || !entry.isIntersecting && document.readyState === 'complete') {
            entry.target.classList.add('slide-up-final');
        } else {
            entry.target.classList.remove('slide-up-final');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slideUpElements = document.querySelectorAll('.slide-up-initial');
    slideUpElements.forEach(element => {
        slideUpObserver.observe(element);
    });
});
