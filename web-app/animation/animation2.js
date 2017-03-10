$(document).ready(function() {

	// Decrement margin-left by 600px every 2 seconds
	var currentSlide = 1;
	var numSlides = 4
	setInterval(function() {
		$("#slider .slides").animate({'margin-left': '-=600px'}, 700, function(){
			currentSlide++;
			console.log(currentSlide);
			if (currentSlide === numSlides) {
				currentSlide = 1;
				$("#slider .slides").css('margin-left', 0);
			}
		});
	}, 2000);
	
});

