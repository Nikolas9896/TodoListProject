//Check off Specific To-dos By Clicking
$('li').click( function(){
	$(this).css("color", "gray");
	$(this).css("text-decoration", "line-through");
});