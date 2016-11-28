

$(document).ready(function() {
	
	$(".dropdown > ul").hide();

	$(".dropdown").mouseenter(function() {
		var time = 250;
		var didEnter = false;
		var el = $(this);
		var timeoutId = setTimeout(function() {
			toggleDropdown(el, true);
			didEnter = true;
		}, time);
		el.mouseleave(function() {
			clearTimeout(timeoutId);
			if (didEnter) {
				toggleDropdown(el, false);
				didEnter = false;
			}
		});
	});

	$(".dropdown").click(function() {});

	$(".sidebar-nav li").click(function() {
		var $ele = $(this).find("a").first();
		var id = $ele.attr('id');


		updateContent(id, sections[id]);

	});

	updateContent("introduction", sections["introduction"]);
});

function updateContent(dir, sections) {
	var $content = $(".content-wrapper .content");

	$content.load("text/"+dir+"/"+sections[0]);


	$(".active").toggleClass("active");
	$(this).toggleClass("active");
}


function toggleDropdown($element, vis) {
	$element.children("ul").toggle(500);

	var numChildren = $element.find("ul li").length;
	var numNext = $element.nextAll("li").length;
	
	var dist = vis ? ($element.height() + 2) * numChildren : 0;

	$element.next("li").animate({'margin-top': dist});
}




