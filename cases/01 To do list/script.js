// JavaScript Document

$(document).ready(function(){
	var toDoCount = 0;
	var completeCount = 0;
	$('#addButton').click(function(){
		var toAdd = $('input[name=listItem]').val();
		var toDoContent = "<div class='item'>" + "<button class='button removeButton removeButton1'>×</button>" +"<button class='button completeButton'>√</button>"+ "<div class='itemContent'>" + toAdd + "</div>"  + "</div>";
		if (toAdd != "") {
			$(toDoContent).hide().prependTo($('#toDoList')).slideDown(500);
			$('input[name=listItem]').val("");
			toDoCount += 1;
			$('#toDoCount').text(toDoCount);
		}		
	});
	
	$("body").keydown(function() {
		if (event.keyCode == "13") {
			$('#addButton').click();
			return false;
		}
	});
	
	
	$('body').on("click",'.completeButton',function(){
		var toComplete = $(this).next().text();
		var completedContent = "<div class='item'>" + "<button class='button removeButton removeButton2'>×</button>" + "<div class='itemContent'>" + toComplete + "</div>"  + "</div>";
		$(completedContent).hide().prependTo($('#completedList')).slideDown(500);
		$(this).parent().slideUp(500,function(){
			$(this).remove();
		});
		$(this).siblings('button').remove();
		$(this).remove();
		completeCount += 1;
		$('#completeCount').text(completeCount);
		toDoCount -= 1;
		$('#toDoCount').text(toDoCount);
	});
	
	$('body').on("click",'.removeButton1',function(){
		$(this).parent().slideUp(500,function(){
			$(this).remove();
		});
		$(this).siblings('button').remove();
		$(this).remove();
		toDoCount -= 1;
		$('#toDoCount').text(toDoCount);
	});
	
	$('body').on("click",'.removeButton2',function(){
		$(this).parent().slideUp(500,function(){
			$(this).remove();
		});
		$(this).siblings('button').remove();
		$(this).remove();
		completeCount -= 1;
		$('#completeCount').text(completeCount);
	});
	
	
	
	
});