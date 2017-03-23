$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
	
	
	
	$(".form-control-custom").change(function(){
		if ($(this).val() != ""){
			$(this).css("background-color","#FFFFCC");
		}
		else {
			$(this).css("background-color","#fff");
		}
		
		if ($("#username").val().length < 4 || $("#username").val().length > 16){
			$("#username-msg").css("display","block");
			$(".submit-button").attr("disabled", true);
		}
		else {
			$("#username-msg").css("display","none");
			$(".submit-button").attr("disabled", false);
		}
		
		if ($("#password").val().length < 8 || $("#password").val().length > 16){
			$("#password-msg").css("display","block");
			$(".submit-button").attr("disabled", true);
		}
		else {
			$("#password-msg").css("display","none");
			$(".submit-button").attr("disabled", false);
		}
	});
	
	$(".submit-button").click(function(){
		$.ajax({
			type: "POST",
			url: "http://cadylee.tk/ajax_success_2.php",
			success: function(){
				$("#login-msg").css({
				"display":"block",
				"color":"blue"});
				setTimeout("alert('登录成功！');window.location.href='pages/tables.html'", 3000);
			}
		});
	});
	
	
	
	
	$(".operare-remove-icon").click(function(){
		
		var thisEntry = $(this).parent().parent();
		
		var sHeight = $(document).height();
		var sWidth = $(document).width();
		var wheight = $(window).height();
		var divMask = $("<div></div>");
		$("body").append(divMask);
		divMask.attr("id","mask").css({
			"background": "#000",
			"opacity": "0.75",
			"filter": "alpha(opacity=75)",
			"height": sHeight,
			"width": sWidth,
			"z-index": "1000",
			"position": "absolute",
			"left": "0",
			"top": "0"
		});
		
		var confirmWindow = $("<div></div>");
		$("body").append(confirmWindow);
		confirmWindow.attr("id","confirm_window").css({
			"height": "200px",
			"width": "500px",
			"background-color": "#fff",
			"z-index": "1001",
			"position": "fixed",
			"top": (wheight - 200) / 2,
			"left": (sWidth - 500) / 2,
			"border-radius": "5px"
		});
		
		var closeConfirmWindow = $("<i></i>").attr("class","fa fa-close");
		$("#confirm_window").append(closeConfirmWindow);
		closeConfirmWindow.attr("id","close_confirm_window").css({
			"margin": "0",
			"position": "absolute",
			"top": "15px",
			"right": "15px",
			"cursor": "pointer",
			"color": "#999"
		});
		
		var confirmWindowMassageIcon = $("<i></i>").attr("class","fa fa-warning");
		$("#confirm_window").append(confirmWindowMassageIcon);
		confirmWindowMassageIcon.css({
			"margin": "0",
			"position": "absolute",
			"top": "15px",
			"left": "15px"
		});
		
		var confirmWindowMassage = $("<p>Sure to delete this entry?</p>");
		$("#confirm_window").append(confirmWindowMassage);
		confirmWindowMassage.css({
			"margin": "0",
			"position": "absolute",
			"top": "12px",
			"left": "35px",
			"font-weight": "700"
		});
		
		var confirmWindowMassageYes = $("<button>Yes</button>").attr("class","btn btn-primary btn-lg");
		$("#confirm_window").append(confirmWindowMassageYes);
		confirmWindowMassageYes.attr("id","confirm_yes").css({
			"margin": "0",
			"position": "absolute",
			"top": "80px",
			"left": "130px",
			"width": "100px",
			"background": "#333",
			"border": "#333"
		});
		confirmWindowMassageYes.hover(function(){
			confirmWindowMassageYes.css({
				"background": "#666",
				"border": "#666"
			});
		},
		function(){
			confirmWindowMassageYes.css({
				"background": "#333",
				"border": "#333"
			});
		});
		
		var confirmWindowMassageNo = $("<button>No</button>").attr("class","btn btn-defalt btn-lg");
		$("#confirm_window").append(confirmWindowMassageNo);
		confirmWindowMassageNo.attr("id","confirm_no").css({
			"margin": "0",
			"position": "absolute",
			"top": "80px",
			"left": "270px",
			"width": "100px"
		});
		
		$("#confirm_yes").on("click",function(){
			$.ajax({
				type: "POST",
				url: "http://cadylee.tk/ajax_success_2.php",
				success: function(){
					$("#confirm_window").remove();
					$(thisEntry).remove();
					$("#deleteSuccess").css("display","block");
					$("#deleteSuccessOk").click(function(){
						$("#deleteSuccess").css("display","none");
						
						$("#mask").remove();
					});
					
					
				}
			});
		});
		
	});
	
	
	
	$("body").on("click","#mask,#close_confirm_window,#confirm_no",function(){
		$("#mask").remove();
		$("#confirm_window").remove();
	});
	
	
	
	
});