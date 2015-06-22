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
	var change_color_length = 50;
	var charCount = $("#textarea").val().length; //length of the content of the textarea to a variable
	console.log(charCount);
	$("#char-count").html(charCount);
	if(charCount > change_color_length) {
		$("#char-count").css("color", "red");
	} else {
		$("#char-count").css("color", "yellow");
	};
});

var rows = $(".my-row");
for(var i=0; i<rows.length; ++i) {
	if (i%2===0) {
		$(rows[i]).css("background-color", "black");
	}
};
