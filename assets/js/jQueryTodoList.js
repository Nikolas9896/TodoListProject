//Check off Specific To-dos By Clicking
$('li').click( function(){
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
$('ul li span').click(function(){
	$(this).parent().fadeOut(300, function(){
		(this).remove();
	});
	
});