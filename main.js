$('.yoga-btn').click(function() {
	$('.yoga').show()
	$('.photos').hide()
	$('.runing').hide()
	$('.boxing').hide()
	$('.fitness').hide()
});

$('.fitness-btn').click(function() {
	$('.yoga').hide()
	$('.photos').hide()
	$('.runing').hide()
	$('.boxing').hide()
	$('.fitness').show()
});

$('.boxing-btn').click(function() {
	$('.yoga').hide()
	$('.photos').hide()
	$('.runing').hide()
	$('.boxing').show()
	$('.fitness').hide()
});

$('.runing-btn').click(function() {
	$('.yoga').hide()
	$('.photos').hide()
	$('.runing').show()
	$('.boxing').hide()
	$('.fitness').hide()
});

$('.photos-btn').click(function() {
	$('.yoga').hide()
	$('.photos').show()
	$('.runing').hide()
	$('.boxing').hide()
	$('.fitness').hide()
});





/*----------- Mobile Responsive Menu JQuery Start -----------*/

$('.fa-align-justify').click(function(){
	$('.fa-align-justify').hide();
	$('.fa-times').show();
	$('.responsive-menu').slideToggle('slow');
});
$('.fa-times').click(function(){
	$('.fa-align-justify').show();
	$('.fa-times').hide();
	$('.responsive-menu').slideToggle('slow');
});

/*----------- Mobile Responsive Menu JQuery End -----------*/