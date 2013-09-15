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

// dependency: TA, jquery
(function( TA, $, undefined ){

	var jqObj = {
			feature: $("<ul class='feature-deduction js-feature'></ul>")
		},

		selectors = {
			feature: ".js-feature",
			geolocation: ".js-geolocation",
			audio: ".js-audio",
			video: ".js-video"
		},

		classes = {
			pass: "pass",
			fail: "fail",
			geolocation: "geolocation",
			audio: "audio",
			video: "video"
		},

		features= {
			geolocation: "geolocation",
			audio: "audio",
			video: "video"
		}

	// prepare structure
	for(feature in features) {
		$('<li></li>').addClass("js-"+classes[feature]).appendTo(jqObj.feature);
	}

	// on page load
	$(function(){
		jqObj.feature.appendTo('body');

		for(feature in features) {
			if(TA.FEATURE[feature]) {
				$(selectors.feature).find(selectors[feature]).addClass(classes.pass);
			} else {
				$(selectors.feature).find(selectors[feature]).addClass(classes.fail);
			}
		}
	});

}( TA, jQuery ));