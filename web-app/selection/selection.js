var interval = 4
var count = 0

$("#hide").click(function() {
  var gcount = 0
  $("ol.demo li:lt(" + interval + ")").hide().addClass("gone")
  $("ol.demo li").each(function() {

    el = $(this);
    if (el.hasClass('green') && !el.hasClass('gone')){ 
      gcount++

      $( "p.text" ).text( "There is "+ gcount +" green li" );
  }  
  if (gcount === 0 ){$( "p.text" ).text( "There is no green li" );}
})

  interval += 4
});

$( document ).on( "click", function( event ) {
  $( event.target ).closest( "ol.demo li" ).css( "color","purple" );
});

$( "#changeColor" ).on({
    click: function() {
     
      $( "ol.demo li" ).addClass(function( index, currentClass ) {
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