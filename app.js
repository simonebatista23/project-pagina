let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let manualControls = document.querySelectorAll('.slider-manual .btn');

// config param
let countItem = items.length;
let itemActive = 0;

// event next click
next.onclick = function () {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
}

//event prev click
prev.onclick = function () {
    itemActive = (itemActive - 1 + countItem) % countItem;
    showSlider();
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    let manualControlActiveOld = document.querySelector('.slider-manual .btn.active');

    if (itemActiveOld) itemActiveOld.classList.remove('active');
    if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');
    if (manualControlActiveOld) manualControlActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    manualControls[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// click manual control
manualControls.forEach((control, index) => {
    control.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


// carousel //

let nextDom = document.getElementById('next-carousel');


let carouselDom = document.querySelectorAll('.carousel .list .item');
let countItemCarousel = carouselDom.length;
let itemActiveCarousel = 0;


nextDom.onclick = function () {
    itemActiveCarousel = (itemActiveCarousel + 1) % countItemCarousel;
    showSliderCarousel();
}
let refreshIntervalCarousel = setInterval(() => {
    nextDom.click();
}, 5000)

function showSliderCarousel() {
    // remove item active old
    let itemActiveOld = document.querySelector('.carousel .list .item.checked');

    if (itemActiveOld) itemActiveOld.classList.remove('checked');


    // active new item
    carouselDom[itemActiveCarousel].classList.add('checked');
    ;

    // clear auto time run slider
    clearInterval(refreshIntervalCarousel);
    refreshIntervalCarousel = setInterval(() => {
        nextDom.click();
    }, 5000)
}

// Slider-Feedbacks

let itemsFeedbacks = document.querySelectorAll('.slider-feedbacks .list .item');
let nextFeedbacks = document.getElementById('next-feedbacks');
let manualControlsFeedbacks = document.querySelectorAll('.slider-manual-feedbacks .btn');

let countFeedbacks = itemsFeedbacks.length;
let itemActiveFeedbacks = 0;

nextFeedbacks.onclick = function () {
    itemActiveFeedbacks = (itemActiveFeedbacks + 1) % countFeedbacks;
    showSliderFeedBacks();
}

let refreshIntervalFeedbacks = setInterval(() => {
    nextFeedbacks.click();
}, 5000);

function showSliderFeedBacks() {
    // Remover item ativo antigo
    let itemActiveOld = document.querySelector('.slider-feedbacks .list .item.active');
    let manualControlActiveOld = document.querySelector('.slider-manual-feedbacks .btn.active');

    if (itemActiveOld) itemActiveOld.classList.remove('active');
    if (manualControlActiveOld) manualControlActiveOld.classList.remove('active');

    // Ativar novo item
    itemsFeedbacks[itemActiveFeedbacks].classList.add('active');
    manualControlsFeedbacks[itemActiveFeedbacks].classList.add('active');


    // Reiniciar o intervalo do slider
    clearInterval(refreshIntervalFeedbacks);
    refreshIntervalFeedbacks = setInterval(() => {
        nextFeedbacks.click();
    }, 5000);
}

manualControlsFeedbacks.forEach((control, index) => {
    control.addEventListener('click', () => {
        itemActiveFeedbacks = index;
        showSliderFeedBacks();
    })
});
