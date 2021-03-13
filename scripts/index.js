
// Control de SlideB Atras y Adelante
var slideIndexB = 1;
showSlidesB(slideIndexB);

function plusSlidesB(n) {
    showSlidesB(slideIndexB += n);
}

function showSlidesB(n) {
    var ii;
    var slidesB = document.getElementsByClassName("mySlidesB");
    if (n > slidesB.length) {slideIndexB = 1}
    if (n < 1) {slideIndexB = slidesB.length}
    for (ii = 0; ii < slidesB.length; ii++) {
    slidesB[ii].style.display = "none";
}
    slidesB[slideIndexB-1].style.display = "block";
}