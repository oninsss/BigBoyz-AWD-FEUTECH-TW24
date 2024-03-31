// Tokyo Disneyland and DisneySea
function pageContents1() {
    document.querySelector('.textBxAbout').innerHTML = `
        <h1>Tokyo Disneyland and DisneySea</h1>
        <p>
            Disneyland and DisneySea are two of the most popular theme parks in Japan. 
            Tokyo Disneyland is a magical place where you can meet your favorite Disney 
            characters, go on thrilling rides, and watch spectacular parades and shows. 
            DisneySea is a unique theme park that is inspired by the myths and legends 
            of the sea. It features seven themed ports of call, each with its own 
            attractions, restaurants, and entertainment. Whether you're a Disney fan 
            or just looking for a fun day out, Tokyo Disneyland and DisneySea are 
            must-visit destinations in Japan.
        </p>
    `;

    // Change the map
    document.querySelector('.map').innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2096564.0431102752!2d138.0027060751251!3d34.99424749976479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187d03114737b3%3A0xe4d93636d509d3cb!2sTokyo%20Disneyland!5e1!3m2!1sen!2sph!4v1711917004215!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

    // Change the header
    document.querySelector('.header').style.backgroundImage = "linear-gradient(0deg, rgba(13, 13, 13, 1), rgba(13, 13, 13, 0),  rgba(13, 13, 13, 0.9))";
    document.getElementById('_headerVid').src = "Assets/Images/header1.mp4";

    // Change the features
    document.getElementById('_feature1').innerHTML = `
        <span class="material-symbols-outlined">
            travel
        </span>
        <h6>Visits</h6>
        <p>1.5M</p>
    `;
    document.getElementById('_feature2').innerHTML = `
        <span class="material-symbols-outlined">
            recommend
        </span>
        <h6>Ratings</h6>
        <p>4.5</p>
    `;
    document.getElementById('_feature3').innerHTML = `
        <span class="material-symbols-outlined">
            routine
        </span>
        <h6>Open</h6>
        <p>9:00AM - 8:00PM</p>
    `;

    // Change the image
    document.querySelector('.imgBx').style.backgroundImage = "url('Assets/Images/disneyland.jpg')";
}

// Kyoto's temples and shrines
function pageContents2() {
    document.querySelector('.textBxAbout').innerHTML = `
        <h1>Kyoto's temples and shrines</h1>
        <p>
            Kyoto is home to some of Japan's most beautiful temples and shrines. From 
            the iconic Fushimi Inari Shrine with its thousands of vermillion torii 
            gates to the serene Kinkaku-ji (Golden Pavilion) and the historic Kiyomizu-dera, 
            there are countless places to explore in Kyoto. The city is also known for its 
            traditional tea houses, geisha districts, and beautiful gardens. Whether you're 
            interested in history, culture, or simply want to experience the beauty of Japan, 
            Kyoto's temples and shrines are a must-visit destination.
        </p>
    `;

    // Change the map
    document.querySelector('.map').innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261326.97377006867!2d135.45044877748472!3d35.031085742072236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001077ff3ae5187%3A0xea1bdd27377bb743!2sNinna-ji%20Temple!5e1!3m2!1sen!2sph!4v1711917458093!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

    // Change the header
    document.querySelector('.header').style.backgroundImage = "linear-gradient(0deg, rgba(13, 13, 13, 1), rgba(13, 13, 13, 0),  rgba(13, 13, 13, 0.9))";
    document.getElementById('_headerVid').src = "Assets/Images/header2.mp4";

    // Change the features
    document.getElementById('_feature1').innerHTML = `
        <span class="material-symbols-outlined">
            travel
        </span>
        <h6>Visits</h6>
        <p>1.5M</p>
    `;
    document.getElementById('_feature2').innerHTML = `
        <span class="material-symbols-outlined">
            recommend
        </span>
        <h6>Ratings</h6>
        <p>4.5</p>
    `;
    document.getElementById('_feature3').innerHTML = `
        <span class="material-symbols-outlined">
            routine
        </span>
        <h6>Open</h6>
        <p>9:00AM - 8:00PM</p>
    `;

}

// Yakushima
function pageContents3() {
    document.querySelector('.textBxAbout').innerHTML = `
        <h1>Yakushima</h1>
        <p>
            Yakushima is a small island off the coast of Kyushu that is known for its 
            ancient cedar forests and diverse wildlife. The island is a UNESCO World 
            Heritage Site and a popular destination for hikers, nature lovers, and 
            outdoor enthusiasts. Yakushima is home to some of the oldest trees in the 
            world, including the famous Jomon Sugi cedar tree, which is estimated to be 
            over 2,000 years old. The island is also known for its beautiful beaches, 
            hot springs, and waterfalls. Whether you're looking for a challenging hike, 
            a relaxing soak in a hot spring, or simply want to experience the beauty of 
            nature, Yakushima is a must-visit destination in Japan.
        </p>
    `;

    // Change the map
    document.querySelector('.map').innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d551769.6842947407!2d130.2650989623416!3d30.30672326666116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353d224fb70b11a5%3A0x209870f7a4325303!2sYakushima%20Island!5e1!3m2!1sen!2sph!4v1711917522409!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

    // Change the header
    document.querySelector('.header').style.backgroundImage = "linear-gradient(0deg, rgba(13, 13, 13, 1), rgba(13, 13, 13, 0),  rgba(13, 13, 13, 0.9))";
    document.getElementById('_headerVid').src = "Assets/Images/header3.mp4";

    // Change the features
    document.getElementById('_feature1').innerHTML = `
        <span class="material-symbols-outlined">
            travel
        </span>
        <h6>Visits</h6>
        <p>1.5M</p>
    `;
    document.getElementById('_feature2').innerHTML = `
        <span class="material-symbols-outlined">
            recommend
        </span>
        <h6>Ratings</h6>
        <p>4.5</p>
    `;
    document.getElementById('_feature3').innerHTML = `
        <span class="material-symbols-outlined">
            routine
        </span>
        <h6>Open</h6>
        <p>9:00AM - 8:00PM</p>
    `;
}

