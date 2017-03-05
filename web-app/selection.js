var n = 1
var count = 0
$("#hide").click(function() {

  $("ul li:lt(" + n + ")").hide()

  n += 4
});

$( document ).on( "click", function( event ) {
  $( event.target ).closest( "li" ).css( "color","purple" );
});

$( "#show" ).on({
    click: function() {
     
      $( "ul li" ).addClass(function( index, currentClass ) {
        var addedClass;

        if ( currentClass === "red" ) {
          count++
          addedClass = "green";
          $( "p.text" ).text( "There is "+ count +" green li" );
        }

        return addedClass;
      });
    }, mouseenter: function() {
      $( this ).fadeOut(500);
    }, mouseleave: function() {
      $( this ).fadeIn()
    }
  });