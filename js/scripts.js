$(document).ready(function(){
	alert("JavaScript Test!");
});

$("#submit").on("click", function() {
   console.log("clicked");
   return false;
   
});

$("#submit").on("click", function() {
	var comment = $("#textarea").val();
	console.log(comment);
	$("#visible-comment").html(comment);
});