// Mount Fuji
function pageContents4() {
    document.querySelector('.textBxAbout').innerHTML = `
        <h1>Mount Fuji</h1>
        <p>
            Mount Fuji is Japan's highest mountain and one of its most iconic symbols. 
            The snow-capped peak is a UNESCO World Heritage Site and a popular destination 
            for hikers, climbers, and nature lovers. You can admire the mountain from a distance, 
            take a boat cruise on one of the nearby lakes, or hike to the summit for a 
            breathtaking view of the surrounding countryside. Mount Fuji is also a sacred 
            site in Japanese culture and has inspired artists, poets, and writers for centuries. 
            Whether you're an outdoor enthusiast or simply want to experience the beauty of Japan, 
            Mount Fuji is a must-visit destination.
        </p>
    `;

    // Change the map
    document.querySelector('.map').innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32571.873107048727!2d138.7068067616108!3d35.360658258435414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019629a42fdc899%3A0xa6a1fcc916f3a4df!2sMount%20Fuji!5e1!3m2!1sen!2sph!4v1711917621542!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

    // Change the header
    document.querySelector('.header').style.backgroundImage = "linear-gradient(0deg, rgba(13, 13, 13, 1), rgba(13, 13, 13, 0),  rgba(13, 13, 13, 0.9))";
    document.getElementById('_headerVid').src = "Assets/Images/header4.mp4";

    // Change the features
    document.getElementById('_feature1').innerHTML = `
        <span class="material-symbols-outlined">
            travel
        </span>
        <h6>Visits</h6>
        <p>1.5M</p>
    `;
    document.getElementById('_feature2').innerHTML = `
        <span class="material-symbols-outlined">
            recommend
        </span>
        <h6>Ratings</h6>
        <p>4.5</p>
    `;
    document.getElementById('_feature3').innerHTML = `
        <span class="material-symbols-outlined">
            routine
        </span>
        <h6>Open</h6>
        <p>9:00AM - 8:00PM</p>
    `;
}

// Akihabara
function pageContents5() {
    document.querySelector('.textBxAbout').innerHTML = `
        <h1>Akihabara</h1>
        <p>
            Akihabara is a district in Tokyo that is famous for its otaku culture and 
            electronic shops. It is a haven for anime and manga fans, with countless 
            stores selling merchandise, DVDs, and collectibles. Akihabara is also known 
            for its maid cafes, where waitresses dressed as maids serve food and drinks 
            to customers. The district is home to some of the biggest electronics stores 
            in Japan, with everything from cameras and computers to video games and 
            appliances. Whether you're a tech enthusiast, an anime fan, or just looking 
            for a unique shopping experience, Akihabara is a must-visit destination in Tokyo.
        </p>
    `;

    // Change the map
    document.querySelector('.map').innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8108.606809742113!2d139.7671667257894!3d35.69995040351751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1d829dd5cd%3A0x772f5995da208987!2sAkihabara%20Electric%20Town%2C%20Tokyo%2C%20Japan!5e1!3m2!1sen!2sph!4v1711917722227!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

    // Change the header
    document.querySelector('.header').style.backgroundImage = "linear-gradient(0deg, rgba(13, 13, 13, 1), rgba(13, 13, 13, 0),  rgba(13, 13, 13, 0.9))";
    document.getElementById('_headerVid').src = "Assets/Images/header5.mp4";

    // Change the features
    document.getElementById('_feature1').innerHTML = `
        <span class="material-symbols-outlined">
            travel
        </span>
        <h6>Visits</h6>
        <p>1.5M</p>
    `;
    document.getElementById('_feature2').innerHTML = `
        <span class="material-symbols-outlined">
            recommend
        </span>
        <h6>Ratings</h6>
        <p>4.5</p>
    `;
    document.getElementById('_feature3').innerHTML = `
        <span class="material-symbols-outlined">
            routine
        </span>
        <h6>Open</h6>
        <p>9:00AM - 8:00PM</p>
    `;
}

// Open Map
const modal = document.getElementById('_mapModal');
const openModal = document.getElementById('_openMap');
const closeModal = document.getElementById('_closeMap');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

//Script for the preloader animation
const text = document.querySelector('.first-text')
const mainText = document.querySelector('.mainText')
const gradientBg = document.querySelector('.gradientBg')

const textLoad = () =>{
    setTimeout(() => 
        text.textContent = 'Explore the shing shong shaolang of Japan'
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

// Navbar
const navBar = document.getElementById('_navBar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        navBar.style.backdropFilter = 'blur(10px)';
    } else {
        navBar.style.backdropFilter = 'blur(0px)';
    }
});

