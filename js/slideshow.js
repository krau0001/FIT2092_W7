var $slides;
var $firstSlide;
var $lastSlide;
var $currentSlide;

// How long each slide is visible
var timer;
var interval = 3000;

$( setupSlideshow );

// Determine how many slides in slideshow and start initial timer countdown
function setupSlideshow() {
  $slides = $('#slideshow li');
  $firstSlide = $slides.first();
  $lastSlide = $slides.last();
  $currentSlide = $firstSlide;

$slides.not( $currentSlide ).hide();

// Call nextSlide after 3 seconds (interval is assigned to 3 seconds at the top)
timer = setTimeout( nextSlide, interval );

// When the mouse enters the slideshow, clear the timer so it doesn't go to next slide
$( '#slideshow' ).on( 'mouseenter', function(){
  clearTimeout( timer );
} );

// When the mouse leaves the slideshow, set the timer to call nextSlide function in 3 seconds (interval = 3 seconds).
$( '#slideshow' ).on( 'mouseleave', function(){
  timer = setTimeout( nextSlide, interval );
} );

// When the slideshow is clicked, call nextSlide function and clear timeout
$( '#slideshow' ).on( 'click', function(){
  nextSlide();
  clearTimeout( timer );
} );
}

function nextSlide() {
  $currentSlide.fadeOut()

  if ( $currentSlide.is( $lastSlide ) ) {
    $currentSlide = $firstSlide;
   } else {
    $currentSlide = $currentSlide.next();
   }

  $currentSlide.fadeIn();

// Call nextSlide after 3 seconds (interval is assigned to 3 seconds at the top)
  timer = setTimeout( nextSlide, interval );
}