//Loads when the javascript has loaded. when menu-trigger is clicked the function slide toggle occurs. THe 500 is the length of the animation.

$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('div ul').slideToggle(500);
  });//end slide toggle

//When window is resized, the display:none is turned off for the ul so the menu displays on click or touch.
$(window).resize(function() {
   if (  $(window).width() > 700 ) {
  $('div ul').removeAttr('style');
 }
});//end resize
});//end ready

// var newLink = document.createElement( "a" );
//
// var allParagraphs = document.getElementsByTagName('p');
//
// var firstParagraph = allParagraphs[0];
//
// function revealCopy(e) {
//     var allParagraphs = document.getElementsByTagName("p");
//     for( var i = 0; i < allParagraphs.length; i++ ) {
//         if( i === 0 ) {
//             continue;
//     }
//     allParagraphs[ i ].style.display = "block";
//   }
//   this.remove();
//   e.preventDefault();
// }
//
// newLink.setAttribute("href","#");
//
// newLink.innerHTML="Read More";
//
// newLink.setAttribute( "class", "more-link" );
//
// firstParagraph.appendChild( newLink );
//
// newLink.addEventListener( "click", revealCopy );
//
// for( var i = 0; i < allParagraphs.length; i++ ) {
//         if( i === 0 ) {
//         continue;
//       }
//     allParagraphs[ i ].style.display = "none";
// }

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
  var dots = document.getElementsByClassName("dot");
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

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}
