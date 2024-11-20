//for 3d

var slideIndex3d = 1;
showSlides3d(slideIndex3d);

function plusSlides3d(m) {
  showSlides3d(slideIndex3d += m);
}

function currentSlide3d(m) {
  showSlides3d(slideIndex3d = m);
}

function showSlides3d(m) {
  var mm;
  var slides = document.getElementsByClassName("3D");
  var dots = document.getElementsByClassName("3dd");
  var details = document.getElementsByClassName("3ddd");
  if (m > slides.length) {slideIndex3d = 1}    
  if (m < 1) {slideIndex3d = slides.length}
  for (mm = 0; mm < slides.length; mm++) {
      slides[mm].style.display = "none";  
  }
  for (mm = 0; mm < dots.length; mm++) {
      dots[mm].className = dots[mm].className.replace(" activef", "");
  }
   for (mm = 0; mm < details.length; mm++) {
     details[mm].style.display = "none"; 
 }
  slides[slideIndex3d-1].style.display = "block";   
  dots[slideIndex3d-1].className += " activef";
  details[slideIndex3d-1].style.display = "block"; 
}