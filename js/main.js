


(function($) {
    "use strict";

var pathname=window.location.pathname

var blogData=[
    {
        "id":1,
        "title":"Blog Title 1",
        "featuredImage":"images/sample-1050.jpg",
        "author":"Rohit",
        "authorImage":"/images/avatars/user-06.jpg",
        "category":["a","b","c"],
        "date":"June 25, 2023",
        "tags":["d","e","f"],
        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel vestibulum nisi. Duis dolor risus, auctor sit amet nibh non, fringilla varius urna. Vestibulum est ante, convallis sed lectus sed, pretium eleifend nisi. Donec congue augue a ipsum fringilla bibendum. Mauris efficitur tincidunt risus auctor posuere. Sed in magna ullamcorper, condimentum est eu, hendrerit erat. Donec eu velit id neque semper ullamcorper eu vel orci. Ut non luctus nibh, nec vehicula nulla. Proin vel pharetra nisl. Etiam erat est, congue quis semper eget, tempus quis purus. Duis eu hendrerit nisi. Nullam ac est ac tellus maximus fringilla eu ac neque. Nullam sed libero sit amet massa facilisis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Nulla vehicula eros dolor, a dapibus libero tristique imperdiet. Duis vel sem lorem. Duis pulvinar fringilla metus, sed hendrerit purus vehicula rhoncus. Nullam velit tortor, molestie eu convallis ac, convallis tincidunt nisi. Nulla bibendum lobortis ultricies. Duis nec odio nibh. Ut at magna purus. Quisque ut varius justo, ac pretium felis. Ut mollis metus eu rutrum volutpat. Aenean pulvinar lectus tortor, nec commodo magna facilisis accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam laoreet condimentum mi vitae tempor. Donec et consectetur nisi, ac imperdiet risus.Pellentesque pharetra lacus arcu, porta mollis justo tincidunt quis. Mauris magna tellus, bibendum sed luctus non, ullamcorper non felis. Fusce nec est arcu. Ut convallis convallis ex, maximus lacinia ex consectetur eget. Vivamus sit amet arcu lacinia, elementum nulla a, scelerisque eros. Nam tempor egestas tincidunt. Quisque convallis risus magna, a tincidunt dolor malesuada sit amet. Nullam vel lorem id metus tristique tempor sit amet quis ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tempus mauris a vehicula varius. Praesent sit amet ipsum sed dui accumsan egestas tempor in lorem. Nam imperdiet eros vitae cursus maximus. Nam quis eleifend purus.Nunc ultrices nec velit at elementum. Maecenas porttitor malesuada nunc, ac fermentum elit condimentum et. Cras imperdiet, mauris in aliquet vehicula, ex arcu eleifend quam, consequat gravida ante ligula vel elit. Cras ultricies interdum dui, ac dapibus diam. Morbi elit ipsum, cursus non imperdiet in, hendrerit vitae lacus. Sed cursus consequat ultricies. Sed consectetur lorem ut nisl blandit molestie ut vel neque. Fusce pharetra in justo a lobortis.   Donec urna urna, maximus in sollicitudin vel, hendrerit vitae erat. Fusce ornare mattis odio nec ornare. Cras pellentesque enim eu ornare convallis. Fusce ac quam pharetra, semper enim eu, imperdiet dui. Aliquam cursus nec justo nec tincidunt. Vestibulum vitae velit diam. Nunc interdum nunc at risus pellentesque, nec sodales erat feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel nulla rutrum, semper risus at, ultricies odio. Suspendisse pretium tempor tortor et euismod. Maecenas fringilla turpis lacus, et feugiat ex efficitur sit amet. Phasellus in eleifend lectus.",
        "latestBlogDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel vestibulum nisi. Duis dolor risus",
        "latestImgSrc":"images/sample-1050.jpg"
        
    },
    {
        "id":2,
        "title":"Blog Title 2",
        "featuredImage":"images/sample-1050.jpg",
        "author":"Rohit",
        "authorImage":"/images/avatars/user-06.jpg",
        "category":["g","h","i"],
        "date":"Jan 25, 2051",
        "tags":["j","k","l"],
        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel vestibulum nisi. Duis dolor risus, auctor sit amet nibh non, fringilla varius urna. Vestibulum est ante, convallis sed lectus sed, pretium eleifend nisi. Donec congue augue a ipsum fringilla bibendum. Mauris efficitur tincidunt risus auctor posuere. Sed in magna ullamcorper, condimentum est eu, hendrerit erat. Donec eu velit id neque semper ullamcorper eu vel orci. Ut non luctus nibh, nec vehicula nulla. Proin vel pharetra nisl. Etiam erat est, congue quis semper eget, tempus quis purus. Duis eu hendrerit nisi. Nullam ac est ac tellus maximus fringilla eu ac neque. Nullam sed libero sit amet massa facilisis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Nulla vehicula eros dolor, a dapibus libero tristique imperdiet. Duis vel sem lorem. Duis pulvinar fringilla metus, sed hendrerit purus vehicula rhoncus. Nullam velit tortor, molestie eu convallis ac, convallis tincidunt nisi. Nulla bibendum lobortis ultricies. Duis nec odio nibh. Ut at magna purus. Quisque ut varius justo, ac pretium felis. Ut mollis metus eu rutrum volutpat. Aenean pulvinar lectus tortor, nec commodo magna facilisis accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam laoreet condimentum mi vitae tempor. Donec et consectetur nisi, ac imperdiet risus.Pellentesque pharetra lacus arcu, porta mollis justo tincidunt quis. Mauris magna tellus, bibendum sed luctus non, ullamcorper non felis. Fusce nec est arcu. Ut convallis convallis ex, maximus lacinia ex consectetur eget. Vivamus sit amet arcu lacinia, elementum nulla a, scelerisque eros. Nam tempor egestas tincidunt. Quisque convallis risus magna, a tincidunt dolor malesuada sit amet. Nullam vel lorem id metus tristique tempor sit amet quis ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tempus mauris a vehicula varius. Praesent sit amet ipsum sed dui accumsan egestas tempor in lorem. Nam imperdiet eros vitae cursus maximus. Nam quis eleifend purus.Nunc ultrices nec velit at elementum. Maecenas porttitor malesuada nunc, ac fermentum elit condimentum et. Cras imperdiet, mauris in aliquet vehicula, ex arcu eleifend quam, consequat gravida ante ligula vel elit. Cras ultricies interdum dui, ac dapibus diam. Morbi elit ipsum, cursus non imperdiet in, hendrerit vitae lacus. Sed cursus consequat ultricies. Sed consectetur lorem ut nisl blandit molestie ut vel neque. Fusce pharetra in justo a lobortis.   Donec urna urna, maximus in sollicitudin vel, hendrerit vitae erat. Fusce ornare mattis odio nec ornare. Cras pellentesque enim eu ornare convallis. Fusce ac quam pharetra, semper enim eu, imperdiet dui. Aliquam cursus nec justo nec tincidunt. Vestibulum vitae velit diam. Nunc interdum nunc at risus pellentesque, nec sodales erat feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel nulla rutrum, semper risus at, ultricies odio. Suspendisse pretium tempor tortor et euismod. Maecenas fringilla turpis lacus, et feugiat ex efficitur sit amet. Phasellus in eleifend lectus.",
        "latestBlogDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel vestibulum nisi. Duis dolor risus",
        "latestImgSrc":"images/sample-1050.jpg"
        
    },
    {
        "id":3,
        "title":"Blog Title 3",
        "featuredImage":"images/sample-1050.jpg",
        "author":"Rohit",
        "authorImage":"/images/avatars/user-06.jpg",
        "category":["m","n","o"],
        "date":"Mar 27, 2022",
        "tags":["p","q","r"],
        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel vestibulum nisi. Duis dolor risus, auctor sit amet nibh non, fringilla varius urna. Vestibulum est ante, convallis sed lectus sed, pretium eleifend nisi. Donec congue augue a ipsum fringilla bibendum. Mauris efficitur tincidunt risus auctor posuere. Sed in magna ullamcorper, condimentum est eu, hendrerit erat. Donec eu velit id neque semper ullamcorper eu vel orci. Ut non luctus nibh, nec vehicula nulla. Proin vel pharetra nisl. Etiam erat est, congue quis semper eget, tempus quis purus. Duis eu hendrerit nisi. Nullam ac est ac tellus maximus fringilla eu ac neque. Nullam sed libero sit amet massa facilisis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Nulla vehicula eros dolor, a dapibus libero tristique imperdiet. Duis vel sem lorem. Duis pulvinar fringilla metus, sed hendrerit purus vehicula rhoncus. Nullam velit tortor, molestie eu convallis ac, convallis tincidunt nisi. Nulla bibendum lobortis ultricies. Duis nec odio nibh. Ut at magna purus. Quisque ut varius justo, ac pretium felis. Ut mollis metus eu rutrum volutpat. Aenean pulvinar lectus tortor, nec commodo magna facilisis accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam laoreet condimentum mi vitae tempor. Donec et consectetur nisi, ac imperdiet risus.Pellentesque pharetra lacus arcu, porta mollis justo tincidunt quis. Mauris magna tellus, bibendum sed luctus non, ullamcorper non felis. Fusce nec est arcu. Ut convallis convallis ex, maximus lacinia ex consectetur eget. Vivamus sit amet arcu lacinia, elementum nulla a, scelerisque eros. Nam tempor egestas tincidunt. Quisque convallis risus magna, a tincidunt dolor malesuada sit amet. Nullam vel lorem id metus tristique tempor sit amet quis ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tempus mauris a vehicula varius. Praesent sit amet ipsum sed dui accumsan egestas tempor in lorem. Nam imperdiet eros vitae cursus maximus. Nam quis eleifend purus.Nunc ultrices nec velit at elementum. Maecenas porttitor malesuada nunc, ac fermentum elit condimentum et. Cras imperdiet, mauris in aliquet vehicula, ex arcu eleifend quam, consequat gravida ante ligula vel elit. Cras ultricies interdum dui, ac dapibus diam. Morbi elit ipsum, cursus non imperdiet in, hendrerit vitae lacus. Sed cursus consequat ultricies. Sed consectetur lorem ut nisl blandit molestie ut vel neque. Fusce pharetra in justo a lobortis.   Donec urna urna, maximus in sollicitudin vel, hendrerit vitae erat. Fusce ornare mattis odio nec ornare. Cras pellentesque enim eu ornare convallis. Fusce ac quam pharetra, semper enim eu, imperdiet dui. Aliquam cursus nec justo nec tincidunt. Vestibulum vitae velit diam. Nunc interdum nunc at risus pellentesque, nec sodales erat feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel nulla rutrum, semper risus at, ultricies odio. Suspendisse pretium tempor tortor et euismod. Maecenas fringilla turpis lacus, et feugiat ex efficitur sit amet. Phasellus in eleifend lectus.",
        "latestBlogDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel vestibulum nisi. Duis dolor risus",
        "latestImgSrc":"images/sample-1050.jpg"
        
    },
    {
        "id":4,
        "title":"Blog Title 4",
        "featuredImage":"images/sample-1050.jpg",
        "author":"Rohit",
        "authorImage":"/images/avatars/user-06.jpg",
        "category":["s","t","u"],
        "date":"June 5,2021",
        "tags":["v","w","x"],
        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel vestibulum nisi. Duis dolor risus, auctor sit amet nibh non, fringilla varius urna. Vestibulum est ante, convallis sed lectus sed, pretium eleifend nisi. Donec congue augue a ipsum fringilla bibendum. Mauris efficitur tincidunt risus auctor posuere. Sed in magna ullamcorper, condimentum est eu, hendrerit erat. Donec eu velit id neque semper ullamcorper eu vel orci. Ut non luctus nibh, nec vehicula nulla. Proin vel pharetra nisl. Etiam erat est, congue quis semper eget, tempus quis purus. Duis eu hendrerit nisi. Nullam ac est ac tellus maximus fringilla eu ac neque. Nullam sed libero sit amet massa facilisis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Nulla vehicula eros dolor, a dapibus libero tristique imperdiet. Duis vel sem lorem. Duis pulvinar fringilla metus, sed hendrerit purus vehicula rhoncus. Nullam velit tortor, molestie eu convallis ac, convallis tincidunt nisi. Nulla bibendum lobortis ultricies. Duis nec odio nibh. Ut at magna purus. Quisque ut varius justo, ac pretium felis. Ut mollis metus eu rutrum volutpat. Aenean pulvinar lectus tortor, nec commodo magna facilisis accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam laoreet condimentum mi vitae tempor. Donec et consectetur nisi, ac imperdiet risus.Pellentesque pharetra lacus arcu, porta mollis justo tincidunt quis. Mauris magna tellus, bibendum sed luctus non, ullamcorper non felis. Fusce nec est arcu. Ut convallis convallis ex, maximus lacinia ex consectetur eget. Vivamus sit amet arcu lacinia, elementum nulla a, scelerisque eros. Nam tempor egestas tincidunt. Quisque convallis risus magna, a tincidunt dolor malesuada sit amet. Nullam vel lorem id metus tristique tempor sit amet quis ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tempus mauris a vehicula varius. Praesent sit amet ipsum sed dui accumsan egestas tempor in lorem. Nam imperdiet eros vitae cursus maximus. Nam quis eleifend purus.Nunc ultrices nec velit at elementum. Maecenas porttitor malesuada nunc, ac fermentum elit condimentum et. Cras imperdiet, mauris in aliquet vehicula, ex arcu eleifend quam, consequat gravida ante ligula vel elit. Cras ultricies interdum dui, ac dapibus diam. Morbi elit ipsum, cursus non imperdiet in, hendrerit vitae lacus. Sed cursus consequat ultricies. Sed consectetur lorem ut nisl blandit molestie ut vel neque. Fusce pharetra in justo a lobortis.   Donec urna urna, maximus in sollicitudin vel, hendrerit vitae erat. Fusce ornare mattis odio nec ornare. Cras pellentesque enim eu ornare convallis. Fusce ac quam pharetra, semper enim eu, imperdiet dui. Aliquam cursus nec justo nec tincidunt. Vestibulum vitae velit diam. Nunc interdum nunc at risus pellentesque, nec sodales erat feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel nulla rutrum, semper risus at, ultricies odio. Suspendisse pretium tempor tortor et euismod. Maecenas fringilla turpis lacus, et feugiat ex efficitur sit amet. Phasellus in eleifend lectus.",
        "latestBlogDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel vestibulum nisi. Duis dolor risus",
        "latestImgSrc":"images/sample-1050.jpg"
        
    }
    ]

const findLatestThreePosts=(blogJSON)=>{
 
    var blogsWithRequiredDate=[];
    var blogsWithoutRequiredDate=blogJSON;
        for (let i = 0; i < 3; i++) {
                  
            // Finding the latest blog object in the array
            var highestDatedBlog=blogsWithoutRequiredDate.reduce((a, b) => {
                return moment(a.date,"MMM DD, YYYY") > moment(b.date,"MMM DD, YYYY") ? a : b;
                console.log(a)
                console.log(b)
              })
    
            //   Pushing the latest blog object to an array 
            blogsWithRequiredDate.push(highestDatedBlog)
    
            //   Filtering an array of blog objects without the latest dated blog
            blogsWithoutRequiredDate=blogsWithoutRequiredDate.filter(e => {
                return e.date !=highestDatedBlog.date
            });
    
    }
    console.log({blogsWithRequiredDate})
        return blogsWithRequiredDate
    }
    
	const latestBlogRenderer=(blogJSON,idToBeRenderedAt)=>{
		var allBlogs=null;
		{allBlogs=blogJSON.map((blog,index)=>{
			var blogDate=moment(blog.date,"MMM DD, YYYY").format("DD")
			var blogMonth=moment(blog.date,"MMM DD, YYYY").format("MMM")
			var blogYear=moment(blog.date,"MMM DD, YYYY").format("YYYY")
			var activeClass=index==1?"active":"";
			return  `<div class="item ${activeClass}">
								<div class="row">
								<div class="col-md-5 col-sm-9">
									<div class="blog-left">
									  <a href="//blog-post.html?id=${blog.id}">
										<img src=${blog.latestImgSrc} alt="" /></a>
									</div>
								</div>
								<div class="col-md-1 col-sm-3">
									<div class="blog-comment">
										<h1>${blogDate}</h1>
										<h4>${blogMonth}, ${blogYear}</h4>
										<h1>21</h1>
										<h4>Comm</h4>
									</div>
								</div>
								<div class="col-md-6 col-sm-12">
									<div class="blog-right">
									<a href="//blog-post.html?id=${blog.id}">  
									<h2>${blog.title}</h2>
									</a>
										<i class="fa fa-folder-open" aria-hidden="true"></i><span>  ${blog.category.map((category,index)=>{
											return `${category}`
										}).join(", ")}</span>
										<p>${blog.latestBlogDesc}</p>
									</div>
								</div>
							</div>
						</div>`
		}).join('')
		if(document.getElementById(idToBeRenderedAt))document.getElementById(idToBeRenderedAt).innerHTML=allBlogs
	
	}
	latestBlogNavigatorRenderer(blogJSON,"latestBlogCarouselIndicator")
	console.log({allBlogs})
	}
	
	const latestBlogNavigatorRenderer=(blogJSON,idToBeRenderedAt)=>{
		var blogNavigator=blogJSON.map((value,index)=>{
			var activeClass=index==0?"active":"";
	
			return `<li data-target='#quote-carousel' data-slide-to='${index}' class="${activeClass}"><img class="img-responsive " src="/${value.featuredImage}" alt="">
			</li>
			`
		}).join("")
		if(document.getElementById(idToBeRenderedAt))document.getElementById(idToBeRenderedAt).innerHTML=blogNavigator
	console.log({blogNavigator})
	}
	

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
	// 	$(window).on('scroll', function() {
	// 	if ($(this).scrollTop() > 40) {
	// 		$('.menubar .navbar').addClass("sticky");
	// 	} else {
	// 		$('.menubar .navbar').removeClass("sticky");
	// 	}
	// });

	$(window).on('scroll', function() {
		// console.log('scroll')
		if ($(this).scrollTop() > 40) {
			// console.log(40)
			$('.s-header').addClass("opaque");
			// console.log("add")
		} else {
			$('.s-header').removeClass("opaque");
			// console.log("remove")

		}
	});
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
    $('.s-header__nav li a, .cta').on('click', function () {
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

  /* Search
    * ------------------------------------------------------ */
  const ssSearch = function() {

	const searchWrap = document.querySelector('.s-header__search');
	const searchTrigger = document.querySelector('.s-header__search-trigger');

	if (!(searchWrap && searchTrigger)) return;

	const searchField = searchWrap.querySelector('.s-header__search-field');
	const closeSearch = searchWrap.querySelector('.s-header__overlay-close');
	const siteBody = document.querySelector('body');

	searchTrigger.addEventListener('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		siteBody.classList.add('search-is-visible');
		setTimeout(function(){
			searchWrap.querySelector('.s-header__search-field').focus();
		}, 100);
	});

	closeSearch.addEventListener('click', function(e) {
		e.stopPropagation();

		if(siteBody.classList.contains('search-is-visible')) {
			siteBody.classList.remove('search-is-visible');
			setTimeout(function(){
				searchWrap.querySelector('.s-header__search-field').blur();
			}, 100);
		}
	});

	searchWrap.addEventListener('click', function(e) {
		if( !(e.target.matches('.s-header__search-inner')) ) {
			closeSearch.dispatchEvent(new Event('click'));
		}
	});

	searchField.addEventListener('click', function(e) {
		e.stopPropagation();
	})

	searchField.setAttribute('placeholder', 'Search for...');
	searchField.setAttribute('autocomplete', 'off');

}; // end ssSearch

ssSearch()