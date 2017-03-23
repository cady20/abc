// JavaScript Document

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);


$(function() {
	
	$('.navbar-collapse ul li a').click(function() {
	  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
		$('.navbar-toggle:visible').click();
	  }
	});
	
    $(".scrolling").bind("click", function(event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 800, "easeInOutExpo");
        event.preventDefault();
    });
	
	$("#intro-button").hover(
		function(){
			$("#intro-button").addClass("intro-button-hover intro-button-animate-coordination");
			$("#intro-button i").addClass("intro-button-animation");
		},
		function(){
			$("#intro-button").removeClass("intro-button-hover intro-button-animate-coordination");
			$("#intro-button i").removeClass("intro-button-animation");
		}
	);
	
	$(".info-links a").hover(
		function(){
			$(this).addClass("links-animate");
		},
		function(){
			$(".info-links a").removeClass("links-animate");
		}
	);
});


