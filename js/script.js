$(document).ready(function() {
	
	$(".dropdown > ul").hide();

	$(".dropdown").mouseenter(function() {
		toggleDropdown($(this), true);
	});

	$(".dropdown").mouseleave(function() {
		toggleDropdown($(this), false);
	})

});



function toggleDropdown($element, vis) {
	$element.children("ul").toggle(500);

	var numChildren = $element.find("ul li").length;
	var numNext = $element.nextAll("li").length;
	
	var dist = vis ? $element.height() * numChildren : 0;

	$element.next("li").animate({'margin-top': dist});
}