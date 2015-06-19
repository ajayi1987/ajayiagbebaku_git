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

$("#textarea").on("keyup", function() {
	console.log("keyup just happened!!");
	var nameName = 3;
	var name ="string";
	var charCount = $("#textarea").val().length; //length of the content of the textarea to a variable
	console.log(charCount);
	$("#char-count").html(charCount);
	if(charCount > 50) {
		$("#char-count").css("color", "red");
	} else {
		$("#char-count").css("color", "yellow");

	};
});



