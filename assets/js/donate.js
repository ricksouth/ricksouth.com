$(document).ready(function(e) {
	var intervalId = window.setInterval(function(){
		if ($(".avatarwrapper #rick").is(":visible")) {
			$(".avatarwrapper #rick").fadeOut(2500);
		}
		else {
			$(".avatarwrapper #rick").fadeIn(2500);
		}
	}, 6000);
});