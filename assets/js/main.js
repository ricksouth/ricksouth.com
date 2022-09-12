$(document).ready(function(e) {
	checkHeight();
});


$(window).on("resize", function(e) {
	checkHeight();
});

function checkHeight() {
	var wheight = $(window).height();
	var aheight = $(".about").height() + 30;
	if (wheight < aheight) {
		$(".middle").addClass("scroll");
	}
	else {
		clearTimeout(window.ch);
		$(".middle").removeClass("scroll");
	}
}