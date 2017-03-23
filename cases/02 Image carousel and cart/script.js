// JavaScript Document

$(document).ready(function(){
	var imageTotal = 3;
	var currentIndex;
	var numberOfImageDisplay = 0;
	
	$('span').click(function(){
		currentIndex = $(this).index();
		$(this).parent().children().removeClass('currentNumber');
		$(this).addClass('currentNumber');
		var image = $(this).parent().parent().children("ul");
		$(image).children().hide();
		$(image).children("li").eq(currentIndex).show();
	});
	
	imageNumberClick = function(){
		$('span').eq(numberOfImageDisplay).trigger("click");
		numberOfImageDisplay += 1;
		if (numberOfImageDisplay == 3){
			numberOfImageDisplay = 0;
		}		
		setTimeout("imageNumberClick()",1000);
	}
	imageNumberClick();	
	
	var x = 10;
	var y = -403;
	$('a.tooltip').mouseover(function(e){
		var tooltip = "<div id='tooltip'><img src='" + this.href
+ "'/></div>";
	$("body").append(tooltip);
	$("#tooltip").css({
		"top": (e.pageY + y) + "px",
		"left": (e.pageX + x) + "px"
	}).show("fast");
	}).mouseout(function(){
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip").css({
			"top": (e.pageY + y) + "px",
			"left": (e.pageX + x) + "px"
		});
	});
	
	$("input").keyup(function(){
		$(this).val($(this).val().replace(/\D|^0/g,''));
	}).bind("paste",function(){
		$(this).val($(this).val().replace(/\D|^0/g,''));
	}).css("ime-mode", "disabled");
	
	var img ="<img src='img/cart-icon.jpg' />";
	var unitPrice = parseInt($('#unitPrice').html().replace(/[^0-9]/ig,""));
	$('#addToCart').click(function(){
		var quantity = $('.itemDetail input').val();
		$('.page2-right').append("<div id='cartDatail'>" + img + "<span id='itemQuantity'>Cart - " + quantity + " item(s)</span>" + "<span id='totalAmount'>$ " + (unitPrice*quantity) + "</span>" + "</div>");
	});
});

