var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("re");
  var dots = document.getElementsByClassName("ree");
  var details = document.getElementsByClassName("red");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activef", "");
  }
  for (i = 0; i < details.length; i++) {
    details[i].style.display = "none"; 
}
  slides[slideIndex-1].style.display = "block";   
  dots[slideIndex-1].className += " activef";
  details[slideIndex-1].style.display = "block"; 
}

