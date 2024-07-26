document.addEventListener('DOMContentLoaded', function () {
	// subtitles
	function changeSub(num) {
		document.getElementById("subtitles").innerText = tell[num];
	}

	var tell = [
		"pay attention during school",
		"dial 911 cause im behind you /j",
		"#ocu4life",
		"hey man i miss the like collarbones B)",
		"also check out classwork heaven",
		"molki.pages.dev",
		"piracy on top",
		"github.com/molkify/ocu",
		"github.com/chemicaljs/chemicaljs",
		"rare1k doxxed someone a few days ago so immortal 2 loses"
	];

	var howmany = tell.length;
	var randomIndex = Math.floor(Math.random() * howmany);

	document.getElementById("subtitle").innerText = tell[randomIndex];

	function changeSplash(num) {
		var sub = "Set current splash to splash " + num + ", " + tell[num];
		document.getElementById("subtitle").innerText = tell[num];
		return sub;
	}