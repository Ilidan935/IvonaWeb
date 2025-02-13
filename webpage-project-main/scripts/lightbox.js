function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("topButton").style.display="none";
    
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("topButton").style.display="block";
    
  }

  
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "flex";
    slides[slideIndex-1].style.height = "50%";
    slides[slideIndex-1].style.background.color = "black";
    slides[slideIndex-1].style.justify.content = "center";
    
   
  }