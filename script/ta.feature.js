// TA.FEATURE
(function( TA, undefined ){

	// private property
	var k=0;
	function add() {

	}
	
	// public property
	TA.FEATURE = {
		geolocation: navigator.geolocation ? true : false,
		audio: !!document.createElement('audio').canPlayType,
		video: !!document.createElement('video').canPlayType
	};

}( window.TA = window.TA || {} ));