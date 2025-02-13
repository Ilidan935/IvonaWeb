
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

/*
$(document).ready(function(){
  $('.dropbtn').click(function() {
    $('html').toggleClass('dropdown-open');
    $('.dropdown-content').slideToggle();
  });
});*/

$(document).ready(function(){
  $('.dropbtn').click(function() {
    $('.overlay').toggle();
    $('.dropdown-content').slideToggle();
  });

});





