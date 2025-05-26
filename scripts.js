document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");
    const postContainer = document.getElementById("post-container");
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check and Apply Dark Mode Preference from Local Storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    } else {
        toggleButton.textContent = "🌙"; // Only Moon Emoji
    }

    // Toggle Dark Mode on Button Click
    if (toggleButton) { // Ensure the button exists before adding event listener
        toggleButton.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                toggleButton.textContent = "☀️";
            } else {
                localStorage.setItem("darkMode", "disabled");
                toggleButton.textContent = "🌙";
            }
        });
    }

    // Blog Posts with Custom Titles
    const posts = [
        { file: "post1.md", title: "Road To The AI Seminar" },
        { file: "post2.md", title: "Bayesian Deep Learning: A Closer Look at a Position Paper" }, // Add more posts as needed
        { file: "post3.md", title: "Why Bayesian Deep Learning Now" },
        { file: "post4.md", title: "Bayesian Deep Learning: Between Vision and Realization" } // Add more posts as needed
    ];

    // Create Clickable Buttons for Each Blog Post
    if (blogList) { // Ensure blogList exists before populating it
        posts.forEach((post) => {
            let button = document.createElement("button");
            button.textContent = post.title; // Display custom title instead of filename
            button.classList.add("blog-button");
            button.dataset.post = post.file; // Store filename for fetching

            // 📌 Click Event to Load Blog Post Content
            button.addEventListener("click", function () {
                loadPost(this.dataset.post);
            });

            blogList.appendChild(button);
        });
    }
});

// Function to Fetch and Display Blog Post Content
async function loadPost(postFile) {
    try {
        const response = await fetch(`posts/${postFile}?t=${new Date().getTime()}`); // Prevent caching
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
    let converter = new showdown.Converter({ tables: true }); // ✅ Enable table support
    return converter.makeHtml(markdown);
}
