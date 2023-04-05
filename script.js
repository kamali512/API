let posts = [];

const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        res.json().then((data)=>{
            posts = data;
            renderAllPosts();
        })
    })
}
getPosts();

const renderAllPosts = () => {
    posts.forEach((post)=>{
        renderPostItem(post)
    });
};

const renderPostItem = (post) => {
    const postsContainer = document.querySelector(".posts-list-wrapper");
    const postItem = document.createElement("div");
    postItem.className = "post-item";

    postItem.innerHTML = `<h2>${post.title}</h2>
    <p>${post.body}</p>`;
    
    postsContainer.appendChild(postItem);
    postItem.addEventListener("click", (event) => handlePostClick(event, post.id))
}
const handlePostClick = (e,postId) => {
console.log(postId);
    window.location.pathname =`/post.html?id=${postId}`;

    // `/week-4/day-2/post.html?id=${postId}`
}
//post.html