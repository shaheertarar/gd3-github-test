console.log('javascript is linked');

var totalFish = 100;

function moveFish(){
	$('.salmon').each(function(){
		var randLeft = Math.random() * $(window).width();
		var randTop = Math.random() * $(window).height();

		$(this).css('left', randLeft + 'px');
		$(this).css('top', randTop + 'px');
	});
}

window.onload = function(){
	for (var i=0; i<totalFish; i++){
		var randLeft = Math.random() * $(window).width();
		var randTop = Math.random() * $(window).height();

		var fishImage = $("<img class='salmon' src='salmon.png'>");
		$(fishImage).css('left', randLeft + 'px');
		$(fishImage).css('top', randTop + 'px');

		$('body').append(fishImage);
	}

	setInterval(moveFish, 500);
}