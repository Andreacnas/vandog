//start with the variables
var i = 0; 
var images = [];
var time = 2000;

//image list
images[0] = 'images/gallery1.jpg';
images[1] = 'images/gallery2.jpg';
images[2] = 'images/gallery3.jpg';
images[3] = 'images/gallery4.jpg';


//slideshow
function slideShow(){
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout ("slideShow()", time);

}

window.onload = slideShow;


// array 1: right answers
const rightAnswers = ['A', 'A', 'A', 'A', 'A'];
const form = document.querySelector('.form_test'); 
const resultTest = document.querySelector('.resultTest'); 

let finalResult = 0;

//function to compare two arrays
function calcResult() {

    //array 2: selected options
    const answers = [form.a1.value, form.a2.value, form.a3.value,
    form.a4.value, form.a5.value];
    
    //for loop to keep counting only the right answers
    for (let i = 0; i < answers.length-1; i++) {
             
        if (answers[i] === rightAnswers[i]) {
            finalResult++;
        }
    }

    //the result box
    resultTest.innerHTML +=`<p class="finishTest">Your results are<br> ${finalResult}/5</p>`; 
    
    let checkBtn = document.querySelector('#testButton');
    let retryBtn = document.createElement("button")
    //creates a new button and replaces the previous one
    retryBtn.innerHTML = `<button id="retryBtn">Retry Test</button>`;
    checkBtn.parentNode.replaceChild(retryBtn, checkBtn);
}




