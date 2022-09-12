$(document).ready(function(e) {
	var intervalId = window.setInterval(function(){
		if ($(".avatarwrapper #rick").is(":visible")) {
			$(".avatarwrapper #rick").fadeOut(2500).delay(1000).fadeIn(2500);
		}
	}, 10000);
});