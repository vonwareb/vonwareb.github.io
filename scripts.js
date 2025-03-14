document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");
    const postContainer = document.getElementById("post-container");

    // List of Markdown blog posts (Ensure these exist in /posts/)
    const posts = ["post1.md", "post2.md"]; // Add more as needed

    // Create clickable buttons for each blog post
    posts.forEach((post) => {
        let button = document.createElement("button"); // Change label to button
        button.textContent = post.replace(".md", ""); // Remove .md extension
        button.classList.add("blog-button");
        button.dataset.post = post; // Store filename in a data attribute

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
