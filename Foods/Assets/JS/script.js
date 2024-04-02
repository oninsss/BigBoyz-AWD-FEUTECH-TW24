//Script for the preloader animation
const text = document.querySelector('.first-text')
const mainText = document.querySelector('.mainText')
const gradientBg = document.querySelector('.gradientBg')
const loader = document.getElementById('_loader')

const textLoad = () =>{
    loader.style.width = '100vw';
    setTimeout(() => {
        text.textContent = 'Sushi';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Ramen';
    }, 1500);
    setTimeout(() => {
        text.textContent = 'Udon';
    }, 3000);
    setTimeout(() => {
        text.textContent = 'Tempura';
    }, 4500);
    setTimeout(() => {
        text.textContent = 'Takoyaki';
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
    sideBar.style.opacity = '1';
}

function hideSideBar(){
    sideBar.style.display = 'none';
    sideBar.style.opacity = '0';
}

hamburger.addEventListener('click', () => {
    showSideBar();
});

close.addEventListener('click', () => {
    hideSideBar();
});

//Script for the navbar color change

const navBar = document.getElementById('_navBar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        navBar.style.backdropFilter = 'blur(10px)';
    } else {
        navBar.style.backdropFilter = 'blur(0px)';
    }
});

const imageWindow = document.getElementById('_imageWindow');
const foodName = document.getElementById('_foodName');
const foodJapName = document.getElementById('_foodJapName');
const foodDesc = document.getElementById('_foodDescrip');

const sushi = document.getElementById('_sushi');
const ramen = document.getElementById('_ramen');
const tempura = document.getElementById('_tempura');
const takoyaki = document.getElementById('_takoyaki');
const udon = document.getElementById('_udon');

sushi.addEventListener('click', () => {
    imageWindow.style.opacity = '0';
    foodName.style.opacity = '0';
    foodJapName.style.opacity = '0';
    foodDesc.style.opacity = '0';
    imageWindow.src = './Assets/images/sushiOne.png';
    setTimeout(() => {
        
        imageWindow.style.opacity = '1';
        foodName.textContent = 'Sushi';
        foodJapName.textContent = '寿司';
        foodDesc.textContent = 'Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is "sushi rice", also referred to as shari, or sumeshi.';
        foodName.style.opacity = '1';
        foodJapName.style.opacity = '1';
        foodDesc.style.opacity = '1';
    }, 1000);
    
});

ramen.addEventListener('click', () => {
    imageWindow.style.opacity = '0';
    foodName.style.opacity = '0';
    foodJapName.style.opacity = '0';
    foodDesc.style.opacity = '0';
    
    setTimeout(() => { 
        imageWindow.src = './Assets/images/ramen1.png';
        setTimeout(() => {
            imageWindow.style.opacity = '1';
            foodName.textContent = 'Ramen';
            foodJapName.textContent = 'ラーメン';
            foodDesc.textContent = 'Ramen is a Japanese noodle soup. It consists of Chinese-style wheat noodles served in a meat or (occasionally) fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork, nori, menma, and scallions. Nearly every region in Japan has its own variation of ramen.';
            foodName.style.opacity = '1';
            foodJapName.style.opacity = '1';
            foodDesc.style.opacity = '1';
        }, 300);
    }, 1000);
    
});

tempura.addEventListener('click', () => {
    imageWindow.style.opacity = '0';
    foodName.style.opacity = '0';
    foodJapName.style.opacity = '0';
    foodDesc.style.opacity = '0';
    
    setTimeout(() => {
        imageWindow.src = './Assets/images/tempura.png';
        setTimeout(() => {
            foodName.textContent = 'Tempura';
            foodJapName.textContent = '天ぷら';
            foodDesc.textContent = 'Tempura is a Japanese dish usually consisting of seafood or vegetables that have been battered and deep-fried. The dish was influenced by fritter-cooking techniques introduced by Portuguese residing in Nagasaki in the 16th century, and the name "tempura" relates to that origin.';
            imageWindow.style.opacity = '1';
            foodName.style.opacity = '1';
            foodJapName.style.opacity = '1';
            foodDesc.style.opacity = '1';
        }, 300);
    }, 1000);
});

takoyaki.addEventListener('click', () => {
    imageWindow.style.opacity = '0';
    foodName.style.opacity = '0';
    foodJapName.style.opacity = '0';
    foodDesc.style.opacity = '0';

    setTimeout(() => {
        imageWindow.src = './Assets/images/takoyaki.png';
        foodName.textContent = 'Takoyaki';
        foodJapName.textContent = 'たこ焼き';
        foodDesc.textContent = 'Takoyaki is a ball-shaped Japanese snack made of a wheat flour-based batter and typically filled with minced or diced octopus, tempura scraps, pickled ginger, and green onion. Takoyaki are brushed with takoyaki sauce, similar to Worcestershire sauce, and mayonnaise. The takoyaki is then sprinkled with green laver and shavings of dried bonito.';
        setTimeout(() => {
            imageWindow.style.opacity = '1';
            foodName.style.opacity = '1';
            foodJapName.style.opacity = '1';
            foodDesc.style.opacity = '1';
        }, 300);
    }, 1000);
});

udon.addEventListener('click', () => {
    imageWindow.style.opacity = '0';
    foodName.style.opacity = '0';
    foodJapName.style.opacity = '0';
    foodDesc.style.opacity = '0';

    setTimeout(() => {
        imageWindow.src = './Assets/images/udon.png';
        foodName.textContent = 'Udon';
        foodJapName.textContent = 'うどん';
        foodDesc.textContent = 'Udon is a type of thick wheat noodle used frequently in Japanese cuisine. It is often served hot as a noodle soup in its simplest form, as kake udon, in a mildly flavoured broth called kakejiru, which is made of dashi, soy sauce, and mirin. It is usually topped with thinly chopped scallions.';
        setTimeout(() => {
            imageWindow.style.opacity = '1';
            foodName.style.opacity = '1';
            foodJapName.style.opacity = '1';
            foodDesc.style.opacity = '1';
        }, 300);
    }, 1000);
    
});


