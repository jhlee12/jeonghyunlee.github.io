/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav()
{
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,2)";
    document.getElementById("main").style.opacity = 0.4;
    document.getElementById("nav").style.display = "none";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.opacity = 1;
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("nav").style.display = "flex";
}

function loadUrl()
{
	$(".about").fadeIn(4000);
}


$(document).ready(function() {
	/* Fade in for header */
	$(".header").fadeIn(3000);
	$("#logo").fadeIn(3500);
	$(".quote").delay(500).fadeIn(3000);

	$(window).resize(function() {
		$(".nav").css("height", $(".openbtn").outerHeight())
		$(".nav").css("max-height", $(".openbtn").outerHeight())
	});
	$(".about").fadeIn(4000);
});