


(function($) {
    "use strict";

var pathname=window.location.pathname

	

	// Portfolio Websites Display
	var latestBlogJSON
const displayPortfolio=(projects)=>{
	var allProjects=null;
	{allProjects=projects.map((project,index)=>{
		return `<div key=${index} class="${`item ${index===0?"active":''}`}">
									<div class="experience-slide-one">
										<div class="row">
										<div class="col-md-7">
											<div class="experience-slide-img">
												<a rel="follow" target="_blank" href="${project.href}"><img src="${project.imgSrc}" alt="Photo of ${project.name}" /></a>
											</div>
										</div>
										<div class="col-md-5">
											<div class="experience-slide-text">
												<a rel="follow" target="_blank" href="${project.href}"><h3>${project.name}</h3>
												<h5>${project.description}</h5></a>
												<h4>${project.category}</h4>
											</div>
											</div>
										</div>
									</div>
								</div>`
	}).join('')}
	if(document.getElementById('portfolio-slider'))document.getElementById('portfolio-slider').innerHTML=allProjects

}
if(pathname=="/" || pathname=="/index"||pathname=="/index.html"){
displayPortfolio(projectsData)

latestBlogJSON=findLatestThreePosts(blogData)
latestBlogRenderer(latestBlogJSON,"latestBlogCarousel")	

}


	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
		$(window).on('scroll', function() {
		if ($(this).scrollTop() > 40) {
			$('.menubar .navbar').addClass("sticky");
		} else {
			$('.menubar .navbar').removeClass("sticky");
		}
	});

	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
    $('.menu li a, .navbar-brand, .cta').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 1200);
		   return false;
		  }
		}
	});
	
	/*----------------------------
    START - Menu collapse
    ------------------------------ */
	$('.menu li a').on('click', function () {
		$('.collapse').removeClass('in');
	});
	
	/*----------------------------
    START - Counterup
    ------------------------------ */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	$('.counterup').parallax({
		imageSrc: 'images/process-counter.png'
	});
	
	/*----------------------------
    START - Slider animation
    ------------------------------ */
	//experience section slider
	// $('.experience-slide').owlCarousel({
	// 	nav:true,
	// 	loop:true,
	// 	autoplay: true,
	// 	autoplayTimeout:4000,
	// 	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	// 	items:1,
	// });
	//review section slider

// service section slider
		$('.service-slider.owl-carousel').owlCarousel({
		loop:true,
		autoplay: true,
		center:true,
		// autoplay: false,
		nav:true,
		autoplayTimeout:2200,
		items:4	,
		navText:["<div class='fa fa-angle-left nav-btn prev-slide'></div>","<div class='fa fa-angle-right nav-btn next-slide'></div>"],
		autoWidth:true,
		margin:0,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items:1	},
			// breakpoint from 480 up
		480 : {
			item:2
		},
			// breakpoint from 768 up
			768 : {
		items:3
			},
			991:{
				item:4
			}
		}

		});
// service section slider rewind function
		// $('.service-slider.owl-carousel').on('changed.owl.carousel', function(event) {
		// 	console.log(event.item)
		// 	if(event.item.index>0 && event.item.count-event.item.index==1)
		// 	{
		// 	setTimeout(() => {
		// 		$('.service-slider.owl-carousel').trigger('to.owl.carousel', 0)}, event.relatedTarget.settings.autoplayTimeout);
		// 	}
		// 			})
// process section slider
		$('.process-slider.owl-carousel').owlCarousel({
			autoplay: true,
			center:true,	
			nav:true,
			autoplayTimeout:2200,
			items:1,
			navText:[,"<div class='fas fa-long-arrow-alt-right nav-btn next-slide'></div>"],
			margin:0,
// responsive:{
// 	400:{
// 		items:2
// 	}
// }			
	
			});

// process section slider rewind function
$('.process-slider.owl-carousel').on('changed.owl.carousel', function(event) {
				if(event.page.index>0 && event.page.count-event.page.index==1)
				{
				setTimeout(() => {
					$('.process-slider.owl-carousel').trigger('to.owl.carousel', 0)}, event.relatedTarget.settings.autoplayTimeout);
				}
						})

// portfolio section slider
$('.portfolio-slider').owlCarousel({
	loop:true,
	autoplay: true,
	nav:true,
	autoplayTimeout:5000,
	items:1,
	navText:["<div class='fa fa-angle-left nav-btn prev-slide'></div>","<div class='fa fa-angle-right nav-btn next-slide'></div>"],
});

// portfolio section slider

