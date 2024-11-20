//for modes

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
  var slides = document.getElementsByClassName("Slide_saiyan");
  var dots = document.getElementsByClassName("Slide_saiyan_dot");
  
  if (m > slides.length) {slideIndex3d = 1}    
  if (m < 1) {slideIndex3d = slides.length}
  for (mm = 0; mm < slides.length; mm++) {
      slides[mm].style.display = "none";
      let number = document.getElementById("mode_no").innerHTML = slideIndex3d + " / " + slides.length;  
  }
  for (mm = 0; mm < dots.length; mm++) {
      dots[mm].className = dots[mm].className.replace(" activef", "");
  }

  slides[slideIndex3d-1].style.display = "block";   
  dots[slideIndex3d-1].className += " activef";
  details[slideIndex3d-1].style.display = "block"; 
}