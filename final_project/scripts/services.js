let imgSelector = 0;

//Image selector, displays the selected img while hidding the rest
function nextImg() {
  if (imgSelector == 4) {
    imgSelector = 0;
    if (imgSelector == 0) {
      document.querySelector(`.c4`).style.display = "none";
    }
    imgSelector++;
  } else {
    imgSelector++;
  }
  displayActiveImage();
}

function displayActiveImage() {
  //display flex (appear) for current active image
  let activeImg = document.querySelector(`.c${imgSelector}`);
  activeImg.style.display = "flex";

  //display none for last img
  if (document.querySelector(`.c${imgSelector - 1}`) == null) return; //Check if element exists
  let lastImg = document.querySelector(`.c${imgSelector - 1}`);
  lastImg.style.display = "none";
}
function slideImgs() {
  nextImg();

  setTimeout(() => {
    slideImgs();
  }, 4000);
}
