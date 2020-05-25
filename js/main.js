$(document).ready(function(){

	// fixed header on scroll
	window.onscroll = function(){
		myFunction()
	}
	var sticky = $('header').offsetTop;
	function myFunction(){
		if(window.pageYOffset > sticky){
			$('header').classList.add("sticky");
		}else{
			$('header').classList.remove("sticky");
		}
	}
	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$('.navbar-collapse ul li a').click(function(e){
		thisAttrHref = $(this).attr('href');
		thisAttrHrefOffset = $(thisAttrHref).offset().top;
		$('html, body').animate({scrollTop:thisAttrHrefOffset});
		e.preventDefault();
	})




	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: 43.691200, lng: -79.341667},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
	});
	
	// function to send email in javaScript

	$(".envoiMail").click(function(e){
		e.preventDefault();
		sendEmail();
	})

	function sendEmail(){
		var senderEmail = $("#form_email").val();
		var senderName = $("#form_name").val();
		var senderSubject = $("#form_subject").val();
		var senderMessage = $("#form_message").val();

		if (senderEmail =="" || senderMessage=="" ) {
			alert("  Please Make sure your fields are not empty ");
		}else{
			Email.send({
				Host: "smtp.gmail.com",
				Username:"ngamikarim13@gmail.com",
				Password:"BrigitteMavie@1993",
				To:"ngamikarim13@gmail.com",
				FRom:senderEmail,
				Subject : senderSubject,
				Body: senderMessage


			}).then(
				alert(" Message send successfuly")
				
			)
			$("#form_email").val("");
			$("#form_name").val("");
			$("#form_subject").val("");
			$("#form_message").val("");
		}
		
	}


});




