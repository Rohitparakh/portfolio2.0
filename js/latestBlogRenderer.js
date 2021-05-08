const latestBlogRenderer=(blogJSON,idToBeRenderedAt)=>{
	var allBlogs=null;
	{allBlogs=blogJSON.map((blog,index)=>{
        console.log(blog)
		// return `<div key=${index} class="${`item ${index===0?"active":''}`}">
		// 							<div class="experience-slide-one">
		// 								<div class="row">
		// 								<div class="col-md-7">
		// 									<div class="experience-slide-img">
		// 										<a rel="follow" target="_blank" href="${project.href}"><img src="${project.imgSrc}" alt="Photo of ${project.name}" /></a>
		// 									</div>
		// 								</div>
		// 								<div class="col-md-5">
		// 									<div class="experience-slide-text">
		// 										<a rel="follow" target="_blank" href="${project.href}"><h3>${project.name}</h3>
		// 										<h5>${project.description}</h5></a>
		// 										<h4>${project.category}</h4>
		// 									</div>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>`
	})
    // .join('')}
	if(document.getElementById(idToBeRenderedAt))document.getElementById(idToBeRenderedAt).innerHTML=allBlogs

}
}