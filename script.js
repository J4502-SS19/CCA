//Loads when the javascript has loaded. when menu-trigger is clicked the function slide toggle occurs. THe 500 is the length of the animation.

$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('#container ul').slideToggle(500);
  });//end slide toggle

//When window is resized, the display:none is turned off for the ul so the menu displays on click or touch.
  $(window).resize(function() {
     if (  $(window).width() > 700 ) {
    $('#container ul').removeAttr('style');
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
