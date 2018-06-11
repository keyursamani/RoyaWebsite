$(document).ready(function(){
	// For Mobile Menu
	$("#mobilemenu").click(function(){
		$(".custnav .menus").slideToggle();
	});
	function nav(){
	    if ($(window).width() > 767) {
	        $(".custnav .menus").css({"display":"block"});
	    }
	    else
	    {
	        $(".custnav .menus").css({"display":"none"});
	    }
	}
	$(window).resize(function() {
		setTimeout(function(){nav();},0);
	});

	$("#itemslider").owlCarousel({
    	center: true,
		loop:true,
        navigation : true,
        smartSpeed:1000,
	    autoplayTimeout:2400,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        992:{
	            items:2,
	        }
	    }
    });
    $("#imgslider").owlCarousel({
		loop:true,
        navigation : true,
        smartSpeed:1000,
	    autoplayTimeout:2400,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        }
	    }
    });
    $("#gameitemslider").owlCarousel({
    	center: true,
		loop:true,
        navigation : true,
        smartSpeed:1000,
	    autoplayTimeout:2400,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        568:{
	            items:2,
	        },
	        992:{
	            items:3,
	        },
	        1200:{
	            items:4,
	        },
	        1600:{
	            items:6,
	        }
	    }
    });

});
