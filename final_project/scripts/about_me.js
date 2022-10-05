//***Start***
var i = 0; 
var images = [];
var time = 2000;

//Image List
images[0] = 'images/image0.jpeg';
images[1] = 'images/image1.jpeg';
images[2] = 'images/image2.jpeg';
images[3] = 'images/image3.jpeg';
images[4] = 'images/image4.jpeg';

//Slideshow
function slideImg(){
    document.slide.src = images[i];

    if (i< images.length - 1) {
        i++;
    } else {
        i =0;
    }

    setTimeout ("slideImg()", time);

}

window.onload = slideImg;
