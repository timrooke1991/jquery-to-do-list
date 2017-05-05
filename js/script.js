
// Check off specific to dos with a click

$('ul').on("click","li", function () {
	$(this).toggleClass("completed");
})

$('ul').on("click", "span", function (event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// grabbing new toDo text
		var toDoText = $(this).val();
		$(this).val("");
		// create a new lie and add to ul
		$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + toDoText + "</li>");
	}
});

$(".fa-plus").click(function () {
	$("input[type='text'").fadeToggle();
});