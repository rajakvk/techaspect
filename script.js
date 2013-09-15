(function(TA, undefined){

	// private property
	var k=0;
	function add() {

	}
	
	// public property
	TA.FEATURE = {
		geolocation: navigator.geolocation ? true : false
	};

}(window.TA = window.TA || {}));


$(function(){
	$(".geolocation").on("ready", ".js-feature", test);
});

function test (){
	console.log(TA.FEATURE.geolocation);	
}
