var slideIndex = 1;
showSlidesContent(slideIndex);

function plusSlides(n) {
  showSlidesContent(slideIndex += n);
}

function currentSlideContent(n) {
  showSlidesContent(slideIndex = n);
}

function showSlidesContent(n) {
  var i;
  var slides = document.getElementsByClassName("topic-popup");
  var dots = document.getElementsByClassName("slide-content");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
}