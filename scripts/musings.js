// create a class to manage state (which post is open at a time, date of posts to track most recent post update, etc.)

function getAllPosts(){
  // get list of all musing posts
  return document.getElementById("musings").getElementsByClassName("musing-post");
}

function makePostsCollapsible(){
    let posts = getAllPosts();
    let i;
    for (i = 0; i < posts.length; i++) {
      posts[i].addEventListener("click", function() {
        content = this.getElementsByClassName("musing-content")[0];
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = "100%";
        }
      });
    }
}

function makeMusingPost(title, content){
    // copy DOM template
    const root = document.getElementById("musings");
    const post = document.getElementById("musing-post-template");
    let newPost = post.cloneNode(true);
    newPost.id = "";
    let titleTag = newPost.getElementsByTagName("h2")[0];
    let contentTag = newPost.getElementsByTagName("p")[0];

    // create collapsible musing
    contentTag.style.transition = "max-height 0.2s ease-out";

    // update content
    titleTag.innerText = title;
    contentTag.innerText = content;
    root.appendChild(newPost);
}

function openFirstPost(){
    // get the first post and uncollapse it using the "click" event
    let posts = getAllPosts();
    posts[0].click();
}

function closeAllPosts(){
  let posts = getAllPosts();
  for (let i = 0; i < posts.length; i++) {
    content = posts[i].getElementsByClassName("musing-content")[0];
    content.style.maxHeight = null;
  }
}

function openRandomPost(){
    // close all existing posts and open a random one.
    // TODO: don't open a post that's already open
    closeAllPosts();
    let posts = getAllPosts();
    let randomIndex = Math.floor(Math.random() * (posts.length - 1));
    posts[randomIndex].click();
}

function openAllPosts(){
  let posts = getAllPosts();
  for (let i = 0; i < posts.length; i++) {
    content = posts[i].getElementsByClassName("musing-content")[0];
    content.style.maxHeight = "100%";
  }
}

function addButtonEvents(){
  const closeButton = document.getElementById("close-all-musing-button");
  closeButton.addEventListener("click", closeAllPosts);

  const openButton = document.getElementById("open-all-musing-button");
  openButton.addEventListener("click", openAllPosts);

  const randomButton = document.getElementById("random-musing-button");
  randomButton.addEventListener("click", openRandomPost);
}

makePostsCollapsible();
// openFirstPost();
addButtonEvents();
