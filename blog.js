$(document).ready(function () {
	$("#click").click(function () {
		$("#heading").addClass("newclass");
		$(".small_rectangle").animate({left: $(".rectangle").width()-$(".small_rectangle").width()}, "slow");
	});
	$("#reset").click(function () {
		$("#heading").removeClass("newclass");
		$(".small_rectangle").animate({left: "0"}, "slow");
	});
});
