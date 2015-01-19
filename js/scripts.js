function isMobile() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return true;
	}
	else {
		return false;
	}
}

$(document).ready(function() {

	// Window Resizer for Header 
	$(window).resize(function(){
		 	var windowHeight = $(window).height();
			$('.header,.hero').css({
				'height':windowHeight
			});

		}).resize();


	

	 // affix the navbar after scroll below header 
		$('#nav').affix({
		      offset: {
		        top: $('.header').height()-$('#nav').height()
		      }
		});

		// highlight the top nav as scrolling occurs
		$('body').scrollspy({ target: '#nav' });

		
		/* smooth scrolling for nav sections 
		$('#nav .navbar-nav li>a').click(function(){
		  var link = $(this).attr('href');
		  var posi = $(link).offset().top;
		  $('body').animate({scrollTop:posi},300);
		});*/

		$("#nav ul li a[href^='#']").on('click', function(e) {

		   // prevent default anchor click behavior
		   e.preventDefault();

		   // store hash
		   var hash = this.hash;

		   // animate
		   $('html, body').animate({
		       scrollTop: $(this.hash).offset().top
		     }, 1200, function(){

		       // when done, add hash to url
		       // (default click behaviour)
		       window.location.hash = hash;
		     });

		});


   
	 	// Work projects fades 
	    $('.work').hover(
	        function(){
	            $(this).find('.captions').slideDown(500); //.fadeIn(500)
	        },
	        function(){
	            $(this).find('.captions').slideUp(500); //.fadeOut(500)
	        });

	    

	    // Collapsing navbar on click 
	    var navMain = $("#collapseNavbar");

     	navMain.on("click", "a", null, function () {
        	navMain.collapse('hide');
        });

     	// WOW.js
     	var wow = new WOW(
		  {
		    mobile:       false        // trigger animations on mobile devices (true is default)
		  }
		);
        new WOW().init();

	    

});