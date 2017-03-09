var demo = $('#demo');

$('#linkAdd').click(function (event) {
	demo.addClass('modify');
});

$('#linkRemove').click(function (event) {
	demo.removeClass('modify');
});
