var ticketindex = 0; 
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  ticketindex++;
  if (ticketindex > slides.length) {ticketindex = 1}    
  slides[ticketindex-1].style.display = "block";  
  setTimeout(showSlides, 2000); 
}