//Check off Specific To-dos By Clicking
$('ul').on( "click", "li", function(){
$(this).toggleClass("completed");
//************ Test version class .Complited **************
/*	//if li is gray
	if($(this).css("color")==="rgb(128, 128, 128)"){
		//turn it black
			$(this).css({
			color: "black",
			textDecoration: "none"});
	}
	else {
		//turn it gray
	
			$(this).css({
				color: "gray",
				textDecoration: "line-through"});
		}
*/
});
// Click on X to delete To-Dos
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(300, function(){
		(this).remove();
	});
	event.stopPropagation();
	
});

//input text
$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{	
		//grabbing new todo text from input after hit enter key.
		var todoText = $(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li");
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});