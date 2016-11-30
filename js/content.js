

$(document).ready(function() {

	var section = getUrlVars()["section"];

	$content = $(".content");

	var contents = sections[section];
	$("#section-header").text(contents[0]);

	for (var i=1; i < contents.length; i++) {

		$header = $("<h1/>", {"class": "content-title"});
		$header.text(contents[i].replace("%20", " ").replace("_", "/").replace(".txt", ""));

		$header.appendTo($content);

		$div = $("<div/>", {"style": "width:100%"});
		$div.load("text/"+section+"/"+contents[i].replace(" ", "%20"));

		$div.appendTo($content);

		$("<br/>").appendTo($content);

		$a = $("<a/>", {"href": "index.html", "style": "font-size:18px;padding-top:15px"})
		$a.text("Back to home page");

		$a.appendTo($content);
	}

	
});


function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}