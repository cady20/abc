// JavaScript Document

jQuery.extend( jQuery.easing,
{
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	}
});


$(document).ready(function(){
	
	$(".skills-content").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass('rubberBand');
	});

	$(".skills-content").on("mouseenter",function(){
		$(this).addClass("rubberBand").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$(this).removeClass('rubberBand');
		});
	});
	
	$(".cases-content").hover(function(){
			$(this).children("div.case-detail").stop().fadeIn();
		},function(){
			$(this).children("div.case-detail").stop().fadeOut();
		});
	
	var i=0; 
	$("#cases_explanation").click(function(){
		if(i++ % 2 == 0){   
			$("#cases_explanation i").stop().css({
				"transform":"rotate(90deg)",
				"transition-duration":"0.7s",
				"webkitTransform":"rotate(90deg)",
				"webkitTransitionDuration":"0.7s",
				"mozTransform":"rotate(90deg)",
				"mozTransitionDuration":"0.7s",
				"msTransform":"rotate(90deg)",
				"msTransitionDuration":"0.7s",
				"oTransform":"rotate(90deg)",
				"oTransitionDuration":"0.7s"
			});
		}else{   
			$("#cases_explanation i").stop().css({
				"transform":"rotate(0deg)",
				"transition-duration":"0.7s",
				"webkitTransform":"rotate(0deg)",
				"webkitTransitionDuration":"0.7s",
				"mozTransform":"rotate(0deg)",
				"mozTransitionDuration":"0.7s",
				"msTransform":"rotate(0deg)",
				"msTransitionDuration":"0.7s",
				"oTransform":"rotate(0deg)",
				"oTransitionDuration":"0.7s"
			});
		}
		$(".cases_explanation div").stop().slideToggle(700);		
	});
		
	var j = 0;
	window.onscroll = function () {
		
		if (($(document).scrollTop()>200) && (j++ == 1)) {
			$("#cases_tip").fadeIn(1500);
			$("#cases_tip").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).fadeOut(1500);
			});
		}
		else if ($(window).scrollTop() + $(window).height() >= ($(document).height() - 300)){
			$(".to_top").fadeIn(500);
		}
		else{
			$(".to_top").fadeOut(500);
		}
	}
	
	$(".contact-content a .fa").hover(
		function(){
			$(this).addClass("linkbuttons-animate").removeClass("linkbuttons-revert");
		},
		function(){
			$(this).addClass("linkbuttons-revert").removeClass("linkbuttons-animate");
		}
	);
	
	$(".to_top").on('click', function() {
		$("html, body").animate({scrollTop: 0}, 1500, "easeInOutCubic");
	});
	
});