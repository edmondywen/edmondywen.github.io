function makePostsCollapsible(){
    let posts = document.getElementById("musings");
    let coll = posts.getElementsByClassName("musing-post");
    let i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
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

makePostsCollapsible();

// makeMusingPost("november 7th / post election blues, mom visit", "lol");
// makeMusingPost("november 1st / this is a musing", "this is my first musing on this page. it is currently 5:34 pm at the office. I've been working on this little personal website for the past ~1.5 hrs. I finished my fde related task earlier this morning but I'm not sure what my next steps are so I decided to work on this instead. Raymond, Boyu, and Saurav are still in the office. I am killing time until Alan's birthday dinner at 7pm. There was jazz playing in the meatpacking plaza (idk its official name) earlier. I dropped off my ballot today at the nearby post office. It is now 5:39 pm. What should I get Alan? This site is public so he could be reading this 😳. Hi Alan! Happy birthday! I think I'll take a walk. \n \n I went to Chong's Pleasure Palace last night to watch Incantation. The F train home at 10:30pm last night was packed like a can of sardines. As of tomorrow, I will have been in NYC for 3 months. I've experienced ridiculous emotional swings. Some days I feel devastatingly lonely. On others, I feel exhilarated. Today, I feel alright.");