// testimonial section slider
	$('.review-slider').owlCarousel({
		loop:true,
		autoplay: true,
		autoplayTimeout:6500,
		items:1,
	});
	
	/*----------------------------
    START - Tab panel
    ------------------------------ */
	$('.collapse.in').prev('.panel-heading').addClass('active');
	$('#accordion, #bs-collapse')
	.on('show.bs.collapse', function(a) {
		$(a.target).prev('.panel-heading').addClass('active');
	})
	.on('hide.bs.collapse', function(a) {
		$(a.target).prev('.panel-heading').removeClass('active');
	});
	
	/*----------------------------
    START - Progress bar animation
    ------------------------------ */
	// var bar1 = new ProgressBar.Line(progress1, {
	//   strokeWidth: 5,
	//   easing: 'easeInOut',
	//   duration: 2000,
	//   color: '#353C68',
	//   trailColor: '#E9ECFB',
	//   trailWidth: 5,
	//   svgStyle: {width: '100%', height: '100%'}
	// });
	// bar1.animate(1);
	// var bar2 = new ProgressBar.Line(progress2, {
	//   strokeWidth: 5,
	//   easing: 'easeInOut',
	//   duration: 2000,
	//   color: '#353C68',
	//   trailColor: '#E9ECFB',
	//   trailWidth: 5,
	//   svgStyle: {width: '100%', height: '100%'}
	// });
	// bar2.animate(1);
	// var bar3 = new ProgressBar.Line(progress3, {
	//   strokeWidth: 5,
	//   easing: 'easeInOut',
	//   duration: 2000,
	//   color: '#353C68',
	//   trailColor: '#E9ECFB',
	//   trailWidth: 5,
	//   svgStyle: {width: '100%', height: '100%'}
	// });
	// bar3.animate(1);
	// var bar4 = new ProgressBar.Line(progress4, {
	//   strokeWidth: 5,
	//   easing: 'easeInOut',
	//   duration: 2000,
	//   color: '#353C68',
	//   trailColor: '#E9ECFB',
	//   trailWidth: 5,
	//   svgStyle: {width: '100%', height: '100%'}
	// });
	// bar4.animate(1);
	  // Number from 0.0 to 1.0

	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
    $(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
    // call the_farm_house method & init preloader when window load
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
	
	/*----------------------------
    START - Pricing area animation
    ------------------------------ */
    $('.pricing-first').on('mouseover', function () {
		$(".pricing-left").show();
		$(".pricing-main").hide();
	});
	$('.pricing-first2').on('mouseleave', function () {
		$(".pricing-left").hide();
		$(".pricing-main").show();
	});
	$('.pricing-second').on('mouseover', function () {
		$(".pricing-right").show();
		$(".pricing-main").hide();
	});
	$('.pricing-second2').on('mouseleave', function () {
		$(".pricing-right").hide();
		$(".pricing-main").show();
	});
	
	/*----------------------------
    START - WOW JS animation
    ------------------------------ */
	new WOW().init();
	
	/*----------------------------
    START - Lightbox effect animation
    ------------------------------ */
	$('.lb-outerContainer').css({
		'width':'auto'
	});


    /* =================================
    ===  CONTACT FORM          ====
    =================================== */
    $("#contact-form").on('submit', function(e) {
        e.preventDefault();
        var name = $("#name").val();
		var phone= $("#phone_number").val();
        var email = $("#email_address").val();
        // var subject = $("#contact_reason").val();
        var message = $("#message").val();

        // var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
        var mailBody = ' Name   : ' + name + '\n Email  : ' + email + '\n Phone  : ' + phone + '\n Message: ' + message;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

		var validEmail=isValidEmail(email);
		var messageLength=message.length>1?true:false;
		var nameLength=name.length>1?true:false;
		var phoneLength=phone.length>7?true:false;

        if (isValidEmail(email) && messageLength && nameLength && phoneLength) {
			console.log(mailBody)
			Email.send({
				Host: "smtp.gmail.com",
				Username: "rohitparakh4@gmail.com",
				Password: "Rohit@6812.",
				To: 'rohitparakh4@gmail.com',
				From: email,
				Subject: `Portfolio Enquiry from ${name}`,
				Body: mailBody,
			  }).then(function(response){
				$('.success').fadeIn(1000);
				$('.error').fadeOut(500);
				$("#contact-form")[0].reset();
				console.log(response)
			  })
			//     $.ajax({
            //     type: "POST",
            //     url: "php/sendmail.php",
            //     data: dataString,
            //     success: function() {
            //         $('.success').fadeIn(1000);
            //         $('.error').fadeOut(500);
            //         $("#contact-form")[0].reset();
            //     }
            // });
        } else{
			var errorMessage;
			if(!validEmail){
				errorMessage="E-mail must be valid"
			}
			if(!messageLength){
				if(errorMessage) {errorMessage+=", message must be longer than 1 character"}else{
					errorMessage="Message must be longer than 1 character"
				}
			}
			if(!nameLength){
				if(errorMessage) {errorMessage+=", name must be longer than 1 character"}else{
					errorMessage="Name must be longer than 1 character"
				}
			}
			if(!phoneLength){
				if(errorMessage) {errorMessage+=" and phone must be longer than 7 digits"}else{
					errorMessage="Phone must be longer than than 7 digits"
				}
			}

			console.log(errorMessage)
			$('.error').html(errorMessage)
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }

        return false;
    });

})(jQuery);


  /* =================================
    ===  CONTACT FORM          ====
    =================================== */

function arlo_tm_contact_form(){
	
	"use strict";
	jQuery('div.empty_notice').slideUp(500);
	
	jQuery(".contact-form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact-form #name").val();
		var email 		= jQuery(".contact-form #email").val();
		var message 	= jQuery(".contact-form #message").val();
		var subject 	= jQuery(".contact-form #subject").val();
		var success     = jQuery(".contact-form .returnmessage").data('success');
	
		jQuery(".contact-form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			
			Email.send({
				Host: "smtp.gmail.com",
				Username: "rohitparakh4@gmail.com",
				Password: "Rohit@6812.",
				To: 'rohitparakh4@gmail.com',
				From: email,
				Subject: `Portfolio Enquiry from ${name} (${email})`,
				Body: message,
			  })
				.then(function (response) {
					console.log(response);
				//   alert("mail sent successfully"+msg);
				// jQuery(".contact-form .returnmessage").append(response);
				if(response.length>=3
					// jQuery(".contact-form .returnmessage span.contact_error").length
					){
					jQuery(".contact-form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact-form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact-form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(response==="OK"){
					jQuery("#contact-form")[0].reset();//To reset form fields on success
				}
				  return false;
				});
			
		
			// Returns successful data submission message when the entered information is stored in database.
			// jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
			// 	jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				
				
			// });
		}
		return false; 
	});
}
// latestBlogRenderer(latestBlogJSON,"latestBlogCarousel")	



