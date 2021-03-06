var urlParams = new URLSearchParams(window.location.search);
var paramId = parseInt(urlParams.get('id')) || 1;
var postToLoadJson, blogPost, blogMaxIdObj, blogMinIdObj

const getPostMaxIdObj=(blogJson)=>{return blogJson.reduce((max, obj) => (max.id > obj.id) ? max : obj);}
const getPostMinIdObj=(blogJson)=>{return blogJson.reduce((max, obj) => (max.id < obj.id) ? max : obj);}

const getBlogPostById= (requestId)=>{
    return blogData.filter(function(element){
        if (element.id == requestId){
            return true;
        } else {
            return false;
        }
});
}


const createBlogPost=(post)=>{
var previousId,nextId,prevBlogData,nextBlogData;
if(post[0].id-1<blogMinIdObj.id){previousId=blogMaxIdObj.id}else{previousId=post[0].id-1}
if(post[0].id+1>blogMaxIdObj.id){nextId=blogMinIdObj.id}else{nextId=post[0].id+1}

prevBlogData=getBlogPostById(previousId)
nextBlogData=getBlogPostById(nextId)

    return (`<div class="container">
<div class="row">
    <div class="blogFeaturedImage col-md-12 mx-auto my-5">
    <img src="${post[0].featuredImage}" alt="">
    </div>
    <div class="blogTitle col-md-12 mx-auto my-5">
    <h1>${post[0].title} </h1>
    </div>
</div>
<div class="row">
  <div class="col-md-12">
    <div class="row blogContentArea">
        <div class="blogContent col-md-8 ">
        ${post[0].content}
        </div> 
        <div class="blogMeta col-md-2 ">
        <div class="metaTop">
          <div class="authorImage">
              <img src="${post[0].authorImage}" alt="">
          </div>
          <div class="authorInfo">
            <h4 class="metaHeading">POSTED BY:</h4>
            <p>${post[0].author}</p>
          </div>
        </div>
            <div class="metaBottom">
              <div class="categories">
                  <div class="categoriesIn">
                        <h5 class="metaHeading">IN</h5>
                        <span>
                            <ul>
                               ${post[0].category.map((category,index)=>{
                                   return `<li key=${index}>${category}</li>`
                               })}
                            </ul>
                        </span>
                  </div>
                  <div class="dateOn">
            <h5 class="metaHeading">ON</h5>
                    <p> ${post[0].date}</p> 
                  </div>
              </div>
              <div class="tags">
                <h5 class="metaHeading">TAGS</h5>
                <span>
                    <ul>
                    ${post[0].tags.map((tag,index)=>{
                        return `<li key=${index}>${tag}</li>`
                    })}
                    </ul>
                </span>
              </div>
          </div>
        </div>                 
        <div class="blogNavigation col-md-2 ">
        <a href="blog-post.html?id=${previousId}"> 
            <div class="blogPrevious">
              <h5 class="metaHeading">Previous</h5>
              <p>${prevBlogData[0].title}</p>
            </div>
        </a>
        <a href="blog-post.html?id=${nextId}"> 
          <div class="blogNext">
            <h5 class="metaHeading">Next</h5>
            <p>${nextBlogData[0].title}</p>
          </div>
        </a>
        </div>
    </div>
  </div>
</div>
</div>`);
}

const renderBlog=(blog)=>{
    document.getElementById('blogPage').innerHTML=blog  
}


    blogMaxIdObj=getPostMaxIdObj(blogData)
    blogMinIdObj=getPostMinIdObj(blogData)
    postToLoadJson=blogData.filter(function(element){
                if (element.id == paramId){
                    return true;
                } else {
                    return false;
                }
    });

    blogPost=createBlogPost(postToLoadJson)
    renderBlog(blogPost)

