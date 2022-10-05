// constants - show slides
let imgNo = 0;
let delay = 2500;

let posterArray = ["./images/vv_in_orange.jpg", "./images/vv_in_pink.jpg", "./images/vv_in_yellow.jpg", "./images/vv_life.jpg"];
let cardArray = ["./images/vv_in_pink_card.jpg", "./images/vv_in_yellow_card.jpg", "./images/vv_life_card.jpg", "./images/vv_in_orange_card.jpg"];
let nbArray = ["./images/vv_in_yellow_nb.jpg", "./images/vv_life_nb.jpg", "./images/vv_in_orange_nb.jpg", "./images/vv_in_pink_nb.jpg"];
let kcArray = ["./images/vv_life_kc.jpg", "./images/vv_in_orange_kc.jpg", "./images/vv_in_pink_kc.jpg", "./images/vv_in_yellow_kc.jpg"];

const myInterval = setInterval("showSlides()", delay);

window.onload = function() {
    myInterval;
}

// function - show slides
function showSlides() {
    imgNo += 1;
    if (imgNo > posterArray.length-1) {
        imgNo = 0;
    }
    document.getElementById('slides-poster').src = posterArray[imgNo];
    document.getElementById('slides-card').src = cardArray[imgNo];
    document.getElementById('slides-nb').src = nbArray[imgNo];
    document.getElementById('slides-kc').src = kcArray[imgNo];
}

// function - show image of chosen radio item
function showImg(slideType, id) {
    document.getElementById(slideType).src = './images/' + id + '.jpg';
    clearInterval(myInterval);
}