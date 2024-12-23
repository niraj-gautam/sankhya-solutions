// Example to dynamically populate blog details
const blogData = {
    title: "Understanding JavaScript Closures",
    author: "John Doe",
    date: "November 24, 2024",
    image: "https://via.placeholder.com/800x400",
    content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel venenatis nisl...",
        "Quisque malesuada auctor lorem, sed consequat justo molestie nec...",
        "Phasellus congue dapibus purus, vitae facilisis libero tristique vel...",
    ],
};

document.querySelector(".blog-title").textContent = blogData.title;
document.querySelector(".blog-author span").textContent = blogData.author;
document.querySelector(".blog-date").textContent = blogData.date;
document.querySelector(".blog-image").src = blogData.image;

const blogContentElement = document.querySelector(".blog-content");
blogData.content.forEach((paragraph) => {
    const p = document.createElement("p");
    p.classList.add("blog-text");
    p.textContent = paragraph;
    blogContentElement.appendChild(p);
});
