$(document).ready(function(){

$(".characterframe").on("click", function(){

	$("#hero").html($(this));
	$("#opponent").html($(this));
});

});