


$(document).on('click', '#choice1', function(){

	localStorage.setItem('direction', 'choice1');

	window.location.href = "././choice1.html";

});


$(document).on('click', '#choice2', function(){

	localStorage.setItem('direction', 'choice2');

	window.location.href = "././choice2.html";

});


$(document).on('click', '#choice3', function(){

	localStorage.setItem('direction', 'choice3');
	
	window.location.href = "././choice3.html";

});

$(document).on('click', '#hide', function(){

	var currentDirection = localStorage.getItem('direction');

	if ( currentDirection === 'choice1' ) {
		window.location.href = "././bear-is-ok.html";
		
	} 

	else if ( currentDirection === 'choice2' ) {
		window.location.href = "././bear-bad.html";
	}

	else if ( currentDirection === 'choice3' ) {
		window.location.href = "././bear-bad.html";
	}

});


$(document).on('click', '#lake', function(){

	var currentDirection = localStorage.getItem('direction');

	if ( currentDirection === 'choice1' ) {
		window.location.href = "././explorelake.html";
		
	} 

	else if ( currentDirection === 'choice2' ) {
		window.location.href = "././foodatlake.html";
	}

	else if ( currentDirection === 'choice3' ) {
		window.location.href = "././foodatlake.html";
	}

});

$(document).on('click', '#home', function(){

	var currentDirection = localStorage.getItem('direction');

	if ( currentDirection === 'choice1' ) {
		window.location.href = "././home-nighttime.html";
		
	} 

	else if ( currentDirection === 'choice2' ) {
		window.location.href = "././home-bad.html";
	}

	else if ( currentDirection === 'choice3' ) {
		window.location.href = "././home-nighttime.html";
	}

});

$(document).on('click', '#stars', function(){

	var currentDirection = localStorage.getItem('direction');

	if ( currentDirection === 'choice1' ) {
		window.location.href = "././watch-stars-photo.html";
		
	} 

	else if ( currentDirection === 'choice2' ) {
		window.location.href = "././watch-stars-photo.html";
	}

	else if ( currentDirection === 'choice3' ) {
		window.location.href = "././watch-stars.html";
	}

});



