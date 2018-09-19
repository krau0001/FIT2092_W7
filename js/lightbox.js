var $overlay;
var $lightbox;
var $image;
var $close;

$( setupLightbox );

function setupLightbox() {
// Create new html elements
  $overlay = $( '<div id="lightboxOverlay">' );
  $lightbox = $( '<div id="lightboxContainer">' );
  $image = $( '<img id="lightboxImage">' );
  $close = $( '<img id="lightboxClose" src="images/closebutton.png">');

// Append (add to end) new elements into HTML doc
// $lightbox is appended inside the overlay, which uses flexbox to
keep it centered. 
// $image and $close are placed into $lightbox 
  $( 'body' ).append( $overlay );
  $( $overlay ).append( $lightbox );
  $lightbox.append( $image );
  $lightbox.append( $close );
}