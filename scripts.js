document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");
    const postContainer = document.getElementById("post-container");

    // Blog posts with custom titles
    const posts = [
        { file: "post1.md", title: "Why AI Seminar" },
        //{ file: "post2.md", title: "No Name" } // Add more posts as needed
    ];

    // Create clickable buttons for each blog post
    posts.forEach((post) => {
        let button = document.createElement("button");
        button.textContent = post.title; // Display custom title instead of filename
        button.classList.add("blog-button");
        button.dataset.post = post.file; // Store filename for fetching

        // Click event to load post content
        button.addEventListener("click", function () {
            loadPost(this.dataset.post);
        });

        blogList.appendChild(button);
    });
});

// Fetch and display the blog post content
async function loadPost(postFile) {
    try {
        const response = await fetch(`posts/${postFile}`);
        if (!response.ok) {
            throw new Error("Post not found");
        }
        const markdown = await response.text();
        document.getElementById("post-container").innerHTML = markdownToHTML(markdown);
    } catch (error) {
        console.error(error);
        document.getElementById("post-container").innerHTML = "<p>Error loading post.</p>";
    }
}

// Convert Markdown to HTML using Showdown.js
function markdownToHTML(markdown) {
    let converter = new showdown.Converter();
    return converter.makeHtml(markdown);
}
