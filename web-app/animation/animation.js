$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {

			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');				
				break;


			// Down Arrow Pressed
			case 40:
				$('img').animate({top: "+=10px"}, 'fast');
				break;


			// Right Arrow Pressed
			case 39:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			
		}
	});

    $('img').mouseleave(function(){
        $('img').effect('bounce', {times:3}, 500);
    });

	$('img').click(function(){
        $("img").fadeOut(500);
        $("img").fadeIn(500);

        
    });

    

});